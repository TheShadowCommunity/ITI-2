/**
 * @file Data file for About Us page content
 * Allows editing lecture/college details, principal desk, trades, and benefits
 * without modifying component markup.
 */

export interface PrincipalDeskData {
  eyebrow: string;
  title: string;
  author: string;
  desktopHindiParagraphs: string[];
  mobileHindiParagraphs: string[];
  ctaButton: {
    label: string;
    href: string;
  };
  images: {
    speechPhoto: string;
    awardPhoto1: string;
    awardPhoto2: string;
  };
}

export interface TrainingType {
  id: string;
  title: string;
  desc: string;
}

export interface ItiDetailsData {
  title: string;
  paragraphs: string[];
  trainingTypesHeader: string;
  trainingTypesIntro: string;
  trainingTypes: TrainingType[];
  images: {
    campus: string;
    workshop: string;
    wiring: string;
  };
}

export interface TradeItem {
  id: string;
  title: string;
  desc: string;
  image: string;
}

export interface TradesSectionData {
  title: string;
  intro: string;
  trades: TradeItem[];
  mobileDualPhoto: string;
}

export interface ObjectiveData {
  title: string;
  desc: string;
}

export interface BenefitPoint {
  id: number;
  title: string;
  desc: string;
}

export interface BenefitsData {
  title: string;
  intro: string;
  points: BenefitPoint[];
}

export interface FuturePathwayPoint {
  id: number;
  title: string;
  desc: string;
}

export interface FuturePathwaysData {
  title: string;
  intro: string;
  points: FuturePathwayPoint[];
}

export interface FeatureCard {
  id: string;
  title: string;
  image: string;
  href: string;
}

