import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonials';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-14 lg:py-20 bg-[#F4F5F7] relative overflow-hidden">
      <div className="max-w-[1392px] mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Subtitle & Carousel Controls */}
          <div className="lg:col-span-5 flex flex-col items-start">
            {/* Quote Mark (approx 39 x 27 px) */}
            <div className="text-[#1F2A3C] text-5xl font-serif font-black leading-none mb-3 select-none">
              &ldquo;&ldquo;
            </div>

            <h2 className="text-[28px] sm:text-[34px] lg:text-[36px] font-bold text-[#1F2A3C] tracking-tight font-hindi mb-3 leading-tight">
              हमारे छात्रों के अनुभव
            </h2>

            <p className="text-[14px] text-[#5B6B80] font-hindi leading-relaxed mb-6 max-w-[380px]">
              आपकी कहानी किसी और के लिए प्रेरणा बन सकती है! अगर आप भी अपना अनुभव साझा करना चाहते हैं, तो नीचे दिए गए बटन पर{' '}
              <a href="#enquiry" className="text-[#8A6100] underline font-semibold hover:text-[#1F2A3C]">
                क्लिक करें
              </a>
              ।
            </p>

            {/* Circular Carousel Controls (30 x 30 px buttons) */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] rounded-full bg-white hover:bg-[#1F2A3C] text-[#1F2A3C] hover:text-white border border-[#DDE1E7] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="w-[30px] h-[30px] sm:w-[36px] sm:h-[36px] rounded-full bg-white hover:bg-[#1F2A3C] text-[#1F2A3C] hover:text-white border border-[#DDE1E7] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Column: Testimonial Cards (no horizontal overflow) */}
          <div className="lg:col-span-7 overflow-hidden w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              {testimonialsData.map((item, idx) => {
                const isPrimary = idx === currentIndex;
                const isSecondary = idx === (currentIndex + 1) % testimonialsData.length;

                if (!isPrimary && !isSecondary) return null;

                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-[16px] p-6 sm:p-7 shadow-sm border border-[#DDE1E7] flex flex-col justify-between transition-all duration-300 ${
                      !isPrimary ? 'hidden sm:flex opacity-75' : 'flex'
                    }`}
                  >
                    <div>
                      {/* User Header */}
                      <div className="flex items-center gap-3.5 mb-4 pb-3 border-b border-slate-100">
                        <div className="w-[54px] h-[54px] rounded-full overflow-hidden bg-slate-200 border border-[#DDE1E7] flex-shrink-0">
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            width={54}
                            height={54}
                          />
                        </div>
                        <div>
                          <h4 className="text-[15px] font-bold text-[#1F2A3C] leading-tight font-heading">
                            {item.name}
                          </h4>
                          <span className="text-[12px] text-[#5B6B80] font-medium">
                            {item.role}
                          </span>
                        </div>
                      </div>

                      {/* Quote Text */}
                      <p className="text-[13px] leading-[22px] text-[#2E3B4E] font-hindi">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
