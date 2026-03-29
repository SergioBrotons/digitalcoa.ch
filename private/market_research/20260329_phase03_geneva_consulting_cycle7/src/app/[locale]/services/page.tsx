import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import {Section} from '@/components/ui/Section';
import {Link} from '@/navigation';
import {ArrowRight, Check} from 'lucide-react';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
  return {
    title: t('Services.title'),
    description: t('Services.description')
  };
}

export default async function Services({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Services'});
  const commonT = await getTranslations({locale, namespace: 'Home'});

  const services = ['diagnostic', 'architecture', 'os'];

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

          <div className="grid grid-cols-1 gap-8">
            {services.map((key) => (
              <div 
                key={key} 
                className="group border border-brand-border hover:border-primary premium-transition p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-brand-surface"
              >
                <div>
                  <h2 className="text-2xl font-bold mb-4 tracking-tighter text-text-primary">{t(`list.${key}.title`)}</h2>
                  <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-6">{t(`list.${key}.subtitle`)}</p>
                  <p className="text-text-muted mb-6 text-sm leading-relaxed max-w-sm">
                    {t(`list.${key}.description`)}
                  </p>
                  <div className="flex items-center text-text-primary font-bold text-[10px] uppercase tracking-widest border-t border-brand-border pt-6 mt-6">
                    <span className="text-text-muted mr-4">{t('durationLabel')}</span>
                    {t(`list.${key}.duration`)}
                  </div>
                </div>

                <div>
                  <h3 className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-6">{t('deliverablesLabel')}</h3>
                  <ul className="space-y-3">
                    {(t.raw(`list.${key}.deliverables`) as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-text-primary">
                        <Check className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8">
                    <Link 
                      href="/contact" 
                      className="inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-primary group-hover:text-white premium-transition"
                    >
                      {t('enquireCta')}
                      <ArrowRight className="ml-3 h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section variant="gray" spacing="md" className="text-center">
          <h2 className="text-3xl md:text-5xl font-sans font-bold mb-12 tracking-tighter italic text-text-primary">
            {t('cta')}
          </h2>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-primary text-brand-bg px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white premium-transition no-radius"
          >
            {commonT('hero.cta')}
          </Link>
        </Section>
      </main>
      
      <Footer />
    </>
  );
}
