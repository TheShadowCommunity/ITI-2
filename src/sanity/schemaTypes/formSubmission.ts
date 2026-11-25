import { defineField, defineType } from 'sanity';

export const formSubmissionType = defineType({
  name: 'formSubmission',
  title: 'Form Submission',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Enquiry Category',
      type: 'string',
      options: {
        list: [
          { title: 'Admissions (प्रवेश)', value: 'admission' },
          { title: 'Career (करियर)', value: 'career' },
          { title: 'Feedback (फीडबैक)', value: 'feedback' },
          { title: 'Complaint (शिकायत)', value: 'complain' },
          { title: 'Other (अन्य जानकारी)', value: 'other' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Name (नाम)',
      type: 'string',
      validation: (Rule) => Rule.required().min(1).max(120),
    }),
    defineField({
      name: 'email',
      title: 'Email (ईमेल)',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'mobile',
      title: 'Mobile Number (मोबाइल नंबर)',
      type: 'string',
      validation: (Rule) =>
        Rule.required().regex(/^\d{10}$/, {
          name: '10-digit mobile number',
        }),
    }),
    defineField({
      name: 'comment',
      title: 'Comment / Message (अभिमत)',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required().min(1).max(2000),
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Submitted At, Newest First',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      name: 'name',
      category: 'category',
      submittedAt: 'submittedAt',
      mobile: 'mobile',
    },
    prepare({ name, category, submittedAt, mobile }) {
      const categoryLabels: Record<string, string> = {
        admission: 'Admissions',
        career: 'Career',
        feedback: 'Feedback',
        complain: 'Complaint',
        other: 'Other',
      };
      const dateStr = submittedAt
        ? new Date(submittedAt).toLocaleString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })
        : '';
      return {
        title: `${name || 'Unknown'} — ${categoryLabels[category] || category || 'Enquiry'}`,
        subtitle: [mobile, dateStr].filter(Boolean).join(' • '),
      };
    },
  },
});
