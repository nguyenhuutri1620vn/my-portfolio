# ADR 0001 — Space Grotesk for headings

- Status: accepted
- Date: 2026-10-28

## Context
The owner asked to restyle the site after the Developer X portfolio template while keeping the four palette colors. That template's look comes mostly from a bold geometric heading font and dark header/hero bands. `CLAUDE.md` lists Inter and JetBrains Mono as the only fonts and asks for an ADR before changing the stack.

## Decision
Add **Space Grotesk** (500, 700; latin + vietnamese subsets), self-hosted through `@fontsource/space-grotesk`, for headings, the hero display line, eyebrows and key numbers. Inter stays the body font and JetBrains Mono stays the tag/code font.

The dark bands use the existing `--ink` color as background, so the palette is unchanged.

## Consequences
- Two more font files per subset on first load (about 20–25 KB each as woff2); check Lighthouse Performance stays ≥ 95 (T4.3).
- Heading styles are plain CSS in `src/styles/globals.css` (`h1–h3`, `.font-heading`), not a Tailwind theme key, so a running dev server picks them up without a restart.
