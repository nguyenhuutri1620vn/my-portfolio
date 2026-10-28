import { defineCollection, z } from 'astro:content';
import { locales } from '../i18n/config';

// UI strings are read by src/i18n/ui.ts through direct JSON imports for sync typing.
const ui = defineCollection({ type: 'data' });

// The slug is the file name (case-studies/{lang}/{slug}.mdx); Astro reserves a `slug` field.
const caseStudies = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    context: z.string(),
    solution: z.string(),
    result: z.string(),
    diagram: z.enum([
      'platform-overview',
      'insight-dashboard',
      'value-analysis',
      'clickhouse-superset',
      'kafka-exports',
    ]),
    lang: z.enum(locales),
    order: z.number().int().positive(),
  }),
});

export const collections = { ui, 'case-studies': caseStudies };
