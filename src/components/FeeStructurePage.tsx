import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { feeStructureData, feePolicyPoints } from '../data/feeStructure';
import { siteImages } from '../data/assets';
import { navigateTo } from '../utils/navigation';

export const FeeStructurePage: React.FC = () => {
  // Update page title and scroll to top on mount
  useEffect(() => {
    document.title = 'Fees Structure | New Lucknow City Private ITI';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1F2A3C] selection:bg-[#F2B418] selection:text-[#14171C]">
      {/* 1. Shared Global Header */}
      <Header />

      <main className="flex-grow">
        {/* 2. Page Title Band with Gold Gradient Accent Line */}
        <section className="w-full bg-white pt-6 pb-4 sm:pt-7 sm:pb-5 lg:pt-8 lg:pb-6 border-b border-[#DDE1E7]/60">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-6 lg:gap-8">
              {/* Heading: "Fees Structure" in #1F2A3C */}
              <h1 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] 2xl:text-[52px] leading-[1.2] font-semibold text-[#1F2A3C] font-heading tracking-tight flex-shrink-0 m-0">
                Fees Structure
              </h1>

              {/* Active Accent Gradient Line */}
              <div
                className="w-full max-w-[850px] h-[5px] sm:h-[6px] lg:h-[7px] 2xl:h-[8px] rounded-full bg-gradient-to-r from-[#DDE1E7]/40 via-[#F2B418]/60 to-[#F2B418] flex-grow self-center"
                aria-hidden="true"
              />
            </div>
          </div>
        </section>

        {/* 3. Fee Structure Table & Policy Section */}
        <section className="w-full pt-6 sm:pt-8 lg:pt-10 pb-6 sm:pb-8 bg-white">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            {/* Fee Structure Table Container */}
            <div className="w-full overflow-hidden rounded-[10px] sm:rounded-[12px] border border-[#DDE1E7] shadow-xs bg-white">
              <div className="overflow-x-auto scrollbar-thin">
                <table className="w-full min-w-[560px] sm:min-w-[620px] border-collapse text-left" aria-label="Fee Structure Details">
                  <thead>
                    <tr className="bg-[#1F2A3C] text-white">
                      <th
                        scope="col"
                        className="py-3.5 sm:py-4 px-4 sm:px-6 text-[13px] sm:text-[14px] font-semibold tracking-wide w-[12%] sm:w-[10%] whitespace-nowrap"
                      >
                        S.No
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 sm:py-4 px-4 sm:px-6 text-[13px] sm:text-[14px] font-semibold tracking-wide w-[44%] sm:w-[45%]"
                      >
                        Trades
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 sm:py-4 px-4 sm:px-6 text-[13px] sm:text-[14px] font-semibold tracking-wide w-[22%] sm:w-[22%] whitespace-nowrap"
                      >
                        Duration
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 sm:py-4 px-4 sm:px-6 text-[13px] sm:text-[14px] font-semibold tracking-wide w-[22%] sm:w-[23%] whitespace-nowrap"
                      >
                        Fees
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EDF0F4] text-[13px] sm:text-[14px] lg:text-[15px] text-[#1F2A3C]">
                    {feeStructureData.map((row) => (
                      <tr
                        key={row.sNo}
                        className="bg-white hover:bg-[#F8FAFC] transition-colors"
                      >
                        <td className="py-4 sm:py-4.5 px-4 sm:px-6 font-medium text-[#5B6B80] whitespace-nowrap">
                          {row.sNo}
                        </td>
                        <td className="py-4 sm:py-4.5 px-4 sm:px-6 font-medium text-[#1F2A3C]">
                          {row.trades}
                        </td>
                        <td className="py-4 sm:py-4.5 px-4 sm:px-6 text-[#5B6B80] whitespace-nowrap">
                          {row.duration}
                        </td>
                        <td className="py-4 sm:py-4.5 px-4 sm:px-6 font-semibold text-[#1F2A3C] whitespace-nowrap">
                          {row.fees}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Subheading Banner: "शिक्षा शुल्क" (Slate Banner) */}
            <div className="mt-8 sm:mt-12 lg:mt-14 w-full">
              <div className="bg-[#5B6B80] rounded-[6px] sm:rounded-[8px] py-3 sm:py-3.5 px-4 text-center shadow-xs">
                <h2 className="text-white text-[19px] sm:text-[23px] lg:text-[25px] font-bold font-hindi tracking-wide m-0">
                  शिक्षा शुल्क
                </h2>
              </div>
            </div>

            {/* Policy Guidelines Numbered List */}
            <div className="mt-5 sm:mt-7 space-y-3 sm:space-y-3.5 text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.8] sm:leading-[1.85] text-[#2E3B4E] font-hindi">
              {feePolicyPoints.map((point) => (
                <div key={point.id} className="flex items-start gap-2 sm:gap-2.5">
                  <span className="font-semibold text-[#1F2A3C] flex-shrink-0 select-none">
                    {point.id}.
                  </span>
                  <p className="m-0">
                    {point.prefix}
                    {point.highlightedText && (
                      <strong className="font-bold text-[#B8860B]">
                        {point.highlightedText}
                      </strong>
                    )}
                    {point.suffix}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Three Feature Cards Section (Electrician & Fitter, Sewing and Fashion, Contact Us) */}
        <section className="w-full pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20 bg-white">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
              {/* Card 1: Electrician & Fitter */}
              <div
                onClick={() => navigateTo('/#trades')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigateTo('/#trades');
                  }
                }}
                className="group relative h-[260px] sm:h-[300px] lg:h-[330px] rounded-[16px] overflow-hidden cursor-pointer shadow-xs border border-[#DDE1E7] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-[#F2B418]"
              >
                <img
                  src={siteImages.feeFeatures.electrician}
                  alt="Electrician and Fitter trade training workshop at New Lucknow City Private ITI"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Vignette Overlay for Title Contrast */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex items-end p-6 sm:p-7"
                  aria-hidden="true"
                >
                  <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-white font-heading tracking-tight drop-shadow-sm">
                    Electrician & Fitter
                  </h3>
                </div>
              </div>

              {/* Card 2: Sewing and Fashion */}
              <div
                onClick={() => navigateTo('/#trades')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigateTo('/#trades');
                  }
                }}
                className="group relative h-[260px] sm:h-[300px] lg:h-[330px] rounded-[16px] overflow-hidden cursor-pointer shadow-xs border border-[#DDE1E7] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-[#F2B418]"
              >
                <img
                  src={siteImages.feeFeatures.sewing}
                  alt="Sewing and Fashion technology workshop at New Lucknow City Private ITI"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Vignette Overlay for Title Contrast */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex items-end p-6 sm:p-7"
                  aria-hidden="true"
                >
                  <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-white font-heading tracking-tight drop-shadow-sm">
                    Sewing and Fashion
                  </h3>
                </div>
              </div>

              {/* Card 3: Contact Us */}
              <div
                onClick={() => navigateTo('/contact')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigateTo('/contact');
                  }
                }}
                className="group relative h-[260px] sm:h-[300px] lg:h-[330px] rounded-[16px] overflow-hidden cursor-pointer shadow-xs border border-[#DDE1E7] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-[#F2B418]"
              >
                <img
                  src={siteImages.feeFeatures.contact}
                  alt="Contact New Lucknow City Private ITI administration and helpdesk"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Vignette Overlay for Title Contrast */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex items-end p-6 sm:p-7"
                  aria-hidden="true"
                >
                  <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-white font-heading tracking-tight drop-shadow-sm">
                    Contact Us
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 5. Shared Global Footer */}
      <Footer />
    </div>
  );
};
