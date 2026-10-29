import { getCollection, type CollectionEntry } from 'astro:content';
import { locales, type Locale } from '../i18n/config';

export type CaseStudy = CollectionEntry<'case-studies'> & { caseSlug: string };

const entries: CaseStudy[] = (await getCollection('case-studies')).map((entry) => ({
  ...entry,
  caseSlug: entry.slug.split('/').slice(1).join('/'),
}));

// Fail the build when the two languages drift apart.
const problems: string[] = [];
for (const entry of entries) {
  if (!entry.id.startsWith(`${entry.data.lang}/`)) {
    problems.push(`${entry.id}: lang "${entry.data.lang}" does not match its folder`);
  }
}
const slugs = new Set(entries.map((e) => e.caseSlug));
for (const slug of slugs) {
  const versions = entries.filter((e) => e.caseSlug === slug);
  for (const lang of locales) {
    if (!versions.some((e) => e.data.lang === lang)) problems.push(`${slug}: missing in ${lang}`);
  }
  if (
    new Set(versions.map((e) => `${e.data.order}|${e.data.diagram}|${e.data.featured}`)).size > 1
  ) {
    problems.push(`${slug}: order, diagram or featured differs between languages`);
  }
}
if (problems.length > 0) {
  throw new Error(`Case studies out of sync:\n  ${problems.join('\n  ')}`);
}

export function caseStudies(lang: Locale): CaseStudy[] {
  return entries.filter((e) => e.data.lang === lang).sort((a, b) => a.data.order - b.data.order);
}
