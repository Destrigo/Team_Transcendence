import { useTranslation } from 'react-i18next';
import { api } from '../api/api';

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
];

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
    api.put('/users/me', { language: e.target.value })
      .catch(() => {
      });
  };

  return (
    <select
      value={i18n.resolvedLanguage ?? 'en'}
      onChange={handleChange}
      className={`rounded border border-border bg-background px-2 py-1 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring ${className}`}
      aria-label="Select language"
    >
      {LANGUAGES.map(({ code, label, flag }) => (
        <option key={code} value={code}>
          {flag} {label}
        </option>
      ))}
    </select>
  );
}
