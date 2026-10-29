# New Lucknow City Private ITI — Desktop Design Specification

**Figma source:** `ITI-2` → `Desktop` frame `10:386`  
**Reference viewport:** 1520 × 8547.835 px  
**Purpose:** Use this as a correction specification for the existing Google AI Studio website. Do not rebuild the app unnecessarily.

## Instructions for Google AI Studio

- Inspect the current code first. Preserve framework, routes, content, working forms, links, and integrations. Make targeted visual changes.
- Treat sizes as Figma CSS pixels at 1520 px viewport. Child coordinates are relative to their parent.
- Use responsive grid/flex layouts; do not implement the whole page with absolute positioning.
- The separate mobile specification is authoritative for mobile. Do not scale the desktop layout down.
- Hidden layers are inactive alternatives and must not be rendered.
- If a value is not available in this specification, inspect that exact Figma layer rather than guessing.

## Page geometry and section order

Root frame: **1520 × 8547.835 px**. Most content sections use a **1392 px** container with **64 px** side gutters.

| Section | Figma node | X | Y | W | H | Notes |
|---|---|---:|---:|---:|---:|---|
| Navbar | `10:440` | 0 | 0 | 1520 | 132 | Visible |
| Hero | `20:837` | 0 | 132 | 1520 | 807 | Visible version |
| Alternate Hero | `10:434` | 0 | 132 | 1520 | 807 | Hidden |
| Features | `10:468` | 0 | 939 | 1520 | 245 | Two columns |
| Introduction | `10:388` | 0 | 1184 | 1520 | 592 | Three columns |
| Enquiry + recruiter panel | `33:847` | 0 | 1776 | 1520 | 845 | Form + logos |
| Alternate Courses | `10:505` | 0 | 2621 | 1520 | 1716 | Hidden |
| Our Courses | `151:1541` | 0 | 2621 | 1520 | 1444 | Visible version |
| Alternate Logo Banner | `10:536` | 0 | 3030 | 1520 | 298 | Hidden |
| Events | `154:1891` | 0 | 4138.766 | 1520 | 1012 | Hidden |
| Testimonials | `50:1106` | 0 | 4065 | 1520 | 720 | Visible |
| Notice | `57:1101` | 0 | 4785 | 1520 | 899.835 | Visible |
| Contact us | `10:667` | 0 | 5684.835 | 1520 | 1163 | Visible |
| Gallery | `57:1104` | 0 | 6847.835 | 1520 | 1296 | Visible |
| Footer | `10:718` | 0 | 8143.835 | 1520 | 404 | Visible |

Some Y coordinates overlap or do not form a perfectly continuous flow because the Figma file contains hidden/alternate explorations. Match the visible frames and screenshot; do not add blank space just to force all coordinates into CSS.

## Design tokens

### Colors exposed by Figma variables

| Token | Hex | Intended role |
|---|---|---|
| `Navy/900` | `#1F2A3C` | Main dark navy, dark section backgrounds, primary headings |
| `Navy/800` | `#2E3B4E` | Dark secondary text / course titles |
| `Navy/500` | `#5B6B80` | Body and secondary text |
| `Navy/200` | `#AEB8C6` | Muted text |
| `Yellow/500` | `#F2B418` | Main CTA fill / highlight |
| `Yellow/600` | `#D99A00` | Deeper yellow accent |
| `Yellow/700` | `#8A6100` | Dark yellow text accent |
| `Neutral/0` | `#FFFFFF` | White surfaces |
| `Neutral/50` | `#F4F5F7` | Light neutral background |
| `Neutral/200` | `#DDE1E7` | Light text on dark surfaces |
| `Neutral/950` | `#14171C` | Near-black text / CTA label |
| `Sage/S400` | `#AAB48C` | Muted green accent where shown |

Centralize these as CSS variables/Tailwind theme tokens. Figma also lists `Neutrals/N0 = #FFFFFF`, an equivalent white alias.

### Typography

