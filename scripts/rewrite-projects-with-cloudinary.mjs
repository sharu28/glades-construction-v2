import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const CLOUD_NAME = 'ds4xc6fcf';
const TRANSFORM = 'f_auto,q_auto,w_1920,c_limit';

const mapping = JSON.parse(
  await readFile(path.resolve('scripts/cloudinary-mapping.json'), 'utf8')
);

const projectsPath = path.resolve('src/data/projects.ts');
let source = await readFile(projectsPath, 'utf8');
let replaced = 0;
const misses = [];

for (const [localUrl, publicId] of Object.entries(mapping)) {
  const cloudUrl = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${TRANSFORM}/${publicId}`;
  const before = source;
  source = source.split(localUrl).join(cloudUrl);
  if (source !== before) replaced++;
  else misses.push(localUrl);
}

await writeFile(projectsPath, source);
console.log(`Rewrote ${replaced} URLs in projects.ts`);
if (misses.length) {
  console.log(`\n${misses.length} mapped URLs were NOT found in projects.ts (expected for any images uploaded but not yet referenced):`);
  for (const m of misses.slice(0, 10)) console.log(`  ${m}`);
  if (misses.length > 10) console.log(`  ...and ${misses.length - 10} more`);
}
