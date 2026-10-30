import { NoticeItem } from '../types/notice';

/**
 * Initial notices matching the Figma screenshots.
 * 
 * SANITY INTEGRATION SEAM:
 * When Sanity CMS is connected, replace the mock source in `src/services/noticeService.ts`
 * with `sanityClient.fetch(...)`. This dataset serves as the local fallback / repository data.
 */
export const mockNotices: NoticeItem[] = [
  {
    id: 'notice-1',
    date: '17 Jul 2026',
    time: '19:30',
    isoDate: '2026-07-17T19:30:00',
    title: 'ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है। ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है।',
    downloadUrl: '#',
    fileSize: '450 KB',
  },
  {
    id: 'notice-2',
    date: '17 Jul 2026',
    time: '19:30',
    isoDate: '2026-07-17T19:30:00',
    title: 'ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है।',
    downloadUrl: '#',
    fileSize: '320 KB',
  },
  {
    id: 'notice-3',
    date: '17 Jul 2026',
    time: '19:30',
    isoDate: '2026-07-17T19:30:00',
    title: 'ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है। ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है।',
    downloadUrl: '#',
    fileSize: '510 KB',
  },
  {
    id: 'notice-4',
    date: '17 Jul 2026',
    time: '19:30',
    isoDate: '2026-07-17T19:30:00',
    title: 'ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है।',
    downloadUrl: '#',
    fileSize: '290 KB',
  },
  {
    id: 'notice-5',
    date: '17 Jul 2026',
    time: '19:30',
    isoDate: '2026-07-17T19:30:00',
    title: 'ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है।',
    downloadUrl: '#',
    fileSize: '380 KB',
  },
];

/**
 * Isolated development fixtures for verifying pagination states (0, 1, 5, 6, 10, 11 notices).
 * Kept strictly isolated from production dataset per Section 6 of the Technical Specification.
 */
export const testFixtures: Record<string, NoticeItem[]> = {
  // Case 1: 0 notices -> page 1, empty state, no fake rows
  fixture_0: [],

  // Case 2: 1 notice -> page 1, 1 row
  fixture_1: [
    {
      id: 'fix-1',
      date: '17 Jul 2026',
      time: '19:30',
      isoDate: '2026-07-17T19:30:00',
      title: 'सत्र 2026-27 के लिए नए प्रवेश हेतु आधिकारिक सूचना एवं दिशा-निर्देश।',
      downloadUrl: '#',
    },
  ],

  // Case 3: 5 notices -> page 1, 5 rows
  fixture_5: [
    {
      id: 'fix-5-1',
      date: '20 Jul 2026',
      time: '10:00',
      isoDate: '2026-07-20T10:00:00',
      title: 'अखिल भारतीय व्यावसायिक परीक्षा (AITT) प्रायोगिक परीक्षा समय-सारिणी जारी।',
      downloadUrl: '#',
    },
    {
      id: 'fix-5-2',
      date: '18 Jul 2026',
      time: '14:30',
      isoDate: '2026-07-18T14:30:00',
      title: 'इलेक्ट्रीशियन एवं फिटर ट्रेड के छात्र-छात्राओं के लिए ऑन-कैंपस प्लेसमेंट ड्राइव।',
      downloadUrl: '#',
    },
    {
      id: 'fix-5-3',
      date: '17 Jul 2026',
      time: '19:30',
      isoDate: '2026-07-17T19:30:00',
      title: 'ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है।',
      downloadUrl: '#',
    },
    {
      id: 'fix-5-4',
      date: '15 Jul 2026',
      time: '11:15',
      isoDate: '2026-07-15T11:15:00',
      title: 'छात्रवृत्ति आवेदन पत्र जमा करने की अंतिम तिथि 30 जुलाई 2026 तक बढ़ाई गई।',
      downloadUrl: '#',
    },
    {
      id: 'fix-5-5',
      date: '10 Jul 2026',
      time: '09:45',
      isoDate: '2026-07-10T09:45:00',
      title: 'संस्थान के सभी विद्यार्थियों के लिए बायोमेट्रिक उपस्थिति प्रणाली की अनिवार्यता।',
      downloadUrl: '#',
    },
  ],

  // Case 4: 6 notices -> pages 1 & 2; page 1 has 5, page 2 has 1
  fixture_6: [
    {
      id: 'fix-6-1',
      date: '22 Jul 2026',
      time: '12:00',
      isoDate: '2026-07-22T12:00:00',
      title: 'वार्षिक कौशल प्रतियोगिता एवं विज्ञान प्रदर्शनी का आयोजन 5 अगस्त को।',
      downloadUrl: '#',
    },
    {
      id: 'fix-6-2',
      date: '20 Jul 2026',
      time: '10:00',
      isoDate: '2026-07-20T10:00:00',
      title: 'अखिल भारतीय व्यावसायिक परीक्षा (AITT) प्रायोगिक परीक्षा समय-सारिणी जारी।',
      downloadUrl: '#',
    },
    {
      id: 'fix-6-3',
      date: '18 Jul 2026',
      time: '14:30',
      isoDate: '2026-07-18T14:30:00',
      title: 'इलेक्ट्रीशियन एवं फिटर ट्रेड के छात्र-छात्राओं के लिए ऑन-कैंपस प्लेसमेंट ड्राइव।',
      downloadUrl: '#',
    },
    {
      id: 'fix-6-4',
      date: '17 Jul 2026',
      time: '19:30',
      isoDate: '2026-07-17T19:30:00',
      title: 'ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है।',
      downloadUrl: '#',
    },
    {
      id: 'fix-6-5',
      date: '15 Jul 2026',
      time: '11:15',
      isoDate: '2026-07-15T11:15:00',
      title: 'छात्रवृत्ति आवेदन पत्र जमा करने की अंतिम तिथि 30 जुलाई 2026 तक बढ़ाई गई।',
      downloadUrl: '#',
    },
    {
      id: 'fix-6-6',
      date: '10 Jul 2026',
      time: '09:45',
      isoDate: '2026-07-10T09:45:00',
      title: 'संस्थान के सभी विद्यार्थियों के लिए बायोमेट्रिक उपस्थिति प्रणाली की अनिवार्यता।',
      downloadUrl: '#',
    },
  ],

  // Case 5: 10 notices -> pages 1 & 2; both have 5 rows
  fixture_10: Array.from({ length: 10 }, (_, i) => ({
    id: `fix-10-${i + 1}`,
    date: `${25 - i} Jul 2026`,
    time: `${10 + (i % 6)}:30`,
    isoDate: `2026-07-${String(25 - i).padStart(2, '0')}T${String(10 + (i % 6)).padStart(2, '0')}:30:00`,
    title: `सूचना सं. ${i + 1}: न्यू लखनऊ सिटी प्राइवेट आईटीआई द्वारा तकनीकी प्रशिक्षण एवं कार्यशाला सूचना विवरण (${i + 1})।`,
    downloadUrl: '#',
  })),

  // Case 6: 11 notices -> pages 1, 2, 3; page 1 has 5, page 2 has 5, page 3 has 1
  fixture_11: Array.from({ length: 11 }, (_, i) => ({
    id: `fix-11-${i + 1}`,
    date: `${28 - i} Jul 2026`,
    time: `${9 + (i % 8)}:15`,
    isoDate: `2026-07-${String(28 - i).padStart(2, '0')}T${String(9 + (i % 8)).padStart(2, '0')}:15:00`,
    title: `सूचना सं. ${i + 1}: ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है (अनुभाग ${i + 1})।`,
    downloadUrl: '#',
  })),
};
