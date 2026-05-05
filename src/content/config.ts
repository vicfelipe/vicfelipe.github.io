import { defineCollection, z } from 'astro:content';

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.string(),
  dateFormatted: z.object({
    pt: z.string(),
    en: z.string(),
  }),
  tags: z.array(z.string()),
  category: z.enum(['platform', 'backend', 'databases', 'observability', 'data', 'career', 'ai']),
  language: z.enum(['pt', 'en']),
  translationKey: z.string(),
  draft: z.boolean().default(false),
  readingTime: z.number().optional(),
});

export const collections = {
  'pt-articles': defineCollection({
    type: 'content',
    schema: articleSchema,
  }),
  'en-articles': defineCollection({
    type: 'content',
    schema: articleSchema,
  }),
};
