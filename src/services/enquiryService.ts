import { EnquiryFormData } from '../types/enquiry';

export interface SubmissionResult {
  success: boolean;
  id?: string;
  submittedAt?: string;
  message: string;
}

export class EnquirySubmissionError extends Error {
  fieldErrors?: Partial<Record<keyof EnquiryFormData, string>>;

  constructor(message: string, fieldErrors?: Partial<Record<keyof EnquiryFormData, string>>) {
    super(message);
    this.name = 'EnquirySubmissionError';
    this.fieldErrors = fieldErrors;
  }
}

const ENQUIRY_ENDPOINT = '/.netlify/functions/submit-enquiry';

/**
 * Submits validated EnquiryForm data to the secure Netlify serverless function,
 * which validates, sanitizes, and persists the document into Sanity CMS.
 * No email service is invoked and no Sanity write token is ever exposed to the browser.
 */
export async function submitEnquiryForm(data: EnquiryFormData): Promise<SubmissionResult> {
  let response: Response;
  try {
    response = await fetch(ENQUIRY_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        category: data.category,
        name: data.name,
        email: data.email,
        mobile: data.mobile,
        comment: data.comment,
      }),
    });
  } catch {
    throw new EnquirySubmissionError(
      'नेटवर्क त्रुटि: सर्वर से संपर्क नहीं हो सका। कृपया अपना इंटरनेट कनेक्शन जांचें और पुनः प्रयास करें।'
    );
  }

  let payload: {
    success?: boolean;
    id?: string;
    submittedAt?: string;
    message?: string;
    fieldErrors?: Partial<Record<keyof EnquiryFormData, string>>;
  } | null = null;

  try {
    payload = await response.json();
  } catch {
    payload = null;
  }

  if (!response.ok || !payload?.success) {
    throw new EnquirySubmissionError(
      payload?.message || 'फॉर्म सबमिट करने में समस्या आई। कृपया पुनः प्रयास करें।',
      payload?.fieldErrors
    );
  }

  return {
    success: true,
    id: payload.id,
    submittedAt: payload.submittedAt,
    message:
      payload.message ||
      `धन्यवाद ${data.name}! आपकी पूछताछ सफलतापूर्वक दर्ज कर ली गई है।`,
  };
}
