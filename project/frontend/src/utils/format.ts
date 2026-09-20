import i18n from '../i18n';

const LOCALE_MAP: Record<string, string> = {
  en: 'en-US',
  fr: 'fr-FR',
  nl: 'nl-NL',
};

function currentLocale(): string {
  return LOCALE_MAP[i18n.resolvedLanguage ?? 'en'] ?? 'en-US';
}

// The app's balances/prices are always denominated in (virtual) USD — only
// the grouping/decimal formatting conventions follow the active language.
export function formatCurrency(value: number) {
  return value.toLocaleString(currentLocale(), {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: value < 1 ? 6 : 2,
  });
}

export function formatCompact(value: number) {
  return new Intl.NumberFormat(currentLocale(), { notation: 'compact', maximumFractionDigits: 1 }).format(value);
}
