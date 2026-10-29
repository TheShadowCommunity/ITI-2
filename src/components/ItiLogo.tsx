import React from 'react';

interface ItiLogoProps {
  variant?: 'header-desktop' | 'header-mobile' | 'footer' | 'card' | 'symbol-only';
  className?: string;
}

export const ItiLogo: React.FC<ItiLogoProps> = ({ variant = 'header-desktop', className = '' }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official ITI Emblem Icon */}
      <div className={`relative flex-shrink-0 ${variant === 'header-mobile' ? 'w-9 h-9' : 'w-11 h-11'} bg-white rounded-lg p-1 shadow-2xs border border-border flex items-center justify-center`}>
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer gear */}
          <circle cx="50" cy="50" r="42" stroke="#0284C7" strokeWidth="6" strokeDasharray="6 3" />
          <circle cx="50" cy="50" r="34" fill="#0284C7" fillOpacity="0.1" />
          
          {/* Green laurel base */}
          <path d="M 22 68 C 30 82 70 82 78 68 C 65 74 35 74 22 68 Z" fill="#16A34A" />
          <path d="M 28 62 C 24 54 26 44 32 38 C 30 46 32 54 38 58 Z" fill="#16A34A" />
          <path d="M 72 62 C 76 54 74 44 68 38 C 70 46 68 54 62 58 Z" fill="#16A34A" />

          {/* Golden central gear / flame */}
          <circle cx="50" cy="46" r="20" fill="#EA580C" />
          <circle cx="50" cy="46" r="13" fill="#F2B418" />
          <circle cx="50" cy="46" r="6" fill="#FFFFFF" />

          {/* Central ITI letters */}
          <text x="50" y="50" textAnchor="middle" fill="#1F2A3C" fontSize="11" fontWeight="900" fontFamily="sans-serif">
            ITI
          </text>
        </svg>
      </div>

      {variant !== 'symbol-only' && (
        <div className="flex flex-col leading-tight">
          <span className="text-[12px] font-extrabold tracking-wider text-[#1F2A3C] uppercase font-heading">
            Industrial Training
          </span>
          <span className="text-[11px] font-semibold tracking-wide text-[#5B6B80]">
            Institute
          </span>
          {variant === 'footer' && (
            <span className="text-[13px] font-bold text-[#1F2A3C] mt-0.5">
              New Lucknow City Private ITI
            </span>
          )}
        </div>
      )}
    </div>
  );
};
