// @ts-check
import { defineConfig } from 'astro/config';
// import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  vite: {
    css: {
      minify: false,
    },
  },
  integrations: [
    // sanity({ projectId: 'seu-project-id', dataset: 'production' })
  ]
});
