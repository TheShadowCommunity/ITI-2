import React from 'react';
import { GuestLectureItem } from '../types/guest-lecture';

interface GuestLectureCardProps {
  lecture: GuestLectureItem;
}

export const GuestLectureCard: React.FC<GuestLectureCardProps> = ({ lecture }) => {
  return (
    <article className="w-full flex flex-col md:flex-row items-stretch gap-5 lg:gap-[20px] bg-transparent">
      {/* 1. Visual / Media Panel */}
      <div className="w-full md:w-[240px] lg:w-[270px] aspect-[16/9] md:aspect-auto md:min-h-[500px] lg:min-h-[550px] rounded-[16px] overflow-hidden relative flex-shrink-0 bg-slate-200 border border-[#DDE1E7] shadow-2xs">
        <img
          src={lecture.image}
          alt={lecture.imageAlt || lecture.title}
          className="w-full h-full object-cover object-center"
          loading="lazy"
          width={270}
          height={550}
        />
        {/* Exact bottom dark gradient overlay per Figma spec (~80% opacity near bottom) */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none rounded-[16px]"
          aria-hidden="true" 
        />
      </div>

      {/* 2. Information Panel */}
      <div className="flex-1 flex flex-col justify-start min-w-0">
        {/* Lecture Meta / Duration */}
        <p className="text-[14px] leading-[22px] tracking-[0.21px] text-[#708E91] font-normal mb-1 font-heading">
          {lecture.duration}
        </p>

        {/* Lecture Title */}
        <h2 className="text-[22px] sm:text-[26px] lg:text-[32px] leading-[30px] sm:leading-[34px] lg:leading-[40px] font-semibold text-[#151D1E] font-heading mb-4 tracking-tight">
          {lecture.title}
        </h2>

        {/* Speaker Row (38x38 px circular icon, 12px gap) */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-[38px] h-[38px] rounded-full overflow-hidden bg-[#DDE1E7] border border-[#AEB8C6] flex-shrink-0 flex items-center justify-center">
            {lecture.speaker.avatar ? (
              <img
                src={lecture.speaker.avatar}
                alt={lecture.speaker.name}
                className="w-full h-full object-cover"
                loading="lazy"
                width={38}
                height={38}
              />
            ) : (
              <svg className="w-5 h-5 text-[#5B6B80]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <div className="flex flex-col justify-center leading-tight">
            <span className="text-[16px] leading-[22px] font-medium tracking-[0.2px] text-[#5B6B80] font-heading">
              {lecture.speaker.name}
            </span>
            <span className="text-[12px] leading-[20px] font-normal tracking-[0.21px] text-[#5B6B80] font-heading">
              {lecture.speaker.designation}
            </span>
          </div>
        </div>

        {/* Small Active Indicator Rule (120px wide, #F2B418) */}
        <div 
          className="w-[120px] h-[4px] bg-[#F2B418] rounded-full mb-4" 
          aria-hidden="true" 
        />

        {/* Data-mapped Topic Points List */}
        <ul className="space-y-1 sm:space-y-1.5 list-none p-0 m-0" aria-label="Lecture key topics">
          {lecture.topics.map((topic, index) => (
            <li 
              key={index} 
              className="flex items-start gap-3 py-1.5 pr-2 sm:pr-5"
            >
              {/* 20x20 double chevron icon inside 24px column */}
              <div className="w-6 h-5 flex-shrink-0 flex items-center justify-center text-[#F2B418] pt-0.5">
                <svg
                  className="w-4 h-4 text-[#F2B418]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="13 17 18 12 13 7" />
                  <polyline points="6 17 11 12 6 7" />
                </svg>
              </div>

              {/* Topic Copy */}
              <p className="text-[14px] sm:text-[16px] leading-[22px] tracking-[0.1px] text-[#5B6B80] font-normal font-heading m-0 flex-1">
                {topic}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
