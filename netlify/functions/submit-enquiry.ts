import { getServerSanityClient, jsonResponse } from './lib/sanityServer';

const ALLOWED_CATEGORIES = ['admission', 'career', 'feedback', 'complain', 'other'] as const;
type AllowedCategory = (typeof ALLOWED_CATEGORIES)[number];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MOBILE_REGEX = /^\d{10}$/;
const CONTROL_CHARS_REGEX = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;

export interface SanitizedEnquiryPayload {
  category: AllowedCategory;
  name: string;
  email: string;
  mobile: string;
  comment: string;
}

export interface ValidationOutcome {
  valid: boolean;
  data?: SanitizedEnquiryPayload;
  fieldErrors?: Record<string, string>;
  message?: string;
}

function sanitizeText(value: unknown, maxLength: number): string {
  if (typeof value !== 'string') return '';
  return value.replace(CONTROL_CHARS_REGEX, '').trim().slice(0, maxLength);
}

/**
 * Validates and sanitizes incoming EnquiryForm submissions server-side.
 * Mirrors the exact fields and rules of `src/components/EnquiryForm.tsx`.
 */
export function validateAndSanitizeEnquiry(rawBody: unknown): ValidationOutcome {
  if (!rawBody || typeof rawBody !== 'object' || Array.isArray(rawBody)) {
    return {
      valid: false,
      message: 'अमान्य अनुरोध डेटा। कृपया फॉर्म दोबारा भरें।',
    };
  }

  const body = rawBody as Record<string, unknown>;
  const fieldErrors: Record<string, string> = {};

  const rawCategory = typeof body.category === 'string' ? body.category.trim().toLowerCase() : '';
  const isValidCategory = (ALLOWED_CATEGORIES as readonly string[]).includes(rawCategory);
  if (!isValidCategory) {
    fieldErrors.category = 'कृपया वैध पूछताछ श्रेणी चुनें (Valid category is required)';
  }

  const name = sanitizeText(body.name, 120);
  if (!name) {
    fieldErrors.name = 'कृपया अपना नाम दर्ज करें (Name is required)';
  }

  const email = sanitizeText(body.email, 254).toLowerCase();
  if (!email) {
    fieldErrors.email = 'कृपया अपना ईमेल पता दर्ज करें (Email is required)';
  } else if (!EMAIL_REGEX.test(email)) {
    fieldErrors.email = 'कृपया वैध ईमेल दर्ज करें (Valid email required)';
  }

  const rawMobile = sanitizeText(body.mobile, 20).replace(/[\s-]/g, '');
  if (!rawMobile) {
    fieldErrors.mobile = 'कृपया मोबाइल नंबर दर्ज करें (Mobile is required)';
  } else if (!MOBILE_REGEX.test(rawMobile)) {
    fieldErrors.mobile = 'कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें';
  }

  const comment = sanitizeText(body.comment, 2000);
  if (!comment) {
    fieldErrors.comment = 'कृपया अपना संदेश या प्रश्न लिखें (Message is required)';
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      valid: false,
      fieldErrors,
      message: 'कृपया सभी आवश्यक फ़ील्ड सही से भरें।',
    };
  }

  return {
    valid: true,
    data: {
      category: rawCategory as AllowedCategory,
      name,
      email,
      mobile: rawMobile,
      comment,
    },
  };
}

/**
 * Netlify Serverless Function (v2) for saving EnquiryForm submissions to Sanity CMS.
 *
 * Security:
 * - Reads `SANITY_PROJECT_ID`, `SANITY_DATASET`, and `SANITY_WRITE_TOKEN` strictly at runtime.
 * - Never hardcodes credentials or exposes tokens, stack traces, or internal Sanity errors.
 * - Saves directly to Sanity (`_type: 'formSubmission'`) with no email notifications.
 */
export default async function handler(request: Request): Promise<Response> {
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        Allow: 'POST, OPTIONS',
      },
    });
  }

  if (request.method !== 'POST') {
    return jsonResponse(
      {
        success: false,
        message: 'Method Not Allowed',
      },
      405
    );
  }

  let parsedBody: unknown;
  try {
    parsedBody = await request.json();
  } catch {
    return jsonResponse(
      {
        success: false,
        message: 'अमान्य JSON अनुरोध। कृपया पुनः प्रयास करें।',
      },
      400
    );
  }

  const validation = validateAndSanitizeEnquiry(parsedBody);
  if (!validation.valid || !validation.data) {
    return jsonResponse(
      {
        success: false,
        message: validation.message || 'कृपया सभी आवश्यक फ़ील्ड सही से भरें।',
        fieldErrors: validation.fieldErrors,
      },
      400
    );
  }

  const { client: sanityWriteClient } = getServerSanityClient('submit-enquiry');
  if (!sanityWriteClient) {
    return jsonResponse(
      {
        success: false,
        message: 'फॉर्म सेवा अस्थायी रूप से अनुपलब्ध है। कृपया थोड़ी देर बाद प्रयास करें।',
      },
      503
    );
  }

  try {
    const submittedAt = new Date().toISOString();
    const createdDoc = await sanityWriteClient.create({
      _type: 'formSubmission',
      category: validation.data.category,
      name: validation.data.name,
      email: validation.data.email,
      mobile: validation.data.mobile,
      comment: validation.data.comment,
      submittedAt,
    });

    return jsonResponse(
      {
        success: true,
        id: createdDoc._id,
        submittedAt,
        message: `धन्यवाद ${validation.data.name}! आपकी पूछताछ सफलतापूर्वक दर्ज कर ली गई है। हमारी टीम जल्द ही आपसे संपर्क करेगी।`,
      },
      201
    );
  } catch (err) {
    console.error(
      '[submit-enquiry] Failed to save form submission to Sanity:',
      err instanceof Error ? err.message : 'Unknown error'
    );
    return jsonResponse(
      {
        success: false,
        message: 'फॉर्म सबमिट करने में समस्या आई। कृपया पुनः प्रयास करें।',
      },
      500
    );
  }
}
