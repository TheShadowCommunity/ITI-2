# New Lucknow City Private ITI — Mobile Design Specification

**Figma source:** `ITI-2` → `Mobile` frame `10:781`  
**Reference viewport:** 430 × 9160.333 px  
**Purpose:** Help Google AI Studio correct the mobile version of the current website. Do not rebuild the project unnecessarily.

## Instructions for Google AI Studio

- Inspect the current code first and preserve framework, routes, working components, content, forms, links, and integrations.
- Treat measurements as Figma CSS pixels at 430 px viewport. Child coordinates are relative to their parent frame.
- This is a dedicated mobile reflow, not a scaled desktop layout. Do not retain desktop navigation, side-by-side columns, or desktop masonry where the mobile frame uses a different composition.
- Use flex/grid/stacked flow for normal content, not absolute positioning.
- Hidden layers are inactive alternatives and must not render.
- When exact child properties are not listed, inspect the corresponding child in Figma rather than guessing.
- Some sample testimonial/course text appears duplicated or placeholder-like. Preserve correct live-site copy where it is clearly more accurate; do not invent new copy.

## Frame and section geometry

Root frame: **430 × 9160.333 px**. Common outer gutter **16 px**, common inner width **398 px**.

| Section | Figma node | X | Y | Width | Height |
|---|---|---:|---:|---:|---:|
| Navigation | `10:782` | 0 | 0 | 430 | 65 |
| Hero | `66:745` | 0 | 65 | 430 | 807 |
| Introduction | `67:768` | 0 | 872 | 430 | 1118 |
| Our Courses | `10:838` | 0 | 1990 | 430 | 1574 |
| Testimonials | `67:1115` | 0 | 3564 | 430 | 753 |
| Logo Banner | `10:898` | 0 | 4317 | 430 | 719 |
| Notice | `67:992` | 0 | 5036 | 430 | 788 |
| Enquiry Form | `69:788` | 0 | 5824 | 430 | 830 |
| Contact details header | `69:989` | 0 | 6654 | 430 | 517 |
| Contact / map | `10:928` | 0 | 7171 | 430 | 401 |
| Gallery | `10:917` | 0 | 7572 | 430 | 828 |
| Footer | `10:974` | 0 | 8400 | 430 | 760.333 |

## Design tokens

### Colors from Figma variables

| Token | Hex | Use |
|---|---|---|
| `Navy/900` | `#1F2A3C` | Dark backgrounds and primary headings |
| `Navy/800` | `#2E3B4E` | Dark secondary text |
| `Navy/500` | `#5B6B80` | Body/secondary text |
| `Navy/200` | `#AEB8C6` | Muted text |
| `Yellow/500` | `#F2B418` | Primary CTA / highlight |
| `Yellow/600` | `#D99A00` | Deeper yellow accent |
| `Yellow/700` | `#8A6100` | Dark yellow text accent |
| `Neutral/0` | `#FFFFFF` | White surfaces |
| `Neutral/50` | `#F4F5F7` | Light neutral background |
| `Neutral/200` | `#DDE1E7` | Light text on dark background |
| `Neutral/950` | `#14171C` | Dark text / CTA label |
| `Sage/S400` | `#AAB48C` | Muted green accent where shown |

Centralize these in CSS variables / Tailwind theme tokens. Figma also lists `Neutrals/N0 = #FFFFFF` as an equivalent white alias.

### Typography

| Role | Family / weight | Size | Line-height | Letter spacing |
|---|---|---:|---:|---:|
| Hero large Hindi lines | Hind SemiBold 600 | 56 px | 70 px | 0 |
| Hero small Hindi lines | Hind SemiBold 600 | 30 px | 38 px | 0 |
| English medium title | Montserrat Medium 500 | 24 px | 35 px | 0 |
| English small title | Montserrat Medium 500 | 18 px | 25 px | 0 |
| English body regular | Montserrat Regular 400 | 16 px | 24 px | 0.2 px |
| English small body / label | Montserrat Regular 400 | 12–14 px | 18–22 px | ~0.21 px |
| Hindi body medium | Hind Regular 400 | 16 px | 28 px | 0.6 px |
| Hindi body large | Hind Regular 400 | 18 px | 30 px | 0.5 px |
| Hindi medium title | Hind Medium 500 | 24 px | 35 px | 0 |

The Introduction title uses Montserrat SemiBold **36/45 px**. Check local font coverage: a Latin-only subset will not render Devanagari. Use local font weights where available.

### Spacing and common components

- Outer gutter **16 px**; inner width **398 px**.
- Spacing tokens in the Figma variables: `4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 88, 100 px`.
- Main CTA uses fill `#F2B418`, label `#14171C`, **4 px radius**, horizontal padding **32 px**, vertical padding **12 px**, internal gap **8 px**. Mobile hero button is **166 × 46 px**.
- Image/card radius **16 px** where shown.

## Section specifications

