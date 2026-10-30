import { NoticeItem } from '../types/notice';
import { mockNotices, testFixtures } from '../data/notices';

/**
 * ============================================================================
 * FUTURE SANITY CMS INTEGRATION SEAM (Section 5 of Technical Specification)
 * ============================================================================
 * Notices will eventually be managed and fetched from Sanity CMS.
 *
 * This service encapsulates all notice acquisition, normalized transformation,
 * sorting, and pagination slice calculations so that the presentation layer
 * remains completely decoupled from the data provider.
 *
 * Potential Future Sanity Schema Mapping:
 * - Sanity `_id`                         -> Notice.id (stable unique key)
 * - Sanity `title`                       -> Notice.title (visible Hindi/English copy)
 * - Sanity `publishedAt` / `date`        -> Notice.date / Notice.isoDate
 * - Sanity `file.asset->url`             -> Notice.downloadUrl / Notice.attachmentUrl
 * - Sanity `file.asset->size`            -> Notice.fileSize
 *
 * When Sanity is connected:
 * 1. Configure Sanity client with project credentials.
 * 2. Replace the local array retrieval in `fetchNotices()` with:
 *    const query = `*[_type == "notice"] | order(publishedAt desc) {
 *      "id": _id,
 *      title,
 *      "date": publishedAt,
 *      "isoDate": publishedAt,
 *      "downloadUrl": document.asset->url,
 *      "category": category
 *    }`;
 *    return await sanityClient.fetch(query);
 * ============================================================================
 */

export const PAGE_SIZE = 5;

/**
 * Robust parsing helper to convert multiple date/time string variants into a reliable timestamp.
 */
export function parseNoticeDateTime(dateStr: string, timeStr?: string): number {
  if (!dateStr) return 0;

  // Try direct ISO parsing first
  const isoTime = Date.parse(dateStr);
  if (!isNaN(isoTime)) return isoTime;

  // Try combined date + time format, e.g. "17 Jul 2026 19:30"
  const combined = `${dateStr} ${timeStr || '00:00'}`;
  const combinedTime = Date.parse(combined);
  if (!isNaN(combinedTime)) return combinedTime;

  return 0;
}

/**
 * Sorts notices descending (newest to oldest) without mutating the original source array.
 */
export function sortNoticesDescending(notices: NoticeItem[]): NoticeItem[] {
  return [...notices].sort((a, b) => {
    const timeB = parseNoticeDateTime(b.isoDate || b.date, b.time);
    const timeA = parseNoticeDateTime(a.isoDate || a.date, a.time);
    if (timeB !== timeA) {
      return timeB - timeA;
    }
    // Stable secondary sort by id descending
    return b.id.localeCompare(a.id);
  });
}

/**
 * Calculates total pages per Technical Specification:
 * totalPages = max(1, ceil(totalNoticeCount / PAGE_SIZE))
 */
export function calculateTotalPages(totalCount: number, pageSize = PAGE_SIZE): number {
  return Math.max(1, Math.ceil(totalCount / pageSize));
}

export interface PaginatedResult {
  items: NoticeItem[];
  totalPages: number;
  currentPage: number;
  startIndex: number;
  endIndex: number;
  totalCount: number;
}

/**
 * Slices notices for a given page safely, clamping within boundaries.
 */
export function getPaginatedNotices(
  notices: NoticeItem[],
  currentPage: number,
  pageSize = PAGE_SIZE
): PaginatedResult {
  const sorted = sortNoticesDescending(notices);
  const totalCount = sorted.length;
  const totalPages = calculateTotalPages(totalCount, pageSize);
  const safePage = Math.min(Math.max(1, currentPage), totalPages);
  const startIndex = (safePage - 1) * pageSize;
  const items = sorted.slice(startIndex, startIndex + pageSize);

  return {
    items,
    totalPages,
    currentPage: safePage,
    startIndex,
    endIndex: Math.min(startIndex + pageSize, totalCount),
    totalCount,
  };
}

/**
 * Fetches notices from the current repository dataset or an isolated test fixture.
 * @param fixtureKey Optional fixture identifier ('fixture_0', 'fixture_1', 'fixture_5', 'fixture_6', 'fixture_10', 'fixture_11')
 */
export async function fetchNotices(fixtureKey?: string): Promise<NoticeItem[]> {
  return new Promise((resolve) => {
    if (fixtureKey && testFixtures[fixtureKey]) {
      resolve([...testFixtures[fixtureKey]]);
      return;
    }
    // Default: current repository dataset
    resolve([...mockNotices]);
  });
}
