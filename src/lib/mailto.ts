import { site } from '../data/site';
import type { Locale } from '../i18n/config';
import { t } from '../i18n/ui';

export function projectMailto(lang: Locale): string {
  const subject = encodeURIComponent(t(lang, 'mailto.subject'));
  const body = encodeURIComponent(t(lang, 'mailto.body'));
  return `mailto:${site.email}?subject=${subject}&body=${body}`;
}
