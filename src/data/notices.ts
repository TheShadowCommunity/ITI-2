import { NoticeItem } from '../types/notice';

/**
 * Initial mock notices matching the Figma screenshots.
 * 
 * SANITY INTEGRATION SEAM:
 * When Sanity CMS is connected, replace the mock source in `src/services/noticeService.ts`
 * with `client.fetch(...)`. This mock array serves as the fallback / visual testing data.
 */
export const mockNotices: NoticeItem[] = [
  {
    id: 'notice-1',
    date: '17 Jul 2026',
    time: '19:30',
    title: 'ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है। ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है।',
    downloadUrl: '#',
    fileSize: '450 KB',
  },
  {
    id: 'notice-2',
    date: '17 Jul 2026',
    time: '19:30',
    title: 'ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है।',
    downloadUrl: '#',
    fileSize: '320 KB',
  },
  {
    id: 'notice-3',
    date: '17 Jul 2026',
    time: '19:30',
    title: 'ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है। ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है।',
    downloadUrl: '#',
    fileSize: '510 KB',
  },
  {
    id: 'notice-4',
    date: '17 Jul 2026',
    time: '19:30',
    title: 'ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है।',
    downloadUrl: '#',
    fileSize: '290 KB',
  },
];
