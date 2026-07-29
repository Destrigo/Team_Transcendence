import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import LanguageSwitcher from '../components/LanguageSwitcher';

const LAST_UPDATED = '2026-07-29';

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">{t('privacy.title')}</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {t('privacy.lastUpdated')}: {LAST_UPDATED}
            </p>
          </div>
          <LanguageSwitcher />
        </div>

        <div className="space-y-6 text-sm leading-relaxed text-foreground">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold">1. Who we are</h2>
            <p>
              PaperTrade is a team academic project (ft_transcendence). It provides a
              web application for <strong>simulated</strong> trading with market-like
              data. PaperTrade is not a licensed broker, bank, or financial advisor.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">2. Data we collect</h2>
            <p>Depending on how you use the service, we may store:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Account data: email, username, display name, avatar, language preference</li>
              <li>Authentication data: password hash (never plaintext), optional OAuth identifiers, optional 2FA secrets</li>
              <li>Application data: balance/holdings, orders, portfolio snapshots, messages, friend relationships, notifications</li>
              <li>Technical data: online status / last seen, and standard server logs needed to operate the app</li>
            </ul>
            <p>
              We do not intentionally collect payment card numbers or government ID
              documents. There is <strong>no real money</strong> on the platform.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">3. How we use data</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>To create and secure your account</li>
              <li>To run simulated trading, social, and analytics features</li>
              <li>To show online status to friends when that feature is enabled</li>
              <li>To improve reliability and fix bugs</li>
              <li>To comply with evaluation / academic requirements for this project</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">4. Where data is stored</h2>
            <p>
              Application data is stored in the project database (PostgreSQL) operated
              by the team via Docker for local and evaluation environments. Secrets
              (for example JWT signing keys) are kept in environment configuration,
              not in the public repository.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">5. Sharing</h2>
            <p>
              We do not sell personal data. Data may be processed by team members for
              development and peer evaluation. External market-data providers may be
              queried for public price information; those requests should not include
              your password or private messages.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">6. Your rights (GDPR-style)</h2>
            <p>Subject to what the app implements at evaluation time, you may:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Access and download your personal data (Settings → Download my data)</li>
              <li>Update profile information</li>
              <li>Delete your account and associated application data (Settings → Delete account)</li>
            </ul>
            <p>
              Because this is an academic deployment, retention is limited to the life
              of the project environment unless the team resets the database earlier.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">7. Cookies and sessions</h2>
            <p>
              Authentication may use HTTP-only cookies and/or tokens stored by the
              browser to keep you signed in. These are used for security and session
              continuity, not for third-party advertising.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">8. Contact</h2>
            <p>
              For privacy questions about this academic project, contact the PaperTrade
              team members listed in the project README.
            </p>
          </section>
        </div>

        <p className="mt-8">
          <Link to="/" className="text-sm text-primary underline-offset-2 hover:underline">
            ← {t('notFound.returnHome')}
          </Link>
        </p>
      </main>
      <Footer />
    </div>
  );
}
