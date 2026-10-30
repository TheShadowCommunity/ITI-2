# Contact Page — Design Properties, Responsive Behavior, and Technical Requirements

## Purpose

Create a new Contact Us page at `/contact` in the existing New Lucknow City Private ITI website.

**Primary visual references**
- Figma design frame: https://www.figma.com/design/CyE9VdnOdmvx5U8BBBjFsX/ITI-2?node-id=127-1287&t=2nvh6UHDW1xE0HKO-0
- The desktop reference PNG supplied with the implementation request.
- If a mobile design is also available in the project context, use it as the exact mobile visual reference. If only the desktop PNG is supplied, derive mobile layout behavior using the responsive rules in this document.

**Important:** The PNG and Figma frame are the source of truth for the Contact page's exact visual arrangement and dimensions. The values in this document define the existing site design system and implementation rules. Where this document does not state a page-specific measurement, inspect Figma/PNG and the existing components instead of guessing.

---

## 1. Scope and constraints

1. Add a new route: `/contact`.
2. Reuse the existing site navbar and footer.
3. Reuse the **same enquiry form used on the homepage**. Do not manually recreate a visually similar but separate form.
4. Preserve the existing form fields, validation, submit handling, loading state, success/error behavior, and integrations.
5. Do not change the existing homepage layout/behavior or the already-fixed `/guest-lectures` page.
6. Inspect the current project structure, routing, shared components, CSS/Tailwind conventions, design tokens, assets, and existing form implementation before writing code.
7. Keep changes limited to what is needed for `/contact` and safe shared-component reuse.
8. Do not add dependencies or introduce a new backend/service for this task unless required by the existing architecture and explicitly justified.
9. Do not use the design PNG as a page background or a single flattened image. Build the page from real, responsive UI components.

---

## 2. Existing design system

Reuse the project's existing tokens and utility conventions. The following colors and typography were previously identified in this Figma file's design system; verify the exact relevant values in the repository and in the supplied Contact design before applying them.

### Colors

| Token | Value | Use when present in Contact design |
|---|---|---|
| Navy/900 | `#1F2A3C` | Main navy backgrounds, strong headings |
| Navy/800 | `#2E3B4E` | Secondary navy surfaces |
| Navy/500 | `#5B6B80` | Secondary copy, muted text, icons |
| Navy/200 | `#AEB8C6` | Borders and muted UI details |
| Yellow/500 | `#F2B418` | Main accent, CTA/button accents, decorative lines |
| Yellow/600 | `#D99A00` | Accent/hover states where appropriate |
| Yellow/700 | `#8A6100` | Darker accent text where required by contrast |
| Neutral/0 | `#FFFFFF` | White surfaces |
| Neutral/50 | `#F4F5F7` | Light neutral section backgrounds |
| Neutral/200 | `#DDE1E7` | Dividers and subtle borders |
| Neutral/950 | `#14171C` | Strong text |
| Sage/S400 | `#AAB48C` | Existing secondary accent, only if used in design |

Use only the colors actually present in the Contact reference and existing site tokens. Do not introduce new colors arbitrarily. Maintain sufficient contrast.

### Typography

- Established font families include **Hind** and **Montserrat**.
- Reuse the project's installed/local fonts and existing heading/body styles.
- Inspect font files and declarations before adding or changing fonts.
- Hindi text must render correctly using a font with actual Devanagari glyph support; do not assume a Latin-only subset is sufficient.
- Maintain a clear hierarchy between page title, section headings, form labels, body text, placeholder/helper text, validation messages, contact-detail titles, and buttons.
- Exact Contact-page font sizes, font weights, line heights, and alignment should be read from the supplied design, while all sizes must adapt responsively.

### Shared visual language

- Maintain the website's existing navy/yellow/light-neutral palette.
- Reuse established button, input, icon, border, radius, divider, and container patterns when they match the design.
- Use shared design tokens instead of adding page-specific duplicates.
- Preserve a consistent visual rhythm with the homepage and Guest Lectures page.

---

## 3. Page-specific design properties to extract from the supplied design

Before coding, inspect the Contact Us frame and the supplied PNG. Use the Figma layer measurements and visible styling wherever available. Record/apply the following for each visible section:

