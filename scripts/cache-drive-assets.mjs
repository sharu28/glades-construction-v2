import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, 'public', 'images', 'drive-cache');
const MANIFEST_PATH = path.join(ROOT, 'src', 'data', 'driveImageManifest.ts');
const DRIVE_URL = (id) => `https://lh3.googleusercontent.com/d/${id}=w1920`;

const projectCategories = await readFile(path.join(ROOT, 'src', 'data', 'projectCategories.ts'), 'utf8');
const services = await readFile(path.join(ROOT, 'src', 'data', 'services.ts'), 'utf8');
const about = await readFile(path.join(ROOT, 'src', 'pages', 'About.tsx'), 'utf8');

const ids = new Set();

for (const match of projectCategories.matchAll(/coverId:\s*'([^']+)'/g)) {
  ids.add(match[1]);
}

for (const block of projectCategories.matchAll(/imageIds:\s*\[([\s\S]*?)\]/g)) {
  for (const match of block[1].matchAll(/'([^']+)'/g)) {
    ids.add(match[1]);
  }
}

for (const source of [services, about]) {
  for (const match of source.matchAll(/lh3\.googleusercontent\.com\/d\/([^=]+)=w\d+/g)) {
    ids.add(match[1]);
  }

  for (const match of source.matchAll(/driveImagePaths\[['"]([^'"]+)['"]\]/g)) {
    ids.add(match[1]);
  }
}

await mkdir(OUT_DIR, { recursive: true });
const existing = new Map();
for (const file of await readdir(OUT_DIR)) {
  const id = file.replace(/\.(jpg|jpeg|png|webp|gif)$/i, '');
  existing.set(id, file);
}

const extFor = (contentType, bytes) => {
  const normalized = contentType.toLowerCase();
  if (normalized.includes('png') || (bytes[0] === 0x89 && bytes[1] === 0x50)) return 'png';
  if (normalized.includes('webp')) return 'webp';
  if (normalized.includes('gif')) return 'gif';
  return 'jpg';
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const download = async (id) => {
  if (existing.has(id)) return existing.get(id);

  let lastError;
  for (let attempt = 1; attempt <= 5; attempt += 1) {
    try {
      const response = await fetch(DRIVE_URL(id), {
        signal: AbortSignal.timeout(45_000),
      });
      if (!response.ok) {
        throw new Error(`${id}: ${response.status} ${response.statusText}`);
      }

      const bytes = Buffer.from(await response.arrayBuffer());
      const ext = extFor(response.headers.get('content-type') ?? '', bytes);
      const file = `${id}.${ext}`;
      await writeFile(path.join(OUT_DIR, file), bytes);
      existing.set(id, file);
      return file;
    } catch (error) {
      lastError = error;
      await delay(500 * attempt);
    }
  }

  throw new Error(`${id}: ${lastError?.message ?? 'download failed'}`);
};

const sortedIds = [...ids].sort();
const pendingIds = sortedIds.filter((id) => !existing.has(id));
const totalPending = pendingIds.length;
const failures = [];
let completed = 0;
const concurrency = 8;

console.log(`Found ${sortedIds.length} Drive image id(s); ${pendingIds.length} need downloading.`);

const worker = async () => {
  while (pendingIds.length > 0) {
    const id = pendingIds.shift();
    try {
      await download(id);
    } catch (error) {
      failures.push(error.message);
      console.error(error.message);
    } finally {
      completed += 1;
      if (completed % 25 === 0 || completed === totalPending) {
        console.log(`Processed ${completed}/${totalPending}`);
      }
    }
  }
};

await Promise.all(Array.from({ length: concurrency }, worker));

const manifestEntries = [...existing.entries()]
  .filter(([id]) => ids.has(id))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([id, file]) => `  ${JSON.stringify(id)}: ${JSON.stringify(`/images/drive-cache/${file}`)},`)
  .join('\n');

await writeFile(
  MANIFEST_PATH,
  `export const driveImagePaths: Record<string, string> = {\n${manifestEntries}\n};\n`,
);

if (failures.length > 0) {
  console.error(`Failed to cache ${failures.length} image(s).`);
  process.exitCode = 1;
}
