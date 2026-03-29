import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import {Section} from '@/components/ui/Section';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Legal.notice'});
  return {
    title: t('title'),
    robots: { index: false, follow: true }
  };
}

export default function LegalNotice() {
  const t = useTranslations('Legal.notice');

  return (
    <>
      <Header />
      <main className="flex-grow">
        <Section variant="white" spacing="md">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-sans font-bold mb-12 uppercase tracking-tighter">
              {t('title')}
            </h1>
            <div className="space-y-6 text-brand-gray-600 font-sans">
              <p>{t('publisher')}</p>
              <p>{t('address')}</p>
              <p>{t('contact')}</p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
