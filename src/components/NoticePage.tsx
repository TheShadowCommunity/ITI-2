import React, { useEffect, useState, useMemo } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { NoticeTable } from './NoticeTable';
import { NoticePagination } from './NoticePagination';
import { NoticeItem } from '../types/notice';
import {
  fetchNotices,
  getPaginatedNotices,
  PAGE_SIZE,
} from '../services/noticeService';
import { siteImages } from '../data/assets';
import { navigateTo } from '../utils/navigation';

export const NoticePage: React.FC = () => {
  const [allNotices, setAllNotices] = useState<NoticeItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState<number>(0);

  // Update SEO title and reset scroll position to top
  useEffect(() => {
    document.title = 'All Notice | New Lucknow City Private ITI';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Fetch published notices from Sanity CMS
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    setError(null);

    fetchNotices()
      .then((data) => {
        if (isMounted) {
          setAllNotices(data);
          setCurrentPage(1);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setError('सूचनाएं लोड करने में असमर्थ। कृपया पुनः प्रयास करें। (Unable to load notices. Please try again.)');
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [retryCount]);

  // Compute paginated slice using single source of truth
  const paginatedResult = useMemo(() => {
    return getPaginatedNotices(allNotices, currentPage, PAGE_SIZE);
  }, [allNotices, currentPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    // Smoothly scroll back to the top of the table on mobile/smaller screens
    const tableEl = document.getElementById('notice-table-container');
    if (tableEl) {
      const topOffset = tableEl.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: Math.max(0, topOffset), behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-navy-900 selection:bg-[#F2B418] selection:text-[#14171C]">
      {/* 1. Shared Global Site Header */}
      <Header />

      <main className="flex-grow">
        {/* 2. Page Title Band with Gold Gradient Accent Line (matching Contact & Guest Lectures) */}
        <section className="w-full bg-white pt-6 pb-4 sm:pt-8 sm:pb-6 lg:pt-10 lg:pb-7 border-b border-[#DDE1E7]/60">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-6 lg:gap-8">
              {/* Heading: "All Notice" in #1F2A3C */}
              <h1 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] 2xl:text-[56px] leading-[1.2] 2xl:leading-[70px] font-semibold text-navy-900 font-heading tracking-tight flex-shrink-0 m-0">
                All Notice
              </h1>

              {/* Active Accent Gradient Line */}
              <div
                className="w-full max-w-[850px] h-[5px] sm:h-[6px] lg:h-[7px] 2xl:h-[8px] rounded-full bg-gradient-to-r from-[#DDE1E7]/40 via-[#F2B418]/60 to-[#F2B418] flex-grow self-center"
                aria-hidden="true"
              />
            </div>
          </div>
        </section>

        {/* 3. Notice Table & Pagination Section */}
        <section
          id="notice-table-container"
          className="w-full py-8 sm:py-12 lg:py-14 bg-white"
        >
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            {error ? (
              <div className="w-full bg-white border border-red-200 rounded-[12px] p-8 sm:p-10 text-center shadow-2xs">
                <p className="text-sm sm:text-base text-red-700 font-hindi">{error}</p>
                <button
                  type="button"
                  onClick={() => setRetryCount((c) => c + 1)}
                  className="mt-4 inline-flex items-center justify-center px-5 py-2.5 bg-[#F2B418] hover:bg-[#D99A00] text-[#14171C] text-sm font-semibold rounded-[8px] transition-colors cursor-pointer"
                >
                  पुनः प्रयास करें (Retry)
                </button>
              </div>
            ) : (
              <>
                {/* Table Component */}
                <NoticeTable notices={paginatedResult.items} isLoading={isLoading} />

                {/* Pagination Component - Always displayed directly beneath the table */}
                <NoticePagination
                  currentPage={paginatedResult.currentPage}
                  totalPages={paginatedResult.totalPages}
                  onPageChange={handlePageChange}
                />
              </>
            )}
          </div>
        </section>

        {/* 4. Three Feature Cards Section (matching Notice_6378bdf7.png) */}
        <section className="w-full pb-14 sm:pb-18 lg:pb-24 bg-white">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
              {/* Card 1: Student's Achievements */}
              <div
                onClick={() => navigateTo('/#gallery')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigateTo('/#gallery');
                  }
                }}
                className="group relative h-[260px] sm:h-[300px] lg:h-[330px] rounded-[16px] overflow-hidden cursor-pointer shadow-xs border border-[#DDE1E7] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-[#F2B418]"
              >
                <img
                  src={siteImages.noticeFeatures.achievements}
                  alt="Student's Achievements at New Lucknow City Private ITI"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Vignette Overlay for Title Contrast */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex items-end p-6 sm:p-7"
                  aria-hidden="true"
                >
                  <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-white font-heading tracking-tight drop-shadow-sm">
                    Student’s Achievements
                  </h3>
                </div>
              </div>

              {/* Card 2: Fees Structure */}
              <div
                onClick={() => navigateTo('/fee-structure')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigateTo('/fee-structure');
                  }
                }}
                className="group relative h-[260px] sm:h-[300px] lg:h-[330px] rounded-[16px] overflow-hidden cursor-pointer shadow-xs border border-[#DDE1E7] transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 focus:outline-hidden focus:ring-2 focus:ring-[#F2B418]"
              >
                <img
                  src={siteImages.noticeFeatures.fees}
                  alt="Fees Structure and Financial Information"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Vignette Overlay for Title Contrast */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex items-end p-6 sm:p-7"
                  aria-hidden="true"
                >
                  <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-bold text-white font-heading tracking-tight drop-shadow-sm">
                    Fees Structure
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
                  src={siteImages.noticeFeatures.contact}
                  alt="Contact New Lucknow City Private ITI"
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

      {/* 5. Shared Global Site Footer */}
      <Footer />
    </div>
  );
};
