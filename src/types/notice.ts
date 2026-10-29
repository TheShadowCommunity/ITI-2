export interface NoticeItem {
  id: string;
  date: string;
  time: string;
  title: string;
  category?: string;
  downloadUrl?: string;
  fileSize?: string;
}

export interface NoticeState {
  items: NoticeItem[];
  isLoading: boolean;
  error: string | null;
}
