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

Rules: accent used sparingly (one primary button per viewport, key metrics, links). No other hues. No gradients or shadows heavier than `0 1px 2px rgba(0,0,0,.06)`.
Contrast checks: `--ink` on `--bg` and `--white` on `--accent` pass AA; verify `--brown` on `--bg` for text ≥ 16px only.

## Typography
- Body/UI: **Inter** (400, 500, 600). Fallback `system-ui, sans-serif`.
- Tech tags, code, metrics labels: **JetBrains Mono** (400, 500).
- Scale: h1 `clamp(2.25rem, 5vw, 3.5rem)` / 1.1; h2 `1.75rem`; h3 `1.125rem`; body `1rem`/1.65; tag `0.75rem`.
- Max line length 68ch for articles. Vietnamese needs the `vietnamese` subset of both fonts loaded.

## Spacing & layout
8px base. Container max 1120px, article max 720px. Section vertical padding `96px` desktop / `64px` mobile. Grid gap 24px. Radius 10px cards, 999px tags/buttons use 8px. Borders 1px `--brown` at 25% opacity.

## Components
- **Button primary:** bg `--accent`, text white, 12×22 padding, radius 8, hover darken 8%, focus ring 2px `--brown` offset 2.
- **Button secondary:** transparent, 1px `--accent` border, text `--accent`, hover bg `--surface` 40%.
- **Tag:** JetBrains Mono 12px, 1px border `--brown`@40%, bg `--surface`@45%, text `--brown`.
- **Case card:** white@70% on `--bg`, border 1px; header (category tag + title), diagram thumbnail (aspect 16/9, `--surface` tint), 3 rows labeled `CONTEXT / SOLUTION / RESULT` (mono 11px label in `--brown`; RESULT value text in `--ink` with key number in `--accent` 600), button "View details".
- **Workflow card:** number `01` in mono `--brown`, title, 2–3 lines. Card 05 has a small "AI" mono tag; card 06 has "Included" tag.
- **Stack group:** label (mono, brown) + chips.
- **Language switch:** `EN | VI`, active in `--accent` underline.
- **Article:** h2 with 1px brown top rule; callout "Result" block with `--surface`@40% bg and left border 3px `--accent`; code blocks light, mono.

## Diagrams (SVG)
Boxes: fill `--surface`@60%, stroke `--brown` 1.25px, radius 6. Arrows `--brown` 1.25px with small heads. Labels Inter 12px `--ink`; data stores labeled in JetBrains Mono. One highlighted box (the focus of the case) uses `--accent` stroke 2px. All colors via CSS variables so they match the theme. Always include `<title>` and `<desc>` for accessibility. Generic names only (e.g., "Org DB", "Worker").

## Imagery
No stock photos. Portrait (optional) cropped square, 12px radius, subtle `--surface` frame. UI screenshots (supplied later): cropped, synthetic data, placed inside a plain frame below the diagram, max one per case.

## Motion
Fade/translate 8px on section reveal, 200ms; disabled under `prefers-reduced-motion`.

## Responsive
Breakpoints 640 / 1024. Hero CTAs stack on mobile. Case grid 1 → 2 → 3 columns. Workflow grid 1 → 2 → 3 columns (6 cards fill evenly at all sizes).
