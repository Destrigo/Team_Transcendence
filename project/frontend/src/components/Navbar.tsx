import { useTranslation } from 'react-i18next';
import { Menu } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import NotificationBell from './NotificationBell';

interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  const { t } = useTranslation();

  return (
    <header className="flex items-center justify-between gap-3 border-b border-border bg-card px-4 py-3 md:justify-end md:px-6">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label={t('sidebar.open')}
        className="rounded p-1.5 text-muted-foreground hover:bg-accent md:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>
      <div className="flex items-center gap-3">
        <NotificationBell />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
