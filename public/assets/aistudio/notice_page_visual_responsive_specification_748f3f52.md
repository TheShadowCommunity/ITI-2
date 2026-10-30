# Notice Page (`/notice`) — Visual & Responsive Design Specification

## Purpose
Create the Notice page for the existing New Lucknow City Private ITI website at `/notice`. It should feel like a natural continuation of the current website and reuse the visual language and page components already in the codebase.

**Visual source of truth:** the supplied Figma frame:
https://www.figma.com/design/CyE9VdnOdmvx5U8BBBjFsX/ITI-2?node-id=128-8350&t=9v6oq48GPr3zOtZr-4

Use the Figma frame and the PNG/image supplied alongside this document to determine exact Notice-page layout, dimensions, spacing, typography, colors, borders, table appearance and surrounding page sections. This document describes behavior and responsive rules; it is not a replacement for direct visual inspection of the design.

> Exact per-layer Figma measurements could not be independently extracted through the Figma connector during preparation. Do not treat guessed dimensions as measurements. Inspect the supplied design directly and match it.

## Page composition
1. Use the existing global site navigation/header and footer components.
2. Follow the page-title/hero or breadcrumb treatment shown in the Figma design, if present.
3. Render the notices table using the same visual pattern as the notice table already shown on the homepage. The table should look like the existing component, not a newly invented table design.
4. Add pagination directly after the table at the bottom of the table section. Pagination is not shown in the Figma design; create it in the same design language using the existing palette, type styles, button/link treatments, borders, radii and spacing. It must appear visually attached to the table section, with clear but restrained separation.
5. Continue to the existing global footer.

## Existing design system references
Use the established site tokens and classes already present in the repository. Known palette references from previous design inspection:
- Navy/900: `#1F2A3C`
- Navy/800: `#2E3B4E`
- Navy/500: `#5B6B80`
- Navy/200: `#AEB8C6`
- Yellow/500: `#F2B418`
- Yellow/600: `#D99A00`
- Yellow/700: `#8A6100`
- Neutral/0: `#FFFFFF`
- Neutral/50: `#F4F5F7`
- Neutral/200: `#DDE1E7`
- Neutral/950: `#14171C`
- Sage/S400: `#AAB48C`
- Font families identified in the design system: Hind and Montserrat (confirm font setup and required subsets in the repo).

Treat the codebase's actual tokens and existing homepage table as authoritative where they differ. Do not introduce a competing color or typography system.

## Table styling
- Match the homepage notices table for column labels, row treatment, typography, row separators, alignment, icons/links, background, borders and hover/focus states.
- Preserve the existing notice row content hierarchy and link/attachment interaction. Reuse the current component, data shape and formatting where practical; avoid maintaining two unrelated implementations of the same table.
- Table row heights must allow notice titles/dates and any other existing columns to remain legible at each viewport.
- Long notice titles must wrap or otherwise fit without overlapping dates, icons, action links or neighboring rows.
- Keep keyboard focus visible. Do not communicate focus/active status through color alone.
- Reuse any decorative separators or accents from the existing design.

## Pagination styling
- Place the pagination immediately beneath the table, within the same content/container width.
- Align it consistently with the existing site composition. Do not create a new full-width card around it unless the design system supports that.
- Show numeric page buttons; distinguish the current page using a brand accent or inverse treatment with readable contrast.
- Inactive buttons should remain restrained and consistent with existing site styling.
- Provide hover, keyboard-focus and disabled states. Disabled Previous/Next controls at boundaries must not activate.
- On narrow screens, keep pagination usable without page-level horizontal overflow. Use compact spacing and, if needed, a bounded page-number window for high page counts; do not render hundreds of numbers in one row.
- Include accessible labels such as `aria-label="Notice pagination"` and `aria-current="page"` on the active page control.

## Responsive behavior
Follow the responsive conventions already established for the homepage and other existing pages. Preserve the current Astro + Tailwind implementation and do not introduce a new framework.

### Wide desktop and ultrawide
- Use the site's established max-width container and page gutters.
- Match the Figma desktop proportions, table width, title/header sizing and vertical rhythm.
- Avoid stretching the table across excessive horizontal whitespace on ultrawide screens; keep it inside the site's content container.
- Keep pagination aligned consistently with the table and section.

### Laptop / desktop (including approximately 1265 × 551 CSS px)
- At 100% browser zoom, typography, row heights, spacing and table proportions must look balanced without requiring the user to zoom out.
- Use flexible widths and fluid typography only where appropriate; reuse existing responsive tokens/classes.
- Avoid unintended horizontal overflow. If columns cannot fit comfortably, use a deliberate compact layout or a horizontal-scroll wrapper local to the table—not page-level overflow.
- Do not shrink readable content excessively just because the viewport height is short; the page can scroll vertically.

### Tablet
- Reduce page gutters and column gaps gradually at the site's established breakpoints.
- Preserve essential notice fields and tap targets. If horizontal scrolling is necessary for the table, contain it within the table wrapper.
- Pagination should wrap or use a compact range when needed.

### Mobile
- Retain the established mobile header, content width, type styles, footer and page-spacing patterns.
- Avoid clipping date, notice title, document/action link or pagination.
- If the homepage table already has a mobile transformation (e.g. responsive row/cards), reuse it. Otherwise, choose the least disruptive mobile treatment that preserves all essential information: either a compact table in an overflow-contained wrapper or a clear stacked row/card pattern following the site's styling. Do not silently hide essential fields.
- Use practical touch targets (aim for about 44 × 44 CSS px where it fits the design), with sufficient spacing.
- Long titles and file names must wrap safely. The page must not overflow horizontally.
- Keep pagination controls legible; for large page counts, show a bounded range with Previous/Next and ellipses if consistent with the site.

## Accessibility and interaction quality
- Use semantic headings and semantic table markup (`table`, `thead`, `tbody`, `th`, `td`) when implementing a real table.
- Associate column headers correctly; use `scope="col"` where appropriate.
- Pagination controls must be keyboard operable, have accessible names, visible focus, and correct disabled/active semantics.
- Respect reduced-motion preferences if transitions are added. Avoid decorative animation that distracts from reading notices.
- Maintain readable contrast for text, borders, current-page state and disabled controls.
- Do not use clickable non-interactive elements without keyboard behavior.

## Performance and codebase scope
- Reuse the existing navbar, footer, homepage notice-table presentation, typography tokens and shared styles where appropriate.
- Create only the `/notice` route and minimal reusable components/helpers needed for notices and pagination.
- Do not redesign or unintentionally change the homepage or `/guest-lectures` page. Confirm any shared-component change does not alter them visually or behaviorally.
- Do not add packages or change the framework.
- Keep data separate from presentation so it can connect to Sanity later without rewriting the UI.

## Visual QA checklist
Verify at least:
- 375 px and 430 px mobile widths
- 768 px tablet
- 1024 px
- 1152 px
- 1265 px (important laptop target)
- 1366 px and 1440 px
- 1920 px and 2560 px
- Browser zoom at 80%, 90% and 100% where practical

Check first page shows newest five notices; pagination sits directly below the table; current-page styling is clear; page-count behavior follows the technical specification; no overlap or page-level horizontal overflow occurs; navigation/footer remain consistent; homepage and `/guest-lectures` remain unchanged.
