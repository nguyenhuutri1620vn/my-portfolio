import en from '../content/ui/en.json';
import vi from '../content/ui/vi.json';
import { locales, type Locale } from './config';

type Dictionary = typeof en;

type Leaves<T, Prefix extends string = ''> = {
  [K in keyof T & string]: T[K] extends string ? `${Prefix}${K}` : Leaves<T[K], `${Prefix}${K}.`>;
}[keyof T & string];

export type UiKey = Leaves<Dictionary>;

const dictionaries: Record<Locale, Dictionary> = { en, vi };

function flatten(node: unknown, prefix = ''): Map<string, unknown> {
  const out = new Map<string, unknown>();
  for (const [key, value] of Object.entries(node as Record<string, unknown>)) {
    const path = prefix + key;
    if (value !== null && typeof value === 'object') {
      for (const entry of flatten(value, `${path}.`)) out.set(...entry);
    } else {
      out.set(path, value);
    }
  }
  return out;
}

// Fail the build when a key is missing or empty in either language.
const flat = Object.fromEntries(locales.map((l) => [l, flatten(dictionaries[l])])) as Record<
  Locale,
  Map<string, unknown>
>;
const allKeys = new Set(locales.flatMap((l) => [...flat[l].keys()]));
const problems = locales.flatMap((l) =>
  [...allKeys]
    .filter((key) => typeof flat[l].get(key) !== 'string' || flat[l].get(key) === '')
    .map((key) => `${l}: ${key}`),
);
if (problems.length > 0) {
  throw new Error(`UI strings missing or empty in src/content/ui:\n  ${problems.join('\n  ')}`);
}

export function t(lang: Locale, key: UiKey): string {
  return flat[lang].get(key) as string;
}

export function useTranslations(lang: Locale) {
  return (key: UiKey) => t(lang, key);
}
