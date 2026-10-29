# PRD — Portfolio Website

## 1. Purpose
Two audiences, two entry points, one site:
- **Home `/{lang}`** — Recruiters / Tech Leads: "He has solved hard backend and data problems and can explain the trade-offs."
- **For clients `/{lang}/for-clients`** — Clients: "He can deliver my system reliably, with a clear process."

Success signals: Resume downloads, GitHub clicks, case-study detail views (home); Start-a-Project clicks (for-clients).

## 2. Pages
| Route | Audience | Content |
|---|---|---|
| `/en`, `/vi` | Tech Lead / HR | Hero → Case Studies → Engineering → Stack & Experience → Contact |
| `/{lang}/for-clients` | Clients | Client hero → What I build → Proof → Workflow (6 cards) → Start a Project |
| `/{lang}/case-studies/{slug}` | Both | Technical article per case study |
| 404 | — | Minimal, bilingual |

## 3. Shared header & footer
- Header: logo text "Tri Huu Nguyen"; anchors `Projects · Engineering · Stack · Contact` (on other pages they link to `/{lang}/#anchor`); EN/VI switch. No header button between home and `/for-clients` (hidden by owner request); the pages link to each other through the hero line and contact line (keeps the current path). Sticky, minimal.
- Footer: © year, back to top (language switch lives in the header only).

## 4. Home sections
**1. Hero (backend credibility).**
Vision line, title "Software Engineer · 5 years", backend positioning paragraph, server-side tech chips.
CTAs: **Primary** "View Case Studies" (→ `#projects`). **Secondary outline** "Download Resume" + text link "GitHub". Below, one small line linking to `/for-clients`. No "Start a Project" button on home.
Profile card on the right (desktop) / below (mobile): avatar, name, title, location, then the At a glance numbers. Layout works without the photo (initials shown).

**2. Featured Case Studies** (`#projects`). 6 cards in two groups. **Key projects** first, large accent cards in a 2 × 2 grid (1 column on mobile): Insight Dashboard · Value Analysis · Future Price Review · Custom Report Builder. Then **More from the platform**, smaller cards: Healthcare supply chain platform · Daily Delta Build. Card: tag, title, short plain-English intro, one highlight line with the key number, "View details".

**3. Engineering** (`#engineering`). Two parts:
- **Decisions** — 4 cards, each `Decision / Why / Trade-off / Outcome` (2×2 grid).
- **Practices** — 4 compact items (2×2 or list): Clean concurrent Go, tests on risky logic, AI-assisted PR gate, backward-compatible APIs.

**4. Stack & Experience** (`#stack`). Grouped mono chips, short statement, anonymous timeline, certification.

**5. Contact** (`#contact`). Email, LinkedIn, GitHub, Resume. One small line linking to `/for-clients`.

## 5. For-clients page
1. Client hero: H1, vision line, intro, primary CTA "Start a Project" (mailto), secondary "See case studies" (→ home `#projects`).
2. What I build: 4 offering cards.
3. Proof strip: 4 result metrics, each linking to its case study.
4. Workflow: 6 cards 3×2 (01–06), tags `AI` (05) and `Included` (06).
5. Closing CTA block: "Ready to start a project?" + mailto + response note.

## 6. Case study page template
Overview (Context · Solution · Result — clients can stop here) → "Technical deep dive" divider → Problem → Approach & alternatives considered → Architecture diagram → Data design → Failure handling → Security → Results. No Trade-offs section and no commit or PR counts on case pages (owner, Oct 2026).
Any statement not backed by `docs/CONTENT.md` is a `[TODO]`, never filled by guessing.

## 7. Non-functional
- Static; optional Cloudflare Web Analytics, no tracking cookies.
- Lighthouse ≥ 95 in all categories; LCP < 2s on 4G.
- Keyboard accessible; WCAG AA contrast.
- SEO: per-page, per-language title/description, `hreflang`, OpenGraph, sitemap, JSON-LD `Person`.
- Language choice remembered in `localStorage`; default from `Accept-Language`.

## 8. Out of scope (v1)
CMS, blog (planned v2: 2–3 technical articles), contact-form backend, dark mode, animations beyond subtle fades.

## 9. Acceptance criteria
- All pages render in EN and VI with no missing keys.
- No forbidden names (`npm run check:names`).
- No `[TODO` in production build.
- Home has no "Start a Project" button; `/for-clients` has it in hero and closing block.
- Every case-study page has a diagram, the technical sections, and a Results block.