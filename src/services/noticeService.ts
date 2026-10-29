import { NoticeItem } from '../types/notice';
import { mockNotices } from '../data/notices';

/**
 * Notice Service Integration Seam
 * 
 * CURRENT STATUS: Initial Phase (Mock Data provider).
 * 
 * FUTURE SANITY INTEGRATION STEPS:
 * 1. Install `@sanity/client` or use Sanity fetch endpoint.
 * 2. Configure project ID and dataset in your environment variables.
 * 3. Replace the local array return below with:
 *    const query = `*[_type == "notice"] | order(publishedAt desc) {
 *      _id,
 *      title,
 *      date,
 *      time,
 *      "downloadUrl": file.asset->url,
 *      category
 *    }`;
 *    return await sanityClient.fetch(query);
 */

export async function fetchNotices(): Promise<NoticeItem[]> {
  // Simulating instant or near-instant local data load without unnecessary delay
  return new Promise((resolve) => {
    resolve([...mockNotices]);
  });
}
