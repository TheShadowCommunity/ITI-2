/**
 * @file Centralized Image Assets Registry
 * 
 * DESIGN REQUIREMENT:
 * "For this initial implementation, use a single local placeholder image in all image positions 
 * throughout the homepage. The purpose is to let me replace the images manually after the layout is complete."
 * 
 * HOW TO REPLACE IMAGES:
 * 1. Place your target image file (e.g. hero-campus.jpg, trade-electrician.jpg) into the `/public/images/` directory.
 * 2. Update the corresponding path entry below to point to your new file (e.g. `/images/hero-campus.jpg`).
 * 3. All components referencing this asset will update automatically without changing component code.
 */

export const DEFAULT_PLACEHOLDER = '/images/placeholder.svg';

export const siteImages = {
  // Hero section college building with red car
  heroCampus: DEFAULT_PLACEHOLDER,

  // About College campus architecture photo
  aboutCampus: DEFAULT_PLACEHOLDER,

  // Trade / Course cards photos
  trades: {
    electrician: DEFAULT_PLACEHOLDER,
    fitter: DEFAULT_PLACEHOLDER,
    sewingFashion: DEFAULT_PLACEHOLDER,
    dieselMechanic: DEFAULT_PLACEHOLDER,
    copa: DEFAULT_PLACEHOLDER,
    rac: DEFAULT_PLACEHOLDER,
  },

  // Student testimonials avatars
  testimonials: {
    kirtiSharma: DEFAULT_PLACEHOLDER,
    johnAnderson: DEFAULT_PLACEHOLDER,
  },

  // Location / Google Map region visual placeholder
  mapLocation: DEFAULT_PLACEHOLDER,

  // College Life photo mosaic gallery (8 tiles for 4-column desktop masonry & mobile grid)
  gallery: [
    DEFAULT_PLACEHOLDER, // Column 1 - Tile 1 (330 x 625)
    DEFAULT_PLACEHOLDER, // Column 1 - Tile 2 (330 x 300)
    DEFAULT_PLACEHOLDER, // Column 2 - Tile 1 (330 x 300)
    DEFAULT_PLACEHOLDER, // Column 2 - Tile 2 (330 x 625)
    DEFAULT_PLACEHOLDER, // Column 3 - Tile 1 (330 x 625)
    DEFAULT_PLACEHOLDER, // Column 3 - Tile 2 (330 x 300)
    DEFAULT_PLACEHOLDER, // Column 4 - Tile 1 (330 x 300)
    DEFAULT_PLACEHOLDER, // Column 4 - Tile 2 (330 x 625)
  ],

  // Notice page 3 feature cards below the table
  noticeFeatures: {
    achievements: '/images/notice-achievements.svg',
    fees: '/images/notice-fees.svg',
    contact: '/images/notice-contact.svg',
  },

  // Fee Structure page 3 feature cards below the policy section
  feeFeatures: {
    electrician: '/images/fee-electrician.svg',
    sewing: '/images/fee-sewing.svg',
    contact: '/images/notice-contact.svg',
  },
};

