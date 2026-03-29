import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import {Section} from '@/components/ui/Section';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
  return {
    title: t('About.title'),
    description: t('About.description')
  };
}

export default async function About({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'About'});

  return (
    <>
      <Header />
      
      <main className="flex-grow pt-20">
        <Section variant="dark" spacing="md">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-sans font-bold leading-tight mb-8 tracking-tighter text-white">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-text-muted font-sans tracking-tight mb-0 leading-relaxed max-w-2xl">
              {t('hero.subtitle')}
            </p>
          </div>
        </Section>

        <Section variant="gray" spacing="md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start pb-20 border-b border-brand-border mb-20">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-primary mb-12">
                {t('founder.title')}
              </h2>
              <div className="prose prose-xl text-text-muted leading-relaxed font-sans max-w-2xl">
                <p className="text-2xl text-text-primary mb-10 leading-relaxed italic border-l-4 border-primary pl-8">
                  {t('founder.text')}
                </p>
                <div className="space-y-8 text-lg">
                  <p>DigitalCoa.ch exists because I believe better decisions come from better structures. Not from more technology.</p>
                  <p>I work with executives, boards, and senior professionals who need their thinking environment to be as disciplined as the decisions they're responsible for.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-[4/5] overflow-hidden no-radius grayscale hover:grayscale-0 premium-transition border border-brand-border/20 shadow-2xl animate-fade-in translate-y-4 hover:translate-y-0 transition-all duration-1000">
                <img 
                  src="/media/sergio-primary-portait.webp" 
                  alt="Sergio Brotons - Founder" 
                  className="w-full h-full object-cover object-left transition-transform duration-1000"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {['clarity', 'governance', 'pragmatism', 'confidentiality'].map((val) => (
              <div key={val} className="border-l border-brand-border pl-8 hover:border-primary premium-transition">
                <h3 className="text-2xl font-bold mb-4 tracking-tighter text-text-primary">
                  {t(`values.${val}.title`)}
                </h3>
                <p className="text-text-muted text-base leading-relaxed">
                  {t(`values.${val}.text`)}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      
      <Footer />
    </>
  );
}
