import React from 'react';
import { EnquiryForm } from './EnquiryForm';
import { siteImages } from '../data/assets';

export const ContactDetailsSection: React.FC = () => {
  return (
    <section id="contact" className="py-14 lg:py-20 bg-[#F4F5F7]">
      <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
        {/* Section Heading with 200px Yellow Active Indicator (Figma 47:768) */}
        <div className="mb-[48px] lg:mb-[72px]">
          <h2 className="text-[34px] lg:text-[56px] font-medium font-serat text-[#2E2E30] tracking-tight">
            Contact Details
          </h2>
          <div className="w-[150px] h-[8px] lg:w-[200px] lg:h-[12px] bg-yellow-600 mt-[12px] rounded-full" />
        </div>

        {/* 3 Contact Blocks: 3 columns on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* 1. Address */}
          <div className="flex items-start gap-4 p-4 lg:p-0 rounded-lg">
            <div className="w-8 h-8">
                <img src="/assets/icons/location.svg" alt="" className="w-full h-full" />
            </div>
            <div>
              <h3 className="text-[16px] lg:text-[18px] font-medium text-navy-500">Address</h3>
              <p className=" text-[12px] lg:text-[14px] text-navy-800 mt-0.5 leading-snug">
                Mohan Road, Maunda, Lucknow, 226004
              </p>
            </div>
          </div>

          {/* 2. Email */}
          <div className="flex items-start gap-4 p-4 lg:p-0 rounded-lg">
            <div className="w-8 h-8">
                <img src="/assets/icons/email.svg" alt="" className="w-full h-full" />
            </div>
            <div>
              <h3 className="text-[16px] lg:text-[18px] font-medium text-navy-500">Email</h3>
              <a
                href="mailto:newlucknowcitypvtiti@gmail.com"
                className=" text-[12px] lg:text-[14px] text-navy-800 mt-0.5 leading-snug hover:text-[#1F2A3C] block break-all"
              >
                newlucknowcitypvtiti@gmail.com
              </a>
            </div>
          </div>

          {/* 3. Mobile Number */}
          <div className="flex items-start gap-4 p-4 lg:p-0 rounded-lg">
            <div className="w-8 h-8">
                <img src="/assets/icons/Call.svg" alt="" className="w-full h-full" />
            </div>
            <div>
              <h3 className="text-[16px] lg:text-[18px] font-medium text-navy-500">Mobile Number</h3>
              <p className=" text-[12px] lg:text-[14px] text-navy-800 mt-0.5 leading-snug">
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
