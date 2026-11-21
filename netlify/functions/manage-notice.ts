import { getServerSanityClient, jsonResponse, verifyBearerSecret } from './lib/sanityServer';

const CONTROL_CHARS_REGEX = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;
const NOTICE_ID_REGEX = /^[A-Za-z0-9._\-\/ ]{1,100}$/;
const SANITY_DOC_ID_REGEX = /^[A-Za-z0-9][A-Za-z0-9._-]{0,127}$/;
const SANITY_FILE_ASSET_REGEX = /^file-[a-zA-Z0-9_-]+-[a-z0-9]+$/;

export interface SanitizedCreateNoticePayload {
  noticeId: string;
  date: string;
  content: string;
  fileAssetId?: string;
}

export interface SanitizedUpdateNoticePayload {
  documentId: string;
  noticeId?: string;
  date?: string;
  content?: string;
  fileAssetId?: string;
  removeFile?: boolean;
}

export interface NoticeValidationOutcome<T> {
  valid: boolean;
  data?: T;
  fieldErrors?: Record<string, string>;
  message?: string;
}

function sanitizeString(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(CONTROL_CHARS_REGEX, '').trim().slice(0, maxLength);
}

function parseIsoDate(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  const timestamp = Date.parse(trimmed);
  if (Number.isNaN(timestamp)) return null;
  return new Date(timestamp).toISOString();
}

/**
 * Validates and sanitizes payloads for creating a new Sanity `notice` document.
 */
export function validateCreateNotice(
  rawBody: unknown
): NoticeValidationOutcome<SanitizedCreateNoticePayload> {
  if (!rawBody || typeof rawBody !== 'object' || Array.isArray(rawBody)) {
    return { valid: false, message: 'Invalid request payload.' };
  }

  const body = rawBody as Record<string, unknown>;
  const fieldErrors: Record<string, string> = {};

  const noticeId = sanitizeString(body.noticeId, 100);
  if (!noticeId) {
    fieldErrors.noticeId = 'Notice ID is required.';
  } else if (!NOTICE_ID_REGEX.test(noticeId)) {
    fieldErrors.noticeId = 'Notice ID contains unsupported characters.';
  }

  let isoDate: string;
  if (body.date === undefined || body.date === null || body.date === '') {
    isoDate = new Date().toISOString();
  } else {
    const parsed = parseIsoDate(body.date);
    if (!parsed) {
      fieldErrors.date = 'A valid ISO date or datetime is required.';
      isoDate = '';
    } else {
      isoDate = parsed;
    }
  }

  const content = sanitizeString(body.content, 2000);
  if (content.length < 3) {
    fieldErrors.content = 'Notice content must be at least 3 characters.';
  }

  let fileAssetId: string | undefined;
  if (body.fileAssetId !== undefined && body.fileAssetId !== null && body.fileAssetId !== '') {
    const candidate = sanitizeString(body.fileAssetId, 150);
    if (!SANITY_FILE_ASSET_REGEX.test(candidate)) {
      fieldErrors.fileAssetId = 'Invalid file asset reference.';
    } else {
      fileAssetId = candidate;
    }
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      valid: false,
      fieldErrors,
      message: 'Please correct the highlighted notice fields.',
    };
  }

  return {
    valid: true,
    data: {
      noticeId,
      date: isoDate,
      content,
      ...(fileAssetId ? { fileAssetId } : {}),
    },
  };
}

/**
 * Validates and sanitizes payloads for updating an existing Sanity `notice` document.
 */
