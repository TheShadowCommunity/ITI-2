import { siteImages } from './assets';

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'kirti-sharma',
    name: 'Kirti Sharma',
    role: 'UP Government',
    quote: 'ट्रस्ट में ऐसे अनुभवी पेशेवरों की टीम शामिल है, जिन्हें अकादमिक कार्यक्रमों और संस्थानों का एक दशक से भी अधिक समय का प्रबंधन अनुभव है। ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है। ट्रस्ट में ऐसे अनुभवी पेशेवरों की टीम शामिल है, जिन्हें अकादमिक कार्यक्रमों और संस्थानों का एक दशक से भी अधिक समय का प्रबंधन अनुभव है, ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है।',
    avatar: siteImages.testimonials.kirtiSharma,
  },
  {
    id: 'john-anderson',
    name: 'John Anderson',
    role: 'CEO at InnovateTech',
    quote: 'व्यावसायिक शिक्षा और तकनीकी प्रशिक्षण की गुणवत्ता अत्यंत सराहनीय है। छात्रों को व्यावहारिक लैब और उद्योग मानकों पर तैयार किया जाता है, जिससे वे प्रथम दिन से ही उत्पादन और तकनीकी कार्यों में अपना योगदान देने में सक्षम होते हैं।',
    avatar: siteImages.testimonials.johnAnderson,
  },
  {
    id: 'rahul-verma',
    name: 'Rahul Verma',
    role: 'Tata Motors Apprentice',
    quote: 'न्यू लखनऊ सिटी प्राइवेट आईटीआई से इलेक्ट्रीशियन ट्रेड में प्रशिक्षण प्राप्त करने के बाद मुझे सीधे कैंपस प्लेसमेंट के माध्यम से प्रतिष्ठित ऑटोमोबाइल कंपनी में अवसर प्राप्त हुआ। यहाँ के शिक्षक अत्यंत सहयोगी और अनुभवी हैं।',
    avatar: siteImages.testimonials.kirtiSharma,
  },
];
