import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import {Section} from '@/components/ui/Section';
import {ArrowRight} from 'lucide-react';
import {Link} from '@/navigation';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
  return {
    title: t('Who.title'),
    description: t('Who.description')
  };
}

export default async function WhoThisIsFor({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Who'});

  const audiences = ['executives', 'boards', 'teams', 'professionals'];

  return (
    <>
      <Header />
      
      <main className="flex-grow pt-20">
        <Section variant="dark" spacing="md">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-6xl font-sans font-bold leading-tight mb-8 tracking-tighter text-white">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-text-muted font-sans tracking-tight leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {audiences.map((key) => (
              <div 
                key={key} 
                className="bg-brand-surface p-8 md:p-12 flex flex-col premium-transition border border-brand-border hover:shadow-2xl"
              >
                <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-10">
                  {t(`${key}.title`)}
                </h2>
                
                <div className="mb-12">
                  <p className="text-text-muted text-[10px] uppercase font-bold tracking-widest mb-4">{t('challengeLabel')}</p>
                  <p className="text-xl text-text-primary leading-relaxed font-sans">
                    "{t(`${key}.problem`)}"
                  </p>
                </div>

                <div className="mb-12">
                  <p className="text-text-muted text-[10px] uppercase font-bold tracking-widest mb-4">{t('solutionLabel')}</p>
                  <p className="text-xl text-text-primary leading-relaxed font-sans">
                    {t(`${key}.solution`)}
                  </p>
                </div>

                <div className="mt-auto pt-8 border-t border-brand-border">
                  <Link 
                    href="/services" 
                    className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-text-primary hover:text-primary premium-transition group"
                  >
                    {t('viewServices')}
                    <ArrowRight className="ml-3 h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>
      
      <Footer />
    </>
  );
}
