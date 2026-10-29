# Local Font Integration Guide

This directory is designated for the local font files specified in the project requirements:

### Target font files:
- `hind-v17-latin-300.woff2` (Weight 300 - Light)
- `hind-v17-latin-regular.woff2` (Weight 400 - Normal)
- `hind-v17-latin-500.woff2` (Weight 500 - Medium)
- `hind-v17-latin-600.woff2` (Weight 600 - SemiBold)
- `montserrat-v30-latin-300.woff2` (Weight 300 - Light)
- `montserrat-v30-latin-regular.woff2` (Weight 400 - Normal)
- `montserrat-v30-latin-500.woff2` (Weight 500 - Medium)
- `montserrat-v30-latin-600.woff2` (Weight 600 - SemiBold)

### Note on Devanagari (Hindi) Glyphs:
The files listed above have the `-latin` subset suffix. For rendering Hindi Devanagari script at highest fidelity, drop a full Devanagari subset WOFF2 (or Noto Sans Devanagari / Hind Devanagari) into this folder and activate the font-face definitions in `src/index.css`.

System font fallbacks (`Montserrat`, `Hind`, system-ui, -apple-system, sans-serif) are actively configured in `src/index.css` via Tailwind v4 `@theme`.
