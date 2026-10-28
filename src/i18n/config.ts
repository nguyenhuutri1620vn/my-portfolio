export const locales = ['en', 'vi'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

// Written by the language switch, read by the root redirect.
export const localeStorageKey = 'lang';

export function isLocale(value: unknown): value is Locale {
  return locales.includes(value as Locale);
}

// Locale-agnostic part of a path, e.g. "for-clients/" for /vi/for-clients/.
export function pathWithoutLocale(pathname: string, lang: Locale): string {
  return pathname.replace(new RegExp(`^/${lang}(/|$)`), '');
}
