# TASKS — Ordered backlog for Claude Code

Work top to bottom. One task per commit/PR. Tick `[x]` when done. Read `CLAUDE.md` rules before each task.

## Phase 0 — Setup
- [x] T0.1 Init Astro (TypeScript strict) + Tailwind + MDX; add `@fontsource` Inter and JetBrains Mono (latin + vietnamese subsets).
- [x] T0.2 Define design tokens from `docs/DESIGN.md` as CSS variables and Tailwind theme (colors, fonts, spacing, radius).
- [ ] T0.3 Astro i18n routing `/en` and `/vi`, default `en`, redirect `/` by `Accept-Language`, `hreflang` tags.
- [ ] T0.4 Create `src/content/ui/en.json` and `vi.json`; helper `t(key)`; build fails on missing key in either language.
- [ ] T0.5 ESLint, Prettier, `npm run check:todo` (finds `[TODO` in built output), `npm run check:names` (greps for forbidden employer/product names).
- [ ] T0.6 GitHub Actions: install, lint, build, check scripts. Cloudflare Pages deploy config.

## Phase 1 — Layout & Hero
- [ ] T1.1 Base layout: header (logo, anchors, language switch), footer, skip link, focus styles.
- [ ] T1.2 Hero: vision line, title, experience badge, positioning text, tech chips, CTA pair (primary mailto with i18n subject/body, secondary resume + GitHub link). Portrait slot optional.
- [ ] T1.3 Place resume PDFs in `public/resume/` (VI file may be missing: hide VI resume button until present, fall back to EN).
- [ ] T1.4 Add "How I work" text link (small, below CTAs) → `/services`; microcopy EN `Explore how I work` · VI `Tìm hiểu cách tôi làm việc` (optional, for clients curious about the process).

## Phase 1.5 — Services page
- [ ] T1.5 Create `src/pages/{en,vi}/services.astro`: reuse WorkflowGrid component, same styling as home. Layout: header (title + intro) → 6-card workflow grid → closing statement + CTA "Ready to start a project?" (button mailto, same as hero).
- [ ] T1.6 Update navigation: add anchor link `Services` in header nav (scrolls to services section on home, or links to `/services` if on another page).

## Phase 2 — Case studies
- [ ] T2.1 `CaseCard` component and grid (3 + 2 centered desktop, 2 tablet, 1 mobile), content from the case-study collection frontmatter.
- [ ] T2.2 Content collection schema (`title, tag, context, solution, result, slug, diagram, lang`), 5 MDX files × 2 languages from `docs/CONTENT.md` section 2.
- [ ] T2.3 Diagram components (SVG, themed): `platform-overview`, `insight-dashboard`, `value-analysis`, `clickhouse-superset`, `kafka-exports`. Generic labels only, `<title>`/`<desc>`.
- [ ] T2.4 Case-study page layout: Overview (Context/Solution/Result) → "Technical deep dive" divider → diagram → data design → decisions → failure handling → security → results; prev/next case links; back to projects.
- [ ] T2.5 Key-number highlighting (accent) via a small `<Metric>` MDX component.
- [ ] T2.6 Optional UI image slot (frame, lazy, alt text) — disabled until images supplied.

## Phase 3 — Services, Stack, Contact
- [ ] T3.1 `WorkflowGrid`: 6 cards 3×2, numbered 01–06, tags `AI` (05) and `Included` (06), connector line on desktop.
- [ ] T3.2 `StackGrid`: groups of mono chips + Go/React statement + anonymous timeline + certification line.
- [ ] T3.3 Contact section with two blocks (project / hiring) and links.
- [ ] T3.4 Section anchors and smooth scroll, active nav state.

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
