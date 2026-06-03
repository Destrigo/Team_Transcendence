import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

// TODO: hook up PUT /users/me for profile and PUT /users/me/language for language persistence

const Settings = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="mb-6 text-2xl font-bold">{t('settings.title')}</h1>

      {/* Profile section */}
      <section className="mb-6 rounded-lg border border-border bg-card p-4">
        <h2 className="mb-4 text-lg font-semibold">{t('settings.profile')}</h2>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">{t('settings.displayName')}</label>
            <input
              type="text"
              className="w-full rounded border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">{t('settings.avatar')}</label>
            <button className="rounded border border-border px-4 py-2 text-sm hover:bg-accent">
              {t('settings.changeAvatar')}
            </button>
          </div>
        </div>
      </section>

      {/* Preferences section */}
      <section className="mb-6 rounded-lg border border-border bg-card p-4">
        <h2 className="mb-4 text-lg font-semibold">{t('settings.preferences')}</h2>
        <div>
          <label className="mb-1 block text-sm font-medium">{t('settings.languageLabel')}</label>
          <LanguageSwitcher className="mt-1" />
        </div>
      </section>

      {/* Security section */}
      <section className="mb-6 rounded-lg border border-border bg-card p-4">
        <h2 className="mb-4 text-lg font-semibold">{t('settings.security')}</h2>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">{t('settings.currentPassword')}</label>
            <input
              type="password"
              className="w-full rounded border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">{t('settings.newPassword')}</label>
            <input
              type="password"
              className="w-full rounded border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button className="rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
            {t('settings.changePassword')}
          </button>
        </div>
      </section>

      {/* GDPR section */}
      <section className="rounded-lg border border-border bg-card p-4">
        <h2 className="mb-4 text-lg font-semibold">{t('settings.privacy')}</h2>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium">{t('gdpr.downloadData')}</p>
            <p className="mb-2 text-xs text-muted-foreground">{t('gdpr.downloadDataDesc')}</p>
            <button className="rounded border border-border px-4 py-2 text-sm hover:bg-accent">
              {t('gdpr.downloadButton')}
            </button>
          </div>
          <hr className="border-border" />
          <div>
            <p className="text-sm font-medium text-destructive">{t('gdpr.deleteAccount')}</p>
            <p className="mb-2 text-xs text-muted-foreground">{t('gdpr.deleteAccountDesc')}</p>
            <button className="rounded border border-destructive px-4 py-2 text-sm text-destructive hover:bg-destructive hover:text-destructive-foreground">
              {t('gdpr.deleteButton')}
            </button>
          </div>
        </div>
      </section>

      <div className="mt-6">
        <button className="rounded bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
          {t('settings.saveChanges')}
        </button>
      </div>
    </div>
  );
};

export default Settings;
