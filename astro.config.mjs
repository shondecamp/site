// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shondecamp.com',
  // Emit `page.html` files so every existing URL (e.g. /CareNotes.html) keeps working.
  build: { format: 'file' },
  // The style guide is a reference for editing the site, not a page for visitors.
  integrations: [sitemap({ filter: (page) => !page.includes('styleguide') })],
});
