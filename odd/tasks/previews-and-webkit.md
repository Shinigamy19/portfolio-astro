# Feature: Hybrid Previews + Webkit Design System

## Objective
Stop hand-making project preview images and add a `/webkit` design-system page that documents the portfolio's visual language from live data sources.

## Problem
- Previews are manual webp mockups in `src/assets/preview/` — every new project is pending design work.
- Icons (90), tag colors (69), gradients, and UI patterns are scattered with no reference page.

## Why
User request (2026-10-06): hybrid preview generation (real screenshots when a live URL exists, branded cards otherwise) plus a `/webkit` section covering icons, backgrounds, and tokens.

## Scope
### In
- `scripts/generate-previews.mjs` + npm script `previews`
- Hybrid: Playwright screenshot for live non-comingSoon projects with `link`; branded HTML card → screenshot for the rest
- Hash manifest so unchanged projects are skipped
- `src/pages/webkit.astro` data-driven design system
- devDeps: `playwright`, `sharp`

### Out
- CI Action (follow-up)
- i18n for `/webkit` (single page first)
- Regenerating existing previews on day one unless `--force`

## Constraints
- Previews must stay `.webp` (existing `import.meta.glob` + `projects.ts` paths)
- Webkit must read from `iconMap` / `projectTags` / `skills` / education data — no duplicated hardcoded lists
- Generated UI copy in English; site content stays as-is
- No AI attribution in commits; conventional commits only

## Delivery strategy
- **single-pr** — one feature branch/PR for both work units (cohesive portfolio tooling). Forecast ~700–900 authored lines.

## Tasks
- [x] T1 Setup: branch, feature doc, install `playwright` + `sharp` + `tsx`, chromium
- [x] T2 Preview generator — `scripts/generate-previews.ts`, `scripts/preview-card.ts`, npm script `previews`
- [x] T3 Sample verification — dry-run 36; TechCalendAR screenshot 1200×630; Afk Bardo card 1200×600; manifest skip works
- [ ] T4 `/webkit` page (tokens, typography, icons, tags/skills, backgrounds, components)
- [ ] T5 Full `npm run previews`, `astro check` + `astro build`, remaining commits

## Acceptance criteria
- `npm run previews` generates missing previews without touching unchanged ones
- Live web projects get real screenshots; comingSoon / no-link get branded cards
- `/webkit` renders all icons from `src/components/icons/` via glob
- `/webkit` tag/skill samples match `projectTags.ts` / `skills.ts` data
- Build passes

## Checks
- `npx tsx scripts/generate-previews.ts --dry-run` lists planned work
- `npm run previews` (full run)
- `npx astro check` and `npm run build`
- Open `/webkit` in preview; spot-check icon grid + branded cards

## Progress
- 2026-10-06: Feature doc created; branch `feat/previews-and-webkit` from `master` @ `de7bfec`.
- 2026-10-06: T1–T3 done (delegated writer). Parent spot-check passed. Full regeneration pending.

## Route declaration
- T2/T4: delegated writer (multi-file non-trivial). Parent owns setup, verification, commits.
