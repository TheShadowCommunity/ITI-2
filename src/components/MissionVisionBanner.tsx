import React from 'react';

export const MissionVisionBanner: React.FC = () => {
  return (
    <section className="bg-[#1F2A3C] text-white w-full h-[245px] flex items-center border-t border-[#2E3B4E]">
      <div className="max-w-[1392px] w-full mx-auto px-4 lg:px-0 flex items-center justify-between">
        <div className="grid grid-cols-2 gap-12 w-full">
          {/* Mission Block (Figma node 10:469: 611 x 156 px) */}
          <div className="flex items-center gap-6">
            {/* Target/Bullseye Icon (117 x 100 px region) */}
            <div className="w-[100px] h-[100px] rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-[#F2B418] flex-shrink-0">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="6" strokeWidth="1.5" />
                <circle cx="12" cy="12" r="2" fill="currentColor" />
                <line x1="12" y1="2" x2="12" y2="4" strokeWidth="1.5" />
                <line x1="12" y1="2" x2="12" y2="22" strokeWidth="1.5" />
                <line x1="2" y1="12" x2="4" y2="12" strokeWidth="1.5" />
                <line x1="20" y1="12" x2="22" y2="12" strokeWidth="1.5" />
              </svg>
            </div>
            {/* Content Group (382 x 156 px) */}
            <div className="flex flex-col justify-center">
              <h3 className="text-[20px] font-bold text-white tracking-wide leading-tight font-heading">
                College Mission
              </h3>
              <p className="text-[13px] text-[#F2B418] font-hindi mb-1.5 font-medium">
                कॉलेज का उद्देश्य
              </p>
              <p className="text-[13px] text-[#DDE1E7] leading-relaxed font-hindi max-w-[382px] mb-2 line-clamp-2">
                हमारे कॉलेज में व्यावहारिक शिक्षा का अनुभव करें और अपनी क्षमताओं को उजागर करें।
              </p>
              <a
                href="#about"
                className="w-[73px] h-[30px] inline-flex items-center text-[13px] font-semibold text-[#F2B418] hover:text-white transition-colors gap-1"
              >
                More <span aria-hidden="true">&gt;</span>
              </a>
            </div>
          </div>

          {/* Vision Block (Figma node 20:932: 611 x 157 px) */}
          <div className="flex items-center gap-6">
            {/* Graduation Cap Icon */}
            <div className="w-[100px] h-[100px] rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-[#F2B418] flex-shrink-0">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5l-9 4.5 9 4.5 9-4.5-9-4.5zM3 9v6c0 3 9 5 9 5s9-2 9-5V9"
                />
                <path strokeWidth="1.5" strokeLinecap="round" d="M21 9v7.5" />
              </svg>
            </div>
            {/* Content Group (399 x 157 px) */}
            <div className="flex flex-col justify-center">
              <h3 className="text-[20px] font-bold text-white tracking-wide leading-tight font-heading">
                College Vision
              </h3>
              <p className="text-[13px] text-[#F2B418] font-hindi mb-1.5 font-medium">
                कॉलेज की दृष्टि
              </p>
              <p className="text-[13px] text-[#DDE1E7] leading-relaxed font-hindi max-w-[399px] mb-2 line-clamp-2">
                हमारे कॉलेज में व्यावहारिक शिक्षा का अनुभव करें और अपनी क्षमताओं को उजागर करें।
              </p>
              <a
                href="#about"
                className="w-[73px] h-[30px] inline-flex items-center text-[13px] font-semibold text-[#F2B418] hover:text-white transition-colors gap-1"
              >
                More <span aria-hidden="true">&gt;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
