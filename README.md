# New Lucknow City Private ITI - Website Homepage

A high-performance, responsive ITI college homepage implemented faithfully from the provided Figma Desktop and Mobile Design Specifications.

---

## 1. Quick Start Commands

### Install Dependencies
```bash
npm install
```

### Local Development Server
```bash
npm run dev
```
Runs the development server on `http://localhost:3000`.

### Production Build
```bash
npm run build
```
Generates a minified, optimized production bundle inside `/dist`.

### Type-Check & Lint
```bash
npm run lint
```

---

## 2. Framework & Architecture Decisions

1. **Framework**: React 19 with Vite & TypeScript.
2. **Rationale**:
   - **Performance**: Near-instant static asset serving, sub-second HMR, zero runtime hydration bloat.
   - **Exportability**: 100% standard Vite React application that can be run on any local machine, exported to GitHub, or inspected/debugged by Codex, Claude, or Cursor without vendor lock-in.
   - **Maintainability**: Pure component modularity with clean data separation.
3. **Styling**: Tailwind CSS v4 using the modern CSS-first `@theme` configuration in `src/index.css`.
4. **Deferred Sanity & Resend Integrations**:
   - Notice data fetching is encapsulated in `src/services/noticeService.ts`.
   - Form submission and validation are decoupled in `src/services/enquiryService.ts`.

---

## 3. Centralized Design Tokens (Figma Variables)

All brand tokens are declared in **`src/index.css`** inside the Tailwind CSS v4 `@theme` block:

```css
@theme {
  --color-brand: #1F2A3C;          /* Navy/900: Dark backgrounds and primary headings */
  --color-navy-900: #1F2A3C;
  --color-navy-800: #2E3B4E;      /* Navy/800: Dark secondary text / course titles */
  --color-navy-500: #5B6B80;      /* Navy/500: Body and secondary text */
  --color-navy-200: #AEB8C6;      /* Navy/200: Muted text */
  --color-accent: #F2B418;        /* Yellow/500: Primary CTA / highlight */
  --color-yellow-500: #F2B418;
  --color-yellow-600: #D99A00;    /* Yellow/600: Deeper yellow accent */
  --color-yellow-700: #8A6100;    /* Yellow/700: Dark yellow text accent */
  --color-surface: #FFFFFF;       /* Neutral/0: White surfaces */
  --color-page: #F4F5F7;          /* Neutral/50: Light neutral background */
  --color-neutral-200: #DDE1E7;   /* Neutral/200: Light text on dark background */
  --color-neutral-950: #14171C;   /* Neutral/950: Near-black text / CTA label */
  --color-sage: #AAB48C;          /* Sage/S400: Muted green accent */
  --color-border: #DDE1E7;

  --font-heading: "Montserrat", sans-serif;
  --font-body: "Montserrat", "Hind", sans-serif;
  --font-hindi: "Hind", sans-serif;
}
```

---

## 4. Layout Specifications & Geometry

### Desktop (Reference 1520px Viewport)
- **Container**: `1392px` inner content width, `64px` side gutters.
- **Navbar (10:440)**: `132px` total height (`46px` top nav + `86px` menu bar).
- **Hero (20:837)**: `807px` height with `638px` text section (52px inset) and `882px` image section with dark overlay gradient (18% to 46%).
- **Features (10:468)**: `245px` height, two side-by-side blocks for College Mission & Vision.
- **Introduction (10:388)**: 3-column asymmetric layout (`593px` copy / `356px` image / `443px` description).
- **Enquiry + Recruiter Panel (33:847)**: `809px` Form + `551px` Recruiter logos grid with 200px yellow indicator.
- **Our Courses (151:1541)**: 3x2 grid of course cards on `#1F2A3C` dark background.
- **Testimonials (50:1106)**: `720px` height with quote marks and circular carousel controls.
- **Notice (57:1101)**: Dark banner with stacked notice rows and download icons.
- **Contact Us (10:667)**: 3 contact info blocks + `809px` Enquiry Form and `519px` Map visual.
- **Gallery (57:1104)**: 4-column asymmetric masonry layout (8 tiles, 330px wide, 24px horizontal gutters).
- **Footer (10:718)**: `404px` height with 4 link columns and base row (`Made by Shadow Community`).

### Mobile (Reference 430px Viewport)
- **Container**: `398px` inner content width, `16px` outer gutters.
- **Navigation (10:782)**: `65px` height with `79x42px` logo and `30x30px` menu button.
- **Hero (66:745)**: `807px` stacked (`462px` text + `345px` image). Button `166x46px`.
- **Introduction (67:768)**: Stacked: Header/Tags -> Full-width image -> Hindi description.
- **Our Courses (10:838)**: 6 horizontal cards (`398x176px`, 40px vertical gap) with alternating image sides (even index image left, odd index image right).
- **Testimonials (67:1115)**: Compact card carousel within 398px without page-level overflow.
- **Logo Banner (10:898)**: Mobile recruiters banner.
- **Notice (67:992)**: Stacked notice items.
- **Enquiry Form (69:788)**: Mobile-optimized standalone form.
- **Contact Details (69:989 & 10:928)**: Stacked contact rows followed by full-width 398px Map visual.
- **Gallery (10:917)**: Mobile 2-column photo grid.
- **Footer (10:974)**: Stacked footer with attribution `Made by Shadow Community`.