- Section order and background color.
- Section width/height behavior and top/bottom padding.
- Content container width, maximum width, and side gutters.
- Page title font family, size, weight, line-height, color, alignment, and spacing.
- Section-heading styles and any yellow decorative underline/accent.
- Column count, column widths, alignment, and gaps.
- Form panel background, border, radius, padding, and header treatment.
- Input dimensions, padding, border color/weight, radius, label/placeholder styles, and vertical spacing.
- Button size, padding, typography, accent color, radius, and alignment.
- Contact information blocks/icons, if shown: icon size, text hierarchy, spacing, link styles, and wrapping.
- Image/map panel sizing and crop behavior, if present.
- Shared header/footer spacing relative to the new page.
- Any visible hover, focus, selected, validation, or other interaction states shown in the design.

Do not infer invisible page content or invent contact information. Reuse values already present in the website where appropriate.

---

## 4. Page structure and component behavior

### A. Site header

- Render the existing shared header/navbar.
- Maintain its established responsive behavior.
- Do not build a second page-specific navigation implementation.
- Confirm that the Contact page title/content starts at the correct position beneath the header on all devices.

### B. Page title and introduction

- Follow the supplied visual reference for title text, supporting copy (if any), alignment, background, and decorative elements.
- Use an adaptive layout if the title needs to wrap on mobile.
- Avoid fixed heights that cut off wrapped text.
- Preserve the intended spacing between the page title and main Contact content.

### C. Main Contact content

- Implement the page's visible sections and their order exactly as shown in the design.
- Use a centered, responsive container aligned with the rest of the site.
- Use Grid/Flexbox for columns and content relationships, not absolute positioning for primary layout.
- Match the design's balance between the enquiry form and any contact details, location, map, or supporting panel that appears in the reference.
- At desktop widths, preserve the intended side-by-side arrangement and proportion.
- At narrower widths, allow columns to shrink responsibly, then stack in a logical order when there is not enough room for comfortable reading.
- Ensure no form, card, image, or contact detail is clipped by a parent container.

### D. Reuse the homepage enquiry form

This requirement is mandatory.

Before implementation, locate and inspect the homepage form and determine:
- Its component/module and how it is imported.
- Its fields and field order.
- Required/optional states and validation logic.
- Submission handler and API integration.
- Loading, success, and error states.
- Existing responsive/styling conventions.

Reuse the existing form component directly. If the current form is tightly coupled to the homepage, refactor only as much as necessary to share it safely, preserving the homepage's visual output and behavior. Use existing props/variants or a wrapper to match the Contact page's design rather than duplicating its markup or business logic.

The Contact page form must:
- Keep the same field definitions and submission behavior as the homepage form.
- Use accessible labels associated with the correct inputs.
- Have visible keyboard focus states.
- Show validation/error/success feedback accessibly.
- Keep each control within its parent width.
- Reflow field groups to a single column on small screens when needed.
- Preserve usable button size and spacing on mobile.
- Avoid horizontal scrolling or hidden submit controls.

Do not silently change form submission logic, create a parallel form service, or add fields that are not in the existing implementation/design.

### E. Contact information, map, or supplementary panels

Implement only the contact-detail items visibly present in the supplied design. Reuse existing icons/assets and established components. Do not invent address, phone, email, working hours, map coordinates, or links. Ensure long text or links wrap and remain usable at narrow widths.

### F. Site footer

- Reuse the existing shared footer.
- Maintain proper spacing after the Contact content.
- Verify that the footer is never overlapped by page content and behaves correctly on short and long pages.

---

## 5. Responsive design requirements — mandatory

The Contact page must remain visually consistent and usable across narrow phones, large phones, tablets, laptops, standard desktops, and ultrawide monitors. Responsive design means **consistent proportions and visual hierarchy, not identical pixel dimensions**.

### Layout rules

- Treat the supplied desktop design as the target for desktop.
- Treat any supplied mobile design as the target at its reference width.
- If there is no mobile PNG, derive the mobile layout from the same components and hierarchy. Do not squeeze the entire desktop layout into a narrow viewport.
- Use a centered container with a sensible `max-width` and fluid side gutters.
- Use CSS Grid/Flexbox and `minmax()` for responsive column behavior.
- Stack columns when there is insufficient space for readable content.
- Preserve a logical content order when stacking.
- Avoid absolute positioning for main content.
- Avoid fixed heights for text-heavy sections, form panels, and cards.
- Let long headings, emails, addresses, and other strings wrap safely.

