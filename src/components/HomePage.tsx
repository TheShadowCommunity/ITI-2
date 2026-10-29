import React from 'react';
import { Header } from './Header';
import { HeroSection } from './HeroSection';
import { MissionVisionBanner } from './MissionVisionBanner';
import { AboutSection } from './AboutSection';
import { EnquiryForm } from './EnquiryForm';
import { RecruitersSection } from './RecruitersSection';
import { TradesSection } from './TradesSection';
import { TestimonialsSection } from './TestimonialsSection';
import { NoticeSection } from './NoticeSection';
import { ContactDetailsSection } from './ContactDetailsSection';
import { CollegeLifeSection } from './CollegeLifeSection';
import { Footer } from './Footer';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F4F5F7] text-[#1F2A3C] selection:bg-[#F2B418] selection:text-[#14171C]">
      {/* 1. Header & Navigation (Figma 10:440 / 10:782) */}
      <Header />

      <main className="flex-grow">
        {/* 2. Hero Section (Figma 20:837 / 66:745) */}
        <HeroSection />

        {/* 3. Features: College Mission & Vision Banner (Figma 10:468 - Visible on Desktop, Hidden on Mobile) */}
        <div className="hidden lg:block">
          <MissionVisionBanner />
        </div>

        {/* 4. Introduction: About Our College (Figma 10:388 / 67:768) */}
        <AboutSection />

        {/* 5. Desktop-specific Middle Section: Enquiry Form (809px) + Recruiters (551px) (Figma 33:847) */}
        <div className="hidden lg:block py-16 bg-white border-y border-[#DDE1E7]">
          <div className="max-w-[1392px] mx-auto px-4 lg:px-0">
            <div className="grid grid-cols-[809px_551px] gap-[32px] items-start">
              <div className="w-[809px]">
                <EnquiryForm idPrefix="desktop-mid-enquiry" />
              </div>
              <div className="w-[551px] pl-6 flex flex-col justify-start">
                <RecruitersSection />
              </div>
            </div>
          </div>
        </div>

        {/* 6. Our Courses (Trades) (Figma 151:1541 / 10:838) */}
        <TradesSection />

        {/* 7. Student Testimonials (Figma 50:1106 / 67:1115) */}
        <TestimonialsSection />

        {/* 8. Mobile-specific Logo Banner (Figma 10:898 - Appears after testimonials on mobile) */}
        <div className="block lg:hidden py-12 bg-white px-4 border-b border-[#DDE1E7]">
          <div className="max-w-[398px] mx-auto">
            <RecruitersSection />
          </div>
        </div>

        {/* 9. Notice & Announcement Section (Figma 57:1101 / 67:992) */}
        <NoticeSection />

        {/* 10. Mobile-specific Enquiry Form (Figma 69:788 - Appears between notices and contact on mobile) */}
        <div id="enquiry" className="block lg:hidden py-8 px-4 bg-[#F4F5F7]">
          <div className="max-w-[398px] mx-auto">
            <EnquiryForm idPrefix="mobile-enquiry" />
          </div>
        </div>

        {/* 11. Contact Details Section (Figma 10:667 / 69:989 & 10:928) */}
        <ContactDetailsSection />

        {/* 12. College Life Gallery (Figma 57:1104 / 10:917) */}
        <CollegeLifeSection />
      </main>

      {/* 13. Institutional Footer (Figma 10:718 / 10:974) */}
      <Footer />
    </div>
  );
};
