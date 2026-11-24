import { createClient } from '@sanity/client';
import { jsonResponse } from './lib/sanityServer';

const DEFAULT_PROJECT_ID = '69bcrt4o';
const DEFAULT_DATASET = 'production';
const DEFAULT_API_VERSION = '2025-02-19';

const PUBLISHED_NOTICES_QUERY = `*[_type == "notice"] | order(date desc, _createdAt desc) {
  _id,
  _createdAt,
  noticeId,
  date,
  content,
  "fileUrl": file.asset->url,
  "fileName": file.asset->originalFilename,
  "fileSize": file.asset->size,
  "fileMimeType": file.asset->mimeType
}`;

/**
 * Public read-only Netlify Serverless Function (v2) for fetching published notices from Sanity CMS.
 *
 * Why server-side:
 * - Eliminates browser CORS / 403 errors on Netlify domains when Sanity CORS origins are not configured.
 * - Uses a public read-only client (`perspective: 'published'`, no write token required) and `useCdn: false`
 *   so newly published notices in Sanity appear promptly.
 */
export default async function handler(request: Request): Promise<Response> {
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        Allow: 'GET, OPTIONS',
      },
    });
  }

  if (request.method !== 'GET') {
    return jsonResponse({ success: false, message: 'Method Not Allowed' }, 405, {
      Allow: 'GET, OPTIONS',
    });
  }

  const projectId =
    process.env.SANITY_PROJECT_ID?.trim() ||
    process.env.VITE_SANITY_PROJECT_ID?.trim() ||
    DEFAULT_PROJECT_ID;
  const dataset =
    process.env.SANITY_DATASET?.trim() ||
    process.env.VITE_SANITY_DATASET?.trim() ||
    DEFAULT_DATASET;
  const apiVersion =
    process.env.SANITY_API_VERSION?.trim() ||
    process.env.VITE_SANITY_API_VERSION?.trim() ||
    DEFAULT_API_VERSION;

  try {
    const readClient = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      perspective: 'published',
    });

    const docs = await readClient.fetch(PUBLISHED_NOTICES_QUERY);
    const notices = Array.isArray(docs) ? docs : [];

    return jsonResponse(
      {
        success: true,
        notices,
      },
      200,
      {
        'Cache-Control': 'public, max-age=30, stale-while-revalidate=60',
      }
    );
  } catch (err) {
    console.error(
      '[get-notices] Failed to fetch notices from Sanity:',
      err instanceof Error ? err.message : 'Unknown error'
    );
    return jsonResponse(
      {
        success: false,
        message: 'Unable to load notices right now. Please try again later.',
      },
      502
    );
  }
}
