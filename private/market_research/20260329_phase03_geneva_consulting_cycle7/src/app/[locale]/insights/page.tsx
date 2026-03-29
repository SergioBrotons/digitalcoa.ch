import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import {Section} from '@/components/ui/Section';
import {Link} from '@/navigation';
import {ArrowRight} from 'lucide-react';
import {blogPosts, getSlugByKeyAndLocale} from '@/lib/blog-data';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});
  return {
    title: t('Insights.title'),
    description: t('Insights.description')
  };
}

export default async function Insights({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Insights'});

  return (
    <>
      <Header />
      
      <main className="flex-grow pt-20">
        <Section variant="dark" spacing="md">
          <div className="max-w-3xl mb-12">
            <h1 className="text-4xl md:text-6xl font-sans font-bold leading-tight mb-8 tracking-tighter text-text-primary">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-text-muted font-sans tracking-tight leading-relaxed">
              {t('subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const translatedSlug = getSlugByKeyAndLocale(post.key, locale);
              return (
                <Link 
                  key={post.key} 
                  href={{ pathname: '/insights/[slug]', params: { slug: translatedSlug } }}
                  className="group border border-brand-border p-8 flex flex-col premium-transition hover:border-primary no-radius bg-brand-surface shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-4 font-sans">
                    {t(`posts.${post.key}.date`)}
                  </div>
                  <h2 className="text-xl font-bold tracking-tighter mb-4 text-text-primary group-hover:text-primary premium-transition leading-tight">
                    {t(`posts.${post.key}.title`)}
                  </h2>
                  <p className="text-sm text-text-muted leading-relaxed mb-8 flex-grow">
                    {t(`posts.${post.key}.excerpt`)}
                  </p>
                  <div className="flex items-center text-xs font-bold uppercase tracking-widest text-primary group-hover:text-white premium-transition">
                    {t('readMore')}
                    <ArrowRight className="ml-2 h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Section>
      </main>
      
      <Footer />
    </>
  );
}