| Role | Family / weight | Size | Line-height | Letter spacing |
|---|---|---:|---:|---:|
| Large Hindi hero | Hind SemiBold 600 | 70 px | 88 px | 0 |
| Hero large lines (layer styling) | Hind SemiBold 600 | 56 px | 70 px | 0 |
| Hero small lines | Hind SemiBold 600 | 30 px | 38 px | 0 |
| English medium title | Montserrat Medium 500 | 24 px | 35 px | 0 |
| English small title | Montserrat Medium 500 | 18 px | 25 px | 0 |
| English body regular | Montserrat Regular 400 | 16 px | 24 px | 0.2 px |
| English small paragraph/label | Montserrat Regular 400 | 14 px | 22 px | ~0.21 px |
| English small label | Montserrat Regular 400 | 12 px | 18 px | ~0.21 px |
| Hindi body medium | Hind Regular 400 | 16 px | 28 px | 0.6 px |
| Hindi body large | Hind Regular 400 | 18 px | 30 px | 0.5 px |
| Hindi medium title | Hind Medium 500 | 24 px | 35 px | 0 |
| English large bold paragraph | Montserrat Medium 500 | 18 px | 28 px | 0.2 px |

Introduction heading uses Montserrat SemiBold **36/45 px**. The Figma `Heading/H1/Large` token is Hind SemiBold **70/88 px**. Verify local font coverage: Latin-only Hind font files will not render Devanagari correctly. Load actual local weights instead of relying on synthetic bold.

### Spacing and shared components

- Spacing values in Figma variables: `4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 88, 100 px`.
- Common outer gutter **64 px**, common container **1392 px**.
- Primary CTA: fill `#F2B418`, label `#14171C`, **4 px radius**, horizontal padding **32 px**, vertical padding **12 px**, internal gap **8 px**. Label Montserrat Medium **14/22 px**, letter spacing ~0.21 px.
- Card/image corner radius: **16 px** where shown.
- Hero image area includes a dark navy overlay gradient, approximately 18% opacity near the top to 46% near the bottom, in design context. Avoid adding other gradients/shadows unless visible in the frame.

## Section-by-section specifications

### 1. Navbar — `10:440`

Outer size **1520 × 132 px**.

**Top strip:** `Top Nav` `10:442`, **1520 × 46 px**. Nav group `10:447`, **784 × 46 px**, positioned `(736,0)`. First four item widths: **99, 87, 81, 79 px**, X positions `0,107,202,291`. Yellow-highlighted group `86:693`: **406 × 46 px**, X `378`; its three nav items are at X `12,135,256`, widths `115,113,110 px`.

**Main menu:** `Menu Bar` `10:451`, **1520 × 86 px**, Y `46`. Logo region `10:462`: **306 × 86 px**. Logo image slot `10:464`: **103 × 54 px**, at `(12,16)`. College-name block `10:465`: **167 × 50 px**, at `(115,2)` inside logo frame. `Industrial Training Institute` is visible; `New Lucknow City P.V.T` (`10:466`) is hidden. Main nav group `10:457`: **906 × 54 px**, at `(574,16)`. Item widths: **77,129,126,143,154,145,132 px**, all 54 px tall. Keep logo left and nav right in one row; do not wrap at this viewport.

### 2. Hero — visible `20:837`

Outer/container **1520 × 807 px**, starts page Y `132`. Left section `20:838`: **638 × 807 px**. Right section `20:847`: **882 × 807 px**, begins X `638`. Left inset **52 px**.

Headline group `20:862`: **493 × 266 px**, at `(52,222.5)` relative to hero:
- `भविष्य को`: **137 × 45 px**
- `आकार दे,`: **247 × 88 px**
- `व्यावसायिक शिक्षा,`: **493 × 88 px**
- `के साथ l`: **114 × 45 px**
- Lines start at Y `0,45,133,221`. Preserve line breaks and alternating colors: `Navy/500 #5B6B80`, `Navy/900 #1F2A3C`, `Yellow/700 #8A6100`. Context styles large lines at **56/70 px** and small lines at **30/38 px**, Hind SemiBold.
CTA group `20:841`: **212 × 56 px**, at `(52,528.5)`; first button visible, second button at X `260` hidden. The `WELCOME TO I.T.I` text layer is hidden. Keep hero image crop and gradient overlay; do not stretch the asset.

### 3. Features — `10:468`

Outer **1520 × 245 px**, with two side-by-side blocks.

**Mission** `10:469`: **611 × 156 px**, at `(119,44.5)`. Icon `20:923`: **117 × 100 px**, at `(40,28)`. Content `10:470`: **382 × 156 px**, at `(189,0)`. Title group **145 × 48 px** with English `College Mission` (22 px high) and Hindi subtitle starting Y `30`. Hindi supporting copy **382 × 54 px** at Y `60`. Small CTA **73 × 30 px** at Y `126`.