### 1. Navigation — `10:782`

Outer frame **430 × 65 px**.
- Inner container `10:783`: **398 × 74 px**, at `(16,-4.5)`; it slightly overflows vertically in Figma. Preserve the visual alignment rather than increasing header height.
- Left side `10:784`: **79 × 42 px**, at `(0,16)` within container.
- Logo frame `10:785`: **79 × 42 px**; logo image `10:787`: **77 × 40 px**, at `(1,1)`.
- `Invia Creations` text layer is hidden; do not display it.
- Right action region `10:788`: **30 × 30 px**, at `(368,22)`.
- Button alternatives `10:789` and `10:790` are hidden. Visible menu frame `10:793` is **30 × 30 px**. Keep a 30 px menu hit area and use the existing menu icon/behavior.
- No desktop top-links strip or full desktop navigation on mobile.

### 2. Hero — `66:745`

Outer **430 × 807 px**, page Y `65`. Container same size.
- Left/text section: **430 × 462 px**.
- Right/image section: **430 × 345 px**, begins Y `462` inside hero. Stack image below text; do not keep the desktop horizontal split.
- Headline group `66:749`: **394 × 216 px**, at `(16,80)` inside left section:
  - `भविष्य को`: **114 × 38 px**
  - `आकार दे,`: **197 × 70 px**
  - `व्यावसायिक शिक्षा,`: **394 × 70 px**
  - `के साथ l`: **95 × 38 px**
  - Line starts: Y `0,38,108,178`. Preserve these line breaks.
  - Small lines: Hind SemiBold **30/38 px**; large lines: Hind SemiBold **56/70 px**. Preserve color alternation with `Navy/500 #5B6B80`, `Navy/900 #1F2A3C`, and `Yellow/700 #8A6100`.
- CTA `67:763`: **166 × 46 px**, at `(16,336)` inside left section; label `Go To Enquiry`.
- `WELCOME TO I.T.I` text layers are hidden.
- Right section `66:757`: **430 × 345 px**. Preserve the intended image crop and dark overlay treatment; do not stretch it.

### 3. Introduction — `67:768`

Outer **430 × 1118 px**. Container `67:769`: **398 × 1118 px**, X `16`. Content begins Y `80`.
- Header/content `67:770`: **398 × 174 px**; header `67:771`: **398 × 174 px**.
- Eyebrow `About Our College`: **398 × 18 px**.
- Title `New Lucknow City Private ITI`: **398 × 90 px**, at Y `26`; Montserrat SemiBold **36/45 px**, two lines.
- Tags group `67:775`: **398 × 46 px**, starts Y `128`.
  - `2019 में स्थापित`: **103 × 20 px**; icon **20 × 20 px**; text X `28`, **75 × 18 px**.
  - `भारत सरकार NCVT द्वारा मान्यता प्राप्त`: **206 × 18 px** at Y `28`; icon **19 × 18 px**; text X `27`, width **179 px**.
- Image slot `67:792`: **398 × 392 px**, at Y `294`, full inner width. Use the intended crop and 16 px radius if present in the design.
- Description `67:793`: **398 × 312 px**, at Y `726`. Hindi body uses Hind Regular **14 px** and **24 px** line-height in the design context.
- CTA group `67:789` and Quick Links `67:795` are hidden.
- Mobile order is heading/tags → image → description. Do not place the description beside the image.

### 4. Our Courses — `10:838`

Outer **430 × 1574 px**; container `10:839`: **398 × 1574 px**, X `16`.
- Header `10:840`: **398 × 110 px**, Y `80`.
- Hindi heading `10:841`: **398 × 90 px**; active indicator **150 px** wide at Y `110`.
- Supporting paragraph `10:842` is hidden.
- Course content `10:844`: **398 × 1256 px**, begins Y `238`.
- Card positions in metadata: Y `0,216,432,648,864,1080` (six card positions; use all six visible cards if present). Each card **398 × 176 px**, implying **40 px vertical gap**.
- Each card is horizontal: image **161 × 176 px**, content panel **237 × 176 px**.
- Inner content group **205 × 100 px**, at `(16,20)` inside panel.
- Course title region **205 × 40 px**; description region **205 × 48 px**, begins Y `52`; CTA **111 × 24 px**, at `(16,132)`.
- White card surface, dark navy text, **16 px** corners where shown. Image flush to card edge. Alternate the image side between left and right as in Figma; do not turn cards into a two-column grid.

### 5. Testimonials — `67:1115`

