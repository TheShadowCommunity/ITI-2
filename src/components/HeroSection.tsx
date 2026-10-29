import React from 'react';
import { siteImages } from '../data/assets';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden lg:h-[807px]">
      {/* ===================== DESKTOP HERO (lg:flex, 1520 x 807 px) ===================== */}
      <div className="hidden lg:flex w-full h-[807px] max-w-[1520px] mx-auto">
        {/* Left text column: 638 x 807 px with 52px left inset */}
        <div className="w-[638px] h-full flex-shrink-0 flex flex-col justify-center pl-[52px] pr-8 z-10">
          <div className="w-[493px]">
            {/* 1. भविष्य को */}
            <p className="text-[30px] leading-[38px] font-semibold text-[#5B6B80] font-hindi m-0">
              भविष्य को
            </p>
            {/* 2. आकार दे, */}
            <h1 className="text-[56px] leading-[70px] font-semibold text-[#1F2A3C] font-hindi tracking-tight m-0">
              आकार दे,
            </h1>
            {/* 3. व्यावसायिक शिक्षा, */}
            <h2 className="text-[56px] leading-[70px] font-semibold text-[#8A6100] font-hindi tracking-tight m-0">
              व्यावसायिक शिक्षा,
            </h2>
            {/* 4. के साथ l */}
            <p className="text-[30px] leading-[38px] font-semibold text-[#1F2A3C] font-hindi m-0 mb-[40px]">
              के साथ l
            </p>

            {/* Primary CTA (212 x 56 px, 4px radius) */}
            <a
              href="#enquiry"
              className="inline-flex items-center justify-center w-[212px] h-[56px] bg-[#F2B418] hover:bg-[#D99A00] text-[#14171C] font-semibold text-[15px] rounded-[4px] shadow-xs transition-colors duration-200"
            >
              Go To Enquiry
            </a>
          </div>
        </div>

        {/* Right image column: 882 x 807 px with subtle dark navy gradient overlay (18% top to 46% bottom) */}
        <div className="w-[882px] h-full relative overflow-hidden flex-shrink-0">
          <img
            src={siteImages.heroCampus}
            alt="New Lucknow City Private ITI Campus Building"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            width={882}
            height={807}
          />
          {/* Exact dark navy overlay gradient per spec */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1F2A3C]/18 to-[#1F2A3C]/46 pointer-events-none" />
        </div>
      </div>

      {/* ===================== MOBILE HERO (block lg:hidden, 430 x 807 px) ===================== */}
      <div className="block lg:hidden w-full bg-white">
        {/* Mobile text section: 430 x 462 px */}
        <div className="w-full h-[462px] px-4 pt-[80px] pb-6 flex flex-col justify-start">
          <div className="w-full max-w-[394px]">
            {/* Line 1 */}
            <p className="text-[30px] leading-[38px] font-semibold text-[#5B6B80] font-hindi m-0">
              भविष्य को
            </p>
            {/* Line 2 */}
            <h1 className="text-[56px] leading-[70px] font-semibold text-[#1F2A3C] font-hindi tracking-tight m-0">
              आकार दे,
            </h1>
            {/* Line 3 */}
            <h2 className="text-[56px] leading-[70px] font-semibold text-[#8A6100] font-hindi tracking-tight m-0">
              व्यावसायिक शिक्षा,
            </h2>
            {/* Line 4 */}
            <p className="text-[30px] leading-[38px] font-semibold text-[#1F2A3C] font-hindi m-0 mb-[40px]">
              के साथ l
            </p>

            {/* Mobile CTA: 166 x 46 px, 4px radius */}
            <a
              href="#enquiry"
              className="inline-flex items-center justify-center w-[166px] h-[46px] bg-[#F2B418] hover:bg-[#D99A00] text-[#14171C] font-semibold text-[14px] rounded-[4px] shadow-xs transition-colors"
            >
              Go To Enquiry
            </a>
          </div>
        </div>

        {/* Mobile image section: 430 x 345 px */}
        <div className="w-full h-[345px] relative overflow-hidden">
          <img
            src={siteImages.heroCampus}
            alt="New Lucknow City Private ITI Campus Building"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            width={430}
            height={345}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1F2A3C]/18 to-[#1F2A3C]/46 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
