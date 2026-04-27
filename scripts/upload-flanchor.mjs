import { v2 as cloudinary } from 'cloudinary';
import { readdir, readFile, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import os from 'node:os';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const SUBFOLDER = '6-flanchor-road-remodeling';
const DIR = path.resolve('public/images/project-galleries', SUBFOLDER);
const PUBLIC_PREFIX = '/images/project-galleries';
const CLOUDINARY_FOLDER = `glades/project-galleries/${SUBFOLDER}`;
const MAX_BYTES = 10 * 1024 * 1024;

function sanitizePublicId(filename) {
  const name = filename.replace(/\.[^.]+$/, '');
  return name.normalize('NFKD').replace(/[^a-zA-Z0-9_\-]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
}

async function main() {
  const mappingPath = path.resolve('scripts/cloudinary-mapping.json');
  const mapping = JSON.parse(await readFile(mappingPath, 'utf8'));
  const files = (await readdir(DIR)).filter((f) => !f.startsWith('.'));
  console.log(`Uploading ${files.length} files from ${SUBFOLDER}/...\n`);

  for (const filename of files) {
    const fullPath = path.join(DIR, filename);
    const publicId = sanitizePublicId(filename);
    const localUrl = `${PUBLIC_PREFIX}/${SUBFOLDER}/${filename}`;
    const size = (await stat(fullPath)).size;

    let uploadPath = fullPath;
    if (size > MAX_BYTES) {
      const tmpPath = path.join(os.tmpdir(), filename);
      await sharp(fullPath)
        .rotate()
        .resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: 85, mozjpeg: true })
        .toFile(tmpPath);
      uploadPath = tmpPath;
      console.log(`  resized ${filename} (${(size/1024/1024).toFixed(1)}MB → ok)`);
    }

    const result = await cloudinary.uploader.upload(uploadPath, {
      folder: CLOUDINARY_FOLDER,
      public_id: publicId,
      resource_type: 'image',
      overwrite: true,
      unique_filename: false,
      use_filename: false,
    });
    mapping[localUrl] = result.public_id;
    console.log(`  → ${result.public_id}`);
  }

  await writeFile(mappingPath, JSON.stringify(mapping, null, 2));
  console.log(`\nMapping updated.`);
}

main().catch((e) => { console.error(e); process.exit(1); });
