import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Login = () => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="w-full max-w-sm rounded-lg bg-card p-8 shadow-md">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">{t('auth.loginTitle')}</h1>
          <LanguageSwitcher />
        </div>
        <p className="mb-6 text-sm text-muted-foreground">{t('auth.loginSubtitle')}</p>

        {/* TODO: implement form with auth context */}
        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">{t('auth.email')}</label>
            <input
              type="email"
              placeholder={t('auth.emailPlaceholder')}
              className="w-full rounded border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">{t('auth.password')}</label>
            <input
              type="password"
              placeholder={t('auth.passwordPlaceholder')}
              className="w-full rounded border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            {t('auth.loginButton')}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-muted-foreground">
          {t('auth.noAccount')}{' '}
          <a href="/register" className="text-primary underline">
            {t('auth.registerButton')}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