export function validateUpdateNotice(
  rawBody: unknown
): NoticeValidationOutcome<SanitizedUpdateNoticePayload> {
  if (!rawBody || typeof rawBody !== 'object' || Array.isArray(rawBody)) {
    return { valid: false, message: 'Invalid request payload.' };
  }

  const body = rawBody as Record<string, unknown>;
  const fieldErrors: Record<string, string> = {};

  const documentId = sanitizeString(body.documentId ?? body.id, 128);
  if (!documentId || !SANITY_DOC_ID_REGEX.test(documentId) || documentId.startsWith('_.')) {
    fieldErrors.documentId = 'A valid notice documentId is required.';
  }

  const data: SanitizedUpdateNoticePayload = { documentId };
  let hasChanges = false;

  if (body.noticeId !== undefined) {
    const noticeId = sanitizeString(body.noticeId, 100);
    if (!noticeId || !NOTICE_ID_REGEX.test(noticeId)) {
      fieldErrors.noticeId = 'Notice ID must be 1–100 valid characters.';
    } else {
      data.noticeId = noticeId;
      hasChanges = true;
    }
  }

  if (body.date !== undefined) {
    const parsed = parseIsoDate(body.date);
    if (!parsed) {
      fieldErrors.date = 'A valid ISO date or datetime is required.';
    } else {
      data.date = parsed;
      hasChanges = true;
    }
  }

  if (body.content !== undefined) {
    const content = sanitizeString(body.content, 2000);
    if (content.length < 3) {
      fieldErrors.content = 'Notice content must be at least 3 characters.';
    } else {
      data.content = content;
      hasChanges = true;
    }
  }

  if (body.removeFile === true) {
    data.removeFile = true;
    hasChanges = true;
  } else if (body.fileAssetId !== undefined) {
    const candidate = sanitizeString(body.fileAssetId, 150);
    if (!SANITY_FILE_ASSET_REGEX.test(candidate)) {
      fieldErrors.fileAssetId = 'Invalid file asset reference.';
    } else {
      data.fileAssetId = candidate;
      hasChanges = true;
    }
  }

  if (!hasChanges && Object.keys(fieldErrors).length === 0) {
    return {
      valid: false,
      message: 'Provide at least one notice field to update.',
    };
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      valid: false,
      fieldErrors,
      message: 'Please correct the highlighted notice fields.',
    };
  }

  return { valid: true, data };
}

