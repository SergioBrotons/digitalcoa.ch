import {useTranslations} from 'next-intl';
import {Link} from '@/navigation';
import {Container} from '@/components/ui/Container';

export const Footer = () => {
  const t = useTranslations('Common.footer');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-bg border-t border-brand-border py-16 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center text-text-primary hover:text-primary premium-transition mb-4">
              <img 
                src="/media/digitalcoa-logo-1.svg" 
                alt="DigitalCoa.ch Logo" 
                className="h-12 w-auto" 
              />
            </Link>
            <p className="text-text-muted max-w-sm text-sm leading-relaxed">
              {t('tagline')}
            </p>
          </div>
          
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-text-muted mb-6">
              Presence
            </h4>
            <ul className="space-y-4 text-sm text-text-primary">
              <li>{t('location')}</li>
              <li className="text-primary font-medium">{t('confidential')}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-text-muted mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-sm text-text-primary">
              <li>
                <Link href="/contact" className="hover:text-primary premium-transition">
                  Get in touch
                </Link>
              </li>
              <li>
                <a href="https://linkedin.com/in/sergiobrotons" target="_blank" rel="noopener noreferrer" className="hover:text-primary premium-transition">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center text-xs text-text-muted">
          <p>{t('rights', {year})}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/legal" className="hover:text-text-primary premium-transition">Legal Notice</Link>
            <Link href="/privacy" className="hover:text-text-primary premium-transition">Privacy Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
