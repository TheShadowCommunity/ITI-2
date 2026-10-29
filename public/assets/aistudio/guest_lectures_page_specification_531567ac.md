# Guest Lectures Page — Design, Responsive & Technical Specification

**Purpose:** Implement a new page at `/guest-lectures` in the existing New Lucknow City Private ITI website. This document is the implementation source of truth together with the user-provided screenshot/reference of the Figma Guest Lectures frame.

## 1. Required workflow before coding

1. Read this document from top to bottom and inspect the supplied Guest Lectures screenshot/reference before making changes.
2. Inspect the current repository first: framework, routing convention, global stylesheet/design tokens, navbar/footer components, image/assets folders, aliases, and build scripts.
3. Reuse existing layout, navigation, footer, typography, colors, and shared UI components. Do not recreate the site shell or introduce a new framework.
4. Add a new route `/guest-lectures` using the existing routing conventions. Ensure internal links to the page use the site's normal link/navigation approach.
5. Treat the screenshot as the visual target for the desktop composition. Since there is no mobile Figma frame, derive a deliberate responsive layout from the rules below; do not shrink the entire desktop frame proportionally.
6. Implement the page and data-driven lecture rendering, then test the route at mobile, tablet, laptop, desktop, and wide-monitor widths.

## 2. Desktop Figma measurements and structure

The selected Figma frame is **Guest Lectures**, node `155:1677`, with a desktop canvas size of **1520 × 3376 px**. Its structure is:

| Section | Figma size / position | Implementation guidance |
|---|---:|---|
| Navbar | 1520 × 132 px at y=0 | Reuse the existing shared navbar; do not duplicate its code or invent a new one. It consists of a 46 px top-nav row and an 86 px main menu row in this design. |
| Page-title band / Hero | 1520 × 200 px at y=132 | Pale/neutral title area. Inner header at x=64, y=65 relative to band, 1392 × 70 px. |
| Title | 434 × 70 px measured layer | Text: “Guest Lectures”; Montserrat SemiBold, 56 px, line-height 70 px, color `#1F2A3C`. Keep title and thin active-indicator/rule on the same baseline row on desktop. |
| Main lectures section | 1520 × 2640 px at y=332 | Main container x=64, width=1392 px. The content grid begins 100 px below its container top and is 2440 px tall. |
| Lecture grid | 1392 × 2440 px | Two columns. Each entry is 678 × 550 px. Column gap is 36 px (left entry x=0, right entry x=714). Rows are placed at y=0, 630, 1260, 1890; therefore vertical row pitch is 630 px and vertical separation is 80 px. There are four rows × two columns in the desktop design. |
| Footer | 1520 × 404 px at y=2972 | Reuse existing shared footer. Desktop footer container is 1392 px wide with 64 px outer gutters. The footer's main content starts 88 px from its top; footer baseline/copyright area starts at y=318 relative to its frame. |
| Total frame | 1520 × 3376 px | Treat as reference composition only. Actual page height must be content-driven and adapt to text and screen size. |

### 2.1 Desktop lecture-entry composition

Each lecture entry uses a horizontal two-part composition:

