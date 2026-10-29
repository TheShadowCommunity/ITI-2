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
        {/* 2. Page-Title Band / Hero (Figma frame 155:1677: 1520 x 200 px) */}
        <section className="w-full bg-white pt-8 pb-6 sm:pt-12 sm:pb-8 border-b border-[#DDE1E7]/60">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 lg:px-0">
            {/* Desktop: Title & Thin active indicator / rule on the same baseline row */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-8">
              {/* Heading: Montserrat SemiBold, 56px on desktop (434 x 70 px measured layer) */}
              <h1 className="text-[32px] sm:text-[42px] lg:text-[56px] leading-[40px] sm:leading-[52px] lg:leading-[70px] font-semibold text-[#1F2A3C] font-heading tracking-tight flex-shrink-0 m-0">
                Guest Lectures
              </h1>

              {/* Active Indicator / Gradient Line extending across to the right margin */}
              <div 
                className="w-full max-w-[850px] h-[6px] sm:h-[8px] rounded-full bg-gradient-to-r from-[#DDE1E7]/40 via-[#F2B418]/60 to-[#F2B418] flex-grow self-center"
                aria-hidden="true" 
              />
            </div>
          </div>
        </section>

        {/* 3. Main Lectures Grid Section (Figma: 1392 x 2440 px, 2 columns, 36px col gap, 80px row gap) */}
        <section className="w-full py-12 sm:py-16 lg:py-[100px] bg-white">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 lg:px-0">
            {lectures && lectures.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[36px] gap-y-12 sm:gap-y-16 lg:gap-y-[80px]">
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
