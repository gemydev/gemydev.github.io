// Generates favicons and the 1200×630 social preview card from the logo, photo and profile data.
// Sources: src/assets/logo-mark.png, src/assets/portrait.webp. Run: npm run brand
import sharp from 'sharp';
import { profile } from '../src/data/profile.ts';

const root = new URL('../', import.meta.url).pathname;
const logo = `${root}src/assets/logo-mark.png`;
const portrait = `${root}src/assets/portrait.webp`;
const out = (f) => `${root}public/${f}`;

// Logo centred on a square canvas, optionally on a solid background.
async function icon(size, { padding = 0.08, background } = {}) {
  const inner = Math.round(size * (1 - padding * 2));
  const mark = await sharp(logo).resize({ width: inner, height: inner, fit: 'inside' }).toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background: background ?? { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: mark, gravity: 'center' }])
    .png({ compressionLevel: 9 });
}

await (await icon(32, { padding: 0.02 })).toFile(out('favicon-32.png'));
await (await icon(192, { padding: 0.06 })).toFile(out('favicon-192.png'));
// iOS ignores transparency, so the touch icon gets the site background.
await (await icon(180, { padding: 0.16, background: '#0a0b0e' })).toFile(out('apple-touch-icon.png'));

// Social preview card
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const sans = "'Helvetica Neue', Helvetica, Arial, sans-serif";
const mono = "Menlo, 'SF Mono', monospace";
const card = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="wash" cx="0.2" cy="0.15" r="0.6">
      <stop offset="0" stop-color="#5b8cff" stop-opacity="0.2"/>
      <stop offset="1" stop-color="#5b8cff" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="#ffffff" stroke-opacity="0.04"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="#0a0b0e"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#wash)"/>
  <text x="72" y="318" font-family="${sans}" font-size="56" font-weight="700" fill="#eceef2" letter-spacing="-1.2">${esc(profile.name)}</text>
  <text x="72" y="384" font-family="${sans}" font-size="40" font-weight="500" fill="#7aa2ff" letter-spacing="-0.5">${esc(profile.title)}</text>
  <text x="72" y="448" font-family="${sans}" font-size="25" fill="#a3a9b5">Flutter · Android &amp; iOS · Offline-first · Real-time · CI/CD</text>
  <line x1="72" y1="510" x2="740" y2="510" stroke="#ffffff" stroke-opacity="0.08"/>
  <text x="72" y="556" font-family="${mono}" font-size="21" fill="#868d9a">github.com/gemydev  ·  linkedin.com/in/gemydev</text>
</svg>`;

const photoW = 400, photoH = 630;
const photo = await sharp(portrait).resize(photoW, photoH, { fit: 'cover', position: 'top' }).toBuffer();
// Fade the photo's left edge into the background.
const fade = Buffer.from(`<svg width="${photoW}" height="${photoH}"><defs><linearGradient id="f" x1="0" x2="1"><stop offset="0" stop-color="#0a0b0e" stop-opacity="1"/><stop offset="0.6" stop-color="#0a0b0e" stop-opacity="0"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#f)"/></svg>`);
const photoFaded = await sharp(photo).composite([{ input: fade }]).toBuffer();
const mark = await sharp(logo).resize({ height: 72 }).toBuffer();

await sharp(Buffer.from(card))
  .composite([
    { input: photoFaded, left: 1200 - photoW, top: 0 },
    { input: mark, left: 72, top: 96 },
  ])
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(out('og.jpg'));

console.log('Wrote public/favicon-32.png, favicon-192.png, apple-touch-icon.png, og.jpg');
