import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const LAST_UPDATED = '2026-07-29';

export default function Privacy() {
  const { t } = useTranslation();

  const dataWeCollectItems = t('privacy.section2.items', { returnObjects: true }) as string[];
  const howWeUseItems = t('privacy.section3.items', { returnObjects: true }) as string[];
  const rightsItems = t('privacy.section6.items', { returnObjects: true }) as string[];

  return (
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
            <h2 className="text-lg font-semibold">{t('privacy.section1.heading')}</h2>
            <p>{t('privacy.section1.body')}</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">{t('privacy.section2.heading')}</h2>
            <p>{t('privacy.section2.intro')}</p>
            <ul className="list-disc space-y-1 pl-5">
              {dataWeCollectItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>{t('privacy.section2.outro')}</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">{t('privacy.section3.heading')}</h2>
            <ul className="list-disc space-y-1 pl-5">
              {howWeUseItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">{t('privacy.section4.heading')}</h2>
            <p>{t('privacy.section4.body')}</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">{t('privacy.section5.heading')}</h2>
            <p>{t('privacy.section5.body')}</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">{t('privacy.section6.heading')}</h2>
            <p>{t('privacy.section6.intro')}</p>
            <ul className="list-disc space-y-1 pl-5">
              {rightsItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p>{t('privacy.section6.outro')}</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">{t('privacy.section7.heading')}</h2>
            <p>{t('privacy.section7.body')}</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">{t('privacy.section8.heading')}</h2>
            <p>{t('privacy.section8.body')}</p>
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
