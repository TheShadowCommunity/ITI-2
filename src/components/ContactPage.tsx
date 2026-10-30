import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { EnquiryForm } from './EnquiryForm';
import { siteImages } from '../data/assets';

export const ContactPage: React.FC = () => {
  // Update document title for SEO & reset scroll position
  useEffect(() => {
    document.title = 'Contact Us | New Lucknow City Private ITI';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1F2A3C] selection:bg-[#F2B418] selection:text-[#14171C]">
      {/* 1. Shared Site Header */}
      <Header />

      <main className="flex-grow">
        {/* 2. Page Title Band with Gold Gradient Accent Line */}
        <section className="w-full bg-white pt-6 pb-4 sm:pt-8 sm:pb-6 lg:pt-10 lg:pb-7 border-b border-[#DDE1E7]/60">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-6 lg:gap-8">
              {/* Heading: responsive fluid font size matching Guest Lectures and Hero scale */}
              <h1 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] 2xl:text-[56px] leading-[1.2] 2xl:leading-[70px] font-semibold text-[#1F2A3C] font-heading tracking-tight flex-shrink-0 m-0">
                Contact Us
              </h1>

              {/* Active Indicator / Gradient Line extending across to the right margin */}
              <div
                className="w-full max-w-[850px] h-[5px] sm:h-[6px] lg:h-[7px] 2xl:h-[8px] rounded-full bg-gradient-to-r from-[#DDE1E7]/40 via-[#F2B418]/60 to-[#F2B418] flex-grow self-center"
                aria-hidden="true"
              />
            </div>
          </div>
        </section>

        {/* 3. Contact Details 3-Column Info Row */}
        <section className="w-full py-8 sm:py-10 lg:py-12 bg-white">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
              {/* Block 1: Address */}
              <div className="flex items-start gap-4">
                <div className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full bg-[#F2B418]/15 text-[#8A6100] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-[#1F2A3C] font-heading">
                    Address
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-[#5B6B80] mt-1 leading-snug">
                    Mohan Road, Maunda, Lucknow, 226004
                  </p>
                </div>
              </div>

              {/* Block 2: Email */}
              <div className="flex items-start gap-4">
                <div className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full bg-[#F2B418]/15 text-[#8A6100] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-[#1F2A3C] font-heading">
                    Email
                  </h3>
                  <a
                    href="mailto:newlucknowcitypvtiti@gmail.com"
                    className="text-[13px] sm:text-[14px] text-[#5B6B80] hover:text-[#1F2A3C] transition-colors mt-1 block break-all leading-snug"
                  >
                    newlucknowcitypvtiti@gmail.com
                  </a>
                </div>
              </div>

              {/* Block 3: Mobile Number */}
              <div className="flex items-start gap-4">
                <div className="w-[38px] h-[38px] sm:w-[42px] sm:h-[42px] rounded-full bg-[#F2B418]/15 text-[#8A6100] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[15px] sm:text-[16px] font-bold text-[#1F2A3C] font-heading">
                    Mobile Number
                  </h3>
                  <p className="text-[13px] sm:text-[14px] text-[#5B6B80] mt-1 leading-snug">
                    8840012609, 9792361820, 9236013038,
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Main Interactive Section: Reused Enquiry Form + Location Map */}
        <section className="w-full pb-12 sm:pb-16 lg:pb-20 bg-white">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] 2xl:grid-cols-[809px_551px] gap-6 xl:gap-8 items-stretch">
              {/* Left Column: Direct reuse of the homepage EnquiryForm */}
              <div className="w-full max-w-[809px]">
                <EnquiryForm idPrefix="contact-page-enquiry" />
              </div>

              {/* Right Column: Campus Location Map Panel */}
              <div className="w-full h-full min-h-[460px] lg:min-h-[580px] rounded-[16px] overflow-hidden border border-[#DDE1E7] relative bg-slate-100 shadow-2xs">
                <img
                  src={siteImages.mapLocation}
                  alt="New Lucknow City Private ITI Location Map"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={551}
                  height={645}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Bottom Section: About College Overview & Campus Architecture Image */}
        <section className="w-full py-12 sm:py-16 lg:py-20 bg-white border-t border-[#DDE1E7]/60">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] 2xl:grid-cols-[550px_790px] gap-8 xl:gap-12 items-center">
              {/* Left Column: College Description & Badges */}
              <div className="flex flex-col justify-center text-[14px] leading-[24px] text-[#2E3B4E] font-hindi">
                <p className="mb-4">
                  न्यू लखनऊ सिटी प्राइवेट आईटीआई ने लखनऊ के सर्वश्रेष्ठ आईटीआई कॉलेजों में से एक के रूप में तेज़ी से अपनी पहचान बनाई है, जो छात्रों को उद्योग-प्रासंगिक कौशल और व्यावहारिक ज्ञान प्रदान करने के लिए समर्पित है। न्यू लखनऊ सिटी प्राइवेट इंडस्ट्रियल ट्रेनिंग इंस्टीट्यूट, जिसकी स्थापना 2019 में हुई थी, प्राउडली फिनिकल एजुकेशनल ट्रस्ट द्वारा प्रमोट किया गया है। यह ट्रस्ट भारतीय ट्रस्ट अधिनियम, 1882 (पंजीकरण संख्या: 5367) के अंतर्गत पंजीकृत है और इसका पंजीकृत कार्यालय 3 कैनाल स्ट्रीट, लखनऊ - 700014 में स्थित है।
                </p>
                <p className="mb-6">
                  ट्रस्ट में ऐसे अनुभवी पेशेवरों की टीम शामिल है, जिन्हें अकादमिक कार्यक्रमों और संस्थानों का एक दशक से भी अधिक समय का प्रबंधन अनुभव है। ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है।
                </p>

                {/* Metadata Tags Row */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm pt-1 border-t border-[#DDE1E7]/50">
                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 flex items-center justify-center text-[#1F2A3C] flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="1.75" />
                        <line x1="16" y1="2" x2="16" y2="6" strokeWidth="1.75" />
                        <line x1="8" y1="2" x2="8" y2="6" strokeWidth="1.75" />
                        <line x1="3" y1="10" x2="21" y2="10" strokeWidth="1.75" />
                      </svg>
                    </div>
                    <span className="font-hindi text-[#1F2A3C] font-medium text-[14px]">
                      2019 में स्थापित
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="w-5 h-5 flex items-center justify-center text-[#1F2A3C] flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeWidth="1.75" d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 3l9 7H3l9-7z" />
                      </svg>
                    </div>
                    <span className="font-hindi text-[#1F2A3C] font-medium text-[14px]">
                      भारत सरकार NCVT द्वारा मान्यता प्राप्त
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Campus Architecture Image */}
              <div className="w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[360px] xl:h-[400px] 2xl:h-[420px] rounded-[16px] overflow-hidden bg-slate-200 border border-[#DDE1E7] relative shadow-2xs">
                <img
                  src={siteImages.aboutCampus}
                  alt="New Lucknow City Private ITI Campus Architecture"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={790}
                  height={420}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 6. Shared Site Footer */}
      <Footer />
    </div>
  );
};
