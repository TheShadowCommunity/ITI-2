import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { EnquiryForm } from './EnquiryForm';

export const CareerPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Career | New Lucknow City Private ITI';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F5F7] text-navy-900 selection:bg-[#F2B418] selection:text-[#14171C]">
      {/* 1. Global Navigation Header */}
      <Header />

      <main className="flex-grow pb-14 sm:pb-16 lg:pb-24">
        {/* 2. Page Title Band with Gold Gradient Accent Line */}
        <section className="w-full bg-white py-[58px] px-[16px] lg:bg-[#F4F5F7] lg:px-[64px] lg:py-[65px]">
          <div className="max-w-[1392px] mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-6 lg:gap-8">
              {/* Heading: "Careers" */}
              <h1 className="text-[36px] md:text-[38px] lg:text-[48px] xl:text-[56px] leading-[1.2] font-semibold text-navy-900 font-heading font-serat tracking-tight flex-shrink-0 m-0">
                Careers
              </h1>

              {/* Active Accent Gradient Line */}
              <div
                className="w-full max-w-[850px] h-[5px] sm:h-[6px] lg:h-[7px] 2xl:h-[8px] rounded-full bg-gradient-to-r from-[#DDE1E7]/40 via-[#F2B418]/60 to-[#F2B418] flex-grow self-center"
                aria-hidden="true"
              />
            </div>
          </div>
        </section>

        {/* 3. Main Careers Section: Shared Enquiry Form & Convocation Photo */}
        <section className="w-full py-10 sm:py-14 lg:py-[80px] px-4 sm:px-6 md:px-8 lg:px-[64px]">
          <div className="max-w-[1392px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.28fr_1fr] 2xl:grid-cols-[748px_576px] gap-8 xl:gap-[48px] 2xl:gap-[68px] items-start">
              {/* Left Column: Shared EnquiryForm with Career selected by default */}
              <div className="w-full max-w-[748px]">
                <EnquiryForm
                  idPrefix="career-page-enquiry"
                  defaultCategory="career"
                  headerTitle="Join Our Team"
                  headerSubtitle="Interested in joining us? Fill out the form below to inquire about current or future job openings."
                  className="max-w-[748px]"
                />
              </div>

              {/* Right Column: Convocation Ceremony Image Card */}
              <div className="w-full max-w-[576px] rounded-[16px] sm:rounded-[20px] overflow-hidden border border-[#DDE1E7]/70 shadow-sm relative group bg-white">
                <img
                  src="/images/career/convocation-group.jpg"
                  alt="Faculty and management team at New Lucknow City Private ITI on the occasion of the Convocation Ceremony"
                  className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                  width={576}
                  height={585}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 4. Institutional Footer */}
      <Footer />
    </div>
  );
};
