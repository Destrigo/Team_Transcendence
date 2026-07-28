import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const API = import.meta.env.VITE_API_URL ?? 'http://localhost:4000';

function authHeaders(): HeadersInit {
  const token = localStorage.getItem('access_token');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

const Settings = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [exportLoading, setExportLoading] = useState(false);
  const [exportError, setExportError] = useState('');
  const [exportSuccess, setExportSuccess] = useState(false);

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState('');

  const handleExport = async () => {
    setExportError('');
    setExportSuccess(false);
    setExportLoading(true);
    try {
      const res = await fetch(`${API}/api/gdpr/export`, {
        method: 'GET',
        credentials: 'include',
        headers: authHeaders(),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(
          typeof body.message === 'string'
            ? body.message
            : t('gdpr.exportFailed'),
        );
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'papertrade-personal-data.json';
      a.click();
      URL.revokeObjectURL(url);
      setExportSuccess(true);
    } catch (err) {
      setExportError(
        err instanceof Error ? err.message : t('gdpr.exportFailed'),
      );
    } finally {
      setExportLoading(false);
    }
  };

  const handleDelete = async (e: FormEvent) => {
    e.preventDefault();
    setDeleteError('');
    if (!deletePassword.trim()) {
      setDeleteError(t('gdpr.passwordRequired'));
      return;
    }

    setDeleteLoading(true);
    try {
      const res = await fetch(`${API}/api/gdpr/delete-account`, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          ...authHeaders(),
        },
        body: JSON.stringify({ password: deletePassword }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(
          typeof body.message === 'string'
            ? body.message
            : t('gdpr.deleteFailed'),
        );
      }

      localStorage.removeItem('access_token');
      navigate('/');
    } catch (err) {
      setDeleteError(
        err instanceof Error ? err.message : t('gdpr.deleteFailed'),
      );
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="mb-6 text-2xl font-bold">{t('settings.title')}</h1>

      <section className="mb-6 rounded-lg border border-border bg-card p-4">
        <h2 className="mb-4 text-lg font-semibold">{t('settings.profile')}</h2>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">
              {t('settings.displayName')}
            </label>
            <input
              type="text"
              className="w-full rounded border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">
              {t('settings.avatar')}
            </label>
            <button
              type="button"
              className="rounded border border-border px-4 py-2 text-sm hover:bg-accent"
            >
              {t('settings.changeAvatar')}
            </button>
          </div>
        </div>
      </section>

      <section className="mb-6 rounded-lg border border-border bg-card p-4">
        <h2 className="mb-4 text-lg font-semibold">
          {t('settings.preferences')}
        </h2>
        <div>
          <label className="mb-1 block text-sm font-medium">
            {t('settings.languageLabel')}
          </label>
          <LanguageSwitcher className="mt-1" />
        </div>
      </section>

      <section className="mb-6 rounded-lg border border-border bg-card p-4">
        <h2 className="mb-4 text-lg font-semibold">{t('settings.security')}</h2>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium">
              {t('settings.currentPassword')}
            </label>
            <input
              type="password"
              className="w-full rounded border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">
              {t('settings.newPassword')}
            </label>
            <input
              type="password"
              className="w-full rounded border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="button"
            className="rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            {t('settings.changePassword')}
          </button>
        </div>
      </section>

      <section className="rounded-lg border border-border bg-card p-4">
        <h2 className="mb-4 text-lg font-semibold">{t('settings.privacy')}</h2>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium">{t('gdpr.downloadData')}</p>
            <p className="mb-2 text-xs text-muted-foreground">
              {t('gdpr.downloadDataDesc')}
            </p>
            <button
              type="button"
              onClick={handleExport}
              disabled={exportLoading}
              className="rounded border border-border px-4 py-2 text-sm hover:bg-accent disabled:opacity-50"
            >
              {exportLoading ? t('common.loading') : t('gdpr.downloadButton')}
            </button>
            {exportError ? (
              <p className="mt-2 text-xs text-destructive">{exportError}</p>
            ) : null}
            {exportSuccess ? (
              <p className="mt-2 text-xs text-green-600">{t('gdpr.exportSuccess')}</p>
            ) : null}
          </div>
          <hr className="border-border" />
          <div>
            <p className="text-sm font-medium text-destructive">
              {t('gdpr.deleteAccount')}
            </p>
            <p className="mb-2 text-xs text-muted-foreground">
              {t('gdpr.deleteAccountDesc')}
            </p>
            {!showDeleteConfirm ? (
              <button
                type="button"
                onClick={() => {
                  setShowDeleteConfirm(true);
                  setDeleteError('');
                }}
                className="rounded border border-destructive px-4 py-2 text-sm text-destructive hover:bg-destructive hover:text-destructive-foreground"
              >
                {t('gdpr.deleteButton')}
              </button>
            ) : (
              <form onSubmit={handleDelete} className="space-y-3">
                <p className="text-xs text-muted-foreground">
                  {t('gdpr.confirmDelete')}
                </p>
                <input
                  type="password"
                  value={deletePassword}
                  onChange={(e) => setDeletePassword(e.target.value)}
                  autoComplete="current-password"
                  className="w-full rounded border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder={t('auth.password')}
                />
                {deleteError ? (
                  <p className="text-xs text-destructive">{deleteError}</p>
                ) : null}
                <div className="flex gap-2">
                  <button
                    type="submit"
                    disabled={deleteLoading}
                    className="rounded bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground hover:opacity-90 disabled:opacity-50"
                  >
                    {deleteLoading
                      ? t('common.loading')
                      : t('gdpr.confirmDeleteButton')}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowDeleteConfirm(false);
                      setDeletePassword('');
                      setDeleteError('');
                    }}
                    className="rounded border border-border px-4 py-2 text-sm hover:bg-accent"
                  >
                    {t('common.cancel')}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <div className="mt-6">
        <button
          type="button"
          className="rounded bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          {t('settings.saveChanges')}
        </button>
      </div>
    </div>
  );
};

export default Settings;
