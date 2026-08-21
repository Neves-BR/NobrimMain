import { defineCollection, z } from 'astro:content';

const casesCollection = defineCollection({
  type: 'content',
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
