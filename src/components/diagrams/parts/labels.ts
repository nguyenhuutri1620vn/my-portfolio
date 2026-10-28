import type { Locale } from '../../../i18n/config';
import { t, type UiKey } from '../../../i18n/ui';

// Box and edge labels live in src/content/ui under diagrams.<name>.labels; a typo fails the build.
export function diagramLabels(lang: Locale, name: string) {
  return (key: string): string => {
    const value = t(lang, `diagrams.${name}.labels.${key}` as UiKey);
    if (!value) throw new Error(`Missing UI string diagrams.${name}.labels.${key}`);
    return value;
  };
}
