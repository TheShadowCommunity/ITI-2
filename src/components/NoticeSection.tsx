import React, { useEffect, useState } from 'react';
import { NoticeItem } from '../types/notice';
import { fetchNotices } from '../services/noticeService';

export const NoticeSection: React.FC = () => {
  const [notices, setNotices] = useState<NoticeItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetchNotices()
      .then((data) => {
        if (isMounted) {
          setNotices(data);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setError('सूचनाएं लोड करने में असमर्थ। कृपया पुनः प्रयास करें।');
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="notices" className="py-12 lg:py-16 bg-white">
      <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
        {/* Dark Navy Header Banner with Megaphone Icon (Figma 57:1101) */}
        <div className="bg-[#1F2A3C] rounded-t-[16px] px-6 py-6 sm:px-8 sm:py-7 flex items-center gap-4 text-white">
          <div className="text-[#F2B418] flex-shrink-0">
            {/* Megaphone SVG */}
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#F2B418]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 3H19C18.45 3 18 3.45 18 4V5H13C12.45 5 12 5.45 12 6V9H6C4.9 9 4 9.9 4 11V13C4 14.1 4.9 15 6 15H12V18C12 18.55 12.45 19 13 19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V4C21 3.45 20.55 3 20 3ZM10 13H6V11H10V13ZM18 17H14V7H18V17Z" />
              <path d="M7 16H9V21H7C5.9 21 5 20.1 5 19V18C5 16.9 5.9 16 7 16Z" opacity="0.6" />
            </svg>
          </div>
          <div>
            <h2 className="text-[24px] sm:text-[28px] font-bold tracking-tight text-white font-sans">
              Notice & Announcement
            </h2>
            <span className="text-[12px] text-[#DDE1E7] font-hindi">
              संस्थान की नवीनतम सूचनाएं और परिपत्र
            </span>
          </div>
        </div>

        {/* Notices Container */}
        <div className="bg-[#F4F5F7] border-x border-b border-[#DDE1E7] rounded-b-[16px] p-5 sm:p-8">
          {isLoading ? (
            <div className="py-12 text-center text-[#5B6B80] text-sm font-hindi">
              सूचनाएं लोड हो रही हैं... (Loading notices...)
            </div>
          ) : error ? (
            <div className="py-8 text-center text-red-600 text-sm font-hindi">
              {error}
            </div>
          ) : notices.length === 0 ? (
            <div className="py-8 text-center text-[#5B6B80] text-sm font-hindi">
              फिलहाल कोई नई सूचना उपलब्ध नहीं है। (No new notices available.)
            </div>
          ) : (
            <div className="divide-y divide-[#DDE1E7]">
              {notices.map((notice) => (
                <div
                  key={notice.id}
                  className="py-5 sm:py-6 flex items-start justify-between gap-4 sm:gap-6 group hover:bg-white/60 -mx-3 sm:-mx-4 px-3 sm:px-4 rounded-lg transition-colors"
                >
                  {/* Left: Date & Time in 2 lines */}
                  <div className="flex-shrink-0 text-left w-24 sm:w-28">
                    <span className="block text-xs sm:text-[13px] font-bold text-[#1F2A3C]">
                      {notice.date}
                    </span>
                    <span className="block text-[11px] text-[#5B6B80] font-medium">
                      {notice.time}
                    </span>
                  </div>

                  {/* Center: Notice text */}
                  <div className="flex-grow">
                    <p className="text-xs sm:text-[14px] text-[#1F2A3C] font-hindi leading-relaxed">
                      {notice.title}
                    </p>
                  </div>

                  {/* Right: Download Icon Link */}
                  <div className="flex-shrink-0 pt-0.5">
                    <a
                      href={notice.downloadUrl || '#'}
                      download
                      aria-label="Download announcement document"
                      className="w-8 h-8 rounded-full border border-[#DDE1E7] bg-white flex items-center justify-center text-[#1F2A3C] hover:bg-[#1F2A3C] hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* View More Button */}
          <div className="mt-8 text-center">
            <a
              href="#notices"
              className="inline-flex items-center text-[13px] font-bold text-[#8A6100] hover:text-[#1F2A3C] transition-colors gap-1.5"
            >
              View More <span aria-hidden="true">&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
