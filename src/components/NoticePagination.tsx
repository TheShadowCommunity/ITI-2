import React from 'react';

interface NoticePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const NoticePagination: React.FC<NoticePaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  // Safe page count: always at least 1 page visible
  const safeTotalPages = Math.max(1, totalPages);
  const isFirstPage = currentPage <= 1;
  const isLastPage = currentPage >= safeTotalPages;

  // Generate bounded page numbers for accessibility and mobile screen safety
  const getPageNumbers = (): (number | string)[] => {
    if (safeTotalPages <= 7) {
      return Array.from({ length: safeTotalPages }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [1];
    const leftBound = Math.max(2, currentPage - 1);
    const rightBound = Math.min(safeTotalPages - 1, currentPage + 1);

    if (leftBound > 2) {
      pages.push('...');
    }

    for (let i = leftBound; i <= rightBound; i++) {
      pages.push(i);
    }

    if (rightBound < safeTotalPages - 1) {
      pages.push('...');
    }

    pages.push(safeTotalPages);
    return pages;
  };

  const pageNumbers = getPageNumbers();

  const handlePrev = () => {
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <nav
      aria-label="Notice pagination"
      className="flex items-center justify-center gap-1.5 sm:gap-2 pt-6 sm:pt-8"
    >
      {/* Previous Button */}
      <button
        type="button"
        onClick={handlePrev}
        disabled={isFirstPage}
        aria-disabled={isFirstPage}
        aria-label="Previous page"
        className={`inline-flex items-center justify-center gap-1 px-3 sm:px-3.5 h-[38px] sm:h-[42px] rounded-[8px] text-[13px] sm:text-[14px] font-medium border transition-colors ${
          isFirstPage
            ? 'opacity-40 cursor-not-allowed bg-[#F4F5F7] text-[#AEB8C6] border-[#DDE1E7]'
            : 'bg-white text-[#1F2A3C] border-[#DDE1E7] hover:bg-[#F4F5F7] hover:border-[#1F2A3C]/30 focus:outline-hidden focus:ring-2 focus:ring-[#F2B418]'
        }`}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Numeric Page Buttons */}
      <div className="flex items-center gap-1 sm:gap-1.5">
        {pageNumbers.map((page, index) => {
          if (page === '...') {
            return (
              <span
                key={`ellipsis-${index}`}
                className="w-[32px] sm:w-[38px] h-[38px] sm:h-[42px] flex items-center justify-center text-[#5B6B80] font-medium select-none"
              >
                …
              </span>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === currentPage;

          return (
            <button
              key={`page-${pageNum}`}
              type="button"
              onClick={() => onPageChange(pageNum)}
              aria-current={isActive ? 'page' : undefined}
              aria-label={`Page ${pageNum}`}
              className={`min-w-[38px] sm:min-w-[42px] h-[38px] sm:h-[42px] px-2.5 sm:px-3 rounded-[8px] text-[13px] sm:text-[14px] font-medium flex items-center justify-center border transition-all ${
                isActive
                  ? 'bg-[#1F2A3C] text-white font-bold border-[#1F2A3C] shadow-2xs ring-1 ring-[#1F2A3C]'
                  : 'bg-white text-[#5B6B80] border-[#DDE1E7] hover:text-[#1F2A3C] hover:bg-[#F4F5F7] hover:border-[#1F2A3C]/30 focus:outline-hidden focus:ring-2 focus:ring-[#F2B418]'
              }`}
            >
              {pageNum}
            </button>
          );
        })}
      </div>

      {/* Next Button */}
      <button
        type="button"
        onClick={handleNext}
        disabled={isLastPage}
        aria-disabled={isLastPage}
        aria-label="Next page"
        className={`inline-flex items-center justify-center gap-1 px-3 sm:px-3.5 h-[38px] sm:h-[42px] rounded-[8px] text-[13px] sm:text-[14px] font-medium border transition-colors ${
          isLastPage
            ? 'opacity-40 cursor-not-allowed bg-[#F4F5F7] text-[#AEB8C6] border-[#DDE1E7]'
            : 'bg-white text-[#1F2A3C] border-[#DDE1E7] hover:bg-[#F4F5F7] hover:border-[#1F2A3C]/30 focus:outline-hidden focus:ring-2 focus:ring-[#F2B418]'
        }`}
      >
        <span className="hidden sm:inline">Next</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  );
};
