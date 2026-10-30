import React from 'react';
import { EnquiryForm } from './EnquiryForm';
import { siteImages } from '../data/assets';

export const ContactDetailsSection: React.FC = () => {
  return (
    <section id="contact" className="py-14 lg:py-20 bg-white">
      <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
        {/* Section Heading with 200px Yellow Active Indicator (Figma 47:768) */}
        <div className="mb-10 lg:mb-12">
          <h2 className="text-[28px] sm:text-[34px] lg:text-[36px] font-bold text-[#1F2A3C] tracking-tight">
            Contact Details
          </h2>
          <div className="w-[150px] lg:w-[200px] h-[4px] bg-[#F2B418] mt-2.5 rounded-full" />
        </div>

        {/* 3 Contact Blocks: 3 columns on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* 1. Address */}
          <div className="flex items-start gap-4 p-4 lg:p-0 rounded-lg bg-[#F4F5F7] lg:bg-transparent">
            <div className="w-[35px] h-[35px] rounded-full bg-[#F2B418]/20 text-[#8A6100] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-[#1F2A3C]">Address</h3>
              <p className="text-[13px] text-[#5B6B80] mt-0.5 leading-snug">
                Mohan Road, Maunda, Lucknow, 226004
              </p>
            </div>
          </div>

          {/* 2. Email */}
          <div className="flex items-start gap-4 p-4 lg:p-0 rounded-lg bg-[#F4F5F7] lg:bg-transparent">
            <div className="w-[35px] h-[35px] rounded-full bg-[#F2B418]/20 text-[#8A6100] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-[#1F2A3C]">Email</h3>
              <a
                href="mailto:newlucknowcitypvtiti@gmail.com"
                className="text-[13px] text-[#5B6B80] mt-0.5 leading-snug hover:text-[#1F2A3C] block break-all"
              >
                newlucknowcitypvtiti@gmail.com
              </a>
            </div>
          </div>

          {/* 3. Mobile Number */}
          <div className="flex items-start gap-4 p-4 lg:p-0 rounded-lg bg-[#F4F5F7] lg:bg-transparent">
            <div className="w-[35px] h-[35px] rounded-full bg-[#F2B418]/20 text-[#8A6100] flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-[#1F2A3C]">Mobile Number</h3>
              <p className="text-[13px] text-[#5B6B80] mt-0.5 leading-snug">
                8840012609, 9792361820, 9236013038,
              </p>
            </div>
          </div>
        </div>

        {/* ===================== DESKTOP CONTACT CONTENT (Form + Map) ===================== */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-[1.45fr_1fr] 2xl:grid-cols-[809px_519px] gap-6 xl:gap-10 2xl:gap-[64px] items-stretch">
          {/* Form Column */}
          <div className="w-full max-w-[809px]">
            <EnquiryForm idPrefix="contact-desktop-section" />
          </div>

          {/* Map Column */}
          <div className="w-full max-w-[519px] h-full min-h-[480px] xl:min-h-[580px] 2xl:min-h-[645px] rounded-[16px] overflow-hidden border border-[#DDE1E7] relative bg-slate-100">
            <img
              src={siteImages.mapLocation}
              alt="New Lucknow City Private ITI Campus Location Map"
              className="w-full h-full object-cover"
              loading="lazy"
              width={519}
              height={645}
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-3.5 rounded-[12px] border border-[#DDE1E7] shadow-sm flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-[#1F2A3C]">Campus Location</h4>
                <p className="text-[11px] text-[#5B6B80]">Mohan Road, Maunda, Lucknow</p>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#F2B418] hover:bg-[#D99A00] text-[#14171C] text-xs font-bold rounded-[4px] transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* ===================== MOBILE CONTACT / MAP ONLY (Section 10: 430 x 401 px, inner 398 x 369 px) ===================== */}
        <div className="block lg:hidden w-full max-w-[398px] mx-auto">
          <div className="w-full h-[369px] rounded-[16px] overflow-hidden border border-[#DDE1E7] relative bg-slate-100">
            <img
              src={siteImages.mapLocation}
              alt="New Lucknow City Private ITI Campus Location Map"
              className="w-full h-full object-cover"
              loading="lazy"
              width={398}
              height={369}
            />
            <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-3 rounded-[10px] border border-[#DDE1E7] shadow-sm flex items-center justify-between">
              <div>
                <h4 className="text-xs font-bold text-[#1F2A3C]">Campus Location</h4>
                <p className="text-[10px] text-[#5B6B80]">Mohan Road, Maunda, Lucknow</p>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 bg-[#F2B418] hover:bg-[#D99A00] text-[#14171C] text-[11px] font-bold rounded-[4px] transition-colors"
              >
                Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
