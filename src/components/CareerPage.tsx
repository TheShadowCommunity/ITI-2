import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { submitEnquiryForm } from '../services/enquiryService';

interface FormData {
  name: string;
  email: string;
  mobile: string;
  comment: string;
}

export const CareerPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    mobile: '',
    comment: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  useEffect(() => {
    document.title = 'Career | New Lucknow City Private ITI';
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'कृपया अपना नाम दर्ज करें (Name is required)';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'कृपया अपना ईमेल पता दर्ज करें (Email is required)';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'कृपया वैध ईमेल दर्ज करें (Valid email required)';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'कृपया मोबाइल नंबर दर्ज करें (Mobile is required)';
    } else if (!/^\d{10}$/.test(formData.mobile.replace(/[\s-]/g, ''))) {
      newErrors.mobile = 'कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें';
    }

    if (!formData.comment.trim()) {
      newErrors.comment = 'कृपया अपना संदेश या प्रश्न लिखें (Message is required)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitSuccess(null);

    try {
      const res = await submitEnquiryForm({
        category: 'career',
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        comment: formData.comment,
      });

      setSubmitSuccess(
        res.message || `धन्यवाद ${formData.name}! आपकी पूछताछ सफलतापूर्वक दर्ज कर ली गई है। हमारी टीम जल्द ही आपसे संपर्क करेगी।`
      );
      setFormData({
        name: '',
        email: '',
        mobile: '',
        comment: '',
      });
      setErrors({});
    } catch {
      setErrors({
        comment: 'फॉर्म सबमिट करने में समस्या आई। कृपया पुनः प्रयास करें।',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F5F7] text-navy-900 selection:bg-[#F2B418] selection:text-[#14171C]">
      {/* 1. Global Navigation Header */}
      <Header />

      <main className="flex-grow pb-14 sm:pb-16 lg:pb-24">
        {/* 2. Page Title Band with Gold Gradient Accent Line */}
      
        <section className="w-full bg-white py-[58px] px-[16px] lg:bg-[#F4F5F7] lg:px-[64px] lg:py-[65px]">
          <div className="max-w-[1392px] mx-auto ">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-6 lg:gap-8">
              {/* Heading: "About Us" */}
              <h1 className="text-[36px] md:text-[38px] lg:text-[48px] xl:text-[56px] leading-[1.2] font-semibold text-navy-900 font-heading font-serat tracking-tight flex-shrink-0 m-0">
                Careers
              </h1>

              {/* Active Accent Gradient Line */}
              <div
                className="w-full max-w-[850px] h-[5px] sm:h-[6px] lg:h-[7px] 2xl:h-[8px] rounded-full bg-gradient-to-r from-[#DDE1E7]/40 via-[#F2B418]/60 to-[#F2B418] flex-grow self-center"
                aria-hidden="true"
              />
            </div>
          </div>
        </section>

        {/* 3. Main Careers Section: Form Card & Convocation Photo */}
        <section className="w-full py-[80px] px-[64px]">
          <div className="max-w-[1392px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1.28fr_1fr] 2xl:grid-cols-[748px_576px] gap-8 xl:gap-[48px] 2xl:gap-[68px] items-start">
              {/* Left Column: Join Our Team Form Card */}
              <div className="w-full max-w-[748px] bg-white rounded-[16px] shadow-sm border border-[#DDE1E7] overflow-hidden">
                {/* Form Dark Navy Header (Figma 33:851 / Reference exact composition) */}
                <div className="bg-navy-800 text-white p-6 sm:p-7 md:p-8 flex flex-row items-center gap-5 sm:gap-6">
                  {/* Official ITI Emblem Badge */}
                  <div className="w-[135px] sm:w-[155px] md:w-[161px] h-[68px] sm:h-[74px] md:h-[79px] bg-white rounded-[8px] flex items-center justify-center p-2 flex-shrink-0 shadow-xs">
                    <img
                      src="/images/career/iti-header-badge.png"
                      alt="Industrial Training Institute"
                      className="w-full h-full object-contain block"
                    />
                  </div>

                  {/* Header Title & Subtitle */}
                  <div className="flex-1">
                    <h2 className="text-[20px] sm:text-[22px] md:text-[24px] font-bold text-white font-heading tracking-tight m-0">
                      Join Our Team
                    </h2>
                    <p className="text-[12px] sm:text-[13px] md:text-[14px] text-[#DDE1E7] leading-relaxed mt-1 sm:mt-1.5 mb-0">
                      Interested in joining us? Fill out the form below to inquire about current or future job openings.
                    </p>
                  </div>
                </div>

                {/* Form Fields Body */}
                <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6" noValidate>
                  {/* Success State Notification */}
                  {submitSuccess && (
                    <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-[8px] text-emerald-800 text-sm">
                      <p className="font-semibold">{submitSuccess}</p>
                      <button
                        type="button"
                        onClick={() => setSubmitSuccess(null)}
                        className="mt-2 text-xs font-bold text-emerald-700 underline hover:text-emerald-900 cursor-pointer"
                      >
                        नया फॉर्म भरें (Submit another inquiry)
                      </button>
                    </div>
                  )}

                  {/* Field 1: Name */}
                  <div>
                    <label
                      htmlFor="career-name"
                      className="block text-[13px] sm:text-[14px] font-semibold text-yellow-700 font-hindi mb-1"
                    >
                      नाम (Name)
                    </label>
                    <input
                      type="text"
                      id="career-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Input"
                      className={`w-full bg-transparent border-0 border-b-2 ${
                        errors.name ? 'border-red-500' : 'border-[#F2B418]'
                      } py-1.5 text-[15px] sm:text-[16px] text-[#14171C] placeholder-[#8C98A9] focus:outline-none focus:border-[#D99A00] transition-colors`}
                    />
                    {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  {/* Fields 2 & 3: Email and Mobile Number (2 columns on sm+, stacked on mobile) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <label
                        htmlFor="career-email"
                        className="block text-[13px] sm:text-[14px] font-medium text-navy-500 font-hindi mb-1"
                      >
                        ईमेल (Email)
                      </label>
                      <input
                        type="email"
                        id="career-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder=""
                        className={`w-full bg-transparent border-0 border-b ${
                          errors.email ? 'border-red-500' : 'border-[#DDE1E7]'
                        } py-1.5 text-[15px] sm:text-[16px] text-[#14171C] placeholder-[#8C98A9] focus:outline-none focus:border-[#F2B418] transition-colors`}
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label
                        htmlFor="career-mobile"
                        className="block text-[13px] sm:text-[14px] font-medium text-navy-500 font-hindi mb-1"
                      >
                        मोबाइल नंबर (Mobile Number)
                      </label>
                      <input
                        type="tel"
                        id="career-mobile"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder=""
                        className={`w-full bg-transparent border-0 border-b ${
                          errors.mobile ? 'border-red-500' : 'border-[#DDE1E7]'
                        } py-1.5 text-[15px] sm:text-[16px] text-[#14171C] placeholder-[#8C98A9] focus:outline-none focus:border-[#F2B418] transition-colors`}
                      />
                      {errors.mobile && <p className="text-xs text-red-600 mt-1">{errors.mobile}</p>}
                    </div>
                  </div>

                  {/* Field 4: Leave a comment Textarea */}
                  <div>
                    <label htmlFor="career-comment" className="sr-only">
                      Leave a comment
                    </label>
                    <textarea
                      id="career-comment"
                      rows={4}
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      placeholder="Leave a comment"
                      className={`w-full p-3.5 text-sm sm:text-[15px] bg-white border ${
                        errors.comment ? 'border-red-500' : 'border-[#DDE1E7]'
                      } rounded-[8px] focus:outline-none focus:border-[#F2B418] focus:ring-1 focus:ring-[#F2B418] placeholder-navy-500 transition-colors resize-none`}
                    />
                    {errors.comment && <p className="text-xs text-red-600 mt-1">{errors.comment}</p>}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#F2B418] hover:bg-[#D99A00] active:scale-[0.99] text-[#14171C] font-bold text-[14px] sm:text-[15px] rounded-[6px] shadow-xs transition-all cursor-pointer disabled:opacity-60"
                    >
                      {isSubmitting ? (
                        'सबमिट हो रहा है...'
                      ) : (
                        <>
                          <span>Submit Enquiry</span>
                          <div className="">
                      <img src="/assets/icons/btn-arrow-right.svg" alt="" className="w-full h-full" />
                    </div>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Right Column: Convocation Ceremony Image Card */}
              <div className="w-full max-w-[576px] rounded-[16px] sm:rounded-[20px] overflow-hidden border border-[#DDE1E7]/70 shadow-sm relative group bg-white">
                <img
                  src="/images/career/convocation-group.jpg"
                  alt="Faculty and management team at New Lucknow City Private ITI on the occasion of the Convocation Ceremony"
                  className="w-full h-auto object-cover block transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                  width={576}
                  height={585}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 4. Institutional Footer */}
      <Footer />
    </div>
  );
};
