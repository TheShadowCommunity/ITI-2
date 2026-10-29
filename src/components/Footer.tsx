import React from 'react';
import { ItiLogo } from './ItiLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-[#DDE1E7] pt-12 lg:pt-14 pb-8">
      <div className="max-w-[1392px] mx-auto px-4 lg:px-0">
        {/* Main Footer Links & Branding Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-[#DDE1E7]">
          {/* Brand Col (396 x 72 px) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <ItiLogo variant="footer" className="mb-3" />
            <span className="block text-[12px] font-medium text-[#5B6B80] tracking-wide">
              भारत सरकार NCVT द्वारा मान्यता प्राप्त
            </span>
          </div>

          {/* Links Grid: 4 columns (Home, Academics, Academics, Others) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {/* Home Column (106 px) */}
            <div>
              <h4 className="text-[14px] font-bold text-[#1F2A3C] mb-3 font-heading">Home</h4>
              <ul className="space-y-2 text-[13px] text-[#5B6B80]">
                <li><a href="#about" className="hover:text-[#1F2A3C] transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-[#1F2A3C] transition-colors">Contact us</a></li>
                <li><a href="#enquiry" className="hover:text-[#1F2A3C] transition-colors">Career</a></li>
              </ul>
            </div>

            {/* Academics Column 1 (121 px) */}
            <div>
              <h4 className="text-[14px] font-bold text-[#1F2A3C] mb-3 font-heading">Academics</h4>
              <ul className="space-y-2 text-[13px] text-[#5B6B80]">
                <li><a href="#trades" className="hover:text-[#1F2A3C] transition-colors">Courses</a></li>
                <li><a href="#about" className="hover:text-[#1F2A3C] transition-colors">Faculties</a></li>
                <li><a href="#trades" className="hover:text-[#1F2A3C] transition-colors">Guest Lectures</a></li>
                <li><a href="#" className="hover:text-[#1F2A3C] transition-colors">Code of Conduct</a></li>
                <li><a href="#" className="hover:text-[#1F2A3C] transition-colors">Policy</a></li>
              </ul>
            </div>

            {/* Academics Column 2 (121 px) */}
            <div>
              <h4 className="text-[14px] font-bold text-[#1F2A3C] mb-3 font-heading">Academics</h4>
              <ul className="space-y-2 text-[13px] text-[#5B6B80]">
                <li><a href="#trades" className="hover:text-[#1F2A3C] transition-colors">Courses</a></li>
                <li><a href="#about" className="hover:text-[#1F2A3C] transition-colors">Faculties</a></li>
                <li><a href="#trades" className="hover:text-[#1F2A3C] transition-colors">Guest Lectures</a></li>
                <li><a href="#" className="hover:text-[#1F2A3C] transition-colors">Code of Conduct</a></li>
                <li><a href="#" className="hover:text-[#1F2A3C] transition-colors">Policy</a></li>
              </ul>
            </div>

            {/* Others Column (106 px) */}
            <div>
              <h4 className="text-[14px] font-bold text-[#1F2A3C] mb-3 font-heading">Others</h4>
              <ul className="space-y-2 text-[13px] text-[#5B6B80]">
                <li><a href="#trades" className="hover:text-[#1F2A3C] transition-colors">Trainings</a></li>
                <li><a href="#gallery" className="hover:text-[#1F2A3C] transition-colors">Infrastructure</a></li>
                <li><a href="#enquiry" className="hover:text-[#1F2A3C] transition-colors">Feedbacks</a></li>
                <li><a href="#gallery" className="hover:text-[#1F2A3C] transition-colors">Events</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Base Row (Figma 10:775: 1392 x 46 px) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[12px] text-[#5B6B80] gap-2">
          <p>© 2025 New Lucknow City Private ITI. All Rights Reserved.</p>
          <p className="font-medium text-[#1F2A3C]">
            Made by Shadow Community
          </p>
        </div>
      </div>
    </footer>
  );
};
