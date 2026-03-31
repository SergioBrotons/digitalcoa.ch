import {Header} from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';
import {Section} from '@/components/ui/Section';
import {Link} from '@/navigation';
import {ArrowRight} from 'lucide-react';

interface RegulatoryItem {
  label: string;
  description: string;
}

interface FrameworkItem {
  title: string;
  description: string;
}

interface VerticalLandingPageProps {
  vertical: string;
  locale: 'en' | 'fr';
  hero: {
    badge: string;
    headline: string;
    standfirst: string;
  };
  problem: {
    subhead: string;
    body: string;
  };
  regulatoryItems: RegulatoryItem[];
  frameworkItems?: FrameworkItem[];
  leadMagnet: {
    title: string;
    subtitle: string;
    included: string[];
  };
  cta: {
    headline: string;
    body: string;
    button: string;
  };
  meta: {
    title: string;
    description: string;
  };
}

export default function VerticalLandingPage({
  vertical,
  locale,
  hero,
  problem,
  regulatoryItems,
  frameworkItems,
  leadMagnet,
  cta,
}: VerticalLandingPageProps) {
  const contactPath = locale === 'en' ? '/contact' : '/contact';
  const servicesPath = locale === 'en' ? '/services' : '/prestations' as any;

  return (
    <>
      <Header />

      <main className="flex-grow pt-20">
        {/* Hero */}
        <Section variant="dark" spacing="md">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary mb-8">
              {hero.badge}
            </div>
            <h1 className="text-4xl md:text-6xl font-sans font-bold leading-tight mb-8 tracking-tighter text-white">
              {hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-text-muted font-sans tracking-tight leading-relaxed max-w-2xl mx-auto">
              {hero.standfirst}
            </p>
          </div>
        </Section>

        {/* Problem */}
        <Section variant="gray" spacing="md">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-text-primary tracking-tight">
              {problem.subhead}
            </h2>
            <p className="text-text-muted text-base leading-relaxed">
              {problem.body}
            </p>
          </div>
        </Section>

        {/* Regulatory Context */}
        <Section variant="dark" spacing="md">
          <div className="max-w-3xl mx-auto">
            <div className="border-l-2 border-brand-border pl-8 mb-12">
              <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-8">
                {locale === 'en' ? 'Regulatory Context' : 'Contexte Reglementaire'}
              </p>
              <ul className="space-y-6">
                {regulatoryItems.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-4 font-bold text-xs mt-0.5">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-text-primary text-sm font-bold mb-1">
                        {item.label}
                      </p>
                      <p className="text-text-muted text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Framework / Lead Magnet */}
        <Section variant="gray" spacing="md">
          <div className="max-w-3xl mx-auto">
            <div className="bg-brand-bg border border-brand-border p-8 md:p-12 mb-12">
              <div className="text-[10px] font-bold uppercase tracking-widest text-primary mb-6">
                {locale === 'en' ? 'Framework' : 'Cadre'}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-text-primary tracking-tight">
                {leadMagnet.title}
              </h2>
              <p className="text-text-muted text-sm mb-8 leading-relaxed italic">
                {leadMagnet.subtitle}
              </p>

              <div className="border-t border-brand-border pt-8 mb-8">
                <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted mb-6">
                  {locale === 'en' ? 'Included:' : 'Inclus:'}
                </p>
                <ul className="space-y-3">
                  {leadMagnet.included.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-text-primary">
                      <span className="text-primary mr-3 font-bold text-xs mt-0.5">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={contactPath}
                  className="inline-flex items-center justify-center bg-primary text-brand-bg px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white premium-transition no-radius group"
                >
                  {cta.button}
                  <ArrowRight className="ml-3 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href={servicesPath}
                  className="inline-flex items-center justify-center border-2 border-brand-border text-text-primary px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-primary hover:text-primary premium-transition no-radius"
                >
                  {locale === 'en' ? 'View service tiers' : 'Voir les formules'}
                </Link>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section variant="dark" spacing="md">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">
              {cta.headline}
            </h2>
            <p className="text-text-muted text-base leading-relaxed max-w-xl mx-auto mb-10">
              {cta.body}
            </p>
            <Link
              href={contactPath}
              className="inline-flex items-center justify-center bg-primary text-brand-bg px-12 py-6 text-sm font-bold uppercase tracking-widest hover:bg-white premium-transition no-radius group"
            >
              {cta.button}
              <ArrowRight className="ml-3 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
