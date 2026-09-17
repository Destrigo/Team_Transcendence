import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const LAST_UPDATED = '2026-07-29';

export default function Terms() {
  const { t } = useTranslation();

  const eligibilityItems = t('terms.section3.items', { returnObjects: true }) as string[];
  const acceptableUseItems = t('terms.section4.items', { returnObjects: true }) as string[];

  return (
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
            <h2 className="text-lg font-semibold">{t('terms.section1.heading')}</h2>
            <p>{t('terms.section1.body')}</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">{t('terms.section2.heading')}</h2>
            <p>{t('terms.section2.body1')}</p>
            <p>{t('terms.section2.body2')}</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">{t('terms.section3.heading')}</h2>
            <ul className="list-disc space-y-1 pl-5">
              {eligibilityItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">{t('terms.section4.heading')}</h2>
            <p>{t('terms.section4.intro')}</p>
            <ul className="list-disc space-y-1 pl-5">
              {acceptableUseItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">{t('terms.section5.heading')}</h2>
            <p>{t('terms.section5.body')}</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">{t('terms.section6.heading')}</h2>
            <p>{t('terms.section6.body')}</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">{t('terms.section7.heading')}</h2>
            <p>{t('terms.section7.body')}</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">{t('terms.section8.heading')}</h2>
            <p>
              {t('terms.section8.before')}{' '}
              <Link to="/privacy" className="text-primary underline-offset-2 hover:underline">
                {t('privacy.title')}
              </Link>
              {t('terms.section8.after')}
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">{t('terms.section9.heading')}</h2>
            <p>{t('terms.section9.body')}</p>
          </section>
        </div>

        <p className="mt-8">
          <Link to="/" className="text-sm text-primary underline-offset-2 hover:underline">
            ← {t('notFound.returnHome')}
          </Link>
        </p>
      </main>
  );
}
