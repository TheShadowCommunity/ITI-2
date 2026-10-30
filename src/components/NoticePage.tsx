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
  const [activeFixture, setActiveFixture] = useState<string>('default');
  const [showFixtureSelector, setShowFixtureSelector] = useState<boolean>(false);

  // Update SEO title and reset scroll position to top
  useEffect(() => {
    document.title = 'All Notice | New Lucknow City Private ITI';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Fetch notices when fixture changes or on mount
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    fetchNotices(activeFixture === 'default' ? undefined : activeFixture)
      .then((data) => {
        if (isMounted) {
          setAllNotices(data);
          // Reset to page 1 whenever data source or fixture changes
          setCurrentPage(1);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [activeFixture]);

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
    <div className="min-h-screen flex flex-col bg-white text-[#1F2A3C] selection:bg-[#F2B418] selection:text-[#14171C]">
      {/* 1. Shared Global Site Header */}
      <Header />

      <main className="flex-grow">
        {/* 2. Page Title Band with Gold Gradient Accent Line (matching Contact & Guest Lectures) */}
        <section className="w-full bg-white pt-6 pb-4 sm:pt-8 sm:pb-6 lg:pt-10 lg:pb-7 border-b border-[#DDE1E7]/60">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-6 lg:gap-8">
              {/* Heading: "All Notice" in #1F2A3C */}
              <h1 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] 2xl:text-[56px] leading-[1.2] 2xl:leading-[70px] font-semibold text-[#1F2A3C] font-heading tracking-tight flex-shrink-0 m-0">
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
            {/* Table Component */}
            <NoticeTable notices={paginatedResult.items} isLoading={isLoading} />

            {/* Pagination Component - Always displayed directly beneath the table */}
            <NoticePagination
              currentPage={paginatedResult.currentPage}
              totalPages={paginatedResult.totalPages}
              onPageChange={handlePageChange}
            />

            {/* Development / QA Test Tool for Section 8 Validation */}
            <div className="mt-8 pt-4 border-t border-dashed border-[#DDE1E7] flex flex-wrap items-center justify-between gap-2 text-xs text-[#5B6B80]">
              <span className="font-mono">
                Showing {paginatedResult.startIndex + (paginatedResult.totalCount > 0 ? 1 : 0)}-
                {paginatedResult.endIndex} of {paginatedResult.totalCount} notices • Page{' '}
                {paginatedResult.currentPage} of {paginatedResult.totalPages}
              </span>

              <button
                type="button"
                onClick={() => setShowFixtureSelector(!showFixtureSelector)}
                className="text-[11px] font-medium text-[#8A6100] hover:text-[#1F2A3C] underline cursor-pointer"
              >
                {showFixtureSelector ? 'Hide QA Fixture Switcher' : 'QA Fixture Switcher (0, 1, 5, 6, 10, 11)'}
              </button>

              {showFixtureSelector && (
                <div className="w-full mt-2 p-3 bg-[#F4F5F7] rounded-lg border border-[#DDE1E7] flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-[#1F2A3C]">Test Fixture:</span>
                  {[
                    { label: 'Default (5)', key: 'default' },
                    { label: '0 Notices', key: 'fixture_0' },
                    { label: '1 Notice', key: 'fixture_1' },
                    { label: '5 Notices', key: 'fixture_5' },
                    { label: '6 Notices', key: 'fixture_6' },
                    { label: '10 Notices', key: 'fixture_10' },
                    { label: '11 Notices', key: 'fixture_11' },
                  ].map((fix) => (
                    <button
                      key={fix.key}
                      type="button"
                      onClick={() => setActiveFixture(fix.key)}
                      className={`px-2.5 py-1 rounded text-[11px] font-medium transition-colors ${
                        activeFixture === fix.key
                          ? 'bg-[#1F2A3C] text-white'
                          : 'bg-white text-[#1F2A3C] border border-[#DDE1E7] hover:bg-slate-100'
                      }`}
                    >
                      {fix.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
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
                onClick={() => navigateTo('/#enquiry')}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigateTo('/#enquiry');
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
