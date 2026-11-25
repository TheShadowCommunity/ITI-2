import { NoticeItem, SanityNoticeDocument } from '../types/notice';
import { sanityClient } from '../sanity/client';

export const PAGE_SIZE = 5;

const GET_NOTICES_ENDPOINT = '/.netlify/functions/get-notices';

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
 * Safely validates optional attachment URLs to allow only http/https links.
 */
function sanitizeAttachmentUrl(rawUrl?: unknown): string | undefined {
  if (typeof rawUrl !== 'string') return undefined;
  const trimmed = rawUrl.trim();
  if (!trimmed) return undefined;
  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }
  return undefined;
}

/**
 * Formats an ISO date or datetime string from Sanity into display date & optional time.
 */
export function formatSanityNoticeDate(rawDate?: string | null): { date: string; time: string } {
  if (typeof rawDate !== 'string' || !rawDate.trim()) {
    return { date: '', time: '' };
  }

  const trimmed = rawDate.trim();
  const parsed = new Date(trimmed);
  if (Number.isNaN(parsed.getTime())) {
    return { date: trimmed, time: '' };
  }

  const date = parsed.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  // Only show time when the Sanity value includes a time component (datetime vs date-only)
  const hasTimeComponent = trimmed.includes('T');
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
 * Normalizes a Sanity notice document into the UI NoticeItem shape,
 * safely handling missing, null, or optional fields.
 */
export function normalizeSanityNotice(doc: SanityNoticeDocument, fallbackIndex = 0): NoticeItem {
  const rawDate =
    (typeof doc.date === 'string' && doc.date.trim()) ||
    (typeof doc._createdAt === 'string' && doc._createdAt.trim()) ||
    undefined;
  const { date, time } = formatSanityNoticeDate(rawDate);

  const rawNoticeId =
    typeof doc.noticeId === 'string'
      ? doc.noticeId.trim()
      : doc.noticeId != null
        ? String(doc.noticeId).trim()
        : '';
  const documentId =
    typeof doc._id === 'string' && doc._id.trim() ? doc._id.trim() : `notice-${fallbackIndex}`;
  const resolvedId = rawNoticeId || documentId;

  const text = typeof doc.content === 'string' ? doc.content.trim() : '';
  const validFileUrl = sanitizeAttachmentUrl(doc.fileUrl);
  const attachmentLabel =
    typeof doc.fileName === 'string' && doc.fileName.trim() ? doc.fileName.trim() : undefined;

  return {
    id: resolvedId,
    documentId,
    noticeId: resolvedId,
    date: date || '—',
    time,
    isoDate: rawDate,
    title: text || resolvedId,
    content: text,
    downloadUrl: validFileUrl,
    attachmentUrl: validFileUrl,
    attachmentLabel,
    fileSize: formatFileSize(doc.fileSize),
  };
}

/**
 * Robust parsing helper to convert multiple date/time string variants into a reliable timestamp.
 */
export function parseNoticeDateTime(dateStr: string, timeStr?: string): number {
  if (!dateStr || dateStr === '—') return 0;

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
    return (b.id || '').localeCompare(a.id || '');
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

function mapNoticeDocuments(docs: unknown): NoticeItem[] {
  if (!Array.isArray(docs)) {
    return [];
  }
  const validDocs = docs.filter(
    (item): item is SanityNoticeDocument => Boolean(item) && typeof item === 'object'
  );
  return sortNoticesDescending(validDocs.map((doc, idx) => normalizeSanityNotice(doc, idx)));
}

/**
 * Fetches published notices ordered by date (newest first).
 *
 * Uses the same-origin Netlify Function (`/.netlify/functions/get-notices`) first to avoid
 * cross-origin CORS restrictions on deployed domains, and falls back to the public read-only
 * Sanity client only when the local dev server does not run Netlify Functions.
 */
export async function fetchNotices(): Promise<NoticeItem[]> {
  let shouldFallbackToDirectSanity = false;

  try {
    const response = await fetch(GET_NOTICES_ENDPOINT, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    const contentType = response.headers.get('content-type') || '';
    const isJson = contentType.includes('application/json');

    if (response.ok && isJson) {
      const payload = (await response.json()) as {
        success?: boolean;
        notices?: unknown;
        message?: string;
      };
      if (payload?.success && Array.isArray(payload.notices)) {
        return mapNoticeDocuments(payload.notices);
      }
      throw new Error(payload?.message || 'Unexpected notice response format.');
    }

    // In local Vite dev (`npm run dev`), `/.netlify/functions/get-notices` hits the SPA
    // fallback (HTML) or returns 404. Only fall back to direct Sanity reads in that case.
    if (response.status === 404 || !isJson) {
      shouldFallbackToDirectSanity = true;
    } else {
      throw new Error(`Notice service returned HTTP ${response.status}`);
    }
  } catch (err) {
    if (!shouldFallbackToDirectSanity) {
      throw err;
    }
  }

  const docs = await sanityClient.fetch<SanityNoticeDocument[]>(PUBLISHED_NOTICES_QUERY);
  return mapNoticeDocuments(docs);
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
