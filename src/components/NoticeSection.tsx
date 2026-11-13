import React, { useEffect, useState } from 'react';
import { NoticeItem } from '../types/notice';
import { fetchNotices } from '../services/noticeService';
import { navigateTo } from '../utils/navigation';

export const NoticeSection: React.FC = () => {
  const [notices, setNotices] = useState<NoticeItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    fetchNotices()
      .then((data) => {
        if (isMounted) {
          setNotices(data.slice(0, 4));
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
    <section id="notices" className=" bg-white">
      <div className="max-w-[1392px]">
        {/* Dark Navy Header Banner with Megaphone Icon (Figma 57:1101) */}
        <div className="bg-navy-900 py-[80px] px-[16px] lg:py-[72px] lg:px-[64px] flex items-center text-white">
        <div className="w-[100px]">
              <img src="/assets/icons/notice.svg" alt="" className="w-full h-full" />
            </div>
          <div>
            <h2 className="font-medium ml-[16px] text-[36px] lg:text-[45px] lg:font-semibold tracking-tight text-neutral-200 font-serat">
              Notice & Announcement
            </h2>
  
          </div>
        </div>

        {/* Notices Container */}
        <div className="py-[80px] px-[16px] lg:py-[100px] lg:px-[64px]">
          {isLoading ? (
            <div className="py-12 text-center text-navy-500 text-sm font-hindi">
              सूचनाएं लोड हो रही हैं... (Loading notices...)
            </div>
          ) : error ? (
            <div className="py-8 text-center text-red-600 text-sm font-hindi">
              {error}
            </div>
          ) : notices.length === 0 ? (
            <div className="py-8 text-center text-navy-500 text-sm font-hindi">
              फिलहाल कोई नई सूचना उपलब्ध नहीं है। (No new notices available.)
            </div>
          ) : (
            <div className="">
              {notices.map((notice) => (
                <div
                  key={notice.id}
                  className="py-5 sm:py-6 flex items-start justify-between gap-4 sm:gap-6 group hover:bg-white/60 -mx-3 sm:-mx-4 px-3 sm:px-4 rounded-lg transition-colors"
                >
                  {/* Left: Date & Time in 2 lines */}
                  <div className="flex-shrink-0 text-left max-md:pl-0 px-[12px] py-[8px] lg:px-[28px] border-r-1 border-navy-200 h-full">
                    <span className="block text-[12px] sm:text-[14px] font-semibold text-navy-500">
                      {notice.date}
                    </span>
                    <span className="block text-[12px] sm:text-[14px] text-navy-500 font-medium">
                      {notice.time}
                    </span>
                  </div>

                  {/* Center: Notice text */}
                  <div className="flex-grow">
                    <p className="text-xs sm:text-[14px] lg:text-[18px] text-navy-800 font-hindi leading-relaxed">
                      {notice.title}
                    </p>
                  </div>

                  {/* Right: Download Icon Link */}
                  <div className="flex-shrink-0 pt-0.5">
                    <a
                      href={notice.downloadUrl || '#'}
                      download
                      aria-label="Download announcement document"
                      className=" text-navy-500"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              href="/notice"
              onClick={(e) => {
                e.preventDefault();
                navigateTo('/notice');
              }}
              className="inline-flex items-center text-[13px] font-semibold text-yellow-700 hover:text-navy-900 transition-colors gap-1.5"
            >
              View More 
               <div className="">
                      <img src="/assets/icons/btn-arrow-right.svg" alt="" className="w-full h-full" />
                    </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
