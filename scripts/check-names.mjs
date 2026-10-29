// Fails when a former employer or product name appears in the site source or build.
// The list lives only here; scripts/ and docs/ are not scanned.
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { extname, join } from 'node:path';

const FORBIDDEN = /bestarion|meperia|msss|\bmss\b/gi;
const ROOTS = ['src', 'public', 'dist'];
const BINARY_EXTENSIONS = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.webp',
  '.avif',
  '.gif',
  '.ico',
  '.woff',
  '.woff2',
  '.pdf',
]);

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

const hits = [];
const pdfs = [];
for (const root of ROOTS.filter((r) => existsSync(r))) {
  for (const file of walk(root)) {
    const ext = extname(file).toLowerCase();
    if (ext === '.pdf') pdfs.push(file);
    if (BINARY_EXTENSIONS.has(ext)) continue;
    readFileSync(file, 'utf8')
      .split('\n')
      .forEach((line, i) => {
        for (const match of line.matchAll(FORBIDDEN)) hits.push(`${file}:${i + 1}: ${match[0]}`);
      });
  }
}

if (pdfs.length > 0) {
  console.warn('check:names: PDFs are not scanned, check these by hand:');
  for (const pdf of pdfs) console.warn(`  ${pdf}`);
}

if (hits.length > 0) {
  console.error(`check:names: ${hits.length} forbidden name(s) found:`);
  for (const hit of hits) console.error(`  ${hit}`);
  process.exit(1);
}
console.log('check:names: no forbidden names found.');
