// Checks the production build for broken in-page anchors and missing local assets.
// Usage: npm run build && npm run check:links
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const dist = new URL('../dist/', import.meta.url).pathname;
const base = (process.env.BASE_PATH || '/').replace(/\/?$/, '/');
const pages = readdirSync(dist, { recursive: true }).filter((f) => String(f).endsWith('.html'));
const problems = [];

for (const page of pages) {
  const html = readFileSync(join(dist, String(page)), 'utf8');
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  const refs = [
    ...[...html.matchAll(/\s(?:href|src)="([^"]+)"/g)].map((m) => m[1]),
    // every candidate URL inside srcset attributes (responsive images)
    ...[...html.matchAll(/\ssrcset="([^"]+)"/g)].flatMap((m) => m[1].split(',').map((c) => c.trim().split(/\s+/)[0])),
  ];

  for (const ref of refs) {
    if (ref.startsWith('#')) {
      if (ref.length > 1 && !ids.has(ref.slice(1))) problems.push(`${page}: missing anchor ${ref}`);
    } else if (ref.startsWith(base) && !ref.startsWith('//')) {
      const file = decodeURIComponent(ref.slice(base.length).split(/[?#]/)[0]) || 'index.html';
      if (!existsSync(join(dist, file))) problems.push(`${page}: missing asset ${ref}`);
    } else if (!/^(https?:|mailto:|tel:|data:)/.test(ref)) {
      problems.push(`${page}: unexpected relative reference ${ref}`);
    }
  }
}

if (problems.length) {
  console.error(problems.join('\n'));
  process.exit(1);
}
console.log(`Link check passed: ${pages.length} page(s), all anchors and local assets resolve.`);
