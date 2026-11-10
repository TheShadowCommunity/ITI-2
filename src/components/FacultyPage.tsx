import React, { useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface FacultyMember {
  name: string;
  designation: string;
  department?: string;
  image: string;
}

export const FacultyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Faculty | New Lucknow City Private ITI';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const facultyMembers: FacultyMember[] = [
    {
      name: 'Alka Yadav',
      designation: 'Principal',
      image: '/images/faculty/alka-yadav.jpg',
    },
    {
      name: 'Gunjan Saxena',
      designation: 'Manager',
      image: '/images/faculty/gunjan-saxena.jpg',
    },
    {
      name: 'Reena Srivastava',
      designation: 'Instructor',
      department: 'Sewing Technology',
      image: '/images/faculty/reena-srivastava.jpg',
    },
    {
      name: 'Sarabhjeet Singh',
      designation: 'Nodal Officer',
      department: 'Administrative Incharge',
      image: '/images/faculty/sarabhjeet-singh.jpg',
    },
    {
      name: 'Satish Yadav',
      designation: 'Instructor',
      department: 'Electrician Trade',
      image: '/images/faculty/satish-yadav.jpg',
    },
    {
      name: 'Virendra Sharma',
      designation: 'Instructor',
      department: 'Electrician Trade',
      image: '/images/faculty/virendra-sharma.jpg',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F5F7] text-[#1F2A3C] selection:bg-[#F2B418] selection:text-[#14171C]">
      {/* 1. Global Navigation Header */}
      <Header />

      <main className="flex-grow pb-14 sm:pb-16 lg:pb-24">
        {/* 2. Page Title Band with Gold Gradient Accent Line */}
        <section className="w-full pt-6 pb-6 sm:pt-8 sm:pb-8 lg:pt-10 lg:pb-12">
          <div className="max-w-[1392px] mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
              <h1 className="text-[32px] sm:text-[40px] lg:text-[48px] 2xl:text-[52px] leading-tight font-bold text-[#1F2A3C] font-heading tracking-tight m-0 flex-shrink-0">
                Faculty
              </h1>
              {/* Active Accent Gradient Line stretching to the right */}
              <div
                className="w-full max-w-[280px] sm:max-w-[500px] lg:max-w-[850px] h-[5px] sm:h-[6px] lg:h-[7px] rounded-full bg-gradient-to-r from-[#F2B418]/10 via-[#F2B418]/60 to-[#F2B418] flex-grow self-center"
                aria-hidden="true"
              />
            </div>
          </div>
        </section>

        {/* 3. Main Faculty Cards Grid */}
        <section className="w-full">
          <div className="max-w-[1140px] xl:max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-6 xl:px-4">
            {/* Responsive Grid:
                - Mobile & Tablet: 2 columns matching mobile reference (gap-3 sm:gap-4 md:gap-6)
                - Desktop (>= 1024px): 3 columns matching desktop reference (gap-8 xl:gap-[56px])
            */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-x-[56px] xl:gap-y-[56px]">
              {facultyMembers.map((faculty) => (
                <article
                  key={faculty.name}
                  className="w-full max-w-[340px] mx-auto flex flex-col bg-white rounded-[14px] sm:rounded-[16px] lg:rounded-[20px] overflow-hidden border border-[#DDE1E7]/70 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
                >
                  {/* Portrait Photograph */}
                  <div className="w-full aspect-[324/360] bg-slate-100 overflow-hidden relative">
                    <img
                      src={faculty.image}
                      alt={`Portrait of ${faculty.name}, ${faculty.designation}${faculty.department ? ` - ${faculty.department}` : ''} at New Lucknow City Private ITI`}
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                      loading="lazy"
                      width={324}
                      height={360}
                    />
                  </div>

                  {/* Faculty Details */}
                  <div className="flex-1 flex flex-col items-center justify-center text-center px-2.5 py-4 sm:px-4 sm:py-5 lg:px-5 lg:py-6">
                    <h2 className="text-[14px] sm:text-[17px] md:text-[19px] lg:text-[22px] font-bold font-heading text-[#8A6100] tracking-tight leading-tight m-0">
                      {faculty.name}
                    </h2>

                    <div className="mt-1 sm:mt-1.5 text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-[#5B6B80] font-normal leading-snug flex flex-col items-center justify-center">
                      <span>{faculty.designation}</span>
                      {faculty.department && (
                        <span>{faculty.department}</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* 4. Institutional Footer */}
      <Footer />
    </div>
  );
};
