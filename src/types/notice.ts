export interface SanityNoticeDocument {
  _id: string;
  noticeId?: string;
  date?: string;
  content?: string;
  fileUrl?: string | null;
  fileName?: string | null;
  fileSize?: number | null;
  fileMimeType?: string | null;
}

export interface NoticeItem {
  id: string;
  documentId?: string;
  noticeId?: string;
  date: string;
  time: string;
  title: string;
  content?: string;
  category?: string;
  downloadUrl?: string;
  attachmentUrl?: string;
  attachmentLabel?: string;
  href?: string;
  fileSize?: string;
  isoDate?: string;
}

export interface NoticeState {
  items: NoticeItem[];
  isLoading: boolean;
  error: string | null;
}
