import React from 'react';
import { tradesData } from '../data/trades';

export const TradesSection: React.FC = () => {
  return (
    <section id="trades" className="py-16 lg:py-24 bg-navy-900">
      <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
        {/* Section Heading with Active Indicator */}
             <div className="mb-[48px] lg:mb-[72px]">
          <h2 className="text-[34px] lg:text-[56px] font-medium font-serat text-neutral-200 tracking-tight">
             व्यवसायिक पाठ्यक्रम (Trades)
          </h2>
          <div className="w-[150px] h-[8px] lg:w-[200px] lg:h-[12px] bg-yellow-600 mt-[12px] rounded-full" />
        </div>
       

        {/* ===================== DESKTOP 3x2 GRID (Hidden on mobile) ===================== */}
        <div className="hidden lg:grid grid-cols-3 gap-6 xl:gap-8">
          {tradesData.map((trade) => (
            <div
              key={trade.id}
              className="bg-white text-navy-800 rounded-[16px] overflow-hidden shadow-md flex flex-col justify-between border border-white/10 group hover:shadow-xl transition-all duration-200"
            >
              {/* Content Panel */}
              <div className="p-5 xl:p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-[18px] xl:text-[20px] font-medium text-navy-800 font-hindi leading-snug">
                    {trade.titleHindi}
                  </h3>
                  <span className="block text-[12px] xl:text-[13px] text-navy-500 mb-2.5 xl:mb-3 font-sans">
                    {trade.titleEnglish}
                  </span>
                  <p className="text-[12px] lg:text-[14px] xl:text-[16px] leading-[20px] xl:leading-[22px] text-navy-500 font-hindi line-clamp-3">
                    {trade.description}
                  </p>
                </div>
                <div className="mt-4 xl:mt-5 pt-1">
                  <a
                    href="#enquiry"
                    className="inline-flex items-center text-[13px] font-bold text-yellow-700 gap-1"
                  >
                    Learn More 
                    <div className="">
                      <img src="/assets/icons/btn-arrow-right.svg" alt="" className="w-full h-full" />
                    </div>
                  </a>
                </div>
              </div>

              {/* Edge-attached image at bottom */}
              <div className="w-full h-[160px] xl:h-[180px] bg-slate-200 overflow-hidden relative">
                <img
                  src={trade.image}
                  alt={`${trade.titleHindi} ${trade.titleEnglish}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width={400}
                  height={180}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ===================== MOBILE HORIZONTAL CARDS (398 x 176 px, 40px gap, alternating image) ===================== */}
        <div className="flex lg:hidden flex-col gap-[40px] w-full max-w-[398px] mx-auto">
          {tradesData.map((trade, idx) => {
            const isImageLeft = idx % 2 === 0;

            return (
              <div
                key={`mob-${trade.id}`}
                className="w-full h-[176px] bg-white text-navy-800 rounded-[16px] overflow-hidden shadow-sm flex items-stretch border border-white/10"
              >
                {/* When Image is on Left */}
                {isImageLeft && (
                  <div className="w-[161px] h-[176px] flex-shrink-0 bg-slate-200 overflow-hidden relative">
                    <img
                      src={trade.image}
                      alt={`${trade.titleHindi} ${trade.titleEnglish}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={161}
                      height={176}
                    />
                  </div>
                )}

                {/* Content Panel: 237 x 176 px */}
                <div className="w-[237px] h-[176px] p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-[18px] font-medium text-navy-800 font-hindi leading-snug truncate">
                      {trade.titleHindi}
                    </h3>
                    <span className="block text-[12px]  text-navy-500 mb-1 font-sans truncate">
                      {trade.titleEnglish}
                    </span>
                    <p className="text-[14px] leading-[17px] text-navy-500 font-hindi line-clamp-2">
                      {trade.description}
                    </p>
                  </div>
                  <div>
                    <a
                      href="#enquiry"
                      className="inline-flex items-center text-[14px] font-medium text-yellow-700 gap-1"
                    >
                      Learn More 
                        <div className="">
                      <img src="/assets/icons/btn-arrow-right.svg" alt="" className="w-full h-full" />
                    </div>
                    </a>
                  </div>
                </div>

                {/* When Image is on Right */}
                {!isImageLeft && (
                  <div className="w-[161px] h-[176px] flex-shrink-0 bg-slate-200 overflow-hidden relative">
                    <img
                      src={trade.image}
                      alt={`${trade.titleHindi} ${trade.titleEnglish}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width={161}
                      height={176}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
