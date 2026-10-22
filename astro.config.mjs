import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed as a GitHub Pages user site (repo gemydev.github.io), so it's served from the root.
// In CI, SITE_URL/BASE_PATH come from actions/configure-pages and override these defaults
// (e.g. if a custom domain is added later).
const site = process.env.SITE_URL || 'https://gemydev.github.io';

export default defineConfig({
  site,
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
