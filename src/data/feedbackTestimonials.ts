/**
 * @file Feedback testimonials data file for the dedicated Feedback page
 * Independent of the homepage carousel data to prevent any unintended coupling.
 */

export interface FeedbackTestimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export const feedbackTestimonials: FeedbackTestimonial[] = [
  {
    id: 'kirti-sharma',
    name: 'Kirti Sharma',
    role: 'UP Government',
    quote:
      'ट्रस्ट में ऐसे अनुभवी पेशेवरों की टीम शामिल है, जिन्हें अकादमिक कार्यक्रमों और संस्थानों का एक दशक से भी अधिक समय का प्रबंधन अनुभव है ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है ट्रस्ट में ऐसे अनुभवी पेशेवरों की टीम शामिल है, जिन्हें अकादमिक कार्यक्रमों और संस्थानों का एक दशक से भी अधिक समय का प्रबंधन अनुभव है ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है',
    avatar: '/images/avatar-kirti.png',
  },
  {
    id: 'john-anderson',
    name: 'John Anderson',
    role: 'CEO at InnovateTech',
    quote:
      'Their attention to detail and creative approach completely transformed our website into a modern, engaging, and highly functional platform. We\'ve seen significant growth in user engagement since the relaunch. I highly recommend their expertise to any company seeking professional digital solutions.',
    avatar: '/images/avatar-john.png',
  },
  {
    id: 'rahul-verma',
    name: 'Rahul Verma',
    role: 'Tata Motors Apprentice',
    quote:
      'न्यू लखनऊ सिटी प्राइवेट आईटीआई से इलेक्ट्रीशियन ट्रेड में प्रशिक्षण प्राप्त करने के बाद मुझे सीधे कैंपस प्लेसमेंट के माध्यम से प्रतिष्ठित ऑटोमोबाइल कंपनी में अवसर प्राप्त हुआ। यहाँ के शिक्षक अत्यंत सहयोगी और अनुभवी हैं। प्रैक्टिकल लैब में आधुनिक उपकरणों पर अभ्यास से कार्यस्थल का वास्तविक अनुभव प्राप्त हुआ।',
    avatar: '/images/avatar-kirti.png',
  },
  {
    id: 'priya-singh',
    name: 'Priya Singh',
    role: 'Fashion Designing Graduate',
    quote:
      'संस्थान की सिलाई एवं फैशन डिजाइनिंग लैब में व्यावहारिक प्रशिक्षण ने मुझे स्वरोजगार स्थापित करने का आत्मविश्वास प्रदान किया। शिक्षकों का व्यक्तिगत मार्गदर्शन और उद्योग-उन्मुख पाठ्यक्रम हमारे उज्ज्वल भविष्य की मजबूत नींव है।',
    avatar: '/images/avatar-john.png',
  },
];