- **Outer entry:** 678 px wide × 550 px tall in the reference, with 20 px internal gap between visual and information columns.
- **Visual/media panel:** 270 × 550 px, non-shrinking in the desktop reference, 16 px corner radius. Use the actual matching local event/lecture asset from the repository if available. If the project does not yet contain the intended image, use the existing agreed local placeholder asset rather than a remote/random image. Crop via `object-fit: cover`; preserve image proportion and focal point. The design overlays a bottom dark gradient from transparent at the top to black at roughly 80% opacity near the bottom (around 94% of the panel height), to help any overlaid content remain legible. Do not introduce additional text over the image unless it is visible in the reference.
- **Information panel:** approximately 388 px wide; flexible remainder of the 678 px entry. Content starts at its top edge.
- **Lecture meta/duration:** Montserrat Regular, 14 px, 22 px line-height, letter spacing about 0.21 px, color `#708E91`. Example reference text: `Duration of 2 : 50 Hrs`. Content must come from data, not be hardcoded into markup.
- **Lecture title:** Montserrat SemiBold, 32 px, 40 px line-height, color `#151D1E`. Reference example: `Positive Thinking & Personality Development`. Text can wrap to multiple lines; never force a fixed title height or clip overflow.
- **Speaker row:** 12 px gap between a circular profile/icon area and text. Profile icon/container is 38 × 38 px, circular, neutral background `#DDE1E7`, 1 px border `#AEB8C6`, with approximately 12 px padding. Speaker name uses Montserrat Medium, 16 px, 22 px line-height, letter spacing about 0.2 px, color `#5B6B80`. Designation uses Montserrat Regular, 12 px, 22 px line-height and about 0.21 px letter spacing, color `#5B6B80`. Speaker copy must wrap naturally.
- **Small active indicator:** a 120 px wide rule/indicator below the header section, with about 12 px vertical gap after speaker information. Match its color/appearance to the supplied screenshot and the existing Figma asset/token; reuse an existing local asset if the same indicator is available.
- **Topic/lecture points:** A vertical list of rows. Each row has a 20 × 20 px double-arrow icon inside a 24 px icon column, and 12 px gap to the text. Text is Montserrat Regular, 16 px with 22 px line-height, letter spacing around 0.1 px, color `#5B6B80`. Rows use about 8 px vertical padding and 20 px right padding. The text is data-driven and may wrap; row height must grow with its content.
- **Reference point spacing:** there are five visible point rows per lecture in the supplied design. The point examples visible in the reference include: “How to identify negetive thinking and common negetive thoughts and patterns.”, “The link between thinking and actions.”, “Understanding the impact of negative thinking has on ones performance.”, “Visualization techniques to transform business situations.”, and “The role of language we use.” Preserve source copy when using the reference data; do not silently rewrite content while implementing the layout.

### 2.2 Actual visible examples in the frame

The first visible lecture title is **Positive Thinking & Personality Development**; duration is **Duration of 2 : 50 Hrs**; speaker is **Mr Surya**, designation **Motivational Speaker**. The following visible lecture title is **Develope Employbility Skill**, with the same visible speaker details. Other instances in the frame repeat similar text. These are only design sample content; content for production should be editable through the JSON file described below. Preserve text exactly in seed data unless the owner supplies corrected wording.

### 2.3 Hidden Figma alternatives

Figma contains several layers expressly marked hidden, including alternate header/title/content variants and unused media placeholders/buttons. **Do not render layers/text marked hidden**. Use only the visible composition from the screenshot and visible child nodes. Do not add a “Cultural Event” label, an “Abhivyakti” alternative title, dummy paragraphs, or the hidden button/media layouts if these are not visible in the screenshot.

## 3. Existing design system to reuse

Font family in the design is **Montserrat**. Use the local font assets or existing CSS font-face definitions in the repository if present. Do not fetch Google Fonts at runtime if local assets already exist. If the current site uses a shared font token, extend/reuse it rather than adding a page-specific font import.

### 3.1 Colors surfaced by Figma

| Token | Value | Suggested use |
|---|---|---|
| `Navy/900` | `#1F2A3C` | Page title, deep navy headings and brand copy |
| `Navy/800` | `#2E3B4E` | Secondary navy / shared navigation and footer labels where already used |
| `Navy/500` | `#5B6B80` | Speaker details and lecture point copy |
| `Navy/200` | `#AEB8C6` | Profile icon outline and light borders |
| `Yellow/500` | `#F2B418` | Existing brand highlight/accent; use where the existing component/design calls for it |
| `Yellow/600` | `#D99A00` | Active/link accent if consistent with shared site components |
| `Yellow/700` | `#8A6100` | Deeper accent state where applicable |
| `Neutral/0` | `#FFFFFF` | Main page/card background |
| `Neutral/50` | `#F4F5F7` | Light section backgrounds |
| `Neutral/200` | `#DDE1E7` | Soft borders / speaker icon background |
| `Neutrals/N400` | `#708E91` | Duration/meta text |
| `Neutrals/N950` | `#151D1E` | Main lecture title |
| `Sage/S400` | `#AAB48C` | Use only if present in the shared decoration/background and consistent with screenshot |

### 3.2 Typography tokens surfaced by Figma

