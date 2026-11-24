import { createClient } from '@sanity/client';
import { sanityApiVersion, sanityDataset, sanityProjectId } from './config';

/**
 * Public read-only Sanity client for browser queries (e.g. published notices).
 * Intentionally omits any write token and restricts queries to published documents.
 */
export const sanityClient = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: sanityApiVersion,
  useCdn: true,
  perspective: 'published',
  maxRetries: 0,
});