**Vision** `20:932`: **611 × 157 px**, at `(790,44)`. Icon `20:933`: **100 × 94 px**, at `(40,31.5)`. Content `20:935`: **399 × 157 px**, at `(172,0)`. Title group **132 × 49 px**; English title height **23 px**, Hindi subtitle starts Y `31`. Supporting copy **399 × 54 px** at Y `61`. CTA **73 × 30 px** at Y `127`. Align both icons and content vertically; preserve whitespace.

### 4. Introduction — `10:388`

Outer **1520 × 592 px**; container `33:846` **1392 × 592 px**, X `64`. Content begins Y `100`.

- Left content `33:819`: **593 × 392 px**.
- Header `33:820`: **553 × 288 px**. Eyebrow `About Our College`: **553 × 22 px**. Title `New Lucknow City Private ITI`: **553 × 140 px**, 30 px below eyebrow; Montserrat SemiBold **36/45 px**, two lines.
- Tags group: **553 × 52 px**, starts Y `182`. First tag `2019 में स्थापित`: icon **20 × 20 px**, text X `28`, width **87 px**, overall **115 × 22 px**. Second tag `भारत सरकार NCVT द्वारा मान्यता प्राप्त`: icon **19 × 18 px**, text X `27`, width **208 px**, overall **235 × 22 px**, second row starts Y `30`.
- CTA group: **212 × 56 px**, at Y `336`; second CTA hidden.
- Image slot `33:844`: **356 × 392 px**, at `(593,100)`.
- Description `33:838`: **443 × 392 px**, at `(949,100)`. Hindi body width **403 px**, X `40` inside the column; design context shows Hind Regular **14 px**, **24 px** line-height.
- Quick-links group `33:840` hidden. Maintain the three-column copy/image/description composition; do not make all columns equal width.

### 5. Enquiry form + recruiter/partner panel — `33:847`

Outer **1520 × 845 px**; container **1392 px** wide at X `64`; content starts Y `100`.

**Form column** `33:849`: **809 × 645 px**. Header `33:851`: **809 × 159 px**. Inner header group `33:852`: **713 × 95 px**, at `(48,32)`. Image slot `33:854`: **161 × 79 px**, at `(0,16)`. Text block `43:765`: **532 × 95 px**, X `181`; title `अपनी पूछताछ भेजें` **154 × 35 px**; description **532 × 56 px** starting Y `39`.

Contact form `33:856`: **809 × 486 px**. Fields region `33:857`: **713 × 296 px**, at `(48,48)`. Four choice/radio items are **44 px** high, widths **159,153,176,177 px**, X positions `0,175,344,536`. Full-width field **713 × 58 px** at Y `60`. Two side-by-side fields each **348.5 × 54 px**, X `0` and `364.5`, Y `134`. Message field **713 × 92 px** at Y `204`. Submit button **261 × 62 px**, at `(48,376)`. Preserve working validation and submit behavior.

**Recruiter/partner panel** `34:753`: **551 × 645 px**, at `(841,100)`. Header **551 × 156 px**, starts Y `13.5`; heading layer **244 × 56 px**, active indicator **200 px** wide; supporting copy **551 × 60 px** at Y `96`. Logos group `34:804`: **551 × 414 px**, Y `217.5`. Six logo slots:
- `34:805`: **213 × 130**, `(20,0)`
- `34:807`: **186 × ~130**, `(301,0)`
- `34:820`: **118 × 130**, `(20,142)`
- `34:816`: **186 × ~130**, `(301,142)`
- `34:818`: **203 × 130**, `(20,284)`
- `34:811`: **143 × 130**, `(344,284)`
Preserve asymmetrical logo sizes/positions.

### 6. Our Courses — visible `151:1541`

Outer **1520 × 1444 px**; container **1392 px**, X `64`. Dark background `Navy/900 #1F2A3C`. Top spacing is based on **100 px**. Header is a left-aligned Hindi heading with active indicator below. Use this visible version; `10:505` is hidden. Reuse a consistent course-card component. The visible design uses white cards, **16 px** corners, edge-attached image, text in `Navy/800 #2E3B4E`, and shared spacing tokens. Keep image slots, content hierarchy, and button placement aligned to the visible Figma frame. For any course child size not specified here, inspect that exact visible Figma layer rather than inferring from the hidden alternative.

### 7. Testimonials — `50:1106`

