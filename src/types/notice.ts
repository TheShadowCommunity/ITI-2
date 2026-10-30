export interface NoticeItem {
  id: string;
  date: string;
  time: string;
  title: string;
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