| Role | Font / size | Line-height | Weight | Letter spacing | Color |
|---|---|---:|---:|---:|---|
| Page heading / English Heading Large | Montserrat SemiBold 56 px | 70 px | 600 | 0 | `#1F2A3C` |
| Lecture heading / English Heading Medium | Montserrat SemiBold 32 px | 40 px | 600 | 0 | `#151D1E` |
| Speaker name | Montserrat Medium 16 px | 22 px | 500 | ~0.2 px | `#5B6B80` |
| Lecture point / Paragraph Medium Regular | Montserrat Regular 16 px | 22 px | 400 | ~0.1 px | `#5B6B80` |
| Duration / Label Large / Paragraph Small | Montserrat Regular 14 px | 22 px | 400 | ~0.21 px | `#708E91` |
| Speaker role / Label Medium | Montserrat Regular 12 px | 18–22 px in child styles | 400 | ~0.21 px | `#5B6B80` |
| Footer body / Paragraph Small | Montserrat Regular 14 px | 22 px | 400 | ~0.21 px | Existing footer token/colors |
| Footer heading | Montserrat Medium 18 px | 28 px | 500 | ~0.2 px | `#2E3B4E` |
| Footer logo text | Montserrat Medium 24 px | 35 px | 500 | 0 | `#1F2A3C` |
| Footer copyright | Montserrat Regular 12 px | 18 px | 400 | ~0.21 px | `#5B6B80` |

Use the exact desktop design values where space allows. On narrow displays, adjust the scale through responsive tokens while retaining the hierarchy and proportions described below.

## 4. Responsive behavior (no mobile mockup exists)

Build a fluid layout that looks intentionally designed from **320 px mobile width to ultrawide desktop screens**. The responsive rules below are requirements, not optional suggestions. The design should not be enlarged or reduced as one flat screenshot.

### 4.1 Global fluidity and container rules

