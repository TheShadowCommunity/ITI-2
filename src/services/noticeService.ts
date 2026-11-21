import { NoticeItem, SanityNoticeDocument } from '../types/notice';
import { sanityClient } from '../sanity/client';

export const PAGE_SIZE = 5;

const PUBLISHED_NOTICES_QUERY = `*[_type == "notice"] | order(date desc, _createdAt desc) {
  _id,
  noticeId,
  date,
  content,
  "fileUrl": file.asset->url,
  "fileName": file.asset->originalFilename,
  "fileSize": file.asset->size,
  "fileMimeType": file.asset->mimeType
}`;

/**
 * Formats file byte size into a compact human-readable label.
 */
function formatFileSize(bytes?: number | null): string | undefined {
  if (typeof bytes !== 'number' || !Number.isFinite(bytes) || bytes <= 0) {
    return undefined;
  }
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * Formats an ISO date or datetime string from Sanity into display date & optional time.
 */
export function formatSanityNoticeDate(rawDate?: string): { date: string; time: string } {
  if (!rawDate) {
    return { date: '', time: '' };
  }

  const parsed = new Date(rawDate);
  if (Number.isNaN(parsed.getTime())) {
    return { date: rawDate, time: '' };
  }

  const date = parsed.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  // Only show time when the Sanity value includes a time component (datetime vs date-only)
  const hasTimeComponent = rawDate.includes('T');
  const time = hasTimeComponent
    ? parsed.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
    : '';

  return { date, time };
}

/**
 * Normalizes a Sanity notice document into the UI NoticeItem shape.
 */
export function normalizeSanityNotice(doc: SanityNoticeDocument): NoticeItem {
  const { date, time } = formatSanityNoticeDate(doc.date);
  const text = (doc.content || '').trim();
  const validFileUrl =
    typeof doc.fileUrl === 'string' && doc.fileUrl.trim().length > 0
      ? doc.fileUrl.trim()
      : undefined;

  return {
    id: doc.noticeId?.trim() || doc._id,
    documentId: doc._id,
    noticeId: doc.noticeId?.trim() || doc._id,
    date,
    time,
    isoDate: doc.date || undefined,
    title: text,
    content: text,
    downloadUrl: validFileUrl,
    attachmentUrl: validFileUrl,
    attachmentLabel: doc.fileName || undefined,
    fileSize: formatFileSize(doc.fileSize),
  };
}

/**
 * Robust parsing helper to convert multiple date/time string variants into a reliable timestamp.
 */
export function parseNoticeDateTime(dateStr: string, timeStr?: string): number {
  if (!dateStr) return 0;

  const isoTime = Date.parse(dateStr);
  if (!Number.isNaN(isoTime)) return isoTime;

  const combined = `${dateStr} ${timeStr || '00:00'}`;
  const combinedTime = Date.parse(combined);
  if (!Number.isNaN(combinedTime)) return combinedTime;

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
    return b.id.localeCompare(a.id);
  });
}

/**
 * Calculates total pages: totalPages = max(1, ceil(totalNoticeCount / PAGE_SIZE))
 * Ensures page 1 is shown when there are 5 or fewer notices.
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
 * Fetches published notices from Sanity CMS ordered by date (newest first).
 * Uses the public read-only client; no write token is ever used in the browser.
 */
export async function fetchNotices(): Promise<NoticeItem[]> {
  const docs = await sanityClient.fetch<SanityNoticeDocument[]>(PUBLISHED_NOTICES_QUERY);
  if (!Array.isArray(docs)) {
    return [];
  }
  return sortNoticesDescending(docs.map(normalizeSanityNotice));
}

const MANAGE_NOTICE_ENDPOINT = '/.netlify/functions/manage-notice';

export interface CreateNoticeInput {
  noticeId: string;
  date?: string;
  content: string;
  fileAssetId?: string;
}

export interface UpdateNoticeInput {
  documentId: string;
  noticeId?: string;
  date?: string;
  content?: string;
  fileAssetId?: string;
  removeFile?: boolean;
}

export interface NoticeMutationResult {
  success: boolean;
  notice: NoticeItem;
  message: string;
}

export class NoticeMutationError extends Error {
  status: number;
  fieldErrors?: Record<string, string>;

  constructor(message: string, status = 500, fieldErrors?: Record<string, string>) {
    super(message);
    this.name = 'NoticeMutationError';
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

async function sendNoticeMutation(
  method: 'POST' | 'PUT',
  body: CreateNoticeInput | UpdateNoticeInput,
  adminToken: string
): Promise<NoticeMutationResult> {
  let response: Response;
  try {
    response = await fetch(MANAGE_NOTICE_ENDPOINT, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${adminToken}`,
      },
      body: JSON.stringify(body),
    });
  } catch {
    throw new NoticeMutationError('Network error: unable to reach the notice service.', 0);
  }

  let payload: {
    success?: boolean;
    notice?: SanityNoticeDocument;
    message?: string;
    fieldErrors?: Record<string, string>;
  } | null = null;

  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok || !payload?.success || !payload.notice) {
    throw new NoticeMutationError(
      payload?.message || 'Unable to save notice.',
      response.status,
      payload?.fieldErrors
    );
  }

  return {
    success: true,
    notice: normalizeSanityNotice(payload.notice),
    message: payload.message || 'Notice saved successfully.',
  };
}

/**
 * Creates a notice via the server-side Netlify Function (`/.netlify/functions/manage-notice`).
 * Keeps `SANITY_WRITE_TOKEN` strictly on the server.
 */
export async function createNotice(
  input: CreateNoticeInput,
  adminToken: string
): Promise<NoticeMutationResult> {
  return sendNoticeMutation('POST', input, adminToken);
}

/**
 * Updates an existing notice via the server-side Netlify Function (`/.netlify/functions/manage-notice`).
 * Keeps `SANITY_WRITE_TOKEN` strictly on the server.
 */
export async function updateNotice(
  input: UpdateNoticeInput,
  adminToken: string
): Promise<NoticeMutationResult> {
  return sendNoticeMutation('PUT', input, adminToken);
}
