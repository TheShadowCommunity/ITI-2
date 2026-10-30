import React from 'react';
import { siteImages } from '../data/assets';

export const CollegeLifeSection: React.FC = () => {
  return (
    <section id="gallery" className="py-14 lg:py-20 bg-[#F4F5F7]">
      <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
        {/* Header with Title and View More Link */}
        <div className="flex items-end justify-between mb-8 sm:mb-10">
          <div>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[36px] font-bold text-[#1F2A3C] tracking-tight">
              College Life
            </h2>
            <div className="w-[150px] lg:w-[200px] h-[4px] bg-[#F2B418] mt-2.5 rounded-full" />
          </div>

          <a
            href="#gallery"
            className="w-[118px] h-[30px] inline-flex items-center justify-end text-[13px] font-bold text-[#8A6100] hover:text-[#1F2A3C] transition-colors gap-1"
          >
            View More <span aria-hidden="true">&gt;</span>
          </a>
        </div>

        {/* ===================== DESKTOP 4-COLUMN ASYMMETRIC MASONRY ===================== */}
        <div className="hidden lg:grid grid-cols-4 gap-4 xl:gap-[24px] w-full">
          {/* Column 1: Tall then Short */}
          <div className="flex flex-col gap-4 xl:gap-[24px] w-full">
            <div className="w-full h-[clamp(320px,36vw,625px)] rounded-[16px] overflow-hidden bg-slate-200 border border-[#DDE1E7] relative group">
              <img
                src={siteImages.gallery[0]}
                alt="College Life 1"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width={330}
                height={625}
              />
            </div>
            <div className="w-full h-[clamp(160px,18vw,301px)] rounded-[16px] overflow-hidden bg-slate-200 border border-[#DDE1E7] relative group">
              <img
                src={siteImages.gallery[1]}
                alt="College Life 2"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width={330}
                height={301}
              />
            </div>
          </div>

          {/* Column 2: Short then Tall */}
          <div className="flex flex-col gap-4 xl:gap-[24px] w-full">
            <div className="w-full h-[clamp(160px,18vw,301px)] rounded-[16px] overflow-hidden bg-slate-200 border border-[#DDE1E7] relative group">
              <img
                src={siteImages.gallery[2]}
                alt="College Life 3"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width={330}
                height={301}
              />
            </div>
            <div className="w-full h-[clamp(320px,36vw,625px)] rounded-[16px] overflow-hidden bg-slate-200 border border-[#DDE1E7] relative group">
              <img
                src={siteImages.gallery[3]}
                alt="College Life 4"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width={330}
                height={625}
              />
            </div>
          </div>

          {/* Column 3: Tall then Short */}
          <div className="flex flex-col gap-4 xl:gap-[24px] w-full">
            <div className="w-full h-[clamp(320px,36vw,625px)] rounded-[16px] overflow-hidden bg-slate-200 border border-[#DDE1E7] relative group">
              <img
                src={siteImages.gallery[4]}
                alt="College Life 5"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width={330}
                height={625}
              />
            </div>
            <div className="w-full h-[clamp(160px,18vw,301px)] rounded-[16px] overflow-hidden bg-slate-200 border border-[#DDE1E7] relative group">
              <img
                src={siteImages.gallery[5]}
                alt="College Life 6"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width={330}
                height={301}
              />
            </div>
          </div>

          {/* Column 4: Short then Tall */}
          <div className="flex flex-col gap-4 xl:gap-[24px] w-full">
            <div className="w-full h-[clamp(160px,18vw,301px)] rounded-[16px] overflow-hidden bg-slate-200 border border-[#DDE1E7] relative group">
              <img
                src={siteImages.gallery[6]}
                alt="College Life 7"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width={330}
                height={301}
              />
            </div>
            <div className="w-full h-[clamp(320px,36vw,625px)] rounded-[16px] overflow-hidden bg-slate-200 border border-[#DDE1E7] relative group">
              <img
                src={siteImages.gallery[7]}
                alt="College Life 8"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width={330}
                height={625}
              />
            </div>
          </div>
        </div>

        {/* ===================== MOBILE 2-COLUMN GRID (Figma 10:917, fits 398px) ===================== */}
        <div className="grid lg:hidden grid-cols-2 gap-3 sm:gap-4 w-full max-w-[398px] mx-auto">
          {siteImages.gallery.map((imgSrc, index) => (
            <div
              key={index}
              className="aspect-[4/3] rounded-[12px] overflow-hidden bg-slate-200 border border-[#DDE1E7] relative"
            >
              <img
                src={imgSrc}
                alt={`College Life ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
                width={190}
                height={142}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