Outer **430 × 753 px**. Container `67:1116`: **430 × 625 px**, Y `64`. Main content `67:1117`: **430 × 362 px**, Y `32`.
- Quote mark layers are approximately **39 × 27 px**; preserve their positions around the header.
- Header `67:1122`: **398 × 179 px**, at `(16,64)`.
- Main Hindi heading `हमारे छात्रों के अनुभव`: **352 × 45 px**.
- Supporting text group: **352 × 72 px**.
- Small CTA inside supporting header is hidden. English heading/description alternatives are hidden.
- Carousel arrow group `67:1124`: **79 × 30 px**, at `(0,149)` within parent; each arrow **30 × 30 px**, icon approximately **14 × 14 px**.
- Feedback area `67:1131` has metadata bounds **1246 × 317 px**, starting Y `290`, overflowing horizontally in the source. On mobile, show a touch-friendly card/carousel within viewport and prevent page-level horizontal scrolling.
- First feedback card `67:1133`: **350 × 317 px**. User detail region **310 × 85 px**, picture **85 × 85 px**, text group **205 × 85 px**, quote body **310 × 180 px**.
- Second card `67:1150`: **416 × 257 px**. Some text is lorem ipsum/sample content; retain correct real site content where available.
- Keep carousel controls accessible by keyboard and touch.

### 6. Logo Banner — `10:898`

Outer **430 × 719 px**; inner container **398 × 719 px**, X `16`.
- Treat this as its own mobile logo/partner banner, not as a scaled desktop section.
- Preserve the visible heading, logo assets, sequence, and row spacing from Figma. The top-level geometry does not expose all child logo bounds in this summary; inspect the exact child layers for image dimensions and gaps.
- Do not render the hidden desktop alternate banner `10:536`.

### 7. Notice — `67:992`

Outer **430 × 788 px**. Header **430 × 250 px**; content **430 × 538 px** starts at Y `250`.
- Stack heading/header above notice items. Keep notice title and download/action icon within the 398 px content width.
- Long titles must wrap without colliding with controls. Preserve visible dividers, dates/labels and download actions.
- Keep the number of notices data-driven for future Sanity integration.

### 8. Enquiry form — `69:788`

Outer **430 × 830 px**. Form child container: **398 × 670 px**, at `(16,80)`.
- Use the mobile-specific form layout. Do not reuse the desktop form/recruiter side-by-side composition.
- Keep header, choice/radio options, fields, textarea and submit button inside 398 px.
- Stack controls where required; only split fields side-by-side if the Figma layout allows.
- The summary data does not expose every child control's exact bounds. Inspect those individual Figma children for exact sizing instead of guessing.
- Preserve real validation, keyboard focus and submit behavior.

### 9. Contact details header — `69:989`

Outer **430 × 517 px**. Hidden background layer is **1520 × 143 px**; do not render it at mobile size. Main container **398 × 397 px**, at `(16,80)`.
- Contains contact heading and address/email/phone methods. Stack contact rows vertically; align each icon with its text.
- Wrap long values instead of clipping. Use the verified existing content and do not invent contact details.
- Exact individual contact-row bounds should be taken from the corresponding Figma child layers.

### 10. Contact / map — `10:928`

Outer **430 × 401 px**. Inner container **398 × 369 px**, at `(16,16)`.
- Keep map/content within the 398 px width and preserve map aspect ratio.
- Do not place the desktop 809 px form next to a 519 px map on mobile; the separate mobile form is section `69:788`.
- Preserve existing map controls and avoid horizontal overflow.

### 11. Gallery — `10:917`

Outer **430 × 828 px**. Inner container **398 × 828 px**, X `16`.
- Use the mobile-specific gallery arrangement from this frame, not the desktop four-column masonry.
- Preserve tile order, relative image sizes, section heading and CTA placement from the child layers.
- All gallery items must fit the 398 px content width with no horizontal overflow. Exact individual tile bounds are not available in this summary; inspect those Figma child layers rather than infer sizes.

### 12. Footer — `10:974`

Outer **430 × 760.333 px**. Inner container **398 × 760.333 px**, X `16`.
- Stack college logo/identity, link groups, and footer base in the order shown in Figma.
- Reflow desktop's four link columns for mobile. Keep links readable and tappable; no horizontal scrolling.
- Preserve the existing copyright and attribution text and visual separation of the footer base.
- Use child properties in Figma for exact logo, divider, links, and base-row spacing where not specified above.

## Mobile acceptance checklist

- At 430 px: 65 px navigation, 16 px gutters, 398 px content width.
- Mobile logo/menu only; no desktop utility strip or full nav.
- Hero: text section **462 px**, image section **345 px**; headline **394 × 216 px**, button **166 × 46 px**.
- Introduction order: heading/tags → full-width image → description.
- Courses: horizontal **398 × 176 px** cards, alternating image side, 40 px vertical gaps.
- Testimonials must not create page-level horizontal overflow.
- Notice and forms wrap long content and fit mobile width.
- Contact details stack; map stays within 398 px.
- Gallery follows mobile-specific arrangement; footer stacks.
- Check at 430 px and narrower widths such as 390 px. Keep the 430 px design as the reference.
- Match major geometry first, then typography/line breaks, image crops, and fine spacing. Preserve semantics, contrast, alt text, focus states, and existing functionality.
