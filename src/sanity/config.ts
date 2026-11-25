/**
 * Public Sanity configuration shared by the read-only frontend client and Sanity Studio.
 * Only non-sensitive public identifiers are read here; write tokens are NEVER exposed to the browser.
 */
const env = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env : undefined;

export const sanityProjectId: string =
  (env?.VITE_SANITY_PROJECT_ID as string | undefined)?.trim() || '69bcrt4o';

export const sanityDataset: string =
  (env?.VITE_SANITY_DATASET as string | undefined)?.trim() || 'production';

export const sanityApiVersion: string =
  (env?.VITE_SANITY_API_VERSION as string | undefined)?.trim() || '2025-02-19';