export const aboutUsData = {
  principalDesk: {
    eyebrow: "About Our College",
    title: "From Principal's Desk",
    author: "Gunjan Saxena",
    desktopHindiParagraphs: [
      "शिक्षा के माध्यम से ही हम अपने सपनों को साकार कर सकते हैं। हमारा संस्थान आपको तकनीकी शिक्षा और प्रशिक्षण प्रदान करने के लिए प्रतिबद्ध है, जिससे आप अपने करियर में सफलता प्राप्त कर सकें। हमारे अनुभवी शिक्षक और आधुनिक प्रशिक्षण सुविधाएं आपको उद्योग जगत में आवश्यक कौशल प्रदान करेंगी। हमारा उद्देश्य आपको न केवल तकनीकी रूप से सक्षम बनाना है, बल्कि आपको एक जिम्मेदार नागरिक बनाने का भी प्रयास करना है।",
      "हमें विश्वास है कि हमारे संस्थान में प्रदान की जाने वाली शिक्षा और प्रशिक्षण आपको अपने लक्ष्यों को प्राप्त करने में मदद करेगा और आपको एक सफल करियर बनाने में सहायक होगा। न्यू लखनऊ सिटी प्राइवेट आईटीआई में प्रवेश लेकर आप अपने भविष्य को एक नई दिशा दे सकते हैं। तो आइए, हमारे साथ जुड़कर अपने सपनों को साकार करने की दिशा में एक कदम उठाइए।"
    ],
    mobileHindiParagraphs: [
      "न्यू लखनऊ सिटी प्राइवेट आईटीआई ने लखनऊ के सर्वश्रेष्ठ आईटीआई कॉलेजों में से एक के रूप में तेजी से अपनी पहचान बनाई है, जो छात्रों को उद्योग-प्रासंगिक कौशल और व्यावहारिक ज्ञान प्रदान करने के लिए समर्पित है। न्यू लखनऊ सिटी प्राइवेट इंडस्ट्रियल ट्रेनिंग इंस्टीट्यूट, जिसकी स्थापना 2019 में हुई थी, प्राउडली पिनैकल एजुकेशनल ट्रस्ट द्वारा प्रमोट किया गया है। यह ट्रस्ट भारतीय ट्रस्ट अधिनियम, 1882 (पंजीकरण संख्या: 5367) के अंतर्गत पंजीकृत है और इसका पंजीकृत कार्यालय 3 कैनाल स्ट्रीट, लखनऊ - 700014 में स्थित है।",
      "ट्रस्ट में ऐसे अनुभवी पेशेवरों की टीम शामिल है, जिन्हें अकादमिक कार्यक्रमों और संस्थानों का एक दशक से भी अधिक समय का प्रबंधन अनुभव है। ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है। ट्रस्ट में ऐसे अनुभवी पेशेवरों की टीम शामिल है, जिन्हें अकादमिक कार्यक्रमों और संस्थानों का एक दशक से भी अधिक समय का प्रबंधन अनुभव है। ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है।"
    ],
    ctaButton: {
      label: "Go To Enquiry",
      href: "/#enquiry"
    },
    images: {
      speechPhoto: "/images/about/principal-speech.png",
      awardPhoto1: "/images/about/gunjan-award-1.png",
      awardPhoto2: "/images/about/gunjan-award-2.png"
    }
  } as PrincipalDeskData,

  itiDetails: {
    title: "ITI का विवरण",
    paragraphs: [
      "आईटीआई (Industrial Training Institute) एक प्रकार का औद्योगिक प्रशिक्षण संस्थान होता है, जो कि तकनीकी और गैर-तकनीकी दोनों क्षेत्रों में औद्योगिक स्तर की ट्रेनिंग प्रदान करता है।",
      "आईटीआई (Industrial Training Institute) एक प्रकार का औद्योगिक प्रशिक्षण संस्थान होता है, जो कि तकनीकी और गैर-तकनीकी दोनों क्षेत्रों में औद्योगिक स्तर की ट्रेनिंग प्रदान करता है। आईटीआई का संचालन प्रशिक्षण महानिदेशालय (DGT - Directorate General of Training) द्वारा किया जाता है, जो कि कौशल विकास और उद्यमिता मंत्रालय (Ministry of Skill Development & Entrepreneurship), भारत सरकार के अंतर्गत आता है। इसका उद्देश्य छात्रों को विभिन्न तकनीकी क्षेत्रों में प्रशिक्षण प्रदान करना है।",
      "इन संस्थानों को मुख्यतः उन छात्रों को ध्यान में रखकर स्थापित किया गया है, जो कि 10वीं या 12वीं कक्षा पास करने के बाद उच्च शिक्षा (Higher Studies) न करके सीधे तकनीकी शिक्षा (Technical Education) प्राप्त करना चाहते हैं।"
    ],
    trainingTypesHeader: "आईटीआई प्रशिक्षण आप किस प्रकार से प्राप्त कर सकते हैं?",
    trainingTypesIntro: "आईटीआई (औद्योगिक प्रशिक्षण संस्थान) का प्रशिक्षण आप दो प्रकार से प्राप्त कर सकते हैं:",
    trainingTypes: [
      {
        id: "ncvt",
        title: "1. राष्ट्रीय व्यावसायिक प्रशिक्षण परिषद (NCVT - National Council of Vocational Training)",
        desc: "यह केंद्र सरकार के अधीन कार्य करती है। इसके अंतर्गत मान्यता प्राप्त संस्थान देशभर में तकनीकी प्रशिक्षण प्रदान करते हैं।"
      },
      {
        id: "scvt",
        title: "2. राज्य व्यावसायिक प्रशिक्षण परिषद (SCVT - State Council of Vocational Training)",
        desc: "यह राज्य सरकार के अधीन कार्य करती है। इसके अंतर्गत मान्यता प्राप्त संस्थान संबंधित राज्य में तकनीकी प्रशिक्षण प्रदान करते हैं।"
      }
    ],
    images: {
      campus: "/images/about/campus-building.png",
      workshop: "/images/about/workshop-board.png",
      wiring: "/images/about/students-wiring.png"
    }
  } as ItiDetailsData,

  tradesSection: {
    title: "व्यवसायिक विकल्प (Trades)",
    intro: "आईटीआई के व्यवसायिक पाठ्यक्रम मुख्यतः दो प्रकार के होते हैं:",
    trades: [
      {
        id: "engineering",
        title: "1. इंजीनियरिंग ट्रेड्स (Engineering Trades)",
        desc: "यह ट्रेड्स पूरी तरह से तकनीकी (Technical) होते हैं। इन पाठ्यक्रमों में छात्रों को गणित, विज्ञान और विभिन्न तकनीकी विषयों का व्यावहारिक एवं सैद्धांतिक ज्ञान दिया जाता है।",
        image: "/images/about/trade-engineering.png"
      },
      {
        id: "non-engineering",
        title: "2. नॉन-इंजीनियरिंग ट्रेड्स (Non- Engineering Trades)",
        desc: "इन ट्रेड्स में तकनीकी विषय शामिल नहीं होते हैं। यह पाठ्यक्रम विज्ञान या तकनीकी विषयों से कम या कोई संबंध नहीं रखते हैं। इनमें छात्रों को सामान्य व्यावसायिक कौशल जैसे कंप्यूटर, सिलाई, डाटा एंट्री, स्टेनोग्राफी आदि का प्रशिक्षण दिया जाता है।",
        image: "/images/about/trade-non-engineering.png"
      }
    ],
    mobileDualPhoto: "/images/about/mobile-trade-photos.png"
  } as TradesSectionData,

  objectives: {
    title: "मुख्य उद्देश्य",
    desc: "आईटीआई का मुख्य उद्देश्य छात्रों को तकनीकी रूप से दक्ष बनाना और उन्हें विभिन्न औद्योगिक क्षेत्रों (Industrial Sectors) में कार्य करने के लिए तैयार करना है, ताकि उन्हें आगे चलकर इन क्षेत्रों में रोजगार के बेहतर अवसर प्राप्त हो सकें। आईटीआई की विशेषता यह है कि इसमें लिखित ज्ञान (Written Knowledge) की अपेक्षा प्रायोगिक ज्ञान (Practical Knowledge) पर अधिक ध्यान दिया जाता है। इसका परिणाम यह होता है कि छात्रों की व्यावहारिक दक्षता (Practical Skills) बेहतर होती है और उनके भीतर एक विशेष प्रकार की तकनीकी क्षमता (Technical Skill) का विकास होता है, जो भविष्य में उनके रोजगार और आत्मनिर्भरता के लिए सहायक सिद्ध होती है।"
  } as ObjectiveData,

  benefits: {
    title: "ITI के लाभ",
    intro: "आईटीआई प्रशिक्षण कई मायनों में फायदेमंद होता है। इसके कुछ मुख्य लाभ निम्नलिखित हैं:",
    points: [
      {
        id: 1,
        title: "1. कम लागत में प्रशिक्षण",
        desc: "आईटीआई प्रशिक्षण बहुत ही कम शुल्क में उपलब्ध होता है। जहाँ अन्य डिप्लोमा कोर्स करने में ₹1,00,000 से ₹1,50,000 तक खर्च हो सकता है, वहीं आईटीआई का पूरा कोर्स सिर्फ ₹16,000 से ₹36,000 के बीच में किया जा सकता है।"
      },
      {
        id: 2,
        title: "2. कम समय में पूरा कोर्स",
        desc: "आईटीआई का एक और बड़ा लाभ यह है कि इसका प्रशिक्षण बहुत कम समय में पूरा हो जाता है। कोर्स की अवधि आमतौर पर 6 महीने से 2 वर्ष तक होती है, जो अन्य डिग्री या डिप्लोमा कोर्स की तुलना में कहीं कम है।"
      },
      {
        id: 3,
        title: "3. सरकारी और निजी क्षेत्रों में रोजगार के अवसर",
        desc: "आईटीआई पास अभ्यर्थियों को विभिन्न सरकारी, अर्ध-सरकारी एवं निजी क्षेत्रों में रोजगार के अवसर मिलते हैं, जैसे: रेलवे, सेना (Army), नौसेना (Navy), वायुसेना (Air Force), पीएसयू कंपनियां जैसे: बीएचईएल (BHEL), गेल इंडिया (GAIL), सेल (SAIL), एनटीपीसी (NTPC), उत्तर प्रदेश पावर कॉर्पोरेशन लिमिटेड (UPPCL), निजी क्षेत्र की कंपनियां जैसे: टाटा मोटर्स (Tata Motors), मारुति सुजुकी (Maruti Suzuki), हीरो मोटोकॉर्प, TVS, बजाज आदि ये संस्थान समय-समय पर आईटीआई पास उम्मीदवारों के लिए भर्ती करते हैं।"
      },
      {
        id: 4,
        title: "4. स्वरोजगार के अवसर",
        desc: "आईटीआई का प्रशिक्षण स्वरोजगार में सहायक सिद्ध हुआ है तथा आईटीआई प्रशिक्षित व्यक्तियों को स्वरोज़गार हेतु सरकार द्वारा प्रधानमंत्री योजना के अंतर्गत बिना गारंटी के ऋण उपलब्ध कराया जाता है।"
      },
      {
        id: 5,
        title: "5. छात्रवृत्ति और प्रोत्साहन योजना",
        desc: "आईटीआई प्रशिक्षण के दौरान योग्य छात्रों को राज्य सरकार द्वारा निर्धारित नियमों के अनुसार छात्रवृत्ति और वित्तीय सहायता भी दी जाती है। इसके अलावा कुछ विशेष वर्गों (SC/ST/OBC/EWS) के छात्रों को अतिरिक्त सहायता दी जाती है।"
      }
    ]
  } as BenefitsData,

  futurePathways: {
    title: "ITI के बाद भविष्य",
    intro: "आईटीआई प्रशिक्षण पूरा करने के बाद आप निम्नलिखित मार्गों में करियर बना सकते हैं:",
    points: [
      {
        id: 1,
        title: "1. राष्ट्रीय अप्रेंटिसशिप प्रमाणपत्र (NAC):",
        desc: "विभिन्न उद्योगों में चल रहे अप्रेंटिसशिप कार्यक्रमों में भाग लेकर यह प्रमाणपत्र प्राप्त कर सकते हैं।"
      },
      {
        id: 2,
        title: "2. डिप्लोमा कोर्स (Lateral Entry):",
        desc: "डिप्लोमा इन इंजीनियरिंग (जैसे इलेक्ट्रिकल) में सीधे द्वितीय वर्ष में प्रवेश लिया जा सकता है।"
      },
      {
        id: 3,
        title: "3. प्रशिक्षक प्रशिक्षण (CITS):",
        desc: "ITI पास करने के बाद आप Crafts Instructor Training Scheme (CITS) के माध्यम से आईटीआई में प्रशिक्षक (Instructor) बन सकते हैं।"
      },
      {
        id: 4,
        title: "4. 12वीं के समकक्ष योग्यता:",
        desc: "NIOS के माध्यम से 12वीं की परीक्षा पास कर उच्च तकनीकी शिक्षा (जैसे पॉलिटेक्निक, बीटेक आदि) में प्रवेश ले सकते हैं।"
      }
    ]
  } as FuturePathwaysData,

  featureCards: [
    {
      id: "achievements",
      title: "Student's Achievements",
      image: "/images/notice-achievements.svg",
      href: "/notice"
    },
    {
      id: "fees",
      title: "Fees Structure",
      image: "/images/notice-fees.svg",
      href: "/fee-structure"
    },
    {
      id: "contact",
      title: "Contact Us",
      image: "/images/notice-contact.svg",
      href: "/contact"
    }
  ] as FeatureCard[]
};
