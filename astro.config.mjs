// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shondecamp.com',
  // Emit `page.html` files so every existing URL (e.g. /CareNotes.html) keeps working.
  build: { format: 'file' },
  integrations: [sitemap()],
  // Ship page CSS exactly as written. A minifier would "repair" quirks the current
  // look depends on (e.g. `margin:20` which browsers ignore). Revisit with the design system.
  vite: { build: { cssMinify: false } },
});
