import React, { useState } from 'react';
import { ItiLogo } from './ItiLogo';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { name: 'Home', href: '#', hasDropdown: false },
    { 
      name: 'Admissions', 
      href: '#enquiry', 
      hasDropdown: true,
      items: ['Admission Process', 'Eligibility Criteria', 'Fee Structure', 'Apply Online']
    },
    { 
      name: 'Academics', 
      href: '#trades', 
      hasDropdown: true,
      items: ['All Trades', 'Electrician', 'Fitter', 'Fashion Designing', 'Academic Calendar']
    },
    { 
      name: 'Departments', 
      href: '#', 
      hasDropdown: true,
      items: ['Engineering Trades', 'Non-Engineering Trades', 'IT Cell', 'Workshop Staff']
    },
    { 
      name: 'Administration', 
      href: '#about', 
      hasDropdown: true,
      items: ['Trust Board', 'Principal Desk', 'Managing Committee', 'NCVT Affiliation']
    },
    { 
      name: 'Infrastructure', 
      href: '#gallery', 
      hasDropdown: true,
      items: ['Campus & Classrooms', 'Practical Labs', 'Library', 'Hostel Facilities']
    },
    { 
      name: 'Placements', 
      href: '#recruiters', 
      hasDropdown: true,
      items: ['Placement Cell', 'Our Recruiters', 'Apprenticeship', 'Placement Records']
    },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-xs">
      {/* 1. Desktop Top Navigation Strip (Figma node 10:442: 1520 x 46 px) */}
      <div className="hidden lg:block bg-[#1F2A3C] text-white text-[12px] h-[46px] border-b border-white/10">
        <div className="max-w-[1392px] mx-auto h-full px-4 sm:px-6 lg:px-0 flex justify-end items-center">
          <div className="flex items-center h-full">
            {/* First four neutral links */}
            <div className="flex items-center space-x-6 text-[#DDE1E7] font-medium mr-4">
              <a href="#about" className="hover:text-[#F2B418] transition-colors">About Us</a>
              <a href="#enquiry" className="hover:text-[#F2B418] transition-colors">Careers</a>
              <a href="#gallery" className="hover:text-[#F2B418] transition-colors">Events</a>
              <a href="#notices" className="hover:text-[#F2B418] transition-colors">Notice</a>
            </div>

            {/* Yellow-highlighted group 86:693 */}
            <div className="bg-[#F2B418] text-[#14171C] font-semibold flex items-center h-full px-4 space-x-5">
              <a href="#enquiry" className="hover:opacity-80 transition-opacity">Admissions</a>
              <a href="#" className="hover:opacity-80 transition-opacity">Prospectus</a>
              <a href="#enquiry" className="hover:opacity-80 transition-opacity">Feedbacks</a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Desktop Menu Bar (Figma node 10:451: 1520 x 86 px) / Mobile Header (10:782: 430 x 65 px) */}
      <div className="w-full">
        <div className="max-w-[1392px] mx-auto px-4 lg:px-0 flex items-center justify-between h-[65px] lg:h-[86px]">
          {/* Logo Region */}
          <a href="#" className="flex items-center group" aria-label="New Lucknow City Private ITI Homepage">
            {/* On desktop: Industrial Training Institute visible; New Lucknow City P.V.T hidden in node 10:466 per desktop spec */}
            <ItiLogo variant="header-desktop" className="hidden lg:flex" />
            {/* On mobile: 79 x 42 px */}
            <ItiLogo variant="header-mobile" className="flex lg:hidden" />
          </a>

          {/* Desktop Navigation Group (906 x 54 px) */}
          <nav className="hidden lg:flex items-center space-x-2" aria-label="Main Navigation">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="px-3 py-2 text-[15px] font-medium text-[#1F2A3C] hover:text-[#D99A00] transition-colors inline-flex items-center gap-1 rounded-md"
                >
                  {item.name}
                  {item.hasDropdown && (
                    <svg className="w-3.5 h-3.5 text-[#5B6B80]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-0 w-52 bg-white rounded-md shadow-lg border border-[#DDE1E7] py-2 z-50">
                    {item.items?.map((subItem) => (
                      <a
                        key={subItem}
                        href={item.href}
                        className="block px-4 py-2 text-xs text-[#1F2A3C] hover:bg-[#F4F5F7] hover:text-[#8A6100] transition-colors"
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Action Region (30 x 30 px, node 10:788 / 10:793) */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-[30px] h-[30px] flex items-center justify-center rounded text-[#1F2A3C] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#F2B418]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#DDE1E7] px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-2 pb-3 mb-2 border-b border-[#DDE1E7] text-xs">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 bg-[#F4F5F7] rounded text-[#1F2A3C] font-medium">About Us</a>
            <a href="#enquiry" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 bg-[#F2B418]/20 rounded text-[#14171C] font-bold">Admissions</a>
            <a href="#notices" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 bg-[#F4F5F7] rounded text-[#1F2A3C] font-medium">Notices</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 bg-[#F4F5F7] rounded text-[#1F2A3C] font-medium">Contact</a>
          </div>

          {navItems.map((item) => (
            <div key={item.name} className="border-b border-slate-100 last:border-none">
              <a
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2 text-sm font-semibold text-[#1F2A3C] hover:text-[#D99A00] transition-colors"
              >
                <span>{item.name}</span>
                {item.hasDropdown && (
                  <span className="text-xs text-[#5B6B80]">▾</span>
                )}
              </a>
            </div>
          ))}

          <div className="pt-3">
            <a
              href="#enquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center h-[46px] bg-[#F2B418] hover:bg-[#D99A00] text-[#14171C] font-bold text-sm rounded-[4px] shadow-xs transition-colors"
            >
              Go To Enquiry
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
