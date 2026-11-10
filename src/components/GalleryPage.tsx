import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface GalleryImageItem {
  src: string;
  alt: string;
}

export const GalleryPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Gallery | New Lucknow City Private ITI';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  // Desktop block image definitions matching Figma and screenshot
  const desktopBlockCol1: { tall: GalleryImageItem; short: GalleryImageItem } = {
    tall: {
      src: '/images/gallery/desk-col1-tall.jpg',
      alt: 'Flag hoisting ceremony at New Lucknow City Private ITI campus terrace',
    },
    short: {
      src: '/images/gallery/desk-col1-short.jpg',
      alt: 'Students engaged in practical tailoring and fashion designing workshop',
    },
  };

  const desktopBlockCol2: { short: GalleryImageItem; tall: GalleryImageItem } = {
    short: {
      src: '/images/gallery/desk-col2-short.jpg',
      alt: 'Batch students celebrating certification achievements in front of institute banner',
    },
    tall: {
      src: '/images/gallery/desk-col2-tall.jpg',
      alt: 'Student cultural dance performance at Abhivyakti annual institute fest',
    },
  };

  const desktopBlockCol3: { tall: GalleryImageItem; short: GalleryImageItem } = {
    tall: {
      src: '/images/gallery/desk-col3-tall.jpg',
      alt: 'Student receiving academic counseling and orientation at institute reception desk',
    },
    short: {
      src: '/images/gallery/desk-col3-short.jpg',
      alt: 'Successful ITI trade certified trainees proudly displaying their certificates',
    },
  };

  const desktopBlockCol4: { short: GalleryImageItem; tall: GalleryImageItem } = {
    short: {
      src: '/images/gallery/desk-col4-short.jpg',
      alt: 'Institute trainees displaying their qualification certificates with faculty',
    },
    tall: {
      src: '/images/gallery/desk-col4-tall.jpg',
      alt: 'Classical and folk dance presentation at the annual cultural day celebration',
    },
  };

  // Mobile block image definitions matching mobile screenshot
  const mobileCards: { src: string; alt: string; colSpan: string }[] = [
    // Row 1
    {
      src: '/images/gallery/mob-r1-c1.jpg',
      alt: 'Group of institute trainees seated outdoors on campus boundary wall',
      colSpan: 'col-span-1',
    },
    {
      src: '/images/gallery/mob-r1-c2.jpg',
      alt: 'Guest of honor and dignitaries addressing students at campus auditorium function',
      colSpan: 'col-span-2',
    },
    // Row 2
    {
      src: '/images/gallery/mob-r2-c1.jpg',
      alt: 'Faculty and students gathered for Republic Day flag hoisting ceremony',
      colSpan: 'col-span-2',
    },
    {
      src: '/images/gallery/mob-r2-c2.jpg',
      alt: 'Students carrying technical textbooks walking across modern institute campus courtyard',
      colSpan: 'col-span-1',
    },
    // Row 3
    {
      src: '/images/gallery/mob-r3-c1.jpg',
      alt: 'Well-stocked library corridor with engineering textbooks and study reference rows',
      colSpan: 'col-span-1',
    },
    {
      src: '/images/gallery/mob-r3-c2.jpg',
      alt: 'Solemn national anthem and floral tribute during terrace flag unfurling event',
      colSpan: 'col-span-2',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F5F7] text-[#1F2A3C] selection:bg-[#F2B418] selection:text-[#14171C]">
      {/* 1. Global Navigation Header */}
      <Header />

      <main className="flex-grow pb-14 sm:pb-16 lg:pb-24">
        {/* 2. Page Title Band with Gold Gradient Accent Line */}
        <section className="w-full pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-10">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
              <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] 2xl:text-[52px] leading-tight font-bold text-[#1F2A3C] font-heading tracking-tight m-0 flex-shrink-0">
                Gallery
              </h1>
              {/* Active Accent Gradient Line stretching to the right */}
              <div
                className="w-full max-w-[280px] sm:max-w-[500px] lg:max-w-[850px] h-[5px] sm:h-[6px] lg:h-[7px] rounded-full bg-gradient-to-r from-[#F2B418]/10 via-[#F2B418]/60 to-[#F2B418] flex-grow self-center"
                aria-hidden="true"
              />
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. DESKTOP GALLERY MOSAIC (4 Staggered Columns, 2 Repeated Blocks)
            Visible on lg screens (>= 1024px)
            ========================================================================= */}
        <section className="hidden lg:block w-full">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0 flex flex-col gap-6">
            {/* Repeated across two identical blocks as specified in Figma design */}
            {[1, 2].map((blockIndex) => (
              <div
                key={`desktop-gallery-block-${blockIndex}`}
                className="grid grid-cols-4 gap-6 w-full"
              >
                {/* Column 1: Tall (~626px) + Short (~301px) */}
                <div className="flex flex-col gap-6 w-full">
                  <div className="w-full aspect-[330/626] rounded-[16px] overflow-hidden bg-slate-200 border border-[#DDE1E7]/60 shadow-xs group">
                    <img
                      src={desktopBlockCol1.tall.src}
                      alt={desktopBlockCol1.tall.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading={blockIndex === 1 ? 'eager' : 'lazy'}
                      width={330}
                      height={626}
                    />
                  </div>
                  <div className="w-full aspect-[330/301] rounded-[16px] overflow-hidden bg-slate-200 border border-[#DDE1E7]/60 shadow-xs group">
                    <img
                      src={desktopBlockCol1.short.src}
                      alt={desktopBlockCol1.short.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      width={330}
                      height={301}
                    />
                  </div>
                </div>

                {/* Column 2: Short (~301px) + Tall (~626px) */}
                <div className="flex flex-col gap-6 w-full">
                  <div className="w-full aspect-[330/301] rounded-[16px] overflow-hidden bg-slate-200 border border-[#DDE1E7]/60 shadow-xs group">
                    <img
                      src={desktopBlockCol2.short.src}
                      alt={desktopBlockCol2.short.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading={blockIndex === 1 ? 'eager' : 'lazy'}
                      width={330}
                      height={301}
                    />
                  </div>
                  <div className="w-full aspect-[330/626] rounded-[16px] overflow-hidden bg-slate-200 border border-[#DDE1E7]/60 shadow-xs group">
                    <img
                      src={desktopBlockCol2.tall.src}
                      alt={desktopBlockCol2.tall.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      width={330}
                      height={626}
                    />
                  </div>
                </div>

                {/* Column 3: Tall (~626px) + Short (~301px) */}
                <div className="flex flex-col gap-6 w-full">
                  <div className="w-full aspect-[330/626] rounded-[16px] overflow-hidden bg-slate-200 border border-[#DDE1E7]/60 shadow-xs group">
                    <img
                      src={desktopBlockCol3.tall.src}
                      alt={desktopBlockCol3.tall.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading={blockIndex === 1 ? 'eager' : 'lazy'}
                      width={330}
                      height={626}
                    />
                  </div>
                  <div className="w-full aspect-[330/301] rounded-[16px] overflow-hidden bg-slate-200 border border-[#DDE1E7]/60 shadow-xs group">
                    <img
                      src={desktopBlockCol3.short.src}
                      alt={desktopBlockCol3.short.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      width={330}
                      height={301}
                    />
                  </div>
                </div>

                {/* Column 4: Short (~301px) + Tall (~626px) */}
                <div className="flex flex-col gap-6 w-full">
                  <div className="w-full aspect-[330/301] rounded-[16px] overflow-hidden bg-slate-200 border border-[#DDE1E7]/60 shadow-xs group">
                    <img
                      src={desktopBlockCol4.short.src}
                      alt={desktopBlockCol4.short.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading={blockIndex === 1 ? 'eager' : 'lazy'}
                      width={330}
                      height={301}
                    />
                  </div>
                  <div className="w-full aspect-[330/626] rounded-[16px] overflow-hidden bg-slate-200 border border-[#DDE1E7]/60 shadow-xs group">
                    <img
                      src={desktopBlockCol4.tall.src}
                      alt={desktopBlockCol4.tall.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      width={330}
                      height={626}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            4. MOBILE & TABLET GALLERY MOSAIC (3 Columns, Custom Spans, 2 Repeated Blocks)
            Visible on < lg screens (< 1024px)
            ========================================================================= */}
        <section className="block lg:hidden w-full">
          <div className="max-w-[760px] mx-auto px-4 sm:px-6 flex flex-col gap-2">
            {[1, 2].map((blockIndex) => (
              <div
                key={`mobile-gallery-block-${blockIndex}`}
                className="grid grid-cols-3 gap-2 w-full"
              >
                {mobileCards.map((card, idx) => (
                  <div
                    key={`mob-card-${blockIndex}-${idx}`}
                    className={`${card.colSpan} h-[clamp(140px,38vw,220px)] rounded-[10px] overflow-hidden bg-slate-200 border border-[#DDE1E7]/60 shadow-xs relative group`}
                  >
                    <img
                      src={card.src}
                      alt={card.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading={blockIndex === 1 && idx < 3 ? 'eager' : 'lazy'}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 5. Institutional Footer */}
      <Footer />
    </div>
  );
};
