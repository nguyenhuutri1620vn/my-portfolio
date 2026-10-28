# PRD — Portfolio Website

## 1. Purpose
Convince two audiences within one scroll:
- Clients: "I can deliver your system reliably, with a clear process."
- Recruiters / Tech Leads: "He has solved hard data/backend problems and can explain the design."

Success signals: Start-a-Project clicks (mailto), Resume downloads, GitHub clicks, case-study detail views.

## 2. Pages
| Route | Content |
|---|---|
| `/en`, `/vi` | One-page home: Hero + Featured Case Studies + Technical Stack & Experience + Contact |
| `/{lang}/services` | Services & Workflow page (clients); "How I work" section; CTA at end to start project |
| `/{lang}/case-studies/{slug}` | Technical article per case study |
| 404 | Minimal, bilingual |

## 3. Home sections (in order)
**0. Header.** Logo text "Tri Huu Nguyen", anchors (Projects, Services, Stack, Contact), EN/VI switch, sticky, minimal.

**1. Vision + Hero.**
- Vision line: "Build systems that make your business win."
- Title: Software Engineer · Nearly 5 years
- Positioning paragraph (see CONTENT.md): high-performance backend, data automation, full-stack delivery, professional AI use inside a standard SDLC.
- Tech chips (mono): Go, React, PostgreSQL, Elasticsearch, ClickHouse, Kafka, Superset, AWS, Docker.
- CTAs side by side: **Primary (filled #326080):** "Start a Project" (mailto with prefilled subject/body, i18n) . **Secondary (thin outline):** "Download Resume (PDF)" and a text link "GitHub". On mobile they stack, primary first.
- Optional portrait (right on desktop, above on mobile) when supplied; layout must work without it.

**2. Featured Case Studies.** 5 cards in a grid (3 + 2, centered; or 1 column mobile):
1. Healthcare supply chain platform (overview)
2. Insight Dashboard
3. Value Analysis
4. ClickHouse × Superset (Custom Report Builder and analytics)
5. Large Exports with Kafka

Card anatomy: title, category tag, 3-line summary **Context → Solution → Result**, small architecture diagram thumbnail (SVG), "View details" button. Result line is visually emphasized (accent color on key number).

**3. Services & Workflow.** 3×2 grid of 6 equal cards with step numbers 01–06:
Discovery & Scope · Architecture & Design · Agile Development · Deployment & Handover · AI-Assisted Engineering · Quality, Security & Support. On desktop, thin connector line runs through 01→04 in row 1/2 order; card 06 is labeled "Included" (free part).

**4. Technical Stack & Experience.** Grouped chips (Backend, Data, Infra, Frontend, AI tooling) + one 4–5 line statement on Go/React for compute-heavy workloads with performance in mind + compact timeline (Feb 2022 – Present, anonymous employer: "Product company, healthcare supply chain").

**5. Contact / Dual CTA.** Email, LinkedIn, GitHub. Two blocks: "Have a project?" (mailto) and "Hiring?" (Resume + LinkedIn).

**Footer.** © year, language switch, back to top.

## 4. Case study page template
Sections in order: Overview (Context · Solution · Result, readable standalone by clients) → Domain glossary (if needed) → Architecture diagram → Data design (how databases are split) → Key decisions & trade-offs (tech-selection strategy) → Failure handling → Security → Results → What I'd do next.
Technical sections are visually secondary (smaller lead-in, "Technical deep dive" divider) so clients can stop after Results.

## 5. Non-functional
- Static, no tracking cookies (use privacy-friendly analytics optional: Cloudflare Web Analytics).
- Lighthouse ≥ 95 in all four categories, LCP < 2s on 4G.
- Fully keyboard accessible; contrast AA.
- SEO: per-language titles/descriptions, `hreflang`, OpenGraph image, sitemap, JSON-LD `Person`.
- Language: remember choice in `localStorage`; default from `Accept-Language`.

## 6. Out of scope (v1)
CMS, blog, contact form backend, dark mode, animations beyond subtle fades.

## 7. Acceptance criteria
- Both languages render all sections with no missing keys.
- No company/product names present (`grep -ri` check in CI).
- No `[TODO` strings in production build.
- Resume buttons point to existing files.
- Each case-study page has diagram, 3 technical subsections, and a Results block.
