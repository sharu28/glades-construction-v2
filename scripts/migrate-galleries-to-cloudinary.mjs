import { v2 as cloudinary } from 'cloudinary';
import { readdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const ROOT = path.resolve('public/images/project-galleries');
const PUBLIC_PREFIX = '/images/project-galleries';
const CLOUDINARY_FOLDER = 'glades/project-galleries';

function sanitizePublicId(filename) {
  const name = filename.replace(/\.[^.]+$/, '');
  return name
    .normalize('NFKD')
    .replace(/[^a-zA-Z0-9_\-]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
}

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

async function main() {
  if (!process.env.CLOUDINARY_CLOUD_NAME) {
    throw new Error('Missing CLOUDINARY_* env vars');
  }

  const files = await walk(ROOT);
  const mapping = {};
  let done = 0;
  let skipped = 0;
  let failed = 0;

  console.log(`Uploading ${files.length} files to Cloudinary...\n`);

  for (const fullPath of files) {
    const rel = path.relative(ROOT, fullPath).replaceAll('\\', '/');
    const parts = rel.split('/');
    const filename = parts.pop();
    const subfolder = parts.join('/');
    const publicId = sanitizePublicId(filename);
    const folder = subfolder ? `${CLOUDINARY_FOLDER}/${subfolder}` : CLOUDINARY_FOLDER;
    const sizeMB = ((await stat(fullPath)).size / 1024 / 1024).toFixed(2);
    const localUrl = `${PUBLIC_PREFIX}/${rel}`;

    try {
      const result = await cloudinary.uploader.upload(fullPath, {
        folder,
        public_id: publicId,
        resource_type: 'image',
        overwrite: false,
        unique_filename: false,
        use_filename: false,
      });
      mapping[localUrl] = result.public_id;
      done++;
      console.log(`[${done}/${files.length}] ${sizeMB}MB → ${result.public_id}`);
    } catch (err) {
      if (err?.error?.http_code === 409 || err?.message?.includes('already exists')) {
        const existing = `${folder}/${publicId}`;
        mapping[localUrl] = existing;
        skipped++;
        console.log(`[skip] already uploaded: ${existing}`);
      } else {
        failed++;
        console.error(`[fail] ${rel}:`, err?.message || err);
      }
    }
  }

  const outPath = path.resolve('scripts/cloudinary-mapping.json');
  await writeFile(outPath, JSON.stringify(mapping, null, 2));
  console.log(`\nUploaded: ${done}, skipped: ${skipped}, failed: ${failed}`);
  console.log(`Mapping written to ${outPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