### Fluid typography, spacing, and dimensions

Use the existing design tokens first; use `clamp()`, `min()`, `max()`, `rem`, percentages, and fluid containers when they are helpful. Apply them selectively to:
- Page and section heading sizes.
- Body and label sizes.
- Section padding and container gutters.
- Column and row gaps.
- Form field and button sizing.
- Images, maps, and decorative elements.

Do not replace all existing sizes indiscriminately with fluid values. Preserve the Figma proportions at the design reference widths, while preventing overly large or overly small elements between those widths.

### Desktop laptop / browser zoom behavior

The site's responsive system has been improved for a laptop viewport of approximately **1265 × 551 CSS pixels at 100% browser zoom**. The Contact page must use the same principles.

- Browser zoom changes the effective CSS viewport width; do not rely on physical screen size alone.
- At approximately 1265 CSS pixels wide, form fields and contact details must remain balanced and readable.
- Avoid a page title or section padding that occupies disproportionate space.
- Avoid overly narrow columns that force awkward wrapping.
- Keep images and map panels proportional to their containers.
- The layout should remain balanced at 80%, 90%, and 100% browser zoom where possible.

### Large and ultrawide screens

- Use a sensible maximum content width consistent with existing pages.
- Avoid stretched text lines or extremely wide fields.
- Maintain intentional whitespace and a clear relationship between columns.

### Mobile and tablet

- Use the mobile design if provided.
- Otherwise, stack the main form and contact-details areas, following the page's logical content order.
- Keep side gutters comfortable but not wasteful.
- Allow heading sizes and vertical spacing to reduce smoothly.
- Use one-column form layouts when a multi-column field arrangement becomes cramped.
- Make controls comfortably tappable.
- Keep icons aligned with text even when labels wrap.
- Avoid horizontal overflow at narrow widths and intermediate tablet sizes.

---

## 6. Accessibility, assets, and performance

- Use semantic headings and form markup.
- Keep keyboard focus visible and keyboard navigation functional.
- Do not rely on color alone to convey validation status.
- Use meaningful alt text for informative images; mark decorative assets appropriately.
- Reuse local assets when available.
- Avoid large dependencies for simple layout or icons.
- Do not use remote, short-lived Figma MCP asset URLs as runtime sources. If Figma assets are needed, download them into the project and reference local project assets.
- Respect the current framework, build system, and Netlify deployment conventions.

---

## 7. Implementation and validation checklist

Before marking complete, verify:

- [ ] `/contact` opens directly and works through in-site navigation.
- [ ] Correct desktop composition matches Figma/PNG.
- [ ] Mobile design matches the supplied mobile reference, if provided.
- [ ] Where mobile design is absent, layout is thoughtfully reflowed rather than compressed.
- [ ] Existing homepage form component and functionality are reused.
- [ ] Homepage appearance and form behavior remain unchanged.
- [ ] `/guest-lectures` is unchanged.
- [ ] Existing navbar/footer are reused.
- [ ] Typography and section spacing remain balanced at about 1265 CSS pixels wide.
- [ ] No horizontal overflow, clipping, overlap, or stretched imagery occurs.
- [ ] Long labels/links and form validation messages wrap correctly.
- [ ] Mobile, tablet, laptop, desktop, and ultrawide sizes have been checked.
- [ ] Production build succeeds.

Recommended viewport checks: 360, 390, 430, 768, 1024, 1152, 1265, 1366, 1440, 1920, and 2560 CSS pixels. Where possible, also check the laptop target at 80%, 90%, and 100% browser zoom.

---

## 8. Required completion report

After implementation, summarize:
1. Files added or changed.
2. How `/contact` was registered.
3. How the homepage enquiry form was reused.
4. The responsive layout decisions and breakpoints.
5. Viewport sizes tested.
6. Build result and any known issues.

**Final implementation rule:** Inspect the actual Contact design PNG/Figma frame and the current codebase before coding. Derive exact Contact-specific values from that reference, reuse current shared components and tokens, and make this a targeted addition without regressing other pages.
