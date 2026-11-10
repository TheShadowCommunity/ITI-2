import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { EnquiryForm } from './EnquiryForm';
import { FeedbackCarousel } from './FeedbackCarousel';

export const FeedbackPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Feedback | New Lucknow City Private ITI';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1F2A3C] selection:bg-[#F2B418] selection:text-[#14171C]">
      {/* 1. Global Navigation Header */}
      <Header />

      <main className="flex-grow">
        {/* 2. Page Title Band with Gold Gradient Accent Line */}
        <section className="w-full bg-white pt-6 pb-4 sm:pt-7 sm:pb-5 lg:pt-8 lg:pb-6 border-b border-[#DDE1E7]/60">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-6 lg:gap-8">
              {/* Heading: Matches the Figma screenshot reference title */}
              <h1 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px] 2xl:text-[52px] leading-[1.2] font-semibold text-[#1F2A3C] font-heading tracking-tight flex-shrink-0 m-0">
                Infrastructure
              </h1>

              {/* Active Accent Gradient Line */}
              <div
                className="w-full max-w-[850px] h-[5px] sm:h-[6px] lg:h-[7px] 2xl:h-[8px] rounded-full bg-gradient-to-r from-[#DDE1E7]/40 via-[#F2B418]/60 to-[#F2B418] flex-grow self-center"
                aria-hidden="true"
              />
            </div>
          </div>
        </section>

        {/* 3. Section 1: Feedback Form & Classroom Photo */}
        <section id="feedback-form" className="w-full py-8 sm:py-12 lg:py-16 bg-[#F8FAFC]">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-14 items-start">
              {/* Left Column: Reused Homepage Form with Feedback category selected by default */}
              <div className="w-full flex justify-center lg:justify-start">
                <EnquiryForm
                  idPrefix="feedback-page-form"
                  defaultCategory="feedback"
                  headerTitle="Feedback Form"
                  headerSubtitle={`दिए गए फॉर्म के माध्यम से अपना फीडबैक या साझा करें।\nहम आपकी राय का स्वागत करते हैं।`}
                  showUploadPicture={true}
                  className="w-full shadow-md"
                />
              </div>

              {/* Right Column: High Fidelity Classroom Photo */}
              <div className="w-full flex flex-col items-center lg:items-end">
                <div className="w-full max-w-[620px] rounded-[18px] sm:rounded-[22px] overflow-hidden border border-[#DDE1E7] bg-slate-200 shadow-md">
                  <img
                    src="/images/feedback-classroom.png"
                    alt="Students attending vocational lectures and classroom training at New Lucknow City Private ITI"
                    className="w-full h-auto object-cover"
                    loading="eager"
                    width={620}
                    height={550}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Section 2: Dedicated Independent Feedback Carousel with Sliding Cards */}
        <section className="w-full border-t border-[#DDE1E7]/60">
          <FeedbackCarousel />
        </section>
      </main>

      {/* 5. Global Footer */}
      <Footer />
    </div>
  );
};
