import { defineField, defineType } from 'sanity';
import { sanityApiVersion } from '../config';

export const noticeType = defineType({
  name: 'notice',
  title: 'Notice',
  type: 'document',
  fields: [
    defineField({
      name: 'noticeId',
      title: 'Notice ID',
      type: 'string',
      description: 'Unique identifier for this notice (e.g. NOTICE-2026-001).',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(100)
          .custom(async (value, context) => {
            const trimmed = typeof value === 'string' ? value.trim() : '';
            if (!trimmed) return 'Notice ID is required.';
            const { document, getClient } = context;
            const client = getClient({ apiVersion: sanityApiVersion });
            const id = document?._id.replace(/^drafts\./, '') || '';
            const count = await client.fetch<number>(
              `count(*[_type == "notice" && noticeId == $noticeId && !(_id in [$draftId, $publishedId])])`,
              {
                noticeId: trimmed,
                draftId: `drafts.${id}`,
                publishedId: id,
              }
            );
            return count === 0 ? true : 'Notice ID must be unique.';
          }),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      description: 'Date and time associated with the notice. Notices are sorted newest first.',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Notice Content',
      type: 'text',
      rows: 4,
      description: 'Main notice announcement text (Hindi or English).',
      validation: (Rule) =>
        Rule.required().custom((value) =>
          typeof value === 'string' && value.trim().length >= 3
            ? true
            : 'Notice content must be at least 3 characters.'
        ),
    }),
    defineField({
      name: 'file',
      title: 'Attachment File (Optional)',
      type: 'file',
      description: 'Optional PDF circular, schedule, or notice attachment.',
      options: {
        storeOriginalFilename: true,
      },
    }),
  ],
  orderings: [
    {
      title: 'Date, Newest First',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Date, Oldest First',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'content',
      noticeId: 'noticeId',
      date: 'date',
      hasFile: 'file.asset._ref',
    },
    prepare({ title, noticeId, date, hasFile }) {
      const formattedDate = date
        ? new Date(date).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })
        : 'No date';
      const subtitleParts = [formattedDate, noticeId].filter(Boolean);
      if (hasFile) subtitleParts.push('Attachment');
      return {
        title: title ? String(title).slice(0, 90) : 'Untitled Notice',
        subtitle: subtitleParts.join(' • '),
      };
    },
  },
});
