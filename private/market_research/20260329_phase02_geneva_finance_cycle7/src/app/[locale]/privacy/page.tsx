import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import {Section} from '@/components/ui/Section';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Legal.privacy'});
  return {
    title: t('title'),
    robots: { index: false, follow: true }
  };
}

export default function PrivacyPolicy() {
  const t = useTranslations('Legal.privacy');

  return (
    <>
      <Header />
      <main className="flex-grow">
        <Section variant="white" spacing="md">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-sans font-bold mb-12 uppercase tracking-tighter">
              {t('title')}
            </h1>
            <div className="prose prose-lg text-brand-gray-600 font-sans">
              <p>{t('text')}</p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
