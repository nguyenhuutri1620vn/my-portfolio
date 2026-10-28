# Tri Huu Nguyen — Portfolio

Bilingual (EN/VI) portfolio site built with Astro, TypeScript, Tailwind, and MDX. Specs live in `CLAUDE.md` and `docs/`.

## Setup

Requires Node 22 (see `.nvmrc`).

```bash
nvm use
npm install
npm run dev
```

## Scripts

| Script                | What it does                                                             |
| --------------------- | ------------------------------------------------------------------------ |
| `npm run dev`         | Local dev server                                                         |
| `npm run build`       | Static build to `dist/`                                                  |
| `npm run check`       | `astro check` (TypeScript strict)                                        |
| `npm run lint`        | ESLint for `.ts`, `.js`, `.astro`                                        |
| `npm run format`      | Prettier write (`format:check` to verify only)                           |
| `npm run check:todo`  | Finds `[TODO` in `dist/`; fails on `main` or with `--strict`, else warns |
| `npm run check:names` | Fails on forbidden employer/product names in `src/`, `public/`, `dist/`  |
| `npm run verify`      | All of the above, in CI order                                            |

## Structure

- `src/content/ui/{en,vi}.json` — all UI strings; read through `t()` in `src/i18n/ui.ts`
- `src/data/site.ts` — language-neutral values (links, resume paths, chips)
- `src/components/`, `src/layouts/`, `src/pages/{en,vi}/` — UI and routes
- `public/resume/` — CV PDFs (checked by hand for forbidden names)

## CI and deploy

- GitHub Actions (`.github/workflows/quality-gate.yml`) runs `verify` on pushes to `develop`/`main` and on pull requests.
- Cloudflare Pages deploys through its Git integration, with these project settings:
  - Production branch: `main`
  - Build command: `npm run build && npm run check:todo && npm run check:names`
  - Build output directory: `dist`
  - Environment variable: `NODE_VERSION=22`

  `check:todo` reads `CF_PAGES_BRANCH`, so production builds fail on any `[TODO` while preview builds only warn.
