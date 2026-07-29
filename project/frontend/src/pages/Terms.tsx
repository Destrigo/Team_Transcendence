import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../components/Footer';
import LanguageSwitcher from '../components/LanguageSwitcher';

const LAST_UPDATED = '2026-07-29';

export default function Terms() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-10">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold">{t('terms.title')}</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {t('terms.lastUpdated')}: {LAST_UPDATED}
            </p>
          </div>
          <LanguageSwitcher />
        </div>

        <div className="space-y-6 text-sm leading-relaxed text-foreground">
          <section className="space-y-2">
            <h2 className="text-lg font-semibold">1. Acceptance</h2>
            <p>
              By creating an account or using PaperTrade, you agree to these Terms of
              Service. If you do not agree, do not use the application.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">2. Nature of the service</h2>
            <p>
              PaperTrade is a <strong>simulated trading</strong> platform built for an
              academic group project. Market prices may be delayed, incomplete, or
              approximated. Nothing in PaperTrade is an offer to buy or sell real
              securities, crypto-assets, or other financial instruments.
            </p>
            <p>
              <strong>No real money</strong> is deposited, withdrawn, or settled through
              this application. Virtual balances and holdings have no cash value.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">3. Eligibility and accounts</h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>You must provide accurate registration information</li>
              <li>You are responsible for keeping your credentials confidential</li>
              <li>One person should not abuse multiple accounts to disrupt the platform</li>
              <li>We may disable accounts that break these terms or harm other users</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">4. Acceptable use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Attempt to break authentication, inject malicious input, or attack the service</li>
              <li>Harass other users via chat, profiles, or other social features</li>
              <li>Scrape or overload the service in a way that degrades availability</li>
              <li>Present PaperTrade as a real brokerage or investment product</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">5. No financial advice</h2>
            <p>
              Content, charts, leaderboards, and analytics are for educational and
              entertainment purposes only. They are not investment, tax, or legal advice.
              Do not make real-world financial decisions based on PaperTrade.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">6. Availability</h2>
            <p>
              The service may be unavailable during development, evaluation, or when
              the team resets environments. Features may change without notice as the
              project evolves.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">7. Limitation of liability</h2>
            <p>
              To the maximum extent permitted by applicable law, the PaperTrade team
              provides the service “as is” without warranties of any kind, and is not
              liable for losses arising from use of the simulated platform, including
              loss of virtual balances, data loss after environment resets, or reliance
              on displayed prices.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">8. Privacy</h2>
            <p>
              Personal data handling is described in our{' '}
              <Link to="/privacy" className="text-primary underline-offset-2 hover:underline">
                {t('privacy.title')}
              </Link>
              .
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">9. Changes</h2>
            <p>
              We may update these terms as the project develops. The “Last updated”
              date at the top of this page reflects the latest revision for evaluation
              purposes.
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