Outer **1520 × 720 px**. Main testimonial composition `testmonial`: **1230 × 380 px**, at `(679,170)` relative to its parent. Preserve heading/intro, cards, profile images, names, secondary labels/ratings where visible, quote marks, quote body, and visible carousel controls. Metadata also contains a background layer **2068 × 2017 px** extending beyond the frame and a separate **393 × 208 px** section layer; these are composition layers, not extra page sections. Some heading/description layers are hidden; do not render hidden text. Ensure carousel controls remain functional.

### 8. Notice — `57:1101`

Outer **1520 × 899.835 px**. Header **1520 × 209.835 px**. Content region **1520 × 690 px**, starts Y `209.835`. Preserve distinct heading and stacked notice rows/cards, text summaries, dividers, and download/action icons. Long titles must wrap without colliding with actions. Keep notices data-driven for future Sanity integration rather than hardcoding a fixed count.

### 9. Contact us — `10:667`

Outer **1520 × 1163 px**. Header **1520 × 378 px**; content **1520 × 785 px**, starts Y `378`. Header container `47:768`: **1392 × 238 px**, at `(64,100)`. `Contact Details` title area **434 × 70 px**; active indicator **200 px** wide at Y `90`. Contact row `48:774`: **1392 × 92 px**, Y `146`, with three equal **464 × 92 px** blocks. Each has a **35 × 35 px** icon area and text starting 47 px from block left:
- Address: `Mohan Road, Maunda, Lucknow, 226004`
- Email: `newlucknowcitypvtiti@gmail.com`
- Phone: `8840012609, 9792361820, 9236013038,`
A separate WhatsApp block is hidden; preserve the source values unless the existing site has verified updated data.

Main content container `10:669`: **1392 × 645 px**, at `(64,40)` within content. Form `87:789`: **809 × 645 px**; use the same internal geometry as the enquiry form above. Map `10:670`: **519 × 645 px**, at X `873`. Alternate column `10:700` hidden.

### 10. Gallery — `57:1104`

Outer **1520 × 1296 px**; container **1392 × 1296 px**, X `64`. Header `57:1106`: **1392 × 90 px**, Y `100`. Title `College Life` in a **337 × 70 px** area. CTA **118 × 30 px**, at `(1274,60)` in header. Gallery content `57:1111`: **1392 × 950 px**, Y `246`.

Eight image tiles, all **330 px** wide, with **24 px** horizontal gutters; preserve this four-column asymmetric masonry arrangement:
- Column 1: **330 × 625.33** at `(0,0)` and **330 × 300.67** at `(0,649.33)`.
- Column 2: **330 × 300.67** at `(354,0)` and **330 × 625.33** at `(354,324.67)`.
- Column 3: **330 × 625.33** at `(708,0)` and **330 × 300.67** at `(708,649.33)`.
- Column 4: **330 × 300.67** at `(1062,0)` and **330 × 625.33** at `(1062,324.67)`.
Do not convert this desktop composition to equal-height rows.

### 11. Footer — `10:718`

Outer **1520 × 404 px**; container **1392 × 404 px**, X `64`. Main row `10:727`: **1392 × 182 px**, at Y `88`. Top logo/tagline row `10:720` is hidden. Footer logo `49:1051`: **396 × 72 px**, X `56`; image **147 × 72 px**, text area **233 × 70 px** at X `163`. Four link columns start at X `559.5`, `773`, `1001.5`, `1230`; widths **106,121,121,106 px**. Footer base `10:775`: **1392 × 46 px**, Y `318`; inner base row **1392 × 38 px**, Y `8`. Copyright area **374 × 38 px**: `© 2025 New Lucknow City Private ITI. All Rights Reserved.` Attribution area **148 × 38 px**, aligned right: `Made by Shadow Community`. Do not render hidden details or top row.

## Desktop acceptance checklist

- At 1520 px, 64 px side gutters and 1392 px content width.
- Header 132 px tall: top strip 46 px, main menu 86 px.
- Hero 807 px tall with 638/882 px split.
- Features two-column; intro has 593/356/443 px copy-image-description widths.
- Enquiry panel uses 809/551 px split.
- Use visible Courses version, not hidden alternative.
- Gallery is 4-column masonry with 24 px gutters.
- Footer is multi-column with separate base row.
- Match section geometry first, then type/line breaks, image crops, and smaller gaps.
- Keep semantic headings, contrast, alt text, keyboard focus, and all existing working interactions.
