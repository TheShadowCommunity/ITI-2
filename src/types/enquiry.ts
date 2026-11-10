export type EnquiryCategory = 'admission' | 'career' | 'feedback' | 'complain' | 'other';

export interface EnquiryFormData {
  category: EnquiryCategory;
  name: string;
  email: string;
  mobile: string;
  comment: string;
}

export interface EnquirySubmissionState {
  status: 'idle' | 'submitting' | 'success' | 'error';
  message: string | null;
  serverPendingNote?: string;
}
