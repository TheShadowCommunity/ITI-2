import { defineConfig } from 'sanity';
import { structureTool, type StructureResolver } from 'sanity/structure';
import { sanityDataset, sanityProjectId } from './src/sanity/config';
import { schemaTypes } from './src/sanity/schemaTypes';

const structure: StructureResolver = (S) =>
  S.list()
    .title('New Lucknow City Private ITI')
    .items([
      S.documentTypeListItem('notice').title('Notices & Announcements'),
      S.divider(),
      S.documentTypeListItem('formSubmission').title('Form Submissions'),
    ]);

export default defineConfig({
  name: 'default',
  title: 'New Lucknow City Private ITI CMS',
  projectId: sanityProjectId,
  dataset: sanityDataset,
  basePath: '/studio',
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
  },
});