- Use a centered content container: `width: min(100% - 2 * page-gutter, 1392px)` (or the project's equivalent). Do not retain fixed 1520 px widths in CSS.
- Suggested page gutters: 16 px for widths below 480 px; 20–24 px for small/tablet widths 480–767 px; 32 px for 768–1023 px; 40 px for 1024–1279 px; 48 px for 1280–1439 px; 64 px for ≥1440 px. Adjust only if existing site-wide spacing tokens dictate a better consistent scale.
- Main page, header band, card list, and footer must all share the same responsive container/gutter system so they align at each breakpoint.
- Set `box-sizing: border-box` globally if not already applied. Prevent accidental viewport overflow. Images and media use `max-width: 100%`, `height: auto` or a clearly defined aspect ratio, and appropriate `object-fit`.
- Prefer CSS Grid/Flexbox and content-based heights. Do not use desktop absolute x/y positions for page layout. Do not give all lecture cards one fixed height on mobile; allow content to determine height. A desktop min-height may be used only when it helps match the reference, and should relax at smaller breakpoints.
- Use fluid `clamp()` values for responsive sizes and spacing when supported by the project's existing style conventions. Clamp the value so type and spacing remain within deliberate minimum and maximum bounds; don't use unbounded `vw` sizing.
- On wide monitors, cap the content at 1392 px and center it. Do not stretch text lines or cards indefinitely. On small monitors, reduce gutters, gaps and typography proportionally while keeping adequate readability/tap targets.

### 4.2 Breakpoint layout

**Wide desktop (≥1440 px):** Match Figma as closely as possible: 1392 px content max width, 64 px page gutters on the 1520 reference, two-column lecture grid, each entry approximately 678 px wide, 36 px column gap, and 80 px row gap. Keep the image side 270 px wide at 1520 viewport and the info panel flexible. The entire card can use 550 px as a target/min-height, but content expansion must never overlap or clip.

**Desktop/laptop (1024–1439 px):** Keep two columns when both cards remain comfortable to read. Container width becomes fluid. Reduce side gutters and column/row gaps progressively (e.g. column gap 24–32 px; row gap 48–64 px). Let media width shrink smoothly, such as `clamp(180px, 20vw, 270px)` or use a two-column card inner grid with a safe minimum; don't allow the media to crush the info column. The lecture-entry height is content-driven.

**Tablet (768–1023 px):** Use a single column of lecture entries unless testing shows two full, readable entries fit without crowding. Each entry spans the container; retain media + info as a two-part layout only if each region has usable width. Otherwise, position media above information with an intentional image aspect ratio. Use a moderate heading scale and gaps.

**Mobile (<768 px):** One lecture entry per row. Recommended order: wide image/media block first, then duration, lecture title, speaker row, active accent line, then the topic list. On compact phones, image should be a responsive landscape panel (suggested `aspect-ratio: 16 / 9`, with a practical max-height around 240 px); do not render a 270 × 550 px fixed media panel on mobile. Use 16–20 px page gutters, 20–24 px card padding if a card surface exists, 12–16 px vertical gaps, and body text around 14–16 px with 20–22 px line-height. Set lecture heading roughly `clamp(22px, 5.5vw, 28px)` with line-height around 1.2–1.3; speaker name about 15–16 px, designation and metadata 12–14 px. Reduce header title to roughly `clamp(30px, 7vw, 40px)` with line-height 1.15–1.25. The title underline/rule should adapt to available space and may move below the title if a side-by-side arrangement gets cramped. All text must wrap; no horizontal scrolling.

**Very narrow phones (320–359 px):** Use one column and the smallest allowed gutters; reduce decorative gaps, not text legibility. Ensure speaker row can wrap if needed. Icon columns should remain compact at 20–24 px. Avoid min-width values that force overflow.

### 4.3 Consistency rules across screen sizes

- The same spacing scale must govern header, cards, point rows and footer. Values change by breakpoint in an orderly way, not arbitrarily per element.
- Text hierarchy remains consistent: page title > lecture title > speaker name/topic copy > meta/designation.
- Card/media corner radius remains consistent (desktop 16 px; responsive radius can reduce only slightly on compact mobile if justified).
- Every lecture uses the same reusable component; there must not be individual hardcoded layouts for individual lectures.
- Any text length must be supported: long titles, longer speaker names, longer durations, and topic points can wrap and make the card taller without clipping or overlapping neighboring cards.
- Footer and navbar are shared website elements. Let them use their existing mobile behavior rather than forcing the desktop footer/nav into a narrow viewport.
- Test viewport widths 320, 360, 390, 430, 768, 1024, 1280, 1440, 1520, 1920 and at least one ultrawide width. Confirm no horizontal overflow, clipped text, collisions, microscopic content or unnecessarily huge empty spaces.

## 5. Data-driven implementation: JSON source of lecture content

**Do not hand-code each lecture separately.** Implement one reusable `GuestLectureCard` (or equivalent) component and render the entries by mapping over an array loaded from a JSON file.

- Create a JSON file in a sensible existing data/content folder, for example `src/data/guest-lectures.json` or the repository's established equivalent. Prefer static JSON imported at build time; do not introduce a backend, CMS, fetch layer or extra dependency just for this page.
- Suggested schema:

```json
[
  {
    "id": "positive-thinking-personality-development",
    "title": "Positive Thinking & Personality Development",
    "duration": "Duration of 2 : 50 Hrs",
    "speaker": {
      "name": "Mr Surya",
      "designation": "Motivational Speaker",
      "avatar": "/assets/guest-lectures/speaker-placeholder.png"
    },
    "image": "/assets/guest-lectures/lecture-placeholder.jpg",
    "imageAlt": "Guest lecture on positive thinking and personality development",
    "topics": [
      "How to identify negetive thinking and common negetive thoughts and patterns.",
      "The link between thinking and actions.",
      "Understanding the impact of negative thinking has on ones performance.",
      "Visualization techniques to transform business situations.",
      "The role of language we use."
    ]
  }
]
```

- The schema is an example of the minimum editable fields. Add fields only if they're needed by the visual reference or existing application conventions; avoid overengineering.
- Keep the data source and rendering component separate. Each lecture is an object, each topic is an array item. Render topic rows by mapping over `topics`; do not duplicate the row markup manually.
- Use stable IDs/keys, not array index, wherever the framework expects a key.
- If the project already has a local generic image placeholder, point `image` and missing `avatar` values to that local file. Do not invent remote asset URLs. If an image/avatar is absent, handle it gracefully with the project's placeholder or an accessible initials/icon fallback.
- Keep content escaped safely by the framework. Treat JSON values as text, not HTML. Do not use unsafe `innerHTML` rendering.
- If there are no lecture objects, render a simple consistent empty state (or leave content blank only if that matches existing app conventions); don't fail the page.
- New lecture addition should normally require adding one object to the JSON file and placing its local image asset, not editing the component/markup.

## 6. Route, integration and technical constraints

1. Add a new page route exactly at `/guest-lectures`, using the current project's router/filesystem routing conventions. Confirm trailing-slash behavior aligns with other site routes.
2. Reuse the existing shared navbar and footer components. If navigation data drives the menu, add/verify the Guest Lectures link using the existing pattern; do not rebuild global navigation.
3. Use the project's installed framework and CSS system. Inspect `package.json` and existing source structure before coding. Do not assume React, Next.js, Astro, Tailwind, or any other stack just from a Figma code sample. Convert the implementation to the actual stack.
4. Reuse existing design tokens and responsive utilities. If the repository already has CSS custom properties/Tailwind theme values for colors, spacing or fonts, use them. Do not introduce a second token system or duplicate global CSS.
5. No unnecessary dependencies. Do not add a UI library, animation package, new routing library, icon dependency or image package to build this page.
6. Localize static images, icons and any used SVGs into the project assets directory; **never use temporary Figma asset URLs as runtime image sources**. Prefer matching local assets already used by the website. Preserve icon/image aspect ratios and use lazy loading for non-critical imagery below the fold.
7. Accessibility: semantic `main`, heading hierarchy (`h1` page title, `h2` lecture titles), useful image alt text, empty alt for decorative images, sufficient color contrast, and visible keyboard focus for any interactive controls. Don't wrap non-interactive content in fake buttons.
8. SEO: page-specific title and description should follow the existing metadata pattern; use a canonical/route convention only if the project already uses one. Do not invent organization information.
9. Performance: avoid client-side JavaScript for static rendering unless required by current architecture; static JSON should be bundled efficiently. Do not add animation that causes layout shift. Give images dimensions/aspect ratios to reduce cumulative layout shift.
10. Keep the existing project build/deploy flow intact; ensure Netlify build conventions and static route behavior remain compatible.
11. Do not modify unrelated pages, shared CSS, forms, Sanity/Resend integrations or existing global components except for the minimum needed for route navigation. Avoid regressions in the homepage.

## 7. Suggested reusable component structure

Follow the actual repo conventions, but target this separation of responsibility:

- `GuestLecturesPage`: renders the shared site shell, the page-title band, the content container and a mapped list/grid.
- `GuestLectureCard`: receives one lecture object and renders media, meta, title, speaker, accent indicator and mapped topic rows.
- `guest-lectures.json`: owns lecture text/content.
- `GuestLectureTopic`: optional tiny helper if consistent with the project's component architecture; otherwise keep as a simple mapped row within the card.

Use semantic and content-driven layout. Do not force heights based on the sample frame after text reflows. Desktop targets should be close to the given dimensions; smaller breakpoints must be adapted with media queries or the project's responsive system.

## 8. Acceptance checklist — finish only after checking

- [ ] `/guest-lectures` loads directly when entered in the address bar and works on Netlify/static hosting using existing route conventions.
- [ ] Shared navbar/footer appear once and visually align with the rest of the website.
- [ ] Desktop visual matches the provided reference: title band, Montserrat typography, neutral/navy/sage/yellow palette, media-left/detail-right card, topic rows, spacing and footer.
- [ ] All lecture cards are rendered from the JSON array. Adding a new JSON object produces another card without component changes.
- [ ] Topic list is also data-mapped; no manually duplicated topic markup.
- [ ] Mobile composition is intentionally responsive, one column, readable, touch-friendly and not a proportionally shrunken desktop layout.
- [ ] Cards grow to fit long text; content and images never overlap or clip.
- [ ] No horizontal overflow at widths 320–1920+ px.
- [ ] All image sources are local or already approved project assets, never temporary Figma URLs.
- [ ] Existing framework, design tokens, package dependencies and build configuration are preserved unless a necessary change is explained.
- [ ] Run the project's existing lint/build/typecheck commands as available and fix any new errors.
- [ ] Test at least the homepage and new page after changes to catch global CSS/nav regressions.

## 9. Implementation instruction

Use this specification and the screenshot/reference image supplied by the user as the two primary design resources. Inspect both before coding. If a detail is not visible or measurable in Figma, do not claim an exact pixel value: use the responsive rules and shared design system in this document. Implement only this new page and necessary navigation wiring, then report the changed files, route, JSON file location and validation results.
