# Mohamed Gamal — Portfolio

Personal portfolio website for **Mohamed Gamal Yaseen, Senior Flutter Developer**. It's a single, fully static page with About, Experience, Projects, Engineering Highlights, Skills and Contact sections, a dark theme by default (with a light theme), and a downloadable CV. It's built for GitHub Pages.

## Technology stack

| Area | Choice |
|---|---|
| Framework | [Astro](https://astro.build) 7, static output, no UI framework |
| Language | TypeScript (strict), checked with `astro check` |
| Styling | Plain CSS with design tokens (`src/styles/global.css`) |
| Fonts | Geist and Geist Mono, self-hosted via Fontsource (no third-party font requests) |
| Images | `astro:assets`: photos converted to AVIF/WebP at build time |
| SEO | Open Graph/Twitter tags, JSON-LD `Person`, `robots.txt`, sitemap (`@astrojs/sitemap`), `404.html` |
| Client JS | About 3.5 KB: theme toggle, mobile menu, scroll reveal, copy email |
| Hosting | GitHub Pages via GitHub Actions |

## Requirements

- Node.js 22.23.4 or newer (CI uses the version in `.nvmrc`)
- npm (the lockfile is `package-lock.json`)

## Local development

```bash
npm install
npm run dev          # http://localhost:4321 with live reload
```

## Build

```bash
npm run check        # strict TypeScript + Astro template checks
npm run build        # production build into dist/
npm run check:links  # verify every anchor, asset and srcset entry in dist/ exists
npm run preview      # serve dist/ locally
```

The site URL defaults to `https://gemydev.github.io` (see `astro.config.mjs`), which is used for the canonical URL, `og:url`, `og:image` and the sitemap. In CI, the workflow overrides it with the repository's real Pages address, so a custom domain added later is picked up automatically.

## Repository setup

What gets committed is controlled by `.gitignore`. These stay **local only**:

- the original CV source files in the project root (`MohamedGamal_FlutterDeveloper.pdf` / `.docx`)
- `docs/` (private planning notes: CV analysis, audit, open questions)
- `.claude/`, editor folders, `.env*` files, `node_modules/`, `dist/`, `.astro/`

The only CV that's published is the download copy at `public/cv/`.

## GitHub Pages configuration

1. Create a **public** repository named **`gemydev.github.io`** under the `gemydev` account. GitHub serves a repo with this exact name at the root, `https://gemydev.github.io/`.
   - Under any other name the site would be served at `https://gemydev.github.io/<repo>/`. The workflow handles that path automatically.
2. Push this project to the `main` branch.
3. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. (Optional) To use a custom domain, add it under **Settings → Pages → Custom domain** and set up DNS as GitHub describes. The workflow picks the domain up automatically.

## Deployment workflow

`.github/workflows/deploy.yml` runs on every push to `main` and can also be run manually (**Actions → Deploy to GitHub Pages → Run workflow**).

| Job | Steps |
|---|---|
| `build` | `actions/checkout@v7` → `actions/setup-node@v7` (Node from `.nvmrc`, npm cache) → `actions/configure-pages@v6` → `npm ci` → `npm run check` → `npm run build` → `npm run check:links` → `actions/upload-pages-artifact@v5` (`dist/`) |
| `deploy` | `actions/deploy-pages@v5` into the `github-pages` environment |

- **Address:** `SITE_URL` and `BASE_PATH` come from `configure-pages` (the repository's actual Pages origin and base path), so asset paths are correct for a user site, a project site or a custom domain.
- **Permissions** are limited to `contents: read`, `pages: write` and `id-token: write`.
- **Concurrency:** only one deployment runs at a time, and a deployment that's already running is never cancelled.
- **Live URL:** after a successful run, it's shown on the run summary and under **Settings → Pages**.

## Updating content

All text is in `src/data/`. You never need to edit components to change content.

| What | Where |
|---|---|
| Name, title, intro, about text, focus areas, hero facts | `src/data/profile.ts` |
| Employment timeline | `src/data/experience.ts` |
| Featured and other projects (store links, contribution, tags) | `src/data/projects.ts` |
| Engineering highlights | `src/data/highlights.ts` |
| Skills and stated proficiency levels | `src/data/skills.ts` |

Optional project fields (`contribution`, `highlights`, `links`, `nda`, `localName`, `art`) only show when they're set.

### Contact and social links

Edit `src/data/profile.ts`:

```ts
email: 'mohamedgamaldev11@gmail.com',
phone: '+201092069232',                 // used in structured data
links: {
  github: 'https://github.com/gemydev',
  linkedin: 'https://www.linkedin.com/in/gemydev',
  whatsapp: 'https://wa.me/201092069232', // wa.me/<country code + number, digits only>
},
```

These values feed the hero, the contact section and the structured data. The social card (`public/og.jpg`) has the GitHub/LinkedIn text built into the image, so after changing those run `npm run brand`. Its text comes from `scripts/generate-brand-assets.mjs`.

### Replacing the CV PDF

1. Export the new CV as PDF.
2. Overwrite `public/cv/Mohamed-Gamal-Senior-Flutter-Developer-CV.pdf`. If you use a different file name, update `cvFile` in `src/data/profile.ts`.
3. Commit and push. The workflow redeploys automatically.

Everything in `public/cv/` is publicly downloadable.

### Photo and logo

Replace `src/assets/portrait.webp` (4:5), `src/assets/avatar.webp` (square face crop) or `src/assets/logo-mark.png` (transparent background), then run:

```bash
npm run brand        # regenerates favicons and public/og.jpg (social preview card)
```

## Project structure

```
src/
  data/          content (single source of truth)
  components/    Nav, Hero, About, Experience, Projects, ProjectArt, StoreLinks,
                 Highlights, Skills, Contact, Footer, SectionHeader, Icon
  layouts/       Base.astro: <head>, SEO, JSON-LD, fonts, theme bootstrap
  pages/         index.astro, 404.astro, robots.txt.ts
  styles/        global.css
  scripts/       main.ts
  assets/        portrait, avatar, logo (optimised at build time)
public/          favicons, og.jpg, cv/
scripts/         check-links.mjs, generate-brand-assets.mjs
.github/         workflows/deploy.yml
```
