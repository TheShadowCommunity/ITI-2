import React, { useState, useEffect, useRef, useCallback } from 'react';
import { feedbackTestimonials, FeedbackTestimonial } from '../data/feedbackTestimonials';

interface FeedbackCarouselProps {
  className?: string;
}

export const FeedbackCarousel: React.FC<FeedbackCarouselProps> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState<number>(440);
  const gap = 24; // gap-6 = 24px

  const totalCards = feedbackTestimonials.length;

  // Measure card width dynamically based on viewport width
  useEffect(() => {
    const updateCardWidth = () => {
      if (typeof window === 'undefined') return;
      const w = window.innerWidth;
      if (w < 480) {
        setCardWidth(Math.min(w - 64, 340));
      } else if (w < 768) {
        setCardWidth(380);
      } else if (w < 1280) {
        setCardWidth(410);
      } else {
        setCardWidth(440);
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? totalCards - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, totalCards]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === totalCards - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating, totalCards]);

  // Keyboard navigation support
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  const currentTranslateX = -(currentIndex * (cardWidth + gap));

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className={`relative w-full bg-white overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2B418] ${className}`}
      aria-roledescription="carousel"
      aria-label="Student and Alumni Feedback"
    >
      {/* Curved Background Backdrop Layer on Desktop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block" aria-hidden="true">
        <svg
          className="w-full h-full"
          viewBox="0 0 1520 620"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Light silver-gray concentric arc outer shape */}
          <path
            d="M 450 0 C 370 200, 360 420, 480 620 L 1520 620 L 1520 0 Z"
            fill="#E2E8F0"
          />
          {/* Dark Navy #1F2A3C primary background */}
          <path
            d="M 490 0 C 410 200, 400 420, 520 620 L 1520 620 L 1520 0 Z"
            fill="#1F2A3C"
          />
        </svg>
      </div>

      {/* Main Layout Container */}
      <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center min-h-[380px] lg:min-h-[460px] gap-8 lg:gap-0">
          
          {/* =========================================================================
              LEFT WHITE SECTION
              CRITICAL STABILITY REQUIREMENTS:
              - Completely independent layout sibling of the carousel track
              - Fixed/constrained width on desktop (w-[380px] xl:w-[420px])
              - Stable padding, dimensions, and typography
              - z-20 background: #FFFFFF so moving cards visibly slide into/behind it
              - Does NOT reflow, flicker, or shift on arrow clicks
             ========================================================================= */}
          <div
            className="w-full lg:w-[380px] xl:w-[420px] lg:pr-8 xl:pr-10 flex-shrink-0 z-20 bg-white relative flex flex-col justify-between self-stretch"
            style={{ minHeight: '340px' }}
          >
            <div className="space-y-4">
              <h2 className="text-[28px] sm:text-[34px] lg:text-[38px] font-bold text-[#1F2A3C] tracking-tight font-hindi leading-tight">
                हमारे छात्रों के अनुभव
              </h2>

              <p className="text-[14px] sm:text-[15px] text-[#5B6B80] font-hindi leading-relaxed text-justify">
                आपकी कहानी किसी और के लिए प्रेरणा बन सकती है!<br />
                अगर आप भी अपना अनुभव साझा करना चाहते हैं, तो नीचे दिए गए बटन पर{' '}
                <a
                  href="#feedback-form"
                  className="text-[#8A6100] underline font-semibold hover:text-[#1F2A3C] transition-colors"
                >
                  क्लिक करें
                </a>
                ।
              </p>
            </div>

            {/* Navigation Controls: Clean minimalist arrows matching Figma reference */}
            <div className="flex items-center gap-4 pt-6 lg:pt-8" aria-label="Carousel Navigation">
              <button
                type="button"
                onClick={handlePrev}
                disabled={isAnimating}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#5B6B80] hover:text-[#1F2A3C] flex items-center justify-center transition-all shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F2B418] disabled:opacity-60"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={isAnimating}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#5B6B80] hover:text-[#1F2A3C] flex items-center justify-center transition-all shadow-xs cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F2B418] disabled:opacity-60"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <span className="text-xs text-[#5B6B80] font-medium font-sans ml-2 select-none">
                {currentIndex + 1} / {totalCards}
              </span>
            </div>
          </div>

          {/* =========================================================================
              RIGHT CAROUSEL VIEWPORT & MOVING TRACK
              - overflow-hidden clipping container (relative z-10)
              - Hardware-accelerated CSS transform translateX
              - Cards slide smoothly into and behind the left white section
              - Stable fixed-width card geometry prevents layout jumps
             ========================================================================= */}
          <div className="relative z-10 flex-grow overflow-hidden w-full py-2">
            {/* Mobile dark backdrop when stacked */}
            <div className="block lg:hidden absolute inset-0 bg-[#1F2A3C] rounded-[20px] -z-10" />

            <div
              className="flex flex-nowrap items-stretch transition-transform duration-500 ease-out motion-reduce:transition-none"
              style={{
                transform: `translateX(${currentTranslateX}px)`,
                gap: `${gap}px`,
                width: 'max-content',
              }}
              aria-live="polite"
            >
              {feedbackTestimonials.map((item: FeedbackTestimonial, idx: number) => {
                const isActive = idx === currentIndex;

                return (
                  <article
                    key={item.id}
                    className="rounded-[16px] bg-white p-6 sm:p-7 shadow-lg border border-[#DDE1E7] flex flex-col justify-between transition-all duration-300"
                    style={{
                      width: `${cardWidth}px`,
                      minHeight: '340px',
                      flexShrink: 0,
                    }}
                    aria-current={isActive ? 'true' : undefined}
                  >
                    <div>
                      {/* User Header */}
                      <div className="flex items-center gap-3.5 mb-4 pb-3 border-b border-slate-100">
                        <div className="w-[56px] h-[56px] rounded-full overflow-hidden bg-slate-200 border border-[#DDE1E7] flex-shrink-0 shadow-2xs">
                          <img
                            src={item.avatar}
                            alt={`${item.name} profile portrait`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            width={56}
                            height={56}
                          />
                        </div>
                        <div className="overflow-hidden">
                          <h3 className="text-[16px] sm:text-[17px] font-bold text-[#1F2A3C] leading-snug font-heading truncate">
                            {item.name}
                          </h3>
                          <span className="text-[12px] sm:text-[13px] text-[#5B6B80] font-medium block truncate">
                            {item.role}
                          </span>
                        </div>
                      </div>

                      {/* Quote Text */}
                      <blockquote className="text-[13.5px] sm:text-[14px] leading-[23px] sm:leading-[25px] text-[#2E3B4E] font-hindi text-justify">
                        &ldquo;{item.quote}&rdquo;
                      </blockquote>
                    </div>

                    {/* Bottom Indicator */}
                    <div className="pt-4 mt-2 flex items-center justify-between text-[11px] text-[#94A3B8]">
                      <span>New Lucknow City Private ITI</span>
                      <span className="text-[#F2B418] font-bold">★★★★★</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
