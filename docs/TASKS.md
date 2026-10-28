# TASKS — Ordered backlog for Claude Code

Work top to bottom. One task per commit/PR. Tick `[x]` when done. Read `CLAUDE.md` rules before each task.

## Phase 0 — Setup
- [x] T0.1 Init Astro (TypeScript strict) + Tailwind + MDX; add `@fontsource` Inter and JetBrains Mono (latin + vietnamese subsets).
- [x] T0.2 Define design tokens from `docs/DESIGN.md` as CSS variables and Tailwind theme (colors, fonts, spacing, radius).
- [x] T0.3 Astro i18n routing `/en` and `/vi`, default `en`, redirect `/` by `Accept-Language`, `hreflang` tags.
- [x] T0.4 Create `src/content/ui/en.json` and `vi.json`; helper `t(key)`; build fails on missing key in either language.
- [x] T0.5 ESLint, Prettier, `npm run check:todo` (finds `[TODO` in built output), `npm run check:names` (greps for forbidden employer/product names).
- [x] T0.6 GitHub Actions: install, lint, build, check scripts. Cloudflare Pages deploy config.

## Phase 1 — Layout, Home hero, For-clients page
- [ ] T1.0 Preflight: `npm run build` passes on a clean checkout; `@astrojs/tailwind` is installed if `astro.config.mjs` imports it; fonts load via `@fontsource` imports in the base layout (no hand-written `@font-face` for them); token values match `docs/DESIGN.md` (buttons radius 8px, tags 999px).
- [ ] T1.1 `BaseLayout` + `Header` + `Footer`: anchors `Projects · Engineering · Stack · Contact` (link to `/{lang}/#anchor` when not on home), distinct `For clients` link, `LangSwitch` keeping the current path, skip link, focus styles, per-page `<title>`/description/`hreflang` from CONTENT §8.
- [ ] T1.2 Home `Hero` (CONTENT §1): vision, title + "Nearly 5 years", positioning, server-side chips, primary `View Case Studies` → `#projects`, secondary `Download Resume` + `GitHub`, small link to `/for-clients`. No Start-a-Project button. Optional portrait slot.
- [ ] T1.3 Resume files in `public/resume/`; hide the VI resume link if its file is missing (fall back to EN).
- [ ] T1.4 Home skeleton: empty `<section>`s with ids `projects`, `engineering`, `stack`, `contact` and their titles from CONTENT, so anchors work before content lands.
- [ ] T1.5 `/{lang}/for-clients` page (CONTENT §6, §7): `ClientHero` (Start a Project mailto + See case studies), `OfferCard` ×4, `ProofStrip` ×4 linking to case studies, `WorkflowGrid` 6 cards 3×2 with tags `AI` (05) and `Included` (06), closing CTA block.
- [ ] T1.6 Phase review: both languages, keyboard pass, 360/768/1440 widths, `npm run lint && npm run build && npm run check:todo && npm run check:names`.

## Phase 2 — Case studies
- [ ] T2.1 Content collection schema (`title, tag, context, solution, result, slug, diagram, lang, order`); 5 MDX files × 2 languages from CONTENT §2.
- [ ] T2.2 `CaseCard` + grid (3 + 2 centered desktop, 2 tablet, 1 mobile) in `#projects`.
- [ ] T2.3 Diagram components (SVG, themed via CSS variables): `platform-overview`, `insight-dashboard`, `value-analysis`, `clickhouse-superset`, `kafka-exports`. Generic labels, `<title>`/`<desc>`.
- [ ] T2.4 Case-study page per PRD §6 (Overview → Technical deep dive → … → What I'd do next), prev/next links, back to `#projects`.
- [ ] T2.5 `<Metric>` MDX component for accent key numbers.
- [ ] T2.6 Optional UI image slot (disabled until images supplied).

## Phase 3 — Engineering, Stack, Contact (home)
- [ ] T3.1 `DecisionCard` ×4 (Decision / Why / Trade-off / Outcome, 2×2) and `PracticeItem` ×4 in `#engineering` (CONTENT §3).
- [ ] T3.2 `StackGrid`: grouped mono chips, statement, anonymous timeline, certification (CONTENT §4).
- [ ] T3.3 `ContactBlock` (CONTENT §5): email, LinkedIn, GitHub, resume, small link to `/for-clients`.
- [ ] T3.4 Active nav state on scroll; smooth scroll respecting reduced motion.

## Phase 4 — Quality
- [ ] T4.1 SEO: titles/descriptions per language, OpenGraph image (generated from tokens), sitemap, robots, JSON-LD `Person`.
- [ ] T4.2 Accessibility pass: keyboard, focus order, contrast, reduced motion, language attribute.
- [ ] T4.3 Lighthouse ≥ 95 (all four) on `/en` and `/vi`; fix regressions.
- [ ] T4.4 Responsive QA at 360, 768, 1024, 1440.
- [ ] T4.5 Privacy-friendly analytics (Cloudflare Web Analytics) — optional.

## Phase 5 — Content completion (owner input needed)
- [ ] T5.1 Resolve every `[TODO]` in `docs/CONTENT.md` (see its section 7).
- [ ] T5.2 Add portrait and UI mockups (synthetic data only).
- [ ] T5.3 Final proofreading EN and VI; run `check:todo` and `check:names`; publish.

## Definition of done (v1)
All acceptance criteria in `docs/PRD.md` section 7 pass; production build has zero `[TODO`; both languages complete.