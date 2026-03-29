import React from 'react';
import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import {Section} from '@/components/ui/Section';
import {Link} from '@/navigation';
import {ArrowRight, CheckCircle2, Sparkles} from 'lucide-react';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
  return {
    title: t('Home.title'),
    description: t('Home.description')
  };
}

export default async function Home({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Home'});

  return (
    <>
      <Header />
      
      <main className="flex-grow pt-20">
        <Section variant="dark" spacing="md" className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-surface -z-10 blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2 rounded-full" />
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-sans font-bold leading-[1.1] mb-8 tracking-tighter text-white">
              {t('hero.title')}
            </h1>

            <p className="text-xl md:text-2xl text-primary font-sans tracking-tight mb-8 leading-relaxed max-w-2xl capitalize-none">
              {t('hero.subtitle')}
            </p>
            
            <p className="text-base md:text-lg text-text-muted mb-10 max-w-xl leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center bg-primary text-brand-bg px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-white premium-transition no-radius group"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-3 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                href="/who-this-is-for" 
                className="inline-flex items-center justify-center border-2 border-brand-border text-text-primary px-10 py-5 text-sm font-bold uppercase tracking-widest hover:border-primary hover:text-primary premium-transition no-radius group"
              >
                {t('hero.cta2')}
                <ArrowRight className="ml-3 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-text-muted">
              {['geneva', 'governance', 'confidential', 'human'].map((key, idx) => (
                <React.Fragment key={key}>
                  {idx > 0 && <span className="text-primary text-sm">✦</span>}
                  <span className="text-[10px] uppercase tracking-[0.2em] font-bold font-sans">
                    {t(`badges.${key}`)}
                  </span>
                </React.Fragment>
              ))}
            </div>
          </div>
        </Section>

        {/* PROBLEM STATEMENT */}
        <Section variant="dark" spacing="lg">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold mb-10 text-primary italic">
              {t('problemStatement.title')}
            </h2>
            <ul className="space-y-8">
              {(t.raw('problemStatement.items') as string[]).map((item, idx) => (
                <li key={idx} className="flex items-start text-xl text-text-primary">
                  <span className="h-1.5 w-1.5 bg-primary rounded-full mt-3 mr-6 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Section>

        {/* AUDIENCE SEGMENTS */}
        <Section variant="gray" spacing="md">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-text-muted mb-12 border-b border-brand-border pb-6 opacity-80">
              {t('audienceSegments.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 group">
              {['executives', 'boards', 'teams', 'professionals'].map((key) => (
                <div key={key} className="bg-brand-bg p-8 hover:bg-brand-surface premium-transition group/item border border-brand-border shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-primary/80 mb-6">{t(`audienceSegments.items.${key}.label`)}</div>
                  <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-6 leading-[1.2] group-hover/item:text-white premium-transition max-w-[90%] tracking-tight">
                    {t(`audienceSegments.items.${key}.problem`)}
                  </h3>
                  <p className="text-text-muted text-sm md:text-base mb-10 leading-relaxed italic opacity-90">
                    {t(`audienceSegments.items.${key}.solution`)}
                  </p>
                  <Link href="/services" className="mt-auto inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-text-primary group-hover/item:text-primary premium-transition">
                    {t(`audienceSegments.items.${key}.cta`)}
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* SERVICES SUMMARY */}
        <Section variant="dark" spacing="lg">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-text-muted mb-16 border-b border-brand-border pb-6">
              {t('servicesSummary.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {['diagnostic', 'architecture', 'os'].map((key) => (
                <div key={key} className="flex flex-col">
                  <div className="text-[10px] font-bold text-primary uppercase tracking-[0.15em] mb-4">{t(`servicesSummary.items.${key}.duration`)}</div>
                  <h3 className="text-2xl font-bold text-text-primary mb-6 leading-snug">{t(`servicesSummary.items.${key}.title`)}</h3>
                  <p className="text-text-muted text-base leading-relaxed mb-8">
                    {t(`servicesSummary.items.${key}.desc`)}
                  </p>
                  <Link href="/services" className="mt-auto text-xs font-bold uppercase tracking-widest text-primary hover:text-white premium-transition">
                    Details →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* PROCESS */}
        <Section variant="white" spacing="lg">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-text-muted mb-24 border-b border-brand-border pb-6">
              {t('process.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {['diagnose', 'design', 'deploy'].map((step, idx) => (
                <div key={step}>
                  <div className="text-5xl font-bold text-brand-border mb-8">0{idx + 1}</div>
                  <h3 className="text-2xl font-bold text-primary mb-6">{t(`process.steps.${step}.title`)}</h3>
                  <p className="text-text-muted text-lg leading-relaxed">
                    {t(`process.steps.${step}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>
        
        {/* VALUE PROPS */}
        <Section variant="gray" spacing="lg">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-text-muted mb-24 border-b border-brand-border pb-6">
              {t('valuePropsFull.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {['governance', 'confidentiality', 'pragmatism'].map((key) => (
                <div key={key} className="border-l-2 border-brand-border pl-8 hover:border-primary premium-transition">
                  <h3 className="text-2xl font-bold mb-6 uppercase tracking-tighter text-text-primary">{t(`valuePropsFull.items.${key}.title`)}</h3>
                  <p className="text-text-muted text-base leading-relaxed">
                    {t(`valuePropsFull.items.${key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* FINAL CTA */}
        <Section variant="dark" spacing="lg" className="border-t border-brand-border">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <div className="mb-12">
              <div className="w-32 h-32 overflow-hidden rounded-full grayscale hover:grayscale-0 premium-transition shadow-2xl">
                <img 
                  src="/media/sergio-avatar-square.webp" 
                  alt="Sergio Brotons - Founder" 
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-sans font-bold leading-tight mb-12 tracking-tighter text-white">
              {t('finalCta.title')}
            </h2>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center bg-primary text-brand-bg px-12 py-6 text-sm font-bold uppercase tracking-widest hover:bg-white premium-transition no-radius group"
            >
              {t('finalCta.cta')}
              <ArrowRight className="ml-3 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Section>
      </main>
      
      <Footer />
    </>
  );
}
