# ADR 0002 — Deploy as a Cloudflare Worker with static assets

- Status: accepted
- Date: 2026-10-29

## Context
`CLAUDE.md` names Cloudflare Pages for deploy. The owner created the project through the current Cloudflare dashboard, which sets it up as a Worker with Workers Builds: build command `npm run build`, deploy command `npx wrangler deploy`. With no Wrangler config in the repo, `wrangler deploy` runs its framework autoconfig and the custom build failed.

## Decision
Keep the site fully static. Add `wrangler.jsonc` with only `assets.directory: ./dist`, so `wrangler deploy` uploads the Astro build and runs no Worker code. No Cloudflare adapter, no bindings (KV, D1, R2), no `wrangler types`.

## Consequences
- The same repo deploys either way: as a Pages project (output directory `dist`) or as a Worker (deploy command `npx wrangler deploy`).
- The Worker URL is `tri-nguyen-portfolio.<account>.workers.dev`, not `pages.dev`. Set `site` in `astro.config.mjs` to the final URL (or the custom domain) so canonical and hreflang links are correct.
