import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mt-auto border-t border-border bg-card px-4 py-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
        <p>© {new Date().getFullYear()} PaperTrade — simulated trading only</p>
        <nav className="flex gap-4">
          <Link to="/privacy" className="underline-offset-2 hover:text-foreground hover:underline">
            {t('privacy.title')}
          </Link>
          <Link to="/terms" className="underline-offset-2 hover:text-foreground hover:underline">
            {t('terms.title')}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
