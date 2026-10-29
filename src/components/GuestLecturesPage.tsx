import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { GuestLectureCard } from './GuestLectureCard';
import guestLecturesData from '../data/guest-lectures.json';
import { GuestLectureItem } from '../types/guest-lecture';

export const GuestLecturesPage: React.FC = () => {
  // Update document title for SEO
  useEffect(() => {
    document.title = 'Guest Lectures | New Lucknow City Private ITI';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const lectures: GuestLectureItem[] = guestLecturesData as GuestLectureItem[];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1F2A3C] selection:bg-[#F2B418] selection:text-[#14171C]">
      {/* 1. Shared Header / Navigation */}
      <Header />

      <main className="flex-grow">
        {/* 2. Page-Title Band / Hero: responsive padding & balanced font size */}
        <section className="w-full bg-white pt-6 pb-4 sm:pt-8 sm:pb-6 lg:pt-10 lg:pb-7 border-b border-[#DDE1E7]/60">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            {/* Title & Thin active indicator / rule on the same baseline row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-6 lg:gap-8">
              {/* Heading: smoothly scales from 28px on mobile to 44px on laptop and 56px on 1520px desktop */}
              <h1 className="text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] 2xl:text-[56px] leading-[1.2] 2xl:leading-[70px] font-semibold text-[#1F2A3C] font-heading tracking-tight flex-shrink-0 m-0">
                Guest Lectures
              </h1>

              {/* Active Indicator / Gradient Line extending across to the right margin */}
              <div 
                className="w-full max-w-[850px] h-[5px] sm:h-[6px] lg:h-[7px] 2xl:h-[8px] rounded-full bg-gradient-to-r from-[#DDE1E7]/40 via-[#F2B418]/60 to-[#F2B418] flex-grow self-center"
                aria-hidden="true" 
              />
            </div>
          </div>
        </section>

        {/* 3. Main Lectures Grid Section: responsive vertical padding & adaptive column/row gaps */}
        <section className="w-full py-8 sm:py-10 md:py-12 lg:py-12 xl:py-16 2xl:py-[80px] bg-white">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            {lectures && lectures.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 lg:gap-x-7 xl:gap-x-8 2xl:gap-x-[36px] gap-y-8 sm:gap-y-10 md:gap-y-12 lg:gap-y-12 xl:gap-y-14 2xl:gap-y-[80px]">
                {lectures.map((lecture) => (
                  <GuestLectureCard key={lecture.id} lecture={lecture} />
                ))}
              </div>
            ) : (
              /* Consistent Empty State */
              <div className="text-center py-16 bg-[#F4F5F7] rounded-[16px] border border-[#DDE1E7] p-8">
                <h3 className="text-xl font-bold text-[#1F2A3C] mb-2 font-heading">
                  No Guest Lectures Available
                </h3>
                <p className="text-sm text-[#5B6B80]">
                  Please check back later for upcoming technical guest lectures and seminar announcements.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* 4. Shared Institutional Footer */}
      <Footer />
    </div>
  );
};
