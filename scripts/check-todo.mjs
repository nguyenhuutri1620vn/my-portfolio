// Finds "[TODO" placeholders in the built site. Strict (exit 1) on the production
// branch or with --strict; elsewhere it only warns so work in progress can ship to previews.
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { extname, join } from 'node:path';

const DIST = 'dist';
const TEXT_EXTENSIONS = new Set(['.html', '.js', '.css', '.xml', '.json', '.txt']);
const strict =
  process.argv.includes('--strict') ||
  process.env.CF_PAGES_BRANCH === 'main' ||
  process.env.GITHUB_REF === 'refs/heads/main';

if (!existsSync(DIST)) {
  console.error('check:todo: dist/ not found, run `npm run build` first.');
  process.exit(1);
}

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else if (TEXT_EXTENSIONS.has(extname(entry.name))) yield path;
  }
}

const hits = [];
for (const file of walk(DIST)) {
  for (const match of readFileSync(file, 'utf8').matchAll(/\[TODO[^\]]*\]?/g)) {
    hits.push(`${file}: ${match[0].slice(0, 80)}`);
  }
}

if (hits.length === 0) {
  console.log('check:todo: no [TODO placeholders in dist/.');
} else {
  const log = strict ? console.error : console.warn;
  log(
    `check:todo: ${hits.length} [TODO placeholder(s) in dist/${strict ? '' : ' (warning only)'}:`,
  );
  for (const hit of hits) log(`  ${hit}`);
  if (strict) process.exit(1);
}
