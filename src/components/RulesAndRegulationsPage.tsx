import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

/**
 * Double chevron >> icon matching desktop & mobile section headers
 */
const DoubleChevronIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M6 5L13 12L6 19"
      stroke="#E65100"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 5L20 12L13 19"
      stroke="#E65100"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RulesAndRegulationsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Rules & Regulations | New Lucknow City Private ITI';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1F2A3C] selection:bg-[#F2B418] selection:text-[#14171C]">
      {/* 1. Global Navigation Header */}
      <Header />

      <main className="flex-grow">
        {/* 2. Page Title Band with Gold Gradient Accent Line */}
        <section className="w-full bg-white pt-6 pb-5 sm:pt-7 sm:pb-6 lg:pt-8 lg:pb-7 border-b border-[#DDE1E7]/60">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            {/* Desktop Layout: Title & Subtitle with right-stretching active bar */}
            <div className="hidden md:flex flex-row items-center justify-between gap-6 lg:gap-10">
              <div className="flex-shrink-0">
                <h1 className="text-[34px] md:text-[40px] lg:text-[48px] 2xl:text-[54px] leading-[1.15] font-bold text-[#1F2A3C] font-heading tracking-tight m-0">
                  Rules & Regulations
                </h1>
                <p className="font-hindi text-[18px] lg:text-[22px] font-medium text-[#1F2A3C] mt-1.5 sm:mt-2 mb-0">
                  संस्थान के नियम एवं शर्तें
                </p>
              </div>

              {/* Active Accent Gradient Line */}
              <div
                className="w-full max-w-[850px] h-[5px] sm:h-[6px] lg:h-[7px] 2xl:h-[8px] rounded-full bg-gradient-to-r from-[#DDE1E7]/40 via-[#F2B418]/60 to-[#F2B418] flex-grow self-end mb-2"
                aria-hidden="true"
              />
            </div>

            {/* Mobile Layout: Stacked Title, Subtitle and Underline */}
            <div className="block md:hidden">
              <h1 className="text-[28px] sm:text-[34px] leading-[1.2] font-bold text-[#1F2A3C] font-heading tracking-tight m-0">
                Rules & Regulations
              </h1>
              <p className="font-hindi text-[17px] sm:text-[19px] font-medium text-[#1F2A3C] mt-2 mb-4">
                संस्थान के नियम एवं शर्तें
              </p>
              <div
                className="w-full max-w-[340px] h-[6px] rounded-full bg-gradient-to-r from-[#F2B418] via-[#F2B418] to-[#E5A812]"
                aria-hidden="true"
              />
            </div>
          </div>
        </section>

        {/* 3. Main Rules Content Container */}
        <section className="w-full py-8 sm:py-10 lg:py-14 bg-white">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            
            {/* Introductory Guidance Paragraph */}
            <p className="font-hindi text-[15px] sm:text-[16px] xl:text-[16.5px] leading-[26px] sm:leading-[28px] text-[#2E3B4E] mb-10 sm:mb-12 max-w-[1260px] text-justify">
              प्रशिक्षण के सुचारु संचालन, अनुशासित वातावरण तथा सभी प्रशिक्षणार्थियों के समुचित विकास हेतु कुछ नियम एवं शर्तों का पालन आवश्यक है। इन नियमों को ध्यान में रखते हुए प्रशिक्षण कार्यक्रम को प्रभावी व सुरक्षित बनाया गया है। सभी प्रशिक्षणार्थियों से अपेक्षा की जाती है कि वे इन नियमों का पालन ईमानदारी एवं जिम्मेदारी के साथ करें।
            </p>

            {/* =========================================================================
                SECTION 1: उपस्थिति (Attendance Rules)
                Manually authored list items with specific inline text highlights
               ========================================================================= */}
            <div className="mb-10 sm:mb-12 lg:mb-14">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6">
                <DoubleChevronIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#E65100] flex-shrink-0" />
                <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-bold text-[#1F2A3C] font-hindi tracking-tight m-0">
                  उपस्थिति
                </h2>
              </div>

              <ol className="space-y-4 sm:space-y-4.5 font-hindi text-[14px] sm:text-[15px] xl:text-[15.5px] leading-[25px] sm:leading-[27px] text-[#2E3B4E] max-w-[1280px]">
                <li className="text-justify">
                  1. संस्थान का प्रशिक्षण सत्र <strong className="font-bold text-[#8A6100]">अगस्त से जुलाई</strong> तक प्रस्तावित है, जिसमें छात्रों को प्रत्येक दिन 7 घंटे का प्रशिक्षण प्रदान किया जाएगा।
                </li>
                <li className="text-justify">
                  2. परीक्षा में बैठने के लिए <strong className="font-bold text-[#8A6100]">80 प्रतिशत</strong> उपस्थिति अनिवार्य है। अतः प्रशिक्षणार्थियों से अपेक्षा की जाती है कि वे नियमित रूप से कक्षा में उपस्थित रहें।
                </li>
                <li className="text-justify">
                  3. सार्वजनिक अवकाशों के अतिरिक्त, वर्ष में प्रशिक्षणार्थी को 12 दिनों का अवकाश दिया जा सकता है।
                </li>
                <li className="text-justify">
                  4. अस्वस्थ होने या चोट लगने की स्थिति में, चिकित्सा प्रमाण पत्र प्रस्तुत करने पर 15 दिनों का चिकित्सकीय अवकाश स्वीकृत किया जा सकता है।
                </li>
                <li className="text-justify">
                  5. प्रशिक्षणार्थी को अपनी उपस्थिति प्रत्येक माह के अंत में अपने पर्यवेक्षक से सत्यापित करवानी होगी; इसकी जिम्मेदारी प्रशिक्षणार्थी की स्वयं की होगी।
                </li>
              </ol>
            </div>

            {/* =========================================================================
                SECTION 2: शिक्षा शुल्क (Fee Rules)
                Manually authored list items with specific inline text highlights
               ========================================================================= */}
            <div className="mb-10 sm:mb-12 lg:mb-14">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6">
                <DoubleChevronIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#E65100] flex-shrink-0" />
                <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-bold text-[#1F2A3C] font-hindi tracking-tight m-0">
                  शिक्षा शुल्क
                </h2>
              </div>

              <ol className="space-y-4 sm:space-y-4.5 font-hindi text-[14px] sm:text-[15px] xl:text-[15.5px] leading-[25px] sm:leading-[27px] text-[#2E3B4E] max-w-[1280px]">
                <li className="text-justify">
                  1. प्रत्येक प्रशिक्षणार्थी को प्रशिक्षण शुल्क संस्थान के कार्यालय में प्रत्येक माह की <strong className="font-bold text-[#8A6100]">10 तारीख</strong> तक नकद अथवा ऑनलाइन भुगतान के माध्यम से जमा करना अनिवार्य है।
                </li>
                <li className="text-justify">
                  2. एक बार संस्थान में शुल्क जमा करने के पश्चात् किसी भी स्थिति में न तो वह शुल्क लौटाया जाएगा और न ही स्थानांतरित किया जाएगा।
                </li>
                <li className="text-justify">
                  3. बिना कोई ठोस अथवा विशेष कारण बताए यदि छात्र समय से अपना शुल्क जमा नहीं करता है तो उसका नाम संस्थान से कट कर दिया जाएगा अथवा उसे वार्षिक परीक्षा में बैठने की अनुमति प्रदान नहीं की जाएगी जिसके लिए प्रशिक्षणार्थी स्वयं उत्तरदायी होगा।
                </li>
                <li className="text-justify">
                  4. परीक्षा फॉर्म भरते समय निर्धारित परीक्षा शुल्क अलग से देना होगा।
                </li>
              </ol>
            </div>

            {/* =========================================================================
                SECTION 3: अनुशासन (Discipline Rules)
                Manually authored list items with individual styling and item 12 emphasis
               ========================================================================= */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2.5 sm:gap-3 mb-5 sm:mb-6">
                <DoubleChevronIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#E65100] flex-shrink-0" />
                <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-bold text-[#1F2A3C] font-hindi tracking-tight m-0">
                  अनुशासन
                </h2>
              </div>

              <ol className="space-y-4 sm:space-y-4.5 font-hindi text-[14px] sm:text-[15px] xl:text-[15.5px] leading-[25px] sm:leading-[27px] text-[#2E3B4E] max-w-[1280px]">
                <li className="text-justify">
                  1. सम्पूर्ण सत्र के दौरान संस्थान में प्रवेश करते समय सभी प्रशिक्षणार्थियों को अपना परिचय पत्र अपने पास रखना अनिवार्य होगा, जिसे संस्थान के निदेशक/प्रमुखायचार्य/प्रमुखआचार्या/सहायक निदेशक अथवा कार्मिक के कहने पर प्रस्तुत करना आवश्यक होगा। परिचय पत्र न दिखा पाने की स्थिति में संस्थान को उसके विरुद्ध दण्डात्मक कार्रवाई करने का सम्पूर्ण अधिकार होगा।
                </li>
                <li className="text-justify">
                  2. संस्थान परिसर में प्रवेश करने के पश्चात् तथा बाहर जाने से पूर्व, प्रशिक्षणार्थी को प्रत्येक दिन सर्वप्रथम संस्थान में स्थापित विज़िटर्स रजिस्टर (Visitor’s Register) में पूछी गई जानकारियों को भरना अनिवार्य है।
                </li>
                <li className="text-justify">
                  3. एक बार संस्थान में आ जाने के पश्चात् आप निर्धारित समय पर ही संस्थान से बाहर जा सकते हैं। विशेष परिस्थितियों में प्रमुखआचार्य/प्रमुखआचार्या की लिखित अनुमति से ही आपको संस्थान से बाहर जाने की अनुमति दी जाएगी।
                </li>
                <li className="text-justify">
                  4. संस्थान में लगातार तीन दिन देरी से आने पर आपको चेतावनी पत्र दिया जाएगा, जिसके बाद आप पर संस्थान के नियमों के अनुसार कार्रवाई की जाएगी।
                </li>
                <li className="text-justify">
                  5. संस्थान में मोबाइल फोन का उपयोग वर्जित है, अतः या तो आप अपना फोन न लाएँ या फिर स्विच ऑफ कर के संस्थान में जमा कर दें। विशेष परिस्थितियों में संस्थान के फोन द्वारा ज़रूरी जानकारी प्रदान की जा सकती है।
                </li>
                <li className="text-justify">
                  6. कोई भी प्रशिक्षणार्थी संस्थान परिसर में बिना किसी कारण के इधर-उधर नहीं घूमेगा और न ही कॉमन एरिया में या कक्षा के सामने खड़े होकर शोर करेगा।
                </li>
                <li className="text-justify">
                  7. प्रत्येक प्रशिक्षणार्थी संस्थान परिसर को स्वच्छ रखने में अपना दायित्व निभाएगा और संस्थान की दीवारों, खिड़कियों, दरवाज़ों आदि को अनावश्यक रूप से गंदा नहीं करेगा।
                </li>
                <li className="text-justify">
                  8. कोई भी प्रशिक्षणार्थी बिना अनुमति प्राप्त किए संस्थान के कार्यालय में प्रवेश नहीं करेगा और न ही अपने व्यक्तिगत कार्यों के लिए किसी बाहरी व्यक्ति से दबाव या सिफारिश करवाने का प्रयास करेगा।
                </li>
                <li className="text-justify">
                  9. प्रशिक्षणार्थियों के अतिरिक्त उनके साथ किसी भी अन्य बाहरी व्यक्ति का संस्थान परिसर में प्रवेश वर्जित है।
                </li>
                <li className="text-justify">
                  10. संस्थान में धूम्रपान करना, नशा युक्त पदार्थ/गुटखा खाना और नशा करना निषिद्ध है।
                </li>
                <li className="text-justify">
                  11. प्रशिक्षणार्थी संस्थान में कार्यरत सभी लोगों का सम्मान करेंगे और किसी के भी साथ अभद्र व्यवहार नहीं करेंगे।
                </li>
                {/* Rule 12: Distinct full golden-brown bold emphasis as shown in design */}
                <li className="text-justify font-bold text-[#8A6100]">
                  12. प्रमुखआचार्य/प्रमुखआचार्या ऐसे किसी भी प्रशिक्षणार्थी को एक बार चेतावनी देने के पश्चात् संस्थान से निष्कासित कर सकते/सकती हैं, जिनका व्यवहार संस्थान अनुशासन के हित में न हो।
                </li>
              </ol>
            </div>

          </div>
        </section>
      </main>

      {/* 4. Global Footer */}
      <Footer />
    </div>
  );
};
