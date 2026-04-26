import { readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const CLOUD_NAME = 'ds4xc6fcf';

const mapping = JSON.parse(
  await readFile(path.resolve('scripts/cloudinary-mapping.json'), 'utf8')
);

const entries = Object.entries(mapping);
let done = 0;
let failed = 0;

console.log(`Downloading ${entries.length} files from Cloudinary...\n`);

for (const [localUrl, publicId] of entries) {
  const ext = path.extname(localUrl);
  const destRel = localUrl.replace(/^\//, 'public/');
  const destAbs = path.resolve(destRel);
  const url = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${publicId}${ext}`;

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await mkdir(path.dirname(destAbs), { recursive: true });
    await writeFile(destAbs, buf);
    done++;
    console.log(`[${done}/${entries.length}] ${(buf.length / 1024).toFixed(0)}KB → ${destRel}`);
  } catch (err) {
    failed++;
    console.error(`[fail] ${localUrl}: ${err.message}`);
  }
}

console.log(`\nDownloaded: ${done}, failed: ${failed}`);
