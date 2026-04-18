import { v2 as cloudinary } from 'cloudinary';
import sharp from 'sharp';
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const OVERSIZED = [
  'public/images/project-galleries/the-manor-house/DSC_0843.JPG',
  'public/images/project-galleries/bedford-road-remodelling/DSC_0066.JPG',
  'public/images/project-galleries/bedford-road-remodelling/DSC_0042.JPG',
  'public/images/project-galleries/bedford-road-remodelling/DSC_0116.JPG',
  'public/images/project-galleries/bedford-road-remodelling/DSC_0058.JPG',
  'public/images/project-galleries/bedford-road-remodelling/DSC_0052.JPG',
];

const PUBLIC_PREFIX = '/images/project-galleries';
const ROOT = path.resolve('public/images/project-galleries');
const CLOUDINARY_FOLDER = 'glades/project-galleries';

function sanitizePublicId(filename) {
  const name = filename.replace(/\.[^.]+$/, '');
  return name.normalize('NFKD').replace(/[^a-zA-Z0-9_\-]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
}

async function main() {
  const mappingPath = path.resolve('scripts/cloudinary-mapping.json');
  const mapping = JSON.parse(await readFile(mappingPath, 'utf8'));
  const tmpDir = await mkdir(path.join(os.tmpdir(), 'glades-resize'), { recursive: true });

  for (const rel of OVERSIZED) {
    const fullPath = path.resolve(rel);
    const relFromRoot = path.relative(ROOT, fullPath).replaceAll('\\', '/');
    const parts = relFromRoot.split('/');
    const filename = parts.pop();
    const subfolder = parts.join('/');
    const publicId = sanitizePublicId(filename);
    const folder = subfolder ? `${CLOUDINARY_FOLDER}/${subfolder}` : CLOUDINARY_FOLDER;
    const localUrl = `${PUBLIC_PREFIX}/${relFromRoot}`;
    const tmpPath = path.join(os.tmpdir(), 'glades-resize', filename);

    const origSize = (await stat(fullPath)).size;
    await sharp(fullPath)
      .rotate()
      .resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(tmpPath);
    const newSize = (await stat(tmpPath)).size;
    console.log(`Resized ${filename}: ${(origSize/1024/1024).toFixed(1)}MB → ${(newSize/1024/1024).toFixed(1)}MB`);

    const result = await cloudinary.uploader.upload(tmpPath, {
      folder,
      public_id: publicId,
      resource_type: 'image',
      overwrite: true,
      unique_filename: false,
      use_filename: false,
    });
    mapping[localUrl] = result.public_id;
    console.log(`  → uploaded ${result.public_id}`);
  }

  await writeFile(mappingPath, JSON.stringify(mapping, null, 2));
  console.log(`\nMapping updated at ${mappingPath}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
