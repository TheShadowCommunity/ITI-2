import React from 'react';

export const MissionVisionBanner: React.FC = () => {
  return (
    <section className="bg-navy-900 text-white w-full py-7 lg:py-9 2xl:py-10 min-h-[180px] flex items-center border-t border-navy-800">
      <div className="max-w-[1392px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0 flex items-center justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 w-full">
          {/* Mission Block */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Target/Bullseye Icon */}
            {/* <div className="w-[76px] h-[76px] lg:w-[88px] lg:h-[88px] 2xl:w-[100px] 2xl:h-[100px] rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-[#F2B418] flex-shrink-0"> */}
            <div className="w-[90px]">
              <img src="/assets/icons/college-mission.svg" alt="" className="w-full h-full" />
            </div>
            {/* Content Group */}
            <div className="flex flex-col justify-center min-w-0">
              <h3 className="text-[18px] xl:text-[20px] text-[#F4F5F7] tracking-wide leading-tight font-heading mb-[8px]">
                College Mission
              </h3>
              <p className="text-[13px] text-[#AEB8C6] font-hindi mb-[12px] font-medium">
                कॉलेज का उद्देश्य
              </p>
              <p className="text-[16px] xl:text-[18px] text-[#AEB8C6] leading-relaxed font-hindi max-w-[382px] mb-2 line-clamp-2">
                हमारे कॉलेज में व्यावहारिक शिक्षा का अनुभव करें और अपनी क्षमताओं को उजागर करें।
              </p>
              <a
                href="#about"
                className="w-[73px] h-[30px] inline-flex items-center text-[13px] font-semibold text-[#D99A00] hover:text-white transition-colors gap-1"
              >
                More 
                 <div className="">
                      <img src="/assets/icons/btn-arrow-right.svg" alt="" className="w-full h-full" />
                    </div>
              </a>
            </div>
          </div>

          {/* Vision Block */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Graduation Cap Icon */}
            <div className="w-[90px]">
              <img src="/assets/icons/college-vision.svg" alt="" className="w-full h-full" />
            </div>
            {/* Content Group */}
            <div className="flex flex-col justify-center min-w-0">
              <h3 className="text-[18px] xl:text-[20px]  text-[#F4F5F7] tracking-wide leading-tight font-heading mb-[8px]">
                College Vision
              </h3>
              <p className="text-[13px] text-[#AEB8C6] font-hindi mb-[12px] font-medium">
                कॉलेज की दृष्टि
              </p>
              <p className="text-[16px] xl:text-[18px] text-[#AEB8C6] leading-relaxed font-hindi max-w-[399px] mb-2 line-clamp-2">
                हमारे कॉलेज में व्यावहारिक शिक्षा का अनुभव करें और अपनी क्षमताओं को उजागर करें।
              </p>
              <a
                href="#about"
                className="w-[73px] h-[30px] inline-flex items-center text-[13px] font-semibold text-[#D99A00] hover:text-white transition-colors gap-1"
              >
                More 
                 <div className="">
                      <img src="/assets/icons/btn-arrow-right.svg" alt="" className="w-full h-full" />
                    </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
