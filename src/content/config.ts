import { defineCollection } from 'astro:content';

// UI strings are read by src/i18n/ui.ts through direct JSON imports for sync typing.
const ui = defineCollection({ type: 'data' });

export const collections = { ui };
