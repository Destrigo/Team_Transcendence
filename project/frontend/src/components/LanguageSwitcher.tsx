import { useTranslation } from 'react-i18next';
const API = import.meta.env.VITE_API_URL ?? 'http://localhost:4000';

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
    // TODO: persist to user profile via PUT /users/me { language: e.target.value }
    fetch(`${API}/api/users/me`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ language: e.target.value }),
    }).catch(() => {
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
