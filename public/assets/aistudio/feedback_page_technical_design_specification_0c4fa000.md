# Feedback Page — Technical and Design Specification

## 1. Purpose and scope

Implement a dedicated Feedback page for the existing New Lucknow City Private ITI website.

Figma design reference:
https://www.figma.com/design/CyE9VdnOdmvx5U8BBBjFsX/ITI-2?node-id=128-9787&t=9v6oq48GPr3zOtZr-4

The page consists of:
1. The existing site navigation and footer.
2. A feedback form based on the form already used on the homepage.
3. A separate feedback-card carousel with interaction and animation behavior that differs from the homepage carousel.

The provided design image should be treated as the primary visual reference for the Feedback page's structure, color, typography, spacing, proportions, alignment, card appearance, and responsive composition.

The existing project uses Astro and Tailwind CSS. Inspect the repository and its conventions before implementing. Do not add another framework or unnecessary dependencies.

## 2. Critical scope boundary: do not change the homepage carousel

The Feedback page must have a **new, independent carousel component**. Do not modify the implementation, CSS, state, configuration, markup, data handling, or behavior of the carousel currently used on the homepage.

Required safeguards:
- Inspect how the homepage carousel is currently built and identify the files it depends on.
- Create a new Feedback-specific component with its own styling, state, navigation logic, and responsive behavior.
- Do not change the homepage carousel to make it reusable for the Feedback page.
- Do not replace the homepage carousel with the new component.
- Do not rename, refactor, move, or alter existing homepage-carousel files unless absolutely unavoidable; prefer no changes to them.
- Avoid global CSS selectors that could affect the homepage carousel. Use component-scoped styles, uniquely named classes, or page-specific wrappers.
- Do not change homepage carousel data or assets.
- Verify the homepage carousel before and after the task, confirming its behavior and appearance remain unchanged.

A shared low-level utility may only be used if it is already independent of carousel presentation and behavior; do not introduce coupling between the two carousels.

## 3. Form requirements

### Reuse the homepage form

The Feedback page form should use the same form design and behavior as the form on the homepage. Inspect the existing homepage form implementation and reuse the established component and validation/submission logic where it is appropriate.

The form should retain the same:
- Field styling and dimensions.
- Typography, labels, placeholders, borders, colors, and spacing.
- Input types and existing validation behavior.
- Error, success, disabled, and submission states.
- Responsive layout and keyboard accessibility.
- Existing submission behavior and integration, without inventing a new backend.

### Feedback selected by default

The only explicitly requested variation is that the form's feedback option must be **selected by default on the Feedback page**.

Implement the default selection locally for this page, using the existing form's supported field or initial-state mechanism. Do not accidentally change the default selection on the homepage.

The selected value must be correct on initial render, visually reflect the active option, and remain compatible with the form's existing interaction and submission behavior.

Do not assume that a default selection should prevent the visitor from changing the option unless the existing design or implementation clearly requires it.

## 4. Feedback carousel — required interaction

Create a distinct carousel for the Feedback page that follows the supplied design and has its own state and styling.

### Visual arrangement

- Match the placement, size, card appearance, white content area on the left, controls, colors, typography, radii, and surrounding whitespace shown in the supplied design.
- The carousel cards should visually appear to move **into the white section on the left when the navigation arrows are pressed**.
- Create a convincing slide transition: cards move horizontally through a clipped carousel viewport, entering or disappearing behind the white section/viewport boundary as intended by the design.
- Keep the design's hierarchy and layer relationships. Do not simulate movement by changing the page layout or swapping content instantly if the reference implies continuous horizontal movement.
- Use the feedback/testimonial text and card content already available in the project if applicable. Do not invent claims, identities, or attributed testimonials. If actual content is missing, use clearly identifiable temporary placeholder content and report it.

### Keep the left white section completely stable

This behavior is critical.

