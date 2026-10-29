import React from 'react';
import { siteImages } from '../data/assets';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 lg:py-16 bg-[#F4F5F7]">
      <div className="max-w-[1392px] mx-auto px-4 lg:px-0">
        {/* ===================== DESKTOP INTRODUCTION (3 Columns: 593 / 356 / 443 px) ===================== */}
        <div className="hidden lg:grid grid-cols-[593px_356px_443px] gap-0 items-start h-[392px]">
          {/* Column 1: Left content (593 x 392 px) */}
          <div className="w-[593px] h-[392px] flex flex-col justify-between pr-8">
            <div>
              {/* Eyebrow */}
              <span className="block text-[14px] leading-[22px] font-semibold text-[#5B6B80] tracking-wide mb-[10px]">
                About Our College
              </span>
              {/* Title: Montserrat SemiBold 36/45 px, two lines */}
              <h2 className="text-[36px] leading-[45px] font-semibold text-[#1F2A3C] font-heading tracking-tight mb-[24px]">
                New Lucknow City<br />Private ITI
              </h2>

              {/* Tags Group */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 flex items-center justify-center text-[#1F2A3C] flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="1.75" />
                      <line x1="16" y1="2" x2="16" y2="6" strokeWidth="1.75" />
                      <line x1="8" y1="2" x2="8" y2="6" strokeWidth="1.75" />
                      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="1.75" />
                    </svg>
                  </div>
                  <span className="font-hindi text-[#1F2A3C] font-medium text-[15px]">2019 में स्थापित</span>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 flex items-center justify-center text-[#1F2A3C] flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth="1.75" d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 3l9 7H3l9-7z" />
                    </svg>
                  </div>
                  <span className="font-hindi text-[#1F2A3C] font-medium text-[15px]">भारत सरकार NCVT द्वारा मान्यता प्राप्त</span>
                </div>
              </div>
            </div>

            {/* Desktop CTA: 212 x 56 px, 4px radius */}
            <div>
              <a
                href="#enquiry"
                className="inline-flex items-center justify-center w-[212px] h-[56px] bg-[#F2B418] hover:bg-[#D99A00] text-[#14171C] font-semibold text-[15px] rounded-[4px] shadow-xs transition-colors"
              >
                Go To Enquiry
              </a>
            </div>
          </div>

          {/* Column 2: Image slot (356 x 392 px, 16px radius) */}
          <div className="w-[356px] h-[392px] rounded-[16px] overflow-hidden bg-slate-200 border border-[#DDE1E7] flex-shrink-0">
            <img
              src={siteImages.aboutCampus}
              alt="New Lucknow City Private ITI Institute Campus"
              className="w-full h-full object-cover"
              loading="lazy"
              width={356}
              height={392}
            />
          </div>

          {/* Column 3: Description (443 x 392 px, inner width 403 px, Hind Regular 14px / 24px) */}
          <div className="w-[443px] h-[392px] pl-[40px] flex flex-col justify-start text-[14px] leading-[24px] text-[#2E3B4E] font-hindi">
            <p className="mb-4">
              न्यू लखनऊ सिटी प्राइवेट आईटीआई ने लखनऊ के सर्वश्रेष्ठ आईटीआई कॉलेजों में से एक के रूप में तेज़ी से अपनी पहचान बनाई है, जो छात्रों को उद्योग-प्रासंगिक कौशल और व्यावहारिक ज्ञान प्रदान करने के लिए समर्पित है। न्यू लखनऊ सिटी प्राइवेट इंडस्ट्रियल ट्रेनिंग इंस्टीट्यूट, जिसकी स्थापना 2019 में हुई थी, प्राउडली फिनिकल एजुकेशनल ट्रस्ट द्वारा प्रमोट किया गया है। यह ट्रस्ट भारतीय ट्रस्ट अधिनियम, 1882 (पंजीकरण संख्या: 5367) के अंतर्गत पंजीकृत है और इसका पंजीकृत कार्यालय 3 कैनाल स्ट्रीट, लखनऊ - 700014 में स्थित है।
            </p>
            <p>
              ट्रस्ट में ऐसे अनुभवी पेशेवरों की टीम शामिल है, जिन्हें अकादमिक कार्यक्रमों और संस्थानों का एक दशक से भी अधिक समय का प्रबंधन अनुभव है। ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है।
            </p>
          </div>
        </div>

        {/* ===================== MOBILE INTRODUCTION (Stacked: heading/tags -> image -> description) ===================== */}
        <div className="block lg:hidden w-full max-w-[398px] mx-auto space-y-6">
          {/* Header & Tags */}
          <div>
            <span className="block text-[14px] leading-[18px] font-semibold text-[#5B6B80] tracking-wide mb-2">
              About Our College
            </span>
            <h2 className="text-[32px] sm:text-[36px] leading-[40px] sm:leading-[45px] font-semibold text-[#1F2A3C] font-heading tracking-tight mb-4">
              New Lucknow City<br />Private ITI
            </h2>

            <div className="space-y-2 mb-2">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center text-[#1F2A3C]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="1.75" />
                    <line x1="16" y1="2" x2="16" y2="6" strokeWidth="1.75" />
                    <line x1="8" y1="2" x2="8" y2="6" strokeWidth="1.75" />
                    <line x1="3" y1="10" x2="21" y2="10" strokeWidth="1.75" />
                  </svg>
                </div>
                <span className="font-hindi text-[#1F2A3C] font-medium text-[14px]">2019 में स्थापित</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center text-[#1F2A3C]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeWidth="1.75" d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 3l9 7H3l9-7z" />
                  </svg>
                </div>
                <span className="font-hindi text-[#1F2A3C] font-medium text-[14px]">भारत सरकार NCVT द्वारा मान्यता प्राप्त</span>
              </div>
            </div>
          </div>

          {/* Image slot: 398 x 392 px, 16px radius */}
          <div className="w-full aspect-[398/392] max-h-[392px] rounded-[16px] overflow-hidden bg-slate-200 border border-[#DDE1E7]">
            <img
              src={siteImages.aboutCampus}
              alt="New Lucknow City Private ITI Institute Campus"
              className="w-full h-full object-cover"
              loading="lazy"
              width={398}
              height={392}
            />
          </div>

          {/* Description below image: Hind Regular 14px / 24px (CTA is hidden on mobile per spec) */}
          <div className="text-[14px] leading-[24px] text-[#2E3B4E] font-hindi space-y-3">
            <p>
              न्यू लखनऊ सिटी प्राइवेट आईटीआई ने लखनऊ के सर्वश्रेष्ठ आईटीआई कॉलेजों में से एक के रूप में तेज़ी से अपनी पहचान बनाई है, जो छात्रों को उद्योग-प्रासंगिक कौशल और व्यावहारिक ज्ञान प्रदान करने के लिए समर्पित है। न्यू लखनऊ सिटी प्राइवेट इंडस्ट्रियल ट्रेनिंग इंस्टीट्यूट, जिसकी स्थापना 2019 में हुई थी, प्राउडली फिनिकल एजुकेशनल ट्रस्ट द्वारा प्रमोट किया गया है। यह ट्रस्ट भारतीय ट्रस्ट अधिनियम, 1882 (पंजीकरण संख्या: 5367) के अंतर्गत पंजीकृत है और इसका पंजीकृत कार्यालय 3 कैनाल स्ट्रीट, लखनऊ - 700014 में स्थित है।
            </p>
            <p>
              ट्रस्ट में ऐसे अनुभवी पेशेवरों की टीम शामिल है, जिन्हें अकादमिक कार्यक्रमों और संस्थानों का एक दशक से भी अधिक समय का प्रबंधन अनुभव है। ट्रस्ट दो विशेष कोर्स प्रदान करता है और गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करने के लिए प्रतिबद्ध है।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
