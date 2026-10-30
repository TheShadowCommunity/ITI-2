import React from 'react';
import { NoticeItem } from '../types/notice';

interface NoticeTableProps {
  notices: NoticeItem[];
  isLoading?: boolean;
}

export const NoticeTable: React.FC<NoticeTableProps> = ({ notices, isLoading }) => {
  if (isLoading) {
    return (
      <div className="w-full bg-white border border-[#DDE1E7] rounded-[12px] overflow-hidden p-12 text-center shadow-2xs">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-[#DDE1E7] border-t-[#F2B418] mb-3" />
        <p className="text-sm font-hindi text-[#5B6B80]">
          सूचनाएं लोड हो रही हैं... (Loading notices...)
        </p>
      </div>
    );
  }

  if (notices.length === 0) {
    return (
      <div className="w-full bg-white border border-[#DDE1E7] rounded-[12px] overflow-hidden shadow-2xs">
        {/* Table Header even in empty state */}
        <div className="bg-[#1F2A3C] text-white px-5 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between">
          <div className="w-[100px] sm:w-[150px] lg:w-[180px] font-semibold text-xs sm:text-[14px] uppercase tracking-wider">
            Date
          </div>
          <div className="flex-grow font-semibold text-xs sm:text-[14px] uppercase tracking-wider pl-4 sm:pl-6">
            Notice
          </div>
        </div>

        {/* Designed Empty State Message */}
        <div className="p-10 sm:p-14 text-center">
          <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[#F4F5F7] border border-[#DDE1E7] flex items-center justify-center text-[#5B6B80]">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[#1F2A3C] font-heading">
            No notices available right now.
          </h3>
          <p className="text-xs sm:text-sm text-[#5B6B80] font-hindi mt-1">
            वर्तमान में कोई नई सूचना उपलब्ध नहीं है। कृपया बाद में पुनः देखें।
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white border border-[#DDE1E7] rounded-[12px] overflow-hidden shadow-2xs">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          {/* Table Header matching Figma: Dark Navy #1F2A3C */}
          <thead>
            <tr className="bg-[#1F2A3C] text-white">
              <th
                scope="col"
                className="w-[105px] sm:w-[145px] lg:w-[180px] px-4 sm:px-6 md:px-8 py-3.5 sm:py-4 text-xs sm:text-[14px] font-semibold tracking-wide border-r border-[#2E3B4E]"
              >
                Date
              </th>
              <th
                scope="col"
                className="px-4 sm:px-6 md:px-8 py-3.5 sm:py-4 text-xs sm:text-[14px] font-semibold tracking-wide"
              >
                Notice
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-[#DDE1E7]">
            {notices.map((notice) => {
              const fileUrl = notice.downloadUrl || notice.attachmentUrl || notice.href || '#';

              return (
                <tr
                  key={notice.id}
                  className="group hover:bg-[#F8FAFC] transition-colors"
                >
                  {/* Date Column: 2 lines with vertical divider border */}
                  <td className="w-[105px] sm:w-[145px] lg:w-[180px] px-4 sm:px-6 md:px-8 py-4 sm:py-5 align-top border-r border-[#DDE1E7]">
                    <div className="flex flex-col">
                      <span className="text-[13px] sm:text-[14px] font-semibold text-[#1F2A3C] font-heading leading-tight whitespace-nowrap">
                        {notice.date}
                      </span>
                      {notice.time && (
                        <span className="text-[11px] sm:text-[12px] text-[#5B6B80] font-medium mt-0.5 sm:mt-1 whitespace-nowrap">
                          {notice.time}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Notice Content Column: Hindi Copy + Download Action Icon on Far Right */}
                  <td className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 align-top">
                    <div className="flex items-start justify-between gap-4 sm:gap-6">
                      {/* Notice Title / Hindi text */}
                      <div className="flex-grow">
                        <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#1F2A3C] font-hindi">
                          {notice.title}
                        </p>
                      </div>

                      {/* Download Action Button on right edge */}
                      <div className="flex-shrink-0 pt-0.5">
                        <a
                          href={fileUrl}
                          download
                          aria-label={`Download notice: ${notice.title.slice(0, 30)}...`}
                          className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-[#5B6B80] hover:text-[#1F2A3C] hover:bg-[#F4F5F7] focus:outline-hidden focus:ring-2 focus:ring-[#F2B418] transition-all"
                          title="Download Notice PDF / Circular"
                        >
                          <svg
                            className="w-5 h-5 transition-transform group-hover:translate-y-0.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.8}
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