When the carousel arrows are used, the white section on the left must not flicker or change size. Specifically:
- Its width, height, position, padding, and surrounding layout must remain constant.
- Its text must not change height or reflow because of carousel navigation.
- Arrow interaction must not cause any layout shift, flash of unstyled content, or visible jump.
- The page/container must not briefly expand or contract when the active card changes.
- Changing cards must not cause the white content area's dimensions to be calculated from the current card's content.
- Any animation must be confined to the carousel track/cards or designated clipping viewport, not the left white section.
- The same stability must hold when adjacent cards have different text lengths or image dimensions.

Implementation guidance:
- Keep the left white section and carousel track as structurally independent layout siblings where possible.
- Give the white section an intrinsic or deliberately constrained stable width and layout sizing; avoid tying its dimensions to the active card.
- Keep card movement inside a fixed-size, `overflow: hidden` viewport.
- Give the track a stable layout model so the track translates while the viewport remains still.
- Avoid transitions on dimensions, margins, padding, or font properties of the white section.
- Avoid conditionally removing and reinserting the white section on arrow clicks.
- Avoid measuring active-card text and then changing the white section size.
- Reserve the intended media/card geometry so image loading does not alter layout.
- Use a transform-based horizontal transition (`translateX` or an equivalent implementation) where appropriate. Do not move the entire page section.
- Ensure the animation does not expose content outside the intended viewport.

The implementation should feel like cards are moving into/behind the left white section, not like the entire composition is shifting.

### Arrow controls

- Both navigation arrows must work consistently.
- Each click moves to the intended next or previous card/slide according to the design.
- Avoid duplicate or skipped slides caused by repeated rapid clicks.
- Make the active position/state deterministic.
- Do not cause page navigation or form submission when carousel arrows are clicked.
- Use semantic buttons with accessible names.
- Provide visible focus styles and adequate hit targets.
- If the design or available items require disabling controls at an endpoint, implement that behavior consistently. If the design implies continuous looping, implement looping without visual jumps.

### Animation

- Use a smooth, purposeful transition that matches the direction and feel of the reference.
- Prefer transform-based movement for animation performance.
- Keep the white section's dimensions and text stable throughout the transition.
- Avoid heavy effects, excessive easing, or animation that delays interaction.
- Respect `prefers-reduced-motion`; provide a reduced-motion experience without losing carousel usability.

## 5. Responsive requirements

The page and the new carousel must work across mobile, tablet, laptop, desktop, and ultrawide screens.

Use the attached design image as the main visual reference. Inspect the existing project breakpoints and layout conventions before defining new breakpoints. Do not assume the desktop composition will fit on every narrower display unchanged.

### Large desktop: 1440px–2560px

- Reproduce the reference proportions, whitespace, typography, form, carousel, and visual hierarchy.
- Keep content centered within a sensible maximum-width container.
- Keep the left white section stable and visually separate from the moving carousel cards.
- Prevent the cards or track from affecting the surrounding layout as they move.
- Avoid excessive stretching on ultrawide monitors.

### Laptop and standard desktop: 1024px–1439px

- Preserve the design while making container widths, gaps, and card dimensions responsive.
- Avoid clipping card content or forcing the white section to become too narrow.
- Pay special attention to approximately **1265 × 551 CSS pixels at 100% browser zoom**. The page must remain balanced at this viewport without depending on browser zoom being reduced.

### Tablet: 768px–1023px

- Adjust the relationship between the form, white section, and carousel based on available width.
- Reduce padding and gaps intentionally.
- Keep navigation controls visible and operable.
- Preserve stable card geometry and prevent the horizontal track from causing page-level overflow.
- If the desktop side-by-side layout no longer fits, recompose it at a clear breakpoint rather than allowing sections to squeeze unpredictably.

### Mobile: 375px–767px

- Use a mobile-appropriate layout guided by the supplied design and existing website conventions.
- Stack or recompose form and carousel regions as necessary.
- Keep form fields readable and comfortable to interact with.
- Keep carousel cards within the viewport and retain usable arrow controls.
- Prevent track movement from producing horizontal page scrolling.
- Ensure the white section has stable dimensions during navigation and that its text does not flicker.
- Do not shrink text excessively to force a desktop layout into mobile.
- Preserve consistent side gutters and spacing.

