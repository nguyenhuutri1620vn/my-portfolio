export const locales = ['en', 'vi'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

// Written by the language switch, read by the root redirect.
export const localeStorageKey = 'lang';

export function isLocale(value: unknown): value is Locale {
  return locales.includes(value as Locale);
}
