import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';
import { useAuth } from '../auth/useAuth';
import axios from 'axios';
import { api } from '../api/api';

const OAUTH_PROVIDERS = [
  { id: 'google', label: 'auth.continueWithGoogle', href: '/api/auth/google' },
  { id: 'github', label: 'auth.continueWithGithub', href: '/api/auth/github' },
  { id: 'fortytwo', label: 'auth.continueWithFortyTwo', href: '/api/auth/42' },
] as const;

export default function Login() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { refreshUser } = useAuth();

  // --- 2FA step (shown after a valid email/password when 2FA is enabled) ---
  const [awaiting2FA, setAwaiting2FA] = useState(false);
  const [loginToken, setLoginToken] = useState('');
  const [twoFACode, setTwoFACode] = useState('');
  const [twoFALoading, setTwoFALoading] = useState(false);
  const [twoFAError, setTwoFAError] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await api.post('/auth/login', {
        email,
        password,
      });

      if (res.data?.requires2FA) {
        setLoginToken(res.data.loginToken);
        setAwaiting2FA(true);
        return;
      }

      await refreshUser();
      navigate('/settings');
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message ?? t('auth.invalidCredentials')
        );
      } else {
        setError(t('auth.invalidCredentials'));
      }
    }
  };

  const handleVerify2FA = async (e: FormEvent) => {
    e.preventDefault();
    setTwoFAError('');

    if (twoFACode.length !== 6) {
      setTwoFAError(t('settings.twoFactorCodeInvalid'));
      return;
    }

    try {
      setTwoFALoading(true);
      await api.post('/auth/login/2fa', {
        loginToken,
        code: twoFACode,
      });
      await refreshUser();
      navigate('/settings');
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setTwoFAError(
          err.response?.data?.message ?? t('settings.twoFactorVerifyFailed')
        );
      } else {
        setTwoFAError(t('settings.twoFactorVerifyFailed'));
      }
    } finally {
      setTwoFALoading(false);
    }
  };

  const handleBackToLogin = () => {
    setAwaiting2FA(false);
    setLoginToken('');
    setTwoFACode('');
    setTwoFAError('');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="w-full max-w-sm rounded-lg bg-card p-8 shadow-md">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold">{t('auth.loginTitle')}</h1>
          <LanguageSwitcher />
        </div>

        {!awaiting2FA ? (
          <>
            <p className="mb-6 text-sm text-muted-foreground">{t('auth.loginSubtitle')}</p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="mb-1 block text-sm font-medium">{t('auth.email')}</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('auth.emailPlaceholder')}
                  className="w-full rounded border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium">{t('auth.password')}</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t('auth.passwordPlaceholder')}
                  className="w-full rounded border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                {t('auth.loginButton')}
              </button>
            </form>

            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs uppercase text-muted-foreground">
                {t('auth.orContinueWith')}
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="space-y-2">
              {OAUTH_PROVIDERS.map((provider) => (
                <a
                  key={provider.id}
                  href={provider.href}
                  className="flex w-full items-center justify-center gap-2 rounded border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-muted"
                >
                  <ProviderIcon id={provider.id} />
                  {t(provider.label)}
                </a>
              ))}
            </div>

            {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
            <p className="mt-4 text-center text-sm text-muted-foreground">
              {t('auth.noAccount')}{' '}
              <Link to="/register" className="text-primary underline">
                {t('auth.registerButton')}
              </Link>
            </p>
          </>
        ) : (
          <>
            <p className="mb-6 text-sm text-muted-foreground">
              {t('settings.twoFactorScanPrompt')}
            </p>
            <form className="space-y-4" onSubmit={handleVerify2FA}>
              <div>
                <label className="mb-1 block text-sm font-medium">
                  {t('settings.twoFactorCodePlaceholder')}
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={twoFACode}
                  onChange={(e) => setTwoFACode(e.target.value.replace(/\D/g, ''))}
                  placeholder={t('settings.twoFactorCodePlaceholder')}
                  className="w-full rounded border border-input bg-background px-3 py-2 text-center text-sm tracking-widest focus:outline-none focus:ring-2 focus:ring-ring"
                  autoFocus
                  required
                />
              </div>

              {twoFAError && <p className="text-sm text-destructive">{twoFAError}</p>}

              <button
                type="submit"
                disabled={twoFALoading}
                className="w-full rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {twoFALoading ? t('settings.twoFactorLoading') : t('settings.twoFactorConfirmButton')}
              </button>

              <button
                type="button"
                onClick={handleBackToLogin}
                className="w-full rounded border border-input px-4 py-2 text-sm hover:bg-accent"
              >
                {t('gdpr.cancel')}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function ProviderIcon({ id }: { id: 'google' | 'github' | 'fortytwo' }) {
  if (id === 'google') {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="#4285F4"
          d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.86c2.26-2.09 3.56-5.17 3.56-8.87z"
        />
        <path
          fill="#34A853"
          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.07.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.28v3.11A12 12 0 0 0 12 24z"
        />
        <path
          fill="#FBBC05"
          d="M5.27 14.28A7.2 7.2 0 0 1 4.89 12c0-.79.14-1.56.38-2.28V6.61H1.28A12 12 0 0 0 0 12c0 1.94.46 3.77 1.28 5.39z"
        />
        <path
          fill="#EA4335"
          d="M12 4.75c1.76 0 3.34.61 4.58 1.8l3.43-3.43C17.94 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.28 6.61l3.99 3.11C6.22 6.86 8.87 4.75 12 4.75z"
        />
      </svg>
    );
  }
  if (id === 'github') {
    return (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.06-.02-2.08-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.53.12-3.19 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.02 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.89.12 3.19.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58C20.56 21.79 24 17.29 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    );
  }
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.581 16.851H24v-4.439ZM24 3.574h-4.419v4.42l-4.419 4.418v4.44h4.419v-4.44L24 7.993Zm-4.419 0h-4.419v4.42zm-6.324 8.838H4.419l8.838-8.838H8.838L0 12.412v3.595h8.838v4.419h4.419z"/>
    </svg>
  );
}