import React, { useState } from 'react';
import { EnquiryCategory, EnquiryFormData, EnquirySubmissionState } from '../types/enquiry';
import { EnquirySubmissionError, submitEnquiryForm } from '../services/enquiryService';

export interface EnquiryFormProps {
  idPrefix?: string;
  className?: string;
  defaultCategory?: EnquiryCategory;
  headerTitle?: string;
  headerSubtitle?: string;
  compactLg?: boolean;
}

interface RadioOption {
  value: EnquiryCategory;
  labelHindi: string;
  labelEng: string;
}

export function validateEnquiryForm(
  formData: Pick<EnquiryFormData, 'name' | 'email' | 'mobile' | 'comment'>
): Partial<Record<keyof EnquiryFormData, string>> {
  const newErrors: Partial<Record<keyof EnquiryFormData, string>> = {};

  if (!formData.name.trim()) {
    newErrors.name = 'कृपया अपना नाम दर्ज करें (Name is required)';
  }

  const trimmedEmail = formData.email.trim();
  const trimmedMobile = formData.mobile.trim();
  const normalizedMobile = trimmedMobile.replace(/[\s-]/g, '');

  if (!trimmedEmail && !trimmedMobile) {
    const contactRequiredMsg =
      'कृपया ईमेल या मोबाइल नंबर में से कम से कम एक दर्ज करें (Provide email or mobile number)';
    newErrors.email = contactRequiredMsg;
    newErrors.mobile = contactRequiredMsg;
  } else {
    if (trimmedEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      newErrors.email = 'कृपया वैध ईमेल दर्ज करें (Valid email required)';
    }

    if (trimmedMobile && !/^\d{10}$/.test(normalizedMobile)) {
      newErrors.mobile = 'कृपया 10 अंकों का वैध मोबाइल नंबर दर्ज करें';
    }
  }

  return newErrors;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  idPrefix = 'form1',
  className = '',
  defaultCategory = 'admission',
  headerTitle,
  headerSubtitle,
  compactLg = false,
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    category: defaultCategory,
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

  // Preserve page context when Feedback/Complaint option is selected:
  // On Feedback page (defaultCategory === 'feedback'), option 3 submits 'feedback'; otherwise 'complain'.
  const feedbackOrComplainValue: EnquiryCategory =
    defaultCategory === 'feedback' ? 'feedback' : 'complain';

  const categories: RadioOption[] = [
    { value: 'admission', labelHindi: 'प्रवेश', labelEng: 'Admission' },
    { value: 'career', labelHindi: 'करियर', labelEng: 'Career' },
    { value: feedbackOrComplainValue, labelHindi: 'शिकायत', labelEng: 'Complain' },
    { value: 'other', labelHindi: 'अन्य जानकारी', labelEng: 'Other' },
  ];

  const isOptionChecked = (optionValue: EnquiryCategory): boolean => {
    if (optionValue === 'feedback' || optionValue === 'complain') {
      return formData.category === 'feedback' || formData.category === 'complain';
    }
    return formData.category === optionValue;
  };

  const validate = (): boolean => {
    const newErrors = validateEnquiryForm(formData);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (submissionState.status === 'submitting') {
      return;
    }

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
      });
      setFormData({
        category: defaultCategory,
        name: '',
        email: '',
        mobile: '',
        comment: '',
      });
      setErrors({});
    } catch (err) {
      if (err instanceof EnquirySubmissionError && err.fieldErrors) {
        setErrors((prev) => ({ ...prev, ...err.fieldErrors }));
      }
      setSubmissionState({
        status: 'error',
        message:
          err instanceof Error && err.message
            ? err.message
            : 'फॉर्म सबमिट करने में समस्या आई। कृपया पुनः प्रयास करें।',
      });
    }
  };

  return (
    <div
      className={`w-full max-w-[809px] bg-white rounded-[16px] shadow-[0_6px_28px_rgba(31,42,60,0.08)] border border-[#DDE1E7]/70 overflow-hidden ${className}`}
    >
      {/* Dark Navy Form Header (Figma 33:851) */}
      <div
        className={`bg-navy-800 text-white px-5 py-6 sm:px-8 sm:py-7 ${
          compactLg ? 'lg:px-7 lg:py-4 xl:px-[48px] xl:py-[32px] lg:gap-4 xl:gap-6' : 'lg:px-[48px] lg:py-[32px]'
        } flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6`}
      >
        {/* Left: White ITI Badge Slot (161 x 79 px on desktop) */}
        <div
          className={`w-[135px] sm:w-[155px] md:w-[161px] ${
            compactLg ? 'lg:w-[118px] xl:w-[161px] lg:h-[58px] xl:h-[79px] lg:p-1.5 xl:p-2' : ''
          } h-[66px] sm:h-[74px] md:h-[79px] bg-white rounded-[2px] flex items-center justify-center p-2 flex-shrink-0 shadow-2xs`}
        >
          <img
            src="/images/career/iti-header-badge.png"
            alt="Industrial Training Institute"
            className="w-full h-full object-contain block"
          />
        </div>

        {/* Right: Title & Subtitle */}
        <div className="flex-1 max-w-[532px]">
          <h3
            className={`text-[20px] md:text-[24px] ${
              compactLg ? 'lg:text-[18px] xl:text-[24px] lg:mb-0.5 xl:mb-1.5' : ''
            } font-medium font-hindi tracking-tight mb-1.5 text-white leading-snug`}
          >
            {headerTitle || 'अपनी पूछताछ भेजें'}
          </h3>
          <p
            className={`text-[13px] md:text-[14px] ${
              compactLg ? 'lg:text-[12px] xl:text-[14px] lg:leading-snug xl:leading-relaxed' : ''
            } text-[#AEB8C6] font-hindi leading-relaxed whitespace-pre-line`}
          >
            {headerSubtitle ||
              'अभ्यर्थन, करियर अवसर, शिकायत या अन्य किसी प्रकार की जानकारी हेतु इच्छुक व्यक्ति इस फॉर्म को भर सकते हैं।'}
          </p>
        </div>
      </div>

      {/* Form Content (Figma 33:856) */}
      <form
        onSubmit={handleSubmit}
        className={`p-5 sm:p-8 ${
          compactLg ? 'lg:px-7 lg:py-5 xl:px-[48px] xl:py-[36px] lg:space-y-4 xl:space-y-6' : 'lg:px-[48px] lg:py-[36px]'
        } space-y-6`}
        noValidate
      >
        {/* 4 Radio choices matching Figma reference */}
        <fieldset>
          <legend className="sr-only">पूछताछ का प्रकार (Enquiry Type)</legend>
          <div
            className={`grid grid-cols-1 xs:grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:justify-between gap-x-4 gap-y-3 ${
              compactLg ? 'lg:gap-x-3 lg:gap-y-1.5 xl:gap-x-4 xl:gap-y-3 lg:py-0.5 xl:py-1' : ''
            } py-1`}
          >
            {categories.map((cat) => {
              const checked = isOptionChecked(cat.value);
              const inputId = `${idPrefix}-category-${cat.value}`;
              return (
                <label
                  key={cat.value}
                  htmlFor={inputId}
                  className={`group inline-flex items-center ${
                    compactLg ? 'gap-2.5 lg:gap-2 xl:gap-2.5 lg:py-0.5 xl:py-1' : 'gap-2.5'
                  } cursor-pointer select-none py-1`}
                >
                  <input
                    type="radio"
                    id={inputId}
                    name={`${idPrefix}-category`}
                    value={cat.value}
                    checked={checked}
                    onChange={() => setFormData((prev) => ({ ...prev, category: cat.value }))}
                    className="sr-only peer"
                  />
                  {/* Custom Radio Indicator matching Form screenshot */}
                  <span
                    aria-hidden="true"
                    className={`w-[18px] h-[18px] ${
                      compactLg ? 'lg:w-[15px] lg:h-[15px] xl:w-[18px] xl:h-[18px]' : ''
                    } rounded-full flex items-center justify-center flex-shrink-0 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[#F2B418] peer-focus-visible:ring-offset-2 ${
                      checked
                        ? 'border-[1.75px] border-[#D99A00] bg-white'
                        : 'border-[1.75px] border-[#5B6B80] bg-white group-hover:border-[#1F2A3C]'
                    }`}
                  >
                    {checked && (
                      <span
                        className={`w-[9px] h-[9px] ${
                          compactLg ? 'lg:w-[7px] lg:h-[7px] xl:w-[9px] xl:h-[9px]' : ''
                        } rounded-full bg-[#D99A00]`}
                      />
                    )}
                  </span>
                  <span
                    className={`text-[13px] sm:text-[14px] ${
                      compactLg ? 'lg:text-[12.5px] xl:text-[14px]' : ''
                    } font-hindi transition-colors whitespace-nowrap ${
                      checked
                        ? 'text-[#D99A00] font-medium'
                        : 'text-[#5B6B80] group-hover:text-[#1F2A3C]'
                    }`}
                  >
                    {cat.labelHindi}{' '}
                    <span className="font-sans">({cat.labelEng})</span>
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        {/* Name Input: Underline field matching Figma reference */}
        <div>
          <label
            htmlFor={`${idPrefix}-name`}
            className={`block text-[11px] sm:text-[12px] ${
              compactLg ? 'lg:text-[11px] xl:text-[12px]' : ''
            } font-medium text-[#D99A00] font-hindi mb-0.5`}
          >
            नाम (Name)
          </label>
          <input
            type="text"
            id={`${idPrefix}-name`}
            value={formData.name}
            onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
            placeholder="Input"
            className={`w-full bg-transparent border-0 border-b-2 ${
              errors.name ? 'border-red-500' : 'border-[#D99A00] focus:border-[#B88000]'
            } ${
              compactLg ? 'py-1.5 lg:py-1 xl:py-1.5 text-[14px] sm:text-[15px] lg:text-[13px] xl:text-[15px]' : 'py-1.5 text-[14px] sm:text-[15px]'
            } text-[#14171C] placeholder-[#8C98A9] focus:outline-none transition-colors`}
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>

        {/* Email & Mobile 2-column underline inputs */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 ${compactLg ? 'lg:gap-5 xl:gap-8' : ''}`}>
          <div>
            <label
              htmlFor={`${idPrefix}-email`}
              className={`block text-[12px] sm:text-[13px] ${
                compactLg ? 'lg:text-[11.5px] xl:text-[13px]' : ''
              } font-normal text-[#5B6B80] font-hindi mb-0.5`}
            >
              ईमेल (Email)
            </label>
            <input
              type="email"
              id={`${idPrefix}-email`}
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              placeholder=""
              className={`w-full bg-transparent border-0 border-b ${
                errors.email ? 'border-red-500' : 'border-[#5B6B80]/60 focus:border-[#D99A00]'
              } ${
                compactLg ? 'py-1.5 lg:py-1 xl:py-1.5 text-[14px] sm:text-[15px] lg:text-[13px] xl:text-[15px]' : 'py-1.5 text-[14px] sm:text-[15px]'
              } text-[#14171C] placeholder-[#8C98A9] focus:outline-none transition-colors`}
            />
            {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label
              htmlFor={`${idPrefix}-mobile`}
              className={`block text-[12px] sm:text-[13px] ${
                compactLg ? 'lg:text-[11.5px] xl:text-[13px]' : ''
              } font-normal text-[#5B6B80] font-hindi mb-0.5`}
            >
              मोबाइल नंबर (Mobile Number)
            </label>
            <input
              type="tel"
              id={`${idPrefix}-mobile`}
              value={formData.mobile}
              onChange={(e) => setFormData((prev) => ({ ...prev, mobile: e.target.value }))}
              placeholder=""
              maxLength={10}
              className={`w-full bg-transparent border-0 border-b ${
                errors.mobile ? 'border-red-500' : 'border-[#5B6B80]/60 focus:border-[#D99A00]'
              } ${
                compactLg ? 'py-1.5 lg:py-1 xl:py-1.5 text-[14px] sm:text-[15px] lg:text-[13px] xl:text-[15px]' : 'py-1.5 text-[14px] sm:text-[15px]'
              } text-[#14171C] placeholder-[#8C98A9] focus:outline-none transition-colors`}
            />
            {errors.mobile && <p className="text-xs text-red-600 mt-1">{errors.mobile}</p>}
          </div>
        </div>

        {/* Comment Textarea: Rounded border box */}
        <div>
          <label htmlFor={`${idPrefix}-comment`} className="sr-only">
            अपना अभिमत दें (Leave a comment)
          </label>
          <textarea
            id={`${idPrefix}-comment`}
            rows={3}
            value={formData.comment}
            onChange={(e) => setFormData((prev) => ({ ...prev, comment: e.target.value }))}
            placeholder="अपना अभिमत दें (Leave a comment)"
            className={`w-full ${
              compactLg ? 'p-3.5 lg:p-2.5 xl:p-3.5 lg:h-[72px] xl:h-auto text-[13px] sm:text-[14px] lg:text-[12.5px] xl:text-[14px]' : 'p-3.5 text-[13px] sm:text-[14px]'
            } bg-white border ${
              errors.comment ? 'border-red-500' : 'border-[#94A3B8]/80 focus:border-[#D99A00]'
            } rounded-[8px] placeholder-[#5B6B80] text-[#14171C] font-hindi focus:outline-none focus:ring-1 focus:ring-[#F2B418] transition-colors resize-none`}
          />
          {errors.comment && <p className="text-xs text-red-600 mt-1">{errors.comment}</p>}
        </div>

        {/* Feedback / Status */}
        {submissionState.status === 'success' && (
          <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-[8px]" role="status">
            <p className="text-xs sm:text-sm font-bold text-emerald-800">{submissionState.message}</p>
          </div>
        )}

        {submissionState.status === 'error' && (
          <div className="p-3.5 bg-red-50 border border-red-200 rounded-[8px]">
            <p className="text-xs sm:text-sm font-bold text-red-800">{submissionState.message}</p>
          </div>
        )}

        {/* Submit Button: 245 x 60 px on desktop, fill #F2B418, 8px radius */}
        <div className="pt-1">
          <button
            type="submit"
            disabled={submissionState.status === 'submitting'}
            className={`w-full sm:w-[245px] ${
              compactLg
                ? 'lg:w-[190px] xl:w-[245px] h-[54px] sm:h-[60px] lg:h-[44px] xl:h-[60px] text-[15px] lg:text-[13.5px] xl:text-[15px]'
                : 'h-[54px] sm:h-[60px] text-[15px]'
            } bg-[#F2B418] hover:bg-[#D99A00] active:scale-[0.99] text-[#14171C] font-semibold rounded-[8px] shadow-xs transition-all inline-flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50`}
          >
            {submissionState.status === 'submitting' ? (
              <span>सबमिट हो रहा है...</span>
            ) : (
              <>
                <span>Submit Enquiry</span>
                <img src="/assets/icons/send.svg" alt="" className="w-[17px] h-[15px] flex-shrink-0" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
