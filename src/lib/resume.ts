import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { site } from '../data/site';
import { defaultLocale, type Locale } from '../i18n/config';

const inPublic = (href: string) => existsSync(join(process.cwd(), 'public', href));

// The CV for this language, else the default-language CV. Undefined when neither file
// is in public/resume/, so callers hide the link instead of pointing at a 404.
export function resumeHref(lang: Locale): string | undefined {
  const href = [site.resume[lang], site.resume[defaultLocale]].find(inPublic);
  if (!href) console.warn(`resume: no CV in public/resume/ for "${lang}", link hidden.`);
  return href;
}
