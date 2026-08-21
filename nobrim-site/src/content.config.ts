import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Import do novo loader para Markdown/MDX

const casesCollection = defineCollection({
  // O loader indica ao Astro onde procurar os arquivos Markdown
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/cases' }),
  schema: z.object({
    clientName: z.string(),
    industry: z.string(),
    challenge: z.string(),
    result: z.string(),
    imageUrl: z.string(),
    publishDate: z.date().optional(),
  }),
});

export const collections = {
  cases: casesCollection,
};
