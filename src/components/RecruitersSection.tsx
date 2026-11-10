import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { recruitersData, RecruiterItem } from '../data/recruiters';

interface RecruiterCardProps {
  item: RecruiterItem;
  isClone?: boolean;
  isMobile?: boolean;
}

const RecruiterLogoRenderer: React.FC<{ item: RecruiterItem }> = ({ item }) => {
  switch (item.type) {
    case 'meesho':
      return (
        <svg className="h-7 sm:h-8 w-auto max-w-[130px]" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="50%" y="28" textAnchor="middle" fill="#14171C" fontSize="28" fontWeight="800" fontFamily="sans-serif" letterSpacing="-1">
            meesho
          </text>
        </svg>
      );

    case 'lotte':
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="w-8 h-8 rounded-md bg-[#2E3B4E] rotate-45 flex items-center justify-center shadow-2xs mb-1.5">
            <span className="-rotate-45 text-white font-serif italic font-bold text-sm leading-none">
              l
            </span>
          </div>
          <span className="text-[11px] sm:text-xs font-black tracking-wider text-[#14171C] uppercase font-sans mt-0.5">
            LOTTE INDIA
          </span>
        </div>
      );

    case 'pratilipi':
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-[#14171C] text-white flex items-center justify-center text-xs font-bold mb-1 shadow-2xs">
            प्र
          </div>
          <span className="text-xs sm:text-sm font-bold text-[#14171C] tracking-tight font-sans">
            pratilipi
          </span>
        </div>
      );

    case 'tata-housing':
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-1.5 mb-0.5">
            <svg className="w-5 h-4 text-[#14171C]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 22h20L12 2zm0 5l6.5 13h-13L12 7z" />
            </svg>
            <span className="text-xs sm:text-sm font-black tracking-widest text-[#14171C]">TATA</span>
          </div>
          <span className="text-[10px] tracking-widest text-[#5B6B80] font-bold uppercase">HOUSING</span>
        </div>
      );

    case 'setu':
      return (
        <div className="flex flex-col items-center justify-center">
          {/* Top downward semicircle arc matching Figma screenshot */}
          <div className="w-5 h-2.5 bg-[#14171C] rounded-t-full mb-1" />
          <span className="text-base sm:text-lg font-black tracking-widest text-[#14171C] font-sans uppercase leading-none">
            SETU
          </span>
          {/* Bottom upward semicircle arc matching Figma screenshot */}
          <div className="w-5 h-2.5 bg-[#14171C] rounded-b-full mt-1" />
        </div>
      );

    case 'tata-motors':
      return (
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-1.5 mb-0.5">
            <svg className="w-5 h-4 text-[#14171C]" viewBox="0 0 24 20" fill="currentColor">
              <ellipse cx="12" cy="10" rx="11" ry="8" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M7 10h10M12 4v12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            <span className="text-xs sm:text-sm font-black tracking-widest text-[#14171C]">TATA</span>
          </div>
          <span className="text-[10px] tracking-wider text-[#5B6B80] font-bold uppercase">MOTORS</span>
        </div>
      );

    case 'maruti-suzuki':
      return (
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 flex items-center justify-center text-red-600 flex-shrink-0">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 4L8 10.5l8 4.5L5 20h4l11-6.5L12 9l8-5z" />
            </svg>
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className="text-[11px] font-black tracking-wider text-[#14171C]">MARUTI</span>
            <span className="text-[10px] font-bold tracking-widest text-[#5B6B80]">SUZUKI</span>
          </div>
        </div>
      );

    case 'hero-motocorp':
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-xs bg-[#E11D48] flex items-center justify-center text-white font-black text-[12px] italic shadow-2xs">
            H
          </div>
          <span className="text-xs sm:text-sm font-black tracking-tight text-[#14171C] font-sans">
            Hero <span className="font-semibold text-[#5B6B80]">MotoCorp</span>
          </span>
        </div>
      );

    case 'mahindra':
      return (
        <div className="flex items-center gap-1.5">
          <svg className="w-5 h-4 text-red-600 flex-shrink-0" viewBox="0 0 28 20" fill="currentColor">
            <path d="M3 18L10 4h4l3 6 3-6h4l-7 14h-4l-3-6-3 6z" />
          </svg>
          <span className="text-xs sm:text-sm font-black tracking-wider text-[#14171C] font-sans">
            Mahindra
          </span>
        </div>
      );

    case 'schneider':
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-sm bg-[#009530] flex items-center justify-center text-white flex-shrink-0 shadow-2xs">
            <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M11 2L4 11h5v7l7-9h-5V2z" />
            </svg>
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className="text-[11px] font-bold text-[#14171C]">Schneider</span>
            <span className="text-[9px] font-semibold tracking-wider text-[#009530] uppercase">Electric</span>
          </div>
        </div>
      );

    case 'havells':
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-3.5 h-3.5 bg-red-600 rounded-2xs flex-shrink-0 shadow-2xs" />
          <span className="text-xs sm:text-sm font-black tracking-widest text-[#14171C] font-sans">
            HAVELLS
          </span>
        </div>
      );

    case 'lt':
      return (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full border-2 border-[#1F2A3C] flex items-center justify-center text-[10px] font-black text-[#1F2A3C] tracking-tighter flex-shrink-0">
            L&T
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className="text-[10px] font-black tracking-wider text-[#14171C]">LARSEN &</span>
            <span className="text-[9px] font-bold tracking-wider text-[#5B6B80]">TOUBRO</span>
          </div>
        </div>
      );

    case 'bhel':
      return (
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-sm bg-[#1E3A8A] text-white flex items-center justify-center text-[10px] font-black flex-shrink-0 shadow-2xs">
            बी
          </div>
          <div className="flex flex-col leading-none text-left">
            <span className="text-xs font-black tracking-widest text-[#14171C]">BHEL</span>
            <span className="text-[8px] tracking-wider text-[#5B6B80] font-semibold">POWER SECTOR</span>
          </div>
        </div>
      );

    case 'honda':
      return (
        <div className="flex items-center gap-1.5">
          <svg className="w-5 h-5 text-[#DC2626] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 5l2 14h2l1-9h8l1 9h2l2-14h-3l-1 7h-8l-1-7H3z" />
          </svg>
          <span className="text-xs sm:text-sm font-black tracking-widest text-[#14171C] font-sans">
            HONDA
          </span>
        </div>
      );

    case 'bajaj':
      return (
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-[#1E40AF] text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 shadow-2xs">
            B
          </div>
          <span className="text-xs sm:text-sm font-black tracking-widest text-[#14171C] font-sans">
            BAJAJ
          </span>
        </div>
      );

    case 'voltas':
      return (
        <div className="flex flex-col items-center leading-none text-center">
          <span className="text-xs sm:text-sm font-black tracking-widest text-[#14171C]">VOLTAS</span>
          <span className="text-[8.5px] tracking-wider text-[#5B6B80] font-semibold uppercase mt-0.5">
            A TATA Enterprise
          </span>
        </div>
      );

    default:
      return (
        <span className="text-xs sm:text-sm font-black tracking-wider text-[#14171C] uppercase font-sans">
          {item.name}
        </span>
      );
  }
};

const RecruiterCard: React.FC<RecruiterCardProps> = ({ item, isClone = false, isMobile = false }) => {
  return (
    <div
      aria-hidden={isClone ? 'true' : undefined}
      title={`${item.name}${item.category ? ` • ${item.category}` : ''}`}
      tabIndex={isClone ? -1 : 0}
      className={`w-full ${
        isMobile ? 'h-[105px] sm:h-[115px]' : 'h-[110px] sm:h-[125px]'
      } flex items-center justify-center p-4 bg-white rounded-[12px] border border-[#DDE1E7] shadow-2xs hover:shadow-xs hover:border-[#F2B418] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2B418] select-none group/card cursor-default`}
    >
      <div className="w-full flex items-center justify-center transform transition-transform duration-200 group-hover/card:scale-105">
        <RecruiterLogoRenderer item={item} />
      </div>
    </div>
  );
};

export const RecruitersSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  // Detect mobile width (< 520px) to switch from 2 cols × 2 rows (4 logos) to 1 col × 2 rows (2 logos)
  useEffect(() => {
    const checkResponsive = () => {
      if (typeof window === 'undefined') return;
      const containerWidth = containerRef.current?.offsetWidth || window.innerWidth;
      // Below 500px, 2 columns cannot fit comfortably with proper padding and font size
      const mobileActive = containerWidth < 500 || window.innerWidth < 520;
      setIsMobile((prev) => {
        if (prev !== mobileActive) {
          // Reset index safely on breakpoint change
          setCurrentIndex(0);
          setIsTransitioning(false);
        }
        return mobileActive;
      });
    };

    // Check prefers-reduced-motion
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener('change', handleMotionChange);

      checkResponsive();
      window.addEventListener('resize', checkResponsive);
      return () => {
        window.removeEventListener('resize', checkResponsive);
        mediaQuery.removeEventListener('change', handleMotionChange);
      };
    }
  }, []);

  // Responsive grouping:
  // Desktop: 4 logos per group (2 columns × 2 rows)
  // Mobile: 2 logos per group (1 column × 2 rows)
  // Always exactly two visible rows!
  const groups: RecruiterItem[][] = useMemo(() => {
    const groupSize = isMobile ? 2 : 4;
    const result: RecruiterItem[][] = [];
    for (let i = 0; i < recruitersData.length; i += groupSize) {
      result.push(recruitersData.slice(i, i + groupSize));
    }
    return result;
  }, [isMobile]);

  const totalGroups = groups.length;

  // Extended array with Clone of Group 1 at the end for seamless infinite loop
  const displayGroups = useMemo(() => {
    if (groups.length === 0) return [];
    return [...groups, groups[0]];
  }, [groups]);

  // Transition handlers
  const handleNext = useCallback(() => {
    if (totalGroups <= 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, [totalGroups]);

  const handlePrev = useCallback(() => {
    if (totalGroups <= 1) return;
    if (currentIndex === 0) {
      // Instantly jump to clone position, then slide back to last real group
      setIsTransitioning(false);
      setCurrentIndex(totalGroups);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setCurrentIndex(totalGroups - 1);
        });
      });
    } else {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex, totalGroups]);

  // When transition ends on the clone (index === totalGroups), snap back to index 0 with no animation
  const handleTransitionEnd = useCallback(() => {
    if (currentIndex >= totalGroups) {
      setIsTransitioning(false);
      setCurrentIndex(0);
    }
  }, [currentIndex, totalGroups]);

  // Automatic progression timer (4000ms pause per group)
  useEffect(() => {
    if (isPaused || isHovered || isFocused || prefersReducedMotion || totalGroups <= 1) {
      return;
    }

    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, isHovered, isFocused, prefersReducedMotion, totalGroups, handleNext]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartXRef.current - touchEndX;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartXRef.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    }
  };

  const activeIndicatorIndex = currentIndex % totalGroups;

  return (
    <div
      id="recruiters"
      ref={containerRef}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className="w-full max-w-[551px] flex flex-col justify-start select-none"
    >
      {/* Header with active indicator (200px wide, #F2B418) and controls */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-[28px] lg:text-[32px] font-bold text-[#1F2A3C] tracking-tight font-hindi leading-tight">
            हमारे भर्ती कर्ता
          </h2>

          {/* Navigation and Play/Pause controls */}
          <div className="flex items-center gap-1.5" aria-label="Recruiter carousel controls">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous recruiter group"
              className="p-1 text-[#5B6B80] hover:text-[#1F2A3C] hover:bg-slate-100 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2B418] cursor-pointer"
              title="पिछला ग्रुप (Previous)"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next recruiter group"
              className="p-1 text-[#5B6B80] hover:text-[#1F2A3C] hover:bg-slate-100 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2B418] cursor-pointer"
              title="अगला ग्रुप (Next)"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? 'Resume automatic recruiter carousel' : 'Pause automatic recruiter carousel'}
              aria-pressed={isPaused}
              className="p-1 text-[#5B6B80] hover:text-[#1F2A3C] hover:bg-slate-100 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2B418] cursor-pointer ml-0.5"
              title={isPaused ? 'चलाएं (Play)' : 'रोकें (Pause)'}
            >
              {isPaused ? (
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Active Indicator 200px wide */}
        <div className="w-[200px] h-[4px] bg-[#F2B418] mt-2.5 rounded-full" />
        <p className="text-[13px] sm:text-[14px] text-[#5B6B80] font-hindi leading-relaxed mt-4 max-w-[551px]">
          हमारे संस्थान में उद्योग-केंद्रित, प्रमाणित और व्यावहारिक व्यवसायिक ट्रेड्स संचालित किए जाते हैं, जो छात्रों को कुशल और रोजगारोन्मुखी बनाते हैं।
        </p>
      </div>

      {/* Outer Carousel Viewport: clips overflow so only the active 2-row grid group is visible */}
      <div
        className="relative w-full overflow-hidden"
        role="region"
        aria-roledescription="carousel"
        aria-label="हमारे भर्ती कर्ता - Our Recruiters"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Animated Track: slides complete groups as single units */}
        <div
          onTransitionEnd={handleTransitionEnd}
          className="flex flex-nowrap items-stretch w-full"
          style={{
            transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
            transition: isTransitioning
              ? 'transform 700ms cubic-bezier(0.4, 0, 0.2, 1)'
              : 'none',
            willChange: 'transform',
          }}
          aria-live="polite"
        >
          {displayGroups.map((group, groupIdx) => {
            const isClone = groupIdx === totalGroups;
            const groupKey = isClone ? `clone-group-${groupIdx}` : `group-${groupIdx}`;

            return (
              <div
                key={groupKey}
                className="w-full flex-shrink-0"
                style={{ width: '100%', maxWidth: '100%' }}
                aria-hidden={isClone ? 'true' : undefined}
                aria-label={`Group ${groupIdx % totalGroups + 1} of ${totalGroups}`}
              >
                {/* 
                  EXACT TWO ROWS AT ALL TIMES:
                  - Desktop: 2 columns × 2 rows = exactly 4 visible logo tiles.
                  - Mobile: 1 column × 2 rows = exactly 2 visible logo tiles.
                  - Both rows belong to the same group and animate together.
                  - No fifth logo partially visible.
                */}
                <div
                  className={`grid ${
                    isMobile ? 'grid-cols-1 gap-3.5 sm:gap-4' : 'grid-cols-2 gap-4 sm:gap-5'
                  } w-full`}
                >
                  {group.map((item) => (
                    <RecruiterCard
                      key={item.id}
                      item={item}
                      isClone={isClone}
                      isMobile={isMobile}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dot Indicators (shows active group & allows direct jumping) */}
      {totalGroups > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-5" aria-label="Recruiter groups pagination">
          {groups.map((_, idx) => (
            <button
              key={`dot-${idx}`}
              type="button"
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(idx);
              }}
              aria-label={`Go to group ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2B418] ${
                activeIndicatorIndex === idx
                  ? 'w-6 bg-[#F2B418]'
                  : 'w-2 bg-[#DDE1E7] hover:bg-[#CBD5E1]'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