### Responsive verification targets

Test at:
- 375px, 390px, and 430px.
- 768px and 1024px.
- 1152px, 1265px, and 1366px.
- 1440px, 1920px, and 2560px.

Treat these as test widths, not as a requirement for a separate media query at every width. Use fluid widths, sensible maximum widths, appropriate breakpoints, and flexible layout primitives.

## 6. Design consistency

Reuse the site's existing design language:
- Navbar and footer.
- Typefaces, text weights, and typography scale.
- Brand colors and backgrounds.
- Content container widths and horizontal gutters.
- Form fields and button styles.
- Borders, radii, and spacing conventions.

The established brand palette includes:
- Navy `#1F2A3C`
- Dark navy `#2E3B4E`
- Yellow accent `#F2B418`
- White `#FFFFFF`
- Light neutral `#F4F5F7`
- Dark text `#14171C`

Use existing project tokens where available and follow the supplied design where it differs. The website uses Hind and Montserrat; inspect existing font declarations and use appropriate styles.

Do not change global styles to solve a Feedback-page-specific issue. Scope carousel styles so they cannot leak into the homepage carousel.

## 7. Accessibility and implementation quality

- Use semantic form elements and preserve existing validation and submission behavior.
- Use semantic buttons for arrows; ensure they do not submit the form.
- Provide accessible names for the carousel navigation controls.
- Ensure keyboard operation and visible focus states.
- Maintain adequate contrast.
- Support `prefers-reduced-motion`.
- Prevent layout shift as card images/content load.
- Avoid horizontal page overflow at any supported screen width.
- Use the existing Astro and Tailwind CSS stack and established project conventions.
- Do not add unnecessary dependencies.

## 8. Test plan

Before finishing, verify:

### Form
- Feedback is selected on initial render on the Feedback page.
- The homepage form's default selection has not changed.
- Existing field validation, submission, and status states still work.
- The form remains usable on mobile and tablet widths.

### Carousel
- It is a separate component from the homepage carousel.
- Both arrows move cards in the correct direction.
- Cards visibly move into/behind the left white section as intended.
- The left white section's text, height, width, and position do not flicker or shift.
- Different card content lengths do not change the left section's geometry.
- Rapid repeated clicks do not break the active index or transition.
- No unintended page-level horizontal scrolling occurs.
- Focus, keyboard use, and reduced-motion behavior are supported.

### Existing site
- The homepage carousel's code, styles, data, and behavior have not changed.
- The homepage and other completed pages still build and render correctly.
- The project's build command succeeds.

## 9. Scope boundaries

In scope:
- The Feedback page.
- A new independent Feedback carousel component.
- Minimal local styles and supporting code required by the new page.
- Page-specific initialization that selects Feedback by default in the form.

Out of scope:
- Altering or refactoring the homepage carousel.
- Changing the homepage form's default selection.
- Changing unrelated pages or the global design system.
- Introducing new backend or CMS functionality not required by the existing form.

## 10. Completion report

Report:
1. Files created and modified.
2. How the form defaults to Feedback without changing the homepage.
3. How the new carousel differs structurally from the homepage carousel.
4. How the track moves while the white section remains dimensionally stable.
5. Responsive behavior and breakpoints.
6. Viewports, interaction cases, and build checks tested.
7. Confirmation that the homepage carousel was left unchanged.
8. Any content or visual details requiring follow-up.

## Acceptance criteria

The page is complete only when:
- It matches the supplied design at desktop and responsive widths.
- The Feedback option is selected by default only on the Feedback page.
- The new carousel works independently of the homepage carousel.
- Cards animate into/behind the left white section when arrows are pressed.
- The white section's text and dimensions remain stable without flicker or layout shift.
- The form and carousel remain usable across mobile, tablet, desktop, and ultrawide screens.
- The homepage carousel remains unchanged.
