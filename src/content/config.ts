import { defineCollection, z } from 'astro:content';
import { locales } from '../i18n/config';

// UI strings are read by src/i18n/ui.ts through direct JSON imports for sync typing.
const ui = defineCollection({ type: 'data' });

// The slug is the file name (case-studies/{lang}/{slug}.mdx); Astro reserves a `slug` field.
const caseStudies = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tag: z.string(),
      // Card text: a short plain-English intro and one key result line.
      intro: z.string(),
      highlight: z.string(),
      context: z.string(),
      solution: z.string(),
      result: z.string(),
      diagram: z.enum([
        'platform-overview',
        'insight-dashboard',
        'value-analysis',
        'clickhouse-superset',
        'future-price-review',
        'delta-build',
      ]),
      lang: z.enum(locales),
      order: z.number().int().positive(),
      // Key projects get the large cards at the top of the home grid.
      featured: z.boolean().default(false),
      // Optional UI mockup (synthetic data only), shown in a plain frame below the diagram.
      image: z.object({ src: image(), alt: z.string() }).optional(),
    }),
});

export const collections = { ui, 'case-studies': caseStudies };