const NOTICE_PROJECTION_QUERY = `*[_id == $id && _type == "notice"][0] {
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
 * Netlify Serverless Function (v2) for creating (POST) and updating (PUT/PATCH)
 * Sanity `notice` documents using the server-side `SANITY_WRITE_TOKEN`.
 *
 * Security:
 * - Authenticated via `Authorization: Bearer <NOTICE_ADMIN_SECRET>` (constant-time verification).
 * - Reads `SANITY_PROJECT_ID`, `SANITY_DATASET`, and `SANITY_WRITE_TOKEN` strictly at runtime.
 * - Verifies `_type == "notice"` before updating any document to prevent cross-type writes.
 * - Never exposes secrets, tokens, or internal Sanity errors in responses.
 */
export default async function handler(request: Request): Promise<Response> {
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        Allow: 'POST, PUT, PATCH, OPTIONS',
      },
    });
  }

  if (request.method !== 'POST' && request.method !== 'PUT' && request.method !== 'PATCH') {
    return jsonResponse({ success: false, message: 'Method Not Allowed' }, 405, {
      Allow: 'POST, PUT, PATCH, OPTIONS',
    });
  }

  const auth = verifyBearerSecret(request, 'NOTICE_ADMIN_SECRET');
  if (!auth.configured) {
    console.error('[manage-notice] Missing required server-side admin authentication secret.');
    return jsonResponse(
      {
        success: false,
        message: 'Notice management service is temporarily unavailable.',
      },
      503
    );
  }

  if (!auth.authorized) {
    return jsonResponse(
      {
        success: false,
        message: 'Unauthorized.',
      },
      401,
      { 'WWW-Authenticate': 'Bearer' }
    );
  }

  let parsedBody: unknown;
  try {
    parsedBody = await request.json();
  } catch {
    return jsonResponse(
      {
        success: false,
        message: 'Invalid JSON request body.',
      },
      400
    );
  }

  const { client: sanityWriteClient } = getServerSanityClient('manage-notice');
  if (!sanityWriteClient) {
    return jsonResponse(
      {
        success: false,
        message: 'CMS service is temporarily unavailable.',
      },
      503
    );
  }

  if (request.method === 'POST') {
    const validation = validateCreateNotice(parsedBody);
    if (!validation.valid || !validation.data) {
      return jsonResponse(
        {
          success: false,
          message: validation.message || 'Invalid notice data.',
          fieldErrors: validation.fieldErrors,
        },
        400
      );
    }

    try {
      const duplicateCount = await sanityWriteClient.fetch<number>(
        `count(*[_type == "notice" && noticeId == $noticeId])`,
        { noticeId: validation.data.noticeId }
      );
      if (duplicateCount > 0) {
        return jsonResponse(
          {
            success: false,
            message: 'A notice with this Notice ID already exists.',
            fieldErrors: { noticeId: 'Notice ID must be unique.' },
          },
          409
        );
      }

      const documentPayload: Record<string, unknown> = {
        _type: 'notice',
        noticeId: validation.data.noticeId,
        date: validation.data.date,
        content: validation.data.content,
      };

      if (validation.data.fileAssetId) {
        documentPayload.file = {
          _type: 'file',
          asset: {
            _type: 'reference',
            _ref: validation.data.fileAssetId,
          },
        };
      }

      const created = await sanityWriteClient.create(documentPayload as { _type: string });
      const hydrated = await sanityWriteClient.fetch(NOTICE_PROJECTION_QUERY, { id: created._id });

      return jsonResponse(
        {
          success: true,
          notice: hydrated || {
            _id: created._id,
            noticeId: validation.data.noticeId,
            date: validation.data.date,
            content: validation.data.content,
          },
          message: 'Notice created successfully.',
        },
        201
      );
    } catch (err) {
      console.error(
        '[manage-notice] Failed to create notice in Sanity:',
        err instanceof Error ? err.message : 'Unknown error'
      );
      return jsonResponse(
        {
          success: false,
          message: 'Unable to create notice. Please try again later.',
        },
        500
      );
    }
  }

  // PUT / PATCH: update an existing notice document
  const validation = validateUpdateNotice(parsedBody);
  if (!validation.valid || !validation.data) {
    return jsonResponse(
      {
        success: false,
        message: validation.message || 'Invalid notice update data.',
        fieldErrors: validation.fieldErrors,
      },
      400
    );
  }

  try {
    const existing = await sanityWriteClient.fetch<{ _id: string; noticeId?: string } | null>(
      `*[_id == $id && _type == "notice"][0]{ _id, noticeId }`,
      { id: validation.data.documentId }
    );

    if (!existing) {
      return jsonResponse(
        {
          success: false,
          message: 'Notice not found.',
        },
        404
      );
    }

    if (validation.data.noticeId && validation.data.noticeId !== existing.noticeId) {
      const publishedId = existing._id.replace(/^drafts\./, '');
      const duplicateCount = await sanityWriteClient.fetch<number>(
        `count(*[_type == "notice" && noticeId == $noticeId && !(_id in [$draftId, $publishedId])])`,
        {
          noticeId: validation.data.noticeId,
          draftId: `drafts.${publishedId}`,
          publishedId,
        }
      );
      if (duplicateCount > 0) {
        return jsonResponse(
          {
            success: false,
            message: 'Another notice with this Notice ID already exists.',
            fieldErrors: { noticeId: 'Notice ID must be unique.' },
          },
          409
        );
      }
    }

    const fieldsToSet: Record<string, unknown> = {};
    if (validation.data.noticeId !== undefined) fieldsToSet.noticeId = validation.data.noticeId;
    if (validation.data.date !== undefined) fieldsToSet.date = validation.data.date;
    if (validation.data.content !== undefined) fieldsToSet.content = validation.data.content;
    if (validation.data.fileAssetId) {
      fieldsToSet.file = {
        _type: 'file',
        asset: {
          _type: 'reference',
          _ref: validation.data.fileAssetId,
        },
      };
    }

    let patch = sanityWriteClient.patch(existing._id);
    if (Object.keys(fieldsToSet).length > 0) {
      patch = patch.set(fieldsToSet);
    }
    if (validation.data.removeFile) {
      patch = patch.unset(['file']);
    }

    await patch.commit();
    const hydrated = await sanityWriteClient.fetch(NOTICE_PROJECTION_QUERY, { id: existing._id });

    return jsonResponse(
      {
        success: true,
        notice: hydrated,
        message: 'Notice updated successfully.',
      },
      200
    );
  } catch (err) {
    console.error(
      '[manage-notice] Failed to update notice in Sanity:',
      err instanceof Error ? err.message : 'Unknown error'
    );
    return jsonResponse(
      {
        success: false,
        message: 'Unable to update notice. Please try again later.',
      },
      500
    );
  }
}
