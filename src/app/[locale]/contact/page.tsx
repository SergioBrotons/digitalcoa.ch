import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import {Section} from '@/components/ui/Section';
import {Calendar, Mail} from 'lucide-react';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
  return {
    title: t('Contact.title'),
    description: t('Contact.description')
  };
}

export default async function Contact({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Contact'});

  return (
    <>
      <Header />
      
      <main className="flex-grow pt-20">
        <Section variant="dark" spacing="md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <h1 className="text-4xl md:text-6xl font-sans font-bold leading-tight mb-8 tracking-tighter text-white capitalize-none">
                {t('subtitle')}
              </h1>
              <p className="text-lg md:text-xl text-text-muted font-sans leading-relaxed mb-12 max-w-lg">
                {t('intro')}
              </p>
              <div className="mt-16 space-y-12">
                <div className="flex items-start">
                  <div className="bg-brand-surface p-4 border border-brand-border no-radius mr-6">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-xs text-text-muted mb-2">{t('options.book')}</h3>
                    <p className="text-sm text-text-muted mb-4 italic">30-minute structured diagnostic</p>
                    <a 
                      href="#" 
                      className="inline-block text-lg font-bold border-b-2 border-primary text-text-primary hover:text-primary premium-transition pb-1"
                    >
                      Book on Cal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-brand-surface p-4 border border-brand-border no-radius mr-6">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-widest text-xs text-text-muted mb-2">Email</h3>
                    <p className="text-lg font-bold border-b-2 border-primary text-text-primary hover:text-primary premium-transition pb-1">
                      sergio@digitalcoa.ch
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-surface p-10 md:p-16 border border-brand-border no-radius">
              <h3 className="text-xl font-bold uppercase tracking-tight mb-8 text-text-primary">{t('options.send')}</h3>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[10px] uppercase tracking-widest font-bold text-text-muted mb-2">
                    {t('form.name')}
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    required 
                    className="w-full bg-brand-bg border border-brand-border px-4 py-3 text-text-primary focus:border-primary focus:ring-0 outline-none premium-transition no-radius"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[10px] uppercase tracking-widest font-bold text-text-muted mb-2">
                    {t('form.email')}
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    required 
                    className="w-full bg-brand-bg border border-brand-border px-4 py-3 text-text-primary focus:border-primary focus:ring-0 outline-none premium-transition no-radius"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[10px] uppercase tracking-widest font-bold text-text-muted mb-2">
                    {t('form.message')}
                  </label>
                  <textarea 
                    id="message" 
                    required 
                    rows={6}
                    className="w-full bg-brand-bg border border-brand-border px-4 py-3 text-text-primary focus:border-primary focus:ring-0 outline-none premium-transition no-radius resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-primary text-brand-bg py-5 text-sm font-bold uppercase tracking-widest hover:bg-white premium-transition no-radius"
                >
                  {t('form.submit')}
                </button>
              </form>
            </div>
          </div>
        </Section>
      </main>
      
      <Footer />
    </>
  );
}
