import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    author: z.string().optional(),
    date: z.string(),
    updated: z.string().optional(),
    slug: z.string().optional(),
    topic: z.string().optional(), // Optional: will auto-categorize if not set
    draft: z.boolean().optional(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    date: z.string(),
    description: z.string().optional(),
    partner: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog, news };
