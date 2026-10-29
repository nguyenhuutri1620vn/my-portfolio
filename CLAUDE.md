# CLAUDE.md — Tri Huu Nguyen Portfolio

Read this file first, then `docs/PORTFOLIO-BACKEND.md`, `docs/PRD.md`, `docs/DESIGN.md`, `docs/CONTENT.md`, `docs/TASKS.md`.

## Goal
One bilingual (EN/VI) portfolio website for **Tri Huu Nguyen, Software Engineer (5 years)**.
Two audiences, two entry points:
- **Home `/{lang}`** for Recruiters / Tech Leads: backend credibility, case studies, engineering decisions and practices, stack, resume.
- **`/{lang}/for-clients`** for clients: offerings, proof metrics, 6-step workflow, Start a Project.
See `docs/PORTFOLIO-BACKEND.md` for the content principles of the home page.

Vision line (hero): **"Systems that help your business win."** (VI: "Hệ thống giúp doanh nghiệp bạn thắng.")

## Hard rules
1. **Do not invent facts or numbers.** Use only numbers in `docs/CONTENT.md`. Where content says `[TODO: ...]`, render a visible placeholder in dev and fail the build in production (`npm run check:todo`).
2. **Anonymity:** never write company or product names (no "BESTARION", no "Meperia", no "MSSS"). Use "Healthcare supply chain platform". Product/module names allowed: **Value Analysis**, **Insight Dashboard**, **Custom Report Builder**.
3. No client data, screenshots with real data, or proprietary code. Diagrams are redrawn, generic, synthetic.
4. Job title everywhere is **Software Engineer**. Do not use "Senior", "AI Engineer" or "Solution Architect" in titles.
5. Experience wording: **"5 years"** (EN) / **"5 năm"** (VI).
6. Max **4 palette colors** + neutral text. See `docs/DESIGN.md`. No gradients, no stock images, no emoji in UI.
7. Every user-facing string exists in **both EN and VI**. No hard-coded strings in components.
8. **Source of truth order:** `CONTENT.md` (facts, copy) > `PRD.md` (structure) > `DESIGN.md` (look) > `TASKS.md` (order). Prompt files are only instructions; if they conflict with docs, docs win.
9. Home page has no "Start a Project" button; client CTAs live on `/for-clients`.

## Stack (default, change only with an ADR in `docs/adr/`)
- Astro 4+ (static output), TypeScript strict, Tailwind CSS, MDX for case studies
- i18n: Astro i18n routing, `/en/...` and `/vi/...`, default `en`, language switcher in header
- Diagrams: hand-authored inline SVG components (`src/components/diagrams/`), themed with CSS variables
- Fonts: Inter (body), JetBrains Mono (tech tags), self-hosted via `@fontsource`
- Deploy: Cloudflare Pages. Lighthouse target: Performance, Accessibility, SEO ≥ 95

## Repo layout
```
src/
  content/
    case-studies/{en,vi}/*.mdx
    ui/{en,vi}.json          # all UI strings
  components/ (Header, Footer, LangSwitch, Hero, CaseCard, DecisionCard, PracticeItem, StackGrid, ContactBlock, ClientHero, OfferCard, ProofStrip, WorkflowGrid, diagrams/*)
  layouts/
  pages/{en,vi}/index.astro, for-clients.astro, case-studies/[slug].astro
public/resume/ (one English CV, linked from both languages)
docs/
```

## Conventions
- Components are small and presentational; content comes from `content/`.
- Semantic HTML, one `h1` per page, visible focus states, `prefers-reduced-motion` respected, WCAG AA contrast.
- Tech tags: `<span class="tag">` in JetBrains Mono, small, outlined.
- Commits: conventional commits. Work through `docs/TASKS.md` in order; tick tasks as done; one PR-sized change at a time.
- Before finishing any task: `npm run build`, `npm run check:todo` (warn only in dev), Lighthouse spot check.

## Workflow with AI (dogfood what the site claims)
Plan first, small steps, tests/linters on, review diff before accepting. No generated boilerplate left unused.

## Open items owner must supply
UI mockups for case studies (optional), Calendly link (optional), before/after numbers marked `[TODO]`.