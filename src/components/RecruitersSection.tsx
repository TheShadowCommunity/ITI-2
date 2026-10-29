import React from 'react';

export const RecruitersSection: React.FC = () => {
  return (
    <div id="recruiters" className="w-full max-w-[551px] flex flex-col justify-start">
      {/* Header with active indicator (200px wide, #F2B418) */}
      <div className="mb-8">
        <h2 className="text-[28px] lg:text-[32px] font-bold text-[#1F2A3C] tracking-tight font-hindi leading-tight">
          हमारे भर्ती कर्ता
        </h2>
        {/* Active Indicator 200px wide */}
        <div className="w-[200px] h-[4px] bg-[#F2B418] mt-2.5 rounded-full" />
        <p className="text-[13px] sm:text-[14px] text-[#5B6B80] font-hindi leading-relaxed mt-4 max-w-[551px]">
          हमारे संस्थान में उद्योग-केंद्रित, प्रमाणित और व्यावहारिक व्यवसायिक ट्रेड्स संचालित किए जाते हैं, जो छात्रों को कुशल और रोजगारोन्मुखी बनाते हैं।
        </p>
      </div>

      {/* Logos grid (551 x 414 px on desktop) with asymmetrical slots */}
      <div className="grid grid-cols-2 gap-4 sm:gap-5 w-full">
        {/* 1. Meesho (213 x 130 px region) */}
        <div className="h-[105px] sm:h-[125px] flex items-center justify-center p-4 bg-white rounded-[12px] border border-[#DDE1E7] shadow-2xs hover:shadow-xs transition-shadow">
          <svg className="h-7 w-auto max-w-[130px]" viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="50%" y="28" textAnchor="middle" fill="#14171C" fontSize="26" fontWeight="800" fontFamily="sans-serif" letterSpacing="-1">
              meesho
            </text>
          </svg>
        </div>

        {/* 2. Lotte India (186 x 130 px region) */}
        <div className="h-[105px] sm:h-[125px] flex items-center justify-center p-4 bg-white rounded-[12px] border border-[#DDE1E7] shadow-2xs hover:shadow-xs transition-shadow">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border-2 border-[#14171C] flex items-center justify-center text-[11px] font-black text-[#14171C]">
              l
            </div>
            <span className="text-xs sm:text-sm font-black tracking-wider text-[#14171C] uppercase font-sans">
              LOTTE INDIA
            </span>
          </div>
        </div>

        {/* 3. Pratilipi (118 x 130 px region) */}
        <div className="h-[105px] sm:h-[125px] flex items-center justify-center p-4 bg-white rounded-[12px] border border-[#DDE1E7] shadow-2xs hover:shadow-xs transition-shadow">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#14171C] text-white flex items-center justify-center text-[11px] font-bold">
              प्र
            </div>
            <span className="text-sm font-bold text-[#14171C] tracking-tight font-sans">
              pratilipi
            </span>
          </div>
        </div>

        {/* 4. Lotte India (186 x 130 px region) */}
        <div className="h-[105px] sm:h-[125px] flex items-center justify-center p-4 bg-white rounded-[12px] border border-[#DDE1E7] shadow-2xs hover:shadow-xs transition-shadow">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full border-2 border-[#14171C] flex items-center justify-center text-[11px] font-black text-[#14171C]">
              l
            </div>
            <span className="text-xs sm:text-sm font-black tracking-wider text-[#14171C] uppercase font-sans">
              LOTTE INDIA
            </span>
          </div>
        </div>

        {/* 5. Tata Housing (203 x 130 px region) */}
        <div className="h-[105px] sm:h-[125px] flex items-center justify-center p-4 bg-white rounded-[12px] border border-[#DDE1E7] shadow-2xs hover:shadow-xs transition-shadow">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#14171C]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 22h20L12 2zm0 5l6.5 13h-13L12 7z"/>
              </svg>
              <span className="text-xs font-black tracking-widest text-[#14171C]">TATA</span>
            </div>
            <span className="text-[10px] tracking-wider text-[#5B6B80] font-semibold uppercase">HOUSING</span>
          </div>
        </div>

        {/* 6. Setu (143 x 130 px region) */}
        <div className="h-[105px] sm:h-[125px] flex items-center justify-center p-4 bg-white rounded-[12px] border border-[#DDE1E7] shadow-2xs hover:shadow-xs transition-shadow">
          <span className="text-base sm:text-lg font-black tracking-widest text-[#14171C] font-sans uppercase">
            SETU
          </span>
        </div>
      </div>
    </div>
  );
};
