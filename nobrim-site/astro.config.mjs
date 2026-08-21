// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
// import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.nobrim.com.br',
  integrations: [sitemap({ filter: (page) => !page.endsWith('/blog') })],
});
