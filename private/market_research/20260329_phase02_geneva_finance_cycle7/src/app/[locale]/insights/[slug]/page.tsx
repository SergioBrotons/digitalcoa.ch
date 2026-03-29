import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import {Section} from '@/components/ui/Section';
import {Link} from '@/navigation';
import {ArrowLeft} from 'lucide-react';
import {notFound} from 'next/navigation';
import {getPostKeyBySlug} from '@/lib/blog-data';

export async function generateMetadata({params}: {params: Promise<{locale: string, slug: string}>}) {
  const {locale, slug} = await params;
  
  const key = getPostKeyBySlug(slug);
  if (!key) return {};
  
  const t = await getTranslations({locale, namespace: 'Insights.posts'});
  return {
    title: t(`${key}.title`),
    description: t(`${key}.excerpt`)
  };
}

export default async function InsightPost({params}: {params: Promise<{slug: string, locale: string}>}) {
  const {slug, locale} = await params;
  const t = await getTranslations({locale, namespace: 'Insights'});
  
  const key = getPostKeyBySlug(slug);
  if (!key) {
    notFound();
  }

  return (
    <>
      <Header />
      
      <main className="flex-grow pt-20">
        <Section variant="dark" spacing="md">
          <article className="max-w-3xl mx-auto">
            <Link 
              href="/insights" 
              className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-text-muted hover:text-primary premium-transition mb-8"
            >
              <ArrowLeft className="mr-2 h-3 w-3" />
              {t('back')}
            </Link>

            <header className="mb-12 text-center">
              <div className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-4 font-sans">
                {t(`posts.${key}.date`)}
              </div>
              <h1 className="text-3xl md:text-5xl font-sans font-bold leading-tight mb-6 tracking-tighter text-white capitalize-none">
                {t(`posts.${key}.title`)}
              </h1>
            </header>

            <div className="prose prose-lg prose-invert max-w-none font-sans text-text-muted leading-relaxed">
              <p className="text-xl md:text-2xl text-text-primary mb-12 border-l-2 border-primary pl-8 italic font-light leading-relaxed">
                {t(`posts.${key}.excerpt`)}
              </p>
              
              <p className="mb-12 text-lg">
                {t(`posts.${key}.content`)}
              </p>
              
              <h2 className="font-bold text-text-primary mb-6 mt-12 tracking-widest uppercase text-[10px]">{t(`posts.${key}.listTitle`)}</h2>
              <ul className="space-y-4 mb-12">
                {(t.raw(`posts.${key}.list`) as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-baseline text-base text-text-primary">
                    <span className="text-primary mr-4 font-bold text-xs">0{idx + 1}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Section>
      </main>
      
      <Footer />
    </>
  );
}
