import React, { useState } from 'react';
import { EnquiryCategory, EnquiryFormData, EnquirySubmissionState } from '../types/enquiry';
import { submitEnquiryForm } from '../services/enquiryService';
import { ItiLogo } from './ItiLogo';

interface EnquiryFormProps {
  idPrefix?: string;
  className?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ idPrefix = 'form1', className = '' }) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    category: 'admission',
    name: '',
    email: '',
    mobile: '',
    comment: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryFormData, string>>>({});
  const [submissionState, setSubmissionState] = useState<EnquirySubmissionState>({
    status: 'idle',
    message: null,
  });

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'कृपया अपना नाम दर्ज करें (Name is required)';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'कृपया अपना ईमेल पता दर्ज करें (Email is required)';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
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

    setSubmissionState({
      status: 'submitting',
      message: null,
    });

    try {
      const res = await submitEnquiryForm(formData);
      setSubmissionState({
        status: 'success',
        message: res.message,
        serverPendingNote: 'नोट: क्लाइंट-साइड सत्यापन सफल रहा। सर्वर-साइड सानिध्य (Sanity) और ईमेल (Resend) बैकएंड क्रेडेंशियल कॉन्फ़िगरेशन के लिए स्टेज्ड है।',
      });
      setFormData({
        category: 'admission',
        name: '',
        email: '',
        mobile: '',
        comment: '',
      });
    } catch {
      setSubmissionState({
        status: 'error',
        message: 'फॉर्म सबमिट करने में समस्या आई। कृपया पुनः प्रयास करें।',
      });
    }
  };

  const categories: { key: EnquiryCategory; labelHindi: string; labelEng: string }[] = [
    { key: 'admission', labelHindi: 'प्रवेश', labelEng: 'Admission' },
    { key: 'career', labelHindi: 'करियर', labelEng: 'Career' },
    { key: 'complain', labelHindi: 'शिकायत', labelEng: 'Complain' },
    { key: 'other', labelHindi: 'अन्य जानकारी', labelEng: 'Other' },
  ];

  return (
    <div className={`w-full max-w-[809px] bg-white rounded-[16px] shadow-sm border border-[#DDE1E7] overflow-hidden ${className}`}>
      {/* Dark Navy Form Header (Figma 33:851: 809 x 159 px) */}
      <div className="bg-[#1F2A3C] text-white p-6 sm:p-8 flex items-start justify-between gap-4">
        <div className="max-w-[532px]">
          <h3 className="text-[24px] sm:text-[28px] font-bold font-hindi tracking-tight mb-2 text-white">
            अपनी पूछताछ भेजें
          </h3>
          <p className="text-[13px] sm:text-[14px] text-[#DDE1E7] font-hindi leading-relaxed">
            अभ्यार्थी, करियर अवसर, शिकायत या अन्य किसी प्रकार की जानकारी हेतु इच्छुक व्यक्ति इस फॉर्म को भर सकते हैं।
          </p>
        </div>
        {/* Logo slot 33:854: 161 x 79 px */}
        <div className="flex-shrink-0">
          <ItiLogo variant="symbol-only" className="w-12 h-12" />
        </div>
      </div>

      {/* Form Content (Figma 33:856) */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5" noValidate>
        {/* Four radio choices: 44px high */}
        <fieldset>
          <legend className="sr-only">पूछताछ का प्रकार (Enquiry Type)</legend>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {categories.map((cat) => {
              const isChecked = formData.category === cat.key;
              const inputId = `${idPrefix}-category-${cat.key}`;
              return (
                <label
                  key={cat.key}
                  htmlFor={inputId}
                  className={`flex items-center gap-2 h-[44px] px-3 rounded-[6px] border text-xs sm:text-sm font-medium cursor-pointer transition-colors ${
                    isChecked ? 'border-[#F2B418] bg-[#F4F5F7]' : 'border-[#DDE1E7] bg-white hover:bg-slate-50'
                  }`}
                >
                  <input
                    type="radio"
                    id={inputId}
                    name={`${idPrefix}-category`}
                    value={cat.key}
                    checked={isChecked}
                    onChange={() => setFormData({ ...formData, category: cat.key })}
                    className="w-4 h-4 text-[#F2B418] accent-[#F2B418] cursor-pointer"
                  />
                  <span className="font-hindi text-[#1F2A3C] truncate">
                    {cat.labelHindi} <span className="text-[#5B6B80] text-[11px] font-sans">({cat.labelEng})</span>
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        {/* Name Input: 713 x 58 px on desktop */}
        <div>
          <label htmlFor={`${idPrefix}-name`} className="block text-xs font-semibold text-[#5B6B80] mb-1 font-hindi">
            नाम (Name)
          </label>
          <input
            type="text"
            id={`${idPrefix}-name`}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Input"
            className={`w-full h-[48px] px-3.5 text-sm bg-white border ${
              errors.name ? 'border-red-500' : 'border-[#DDE1E7]'
            } rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#F2B418] transition-all`}
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>

        {/* Email & Mobile 2-column: each 348.5 x 54 px on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`${idPrefix}-email`} className="block text-xs font-semibold text-[#5B6B80] mb-1 font-hindi">
              ईमेल (Email)
            </label>
            <input
              type="email"
              id={`${idPrefix}-email`}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="example@mail.com"
              className={`w-full h-[48px] px-3.5 text-sm bg-white border ${
                errors.email ? 'border-red-500' : 'border-[#DDE1E7]'
              } rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#F2B418] transition-all`}
            />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor={`${idPrefix}-mobile`} className="block text-xs font-semibold text-[#5B6B80] mb-1 font-hindi">
              मोबाइल नंबर (Mobile Number)
            </label>
            <input
              type="tel"
              id={`${idPrefix}-mobile`}
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              placeholder="9876543210"
              maxLength={10}
              className={`w-full h-[48px] px-3.5 text-sm bg-white border ${
                errors.mobile ? 'border-red-500' : 'border-[#DDE1E7]'
              } rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#F2B418] transition-all`}
            />
            {errors.mobile && <p className="text-xs text-red-600 mt-1">{errors.mobile}</p>}
          </div>
        </div>

        {/* Comment Textarea: 713 x 92 px on desktop */}
        <div>
          <label htmlFor={`${idPrefix}-comment`} className="block text-xs font-semibold text-[#5B6B80] mb-1 font-hindi">
            अपना अभिमत दें (Leave a comment)
          </label>
          <textarea
            id={`${idPrefix}-comment`}
            rows={3}
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            placeholder="यहाँ अपना संदेश लिखें..."
            className={`w-full p-3 text-sm bg-white border ${
              errors.comment ? 'border-red-500' : 'border-[#DDE1E7]'
            } rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#F2B418] transition-all`}
          />
          {errors.comment && <p className="text-xs text-red-600 mt-1">{errors.comment}</p>}
        </div>

        {/* Feedback / Status */}
        {submissionState.status === 'success' && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-[4px]">
            <p className="text-xs font-bold text-emerald-800">{submissionState.message}</p>
            {submissionState.serverPendingNote && (
              <p className="text-[11px] text-emerald-700 mt-1 leading-normal">
                {submissionState.serverPendingNote}
              </p>
            )}
          </div>
        )}

        {submissionState.status === 'error' && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-[4px]">
            <p className="text-xs font-bold text-red-800">{submissionState.message}</p>
          </div>
        )}

        {/* Submit Button: 261 x 62 px on desktop, fill #F2B418, 4px radius */}
        <div>
          <button
            type="submit"
            disabled={submissionState.status === 'submitting'}
            className="w-full sm:w-[261px] h-[54px] sm:h-[62px] bg-[#F2B418] hover:bg-[#D99A00] text-[#14171C] font-semibold text-[15px] rounded-[4px] shadow-xs transition-colors inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {submissionState.status === 'submitting' ? (
              <span>सबमिट हो रहा है...</span>
            ) : (
              <>
                <span>Submit Enquiry</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
