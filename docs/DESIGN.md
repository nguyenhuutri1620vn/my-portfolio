# DESIGN — Professional, Minimal

## Color (4 colors + neutral text)
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#FFF1E7` | Page background |
| `--surface` | `#B5D2E6` | Cards' tint, tag fill, diagram fills, dividers (use at 35–50% opacity on `--bg` for large areas) |
| `--brown` | `#805232` | Section labels, borders, secondary headings, diagram strokes |
| `--accent` | `#326080` | **Only** primary buttons, links, key numbers/keywords |
| `--ink` | `#2B2B2B` | Body text (neutral) |
| `--white` | `#FFFFFF` | Text on accent, card base |

Rules: accent used sparingly (one primary button per viewport, key metrics, links). No other hues.
**Dark band** (style reference: Developer X template): header, hero and footer use `--ink` as background with `--bg` text. No new hue. On the dark band `--surface` replaces `--accent` for text, numbers, links and focus rings (AA on ink); primary buttons stay `--accent`, the secondary button becomes `.btn-light` (`--bg` fill, `--ink` text). No gradients or shadows heavier than `0 1px 2px rgba(0,0,0,.06)`.
Contrast checks: `--ink` on `--bg` and `--white` on `--accent` pass AA; verify `--brown` on `--bg` for text ≥ 16px only.

## Typography
- Headings (h1–h3, display, eyebrow, numbers): **Space Grotesk** 700 (500 loaded). See `docs/adr/0001-heading-font.md`.
- Body/UI: **Inter** (400, 500, 600). Fallback `system-ui, sans-serif`.
- Tech tags, code, metrics labels: **JetBrains Mono** (400, 500).
- Scale: display (hero vision line) `clamp(2.75rem, 6vw, 4.75rem)` / 1.08; h1 `clamp(2.25rem, 5vw, 3.5rem)` / 1.1; h2 `clamp(2rem, 4vw, 2.75rem)` / 1.15; h3 `1.25rem`; body `1rem`/1.65; tag `0.75rem`.
- Max line length 68ch for articles. Vietnamese needs the `vietnamese` subset of every font loaded.

## Spacing & layout
8px base. Container max 1120px, article max 720px. Section vertical padding `96px` desktop / `64px` mobile. Grid gap 24px. Radius 20px cards, 999px tags/buttons use 8px. Borders 1px `--brown` at 25% opacity.

## Components
- **Button primary:** bg `--accent`, text white, 12×22 padding, radius 8, hover darken 8%, focus ring 2px `--brown` offset 2.
- **Button secondary:** transparent, 1px `--accent` border, text `--accent`, hover bg `--surface` 40%.
- **Tag:** JetBrains Mono 12px, 1px border `--brown`@40%, bg `--surface`@45%, text `--brown`.
- **Case card:** white@70% on `--bg`, border 1px; header (category tag + title), no diagram (diagrams live on the case-study page), short intro paragraph, one highlight line in a callout (key number in `--accent` 600), button "View details →". Hover: lift 2px and accent border at 50% (no lift under reduced motion).
- **Workflow card:** number `01` in mono `--brown`, title, 2–3 lines. Card 05 has a small "AI" mono tag; card 06 has "Included" tag.
- **Stack group:** label (mono, brown) + chips.
- **Language switch:** `EN | VI` in the header only, active in `--accent` underline.
- **Eyebrow:** Space Grotesk 14px 600 uppercase, letter-spacing 0.08em, `--ink` (or `--bg` on the dark band). Only as a small block label (At a glance, Experience, Certification); sections and the client hero have no kicker above their titles.
- **Lead bar:** 64×4px bar in the text color above the home hero headline.
- **Text link with arrow:** Space Grotesk 600, 2px underline, `→`; used for "View details" on case cards.
- **Article:** h2 with 1px brown top rule; callout "Result" block with `--surface`@40% bg and left border 3px `--accent`; code blocks light, mono.

## Diagrams (SVG)
Boxes: fill `--surface`@60%, stroke `--brown` 1.25px, radius 6. Arrows `--brown` 1.25px with small heads. Labels Inter 12px `--ink`; data stores labeled in JetBrains Mono. One highlighted box (the focus of the case) uses `--accent` stroke 2px. All colors via CSS variables so they match the theme. Always include `<title>` and `<desc>` for accessibility. Generic names only (e.g., "Org DB", "Worker").

## Imagery
No stock photos. Avatar: square 96px, 12px radius, 1px `--brown`@25% border, top of the hero profile card; until `public/images/avatar.jpg` exists it shows the initials in JetBrains Mono on `--surface`@50%. UI screenshots (supplied later): cropped, synthetic data, placed inside a plain frame below the diagram, max one per case.

## Motion
Fade/translate 8px on section reveal, 200ms; disabled under `prefers-reduced-motion`.

## Responsive
Breakpoints 640 / 1024. Hero CTAs stack on mobile. Case grid 1 → 2 → 3 columns. Workflow grid 1 → 2 → 3 columns (6 cards fill evenly at all sizes).
