import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { aboutUsData } from '../data/aboutUs';
import { navigateTo } from '../utils/navigation';

/**
 * Olive-green sprout seedling SVG icon matching the mobile and desktop headings
 */
const SproutIcon: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
    <div className="">
                      <img src="/assets/icons/double-arrow.svg" alt="" className={className} />
                    </div>
);

/**
 * Double chevron >> icon in vivid orange/gold matching the desktop headings
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

export const AboutUsPage: React.FC = () => {
  // Update document title and scroll to top on mount
  useEffect(() => {
    document.title = 'About Us | New Lucknow City Private ITI';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const { principalDesk, itiDetails, tradesSection, objectives, benefits, futurePathways, featureCards } = aboutUsData;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    navigateTo(href);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-navy-900 selection:bg-[#F2B418] selection:text-[#14171C]">
      {/* 1. Global Header Navigation */}
      <Header />

      <main className="flex-grow">
        {/* 2. Page Title Band with Gold Gradient Accent Line */}
        <section className="w-full bg-white py-[58px] px-[16px] lg:bg-[#F4F5F7] lg:px-[64px] lg:py-[65px]">
          <div className="max-w-[1392px] mx-auto ">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-6 lg:gap-8">
              {/* Heading: "About Us" */}
              <h1 className="text-[36px] md:text-[38px] lg:text-[48px] xl:text-[56px] leading-[1.2] font-semibold text-navy-900 font-heading font-serat tracking-tight flex-shrink-0 m-0">
                About Us
              </h1>

              {/* Active Accent Gradient Line */}
              <div
                className="w-full max-w-[850px] h-[5px] sm:h-[6px] lg:h-[7px] 2xl:h-[8px] rounded-full bg-gradient-to-r from-[#DDE1E7]/40 via-[#F2B418]/60 to-[#F2B418] flex-grow self-center"
                aria-hidden="true"
              />
            </div>
          </div>
        </section>

        {/* 3. Section 1: From Principal's Desk */}
        <section className="w-full py-[80px] px-[16px] bg-white lg:px-[64px]">
          <div className="max-w-[1392px] mx-auto">
            
            {/* ======================= DESKTOP LAYOUT (2 Columns) ======================= */}
            <div className="hidden lg:grid grid-cols-2 gap-10 xl:gap-14 items-start">
              {/* Left Column: Principal photo speaking + Hindi paragraphs + CTA button */}
              <div className="flex flex-col space-y-5">
                <div className="w-full rounded-[16px] xl:rounded-[20px] overflow-hidden border border-[#DDE1E7] bg-slate-100 shadow-xs">
                  <img
                    src={principalDesk.images.speechPhoto}
                    alt="Principal speaking at podium"
                    className="w-full h-[320px] xl:h-[360px] object-cover object-top"
                    loading="eager"
                  />
                </div>

                <div className="font-hindi text-[14px] xl:text-[15px] leading-[24px] xl:leading-[26px] text-navy-800 space-y-4">
                  {principalDesk.desktopHindiParagraphs.map((para, idx) => (
                    <p key={idx} className="text-justify">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={principalDesk.ctaButton.href}
                    onClick={(e) => handleLinkClick(e, principalDesk.ctaButton.href)}
                    className="inline-flex items-center justify-center px-7 py-3 bg-[#F2B418] hover:bg-[#D99A00] text-[#14171C] font-semibold text-[14px] xl:text-[15px] rounded-[8px] shadow-xs transition-colors"
                  >
                    {principalDesk.ctaButton.label}
                  </a>
                </div>
              </div>

              {/* Right Column: Heading + Gold bar + Gunjan Saxena + 2 Award Photos */}
              <div className="flex flex-col">
                <h2 className="text-[32px] xl:text-[56px] leading-[1.2] font-semibold text-navy-900 font-heading tracking-tight">
                  {principalDesk.title}
                </h2>

                {/* Gold horizontal accent bar */}
                <div className="w-[150px] h-[8px] bg-[#F2B418] rounded-full my-3 lg:w-[200px] lg:h-[12px]" />

                {/* Subtitle / Principal Name: Right aligned */}
                <div className="text-right text-navy-900 font-heading font-medium text-[16px] xl:text-[18px] mb-6">
                  {principalDesk.author}
                </div>

                {/* Two side-by-side award photos */}
                <div className="grid grid-cols-2 gap-4 xl:gap-6 mt-2">
                  <div className="rounded-[16px] overflow-hidden border border-[#DDE1E7] bg-slate-100 shadow-xs">
                    <img
                      src={principalDesk.images.awardPhoto1}
                      alt="Gunjan Saxena receiving award at Abhivyakti ceremony"
                      className="w-full h-[400px] xl:h-[450px] object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="rounded-[16px] overflow-hidden border border-[#DDE1E7] bg-slate-100 shadow-xs">
                    <img
                      src={principalDesk.images.awardPhoto2}
                      alt="Gunjan Saxena felicitated at New Lucknow City ITI event"
                      className="w-full h-[400px] xl:h-[450px] object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ======================= MOBILE LAYOUT (Stacked, strictly matching mobile design) ======================= */}
            <div className="block lg:hidden space-y-5">
              {/* Heading */}
              <div>
                <span className="block text-[24px] font-medium text-[#646362] tracking-wide mb-[32px] font-heading">
                  {principalDesk.title}
                </span>
                <h2 className="text-[24px]  font-medium text-[#2E3B4E] font-heading">
                  {principalDesk.author}
                </h2>
              </div>

              {/* Hindi Introductory Text */}
              <div className="font-hindi text-[14px] sm:text-[15px] leading-[24px] text-navy-800 space-y-3 text-justify">
                {principalDesk.mobileHindiParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Mobile CTA Button: Dark Red/Maroon */}
              <div>
                <a
                  href={principalDesk.ctaButton.href}
                  onClick={(e) => handleLinkClick(e, principalDesk.ctaButton.href)}
                  className="w-[212px] inline-flex items-center justify-center py-3 px-6 bg-yellow-500 text-[#14171C] font-medium text-[15px] rounded-[8px] shadow-xs transition-colors"
                >
                  {principalDesk.ctaButton.label}
                </a>
              </div>

              {/* Single Principal Speech Photo (Award photos omitted on mobile) */}
              <div className="w-full overflow-hidden border border-[#DDE1E7] bg-slate-100 shadow-xs mt-3">
                <img
                  src={principalDesk.images.speechPhoto}
                  alt="Principal speaking at podium"
                  className="w-full h-[240px] sm:h-[300px] object-cover object-top"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </section>

        {/* 4. Section 2: ITI का विवरण (ITI Details) */}
        <section className="w-full py-8 sm:py-10 lg:py-14 bg-white">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            
            {/* ======================= DESKTOP LAYOUT (2 Columns with Left 3-Photo Mosaic) ======================= */}
            <div className="hidden lg:grid grid-cols-[46%_54%] xl:grid-cols-[45%_55%] gap-8 xl:gap-12 items-start">
              
              {/* Left Column: 3-Photo Campus Mosaic */}
              <div className="flex flex-col space-y-4">
                {/* Top Wide: Institute Campus Building */}
                <div className="w-full h-[240px] xl:h-[260px] rounded-[16px] overflow-hidden border border-[#DDE1E7] bg-slate-200 shadow-xs">
                  <img
                    src={itiDetails.images.campus}
                    alt="New Lucknow City Private ITI Campus Building"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Bottom Row: 2 Workshop Photos */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-[220px] xl:h-[240px] rounded-[16px] overflow-hidden border border-[#DDE1E7] bg-slate-200 shadow-xs">
                    <img
                      src={itiDetails.images.workshop}
                      alt="Electrical lab equipment and training panel"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="h-[220px] xl:h-[240px] rounded-[16px] overflow-hidden border border-[#DDE1E7] bg-slate-200 shadow-xs">
                    <img
                      src={itiDetails.images.wiring}
                      alt="Students performing hands-on wiring practicals"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: ITI Description Content */}
              <div className="flex flex-col space-y-5">
                <div className="flex items-center gap-3">
                  <SproutIcon className="w-9 h-9 flex-shrink-0" />
                  <h2 className="text-[28px] lg:text-[36px] font-medium text-navy-900 font-hindi">
                    {itiDetails.title}
                  </h2>
                </div>

                <div className="font-hindi text-[14px] lg:text-[16px] leading-[24px] xl:leading-[26px] text-navy-500 space-y-3 text-justify">
                  {itiDetails.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Green/Slate Highlight Callout Box */}
                <div className="mt-2 text-navy-800 font-hindi font-medium text-[15px] text-semibold lg:text-[23px]">
                  {itiDetails.trainingTypesHeader}
                </div>

                <div className="font-hindi text-[14px] xl:text-[15px] leading-[24px] text-navy-800 space-y-4">
                  <p className="font-medium text-navy-800">{itiDetails.trainingTypesIntro}</p>

                  {itiDetails.trainingTypes.map((item) => (
                    <div key={item.id} className="space-y-1">
                      <h3 className="font-medium text-navy-800 text-[15px] xl:text-[16px]">
                        {item.title}
                      </h3>
                      <p className="text-[#3E4C5E] text-justify">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* ======================= MOBILE LAYOUT (Stacked, 3-photo mosaic omitted) ======================= */}
            <div className="block lg:hidden space-y-5">
              <div className="flex items-center gap-2.5">
                <SproutIcon className="w-8 h-8 text-[#627E58] flex-shrink-0" />
                <h2 className="text-[22px] sm:text-[24px] font-medium text-yellow-700 font-hindi">
                  {itiDetails.title}
                </h2>
              </div>

              <div className="font-hindi text-[14px] leading-[24px] text-navy-800 space-y-3 text-justify">
                {itiDetails.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Callout Box */}
              <div className="text-navy-800 font-hindi font-semibold text-[14px]">
                {itiDetails.trainingTypesHeader}
              </div>

              <div className="font-hindi text-[14px] leading-[24px] text-navy-800 space-y-3.5">
                <p className=" text-navy-500">{itiDetails.trainingTypesIntro}</p>

                {itiDetails.trainingTypes.map((item) => (
                  <div key={item.id} className="space-y-1">
                    <h3 className="font-medium text-yellow-700 text-[14px] sm:text-[15px]">
                      {item.title}
                    </h3>
                    <p className="text-[#3E4C5E] text-justify">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* 5. Section 3: व्यवसायिक विकल्प (Trades) */}
        <section className="w-full py-8 sm:py-10 lg:py-14 bg-white">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            
            {/* Heading: Double chevron on desktop, Sprout on mobile */}
            <div className="flex items-center gap-2.5 sm:gap-3 mb-2">
              
              <span className="inline-flex">
                <SproutIcon className="w-8 h-8 text-[#627E58]" />
              </span>
              <h2 className="text-[22px] sm:text-[26px] lg:text-[36px] font-semibold text-navy-800 font-hindi">
                {tradesSection.title}
              </h2>
            </div>

            <p className="font-hindi text-[14px] sm:text-[15px] text-navy-500 mt-[24px] mb-[24px]">
              {tradesSection.intro}
            </p>

            {/* ======================= DESKTOP LAYOUT (2 Dual Image Cards) ======================= */}
            <div className="hidden lg:grid grid-cols-2 gap-6 xl:gap-8 items-stretch">
              {tradesSection.trades.map((trade) => (
                <div
                  key={trade.id}
                  className="rounded-[16px] border border-navy-200 bg-[#DDE1E7] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="p-6 xl:p-7 space-y-[16px]">
                    <div>
                    <h3 className="font-medium text-navy-800 text-[17px] lg:text-[24px] font-hindi">
                      {trade.title}
                    </h3>
                    <p className="font-hindi text-[14px] lg:text-[16px] leading-[24px] xl:leading-[26px] text-navy-500 ">{trade.subtitle}</p>
                    </div>
                    <p className="font-hindi text-[14px] lg:text-[16px] leading-[24px] xl:leading-[26px] text-navy-500 text-justify">
                      {trade.desc}
                    </p>
                  </div>

                  <div className="w-full h-[220px] xl:h-[250px] overflow-hidden border-t border-[#DDE1E7] bg-slate-200">
                    <img
                      src={trade.image}
                      alt={trade.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* ======================= MOBILE LAYOUT (Text points + Dual photo underneath) ======================= */}
            <div className="block lg:hidden space-y-4">
              {tradesSection.trades.map((trade) => (
                <div key={trade.id} className="space-y-1.5 font-hindi">
                  <h3 className="font-medium text-yellow-700 text-[15px]">
                    {trade.title}
                  </h3>
                  <p className="text-[14px] leading-[23px] text-navy-500 text-justify">
                    {trade.desc}
                  </p>
                </div>
              ))}

              {/* Mobile dual photo: calculator & written test + hands typing on laptop */}
              <div className="w-full rounded-[14px] overflow-hidden border border-[#DDE1E7] bg-slate-100 shadow-xs mt-4">
                <img
                  src={tradesSection.mobileDualPhoto}
                  alt="Trades academic and computer practical training"
                  className="w-full h-[220px] sm:h-[260px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </section>

        {/* 6. Section 4: मुख्य उद्देश्य (Objectives) */}
        <section className="w-full py-8 sm:py-10 lg:py-12">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4">
            
              <span className="inline-flex">
                <SproutIcon className="w-8 h-8 text-[#627E58]" />
              </span>
              <h2 className="text-[22px] sm:text-[26px] lg:text-[36px] font-semibold lg:text-navy-800 font-hindi">
                {objectives.title}
              </h2>
            </div>

            <p className="font-hindi text-[14px] sm:text-[15px] xl:text-[16px] leading-[25px] xl:leading-[28px] text-navy-500 text-justify">
              {objectives.desc}
            </p>
          </div>
        </section>

        {/* 7. Section 5: ITI के लाभ (Benefits) */}
        <section className="w-full py-8 sm:py-10 lg:py-12">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3">
          
              <span className="inline-flex ">
                <SproutIcon className="w-8 h-8 text-[#627E58]" />
              </span>
              <h2 className="text-[22px] sm:text-[26px] lg:text-[36px] font-semibold lg:text-navy-800 font-hindi">
                {benefits.title}
              </h2>
            </div>

            <p className="font-hindi text-[14px] sm:text-[15px] text-navy-500 mb-6">
              {benefits.intro}
            </p>

            <div className="space-y-5 font-hindi">
              {benefits.points.map((point) => (
                <div key={point.id} className="space-y-1">
                  <h3 className="font-medium text-yellow-700 text-[15px] sm:text-[16px] xl:text-[17px]">
                    {point.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] xl:text-[15.5px] leading-[24px] xl:leading-[26px] text-navy-500 text-justify">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Section 6: ITI के बाद भविष्य (Future Career Pathways) */}
        <section className="w-full py-8 sm:py-10 lg:py-12 ">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            <div className="flex items-center gap-2.5 sm:gap-3 mb-3">
           
              <span className="inline-flex">
                <SproutIcon className="w-8 h-8 text-[#627E58]" />
              </span>
              <h2 className="text-[22px] sm:text-[26px] lg:text-[36px] font-semibold lg:text-navy-800 font-hindi">
                {futurePathways.title}
              </h2>
            </div>

            <p className="font-hindi text-[14px] sm:text-[15px] text-navy-500 mb-6">
              {futurePathways.intro}
            </p>

            <div className="space-y-4 font-hindi">
              {futurePathways.points.map((point) => (
                <div key={point.id} className="space-y-1">
                  <h3 className="font-medium text-yellow-700 text-[15px] sm:text-[16px]">
                    {point.title}
                  </h3>
                  <p className="text-[14px] sm:text-[15px] leading-[24px] text-[#3E4C5E] text-justify">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Section 7: Bottom 3 Feature Cards (Student's Achievements, Fees Structure, Contact Us) */}
        <section className="w-full py-10 sm:py-12 lg:py-16 bg-white border-t border-[#DDE1E7]/60">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {featureCards.map((card) => (
                <a
                  key={card.id}
                  href={card.href}
                  onClick={(e) => handleLinkClick(e, card.href)}
                  className="group relative rounded-[16px] overflow-hidden aspect-[4/3] sm:aspect-[16/11] bg-slate-200 border border-[#DDE1E7] shadow-xs hover:shadow-lg transition-all duration-300 block focus:outline-none focus:ring-2 focus:ring-[#F2B418] focus:ring-offset-2"
                  aria-label={`View ${card.title}`}
                >
                  {/* Card Background Image */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Dark Vignette Overlay for Text Legibility */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-opacity group-hover:from-black/90"
                    aria-hidden="true"
                  />

                  {/* Bottom-left Card Title */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between pointer-events-none">
                    <span className="font-heading font-semibold text-white text-[18px] sm:text-[20px] tracking-tight group-hover:text-[#F2B418] transition-colors">
                      {card.title}
                    </span>
                    <span
                      className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white group-hover:bg-[#F2B418] group-hover:text-[#14171C] transition-colors"
                      aria-hidden="true"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 10. Shared Global Footer */}
      <Footer />
    </div>
  );
};
