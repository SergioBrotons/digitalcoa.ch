"use client";

import React, {useState} from 'react';
import {useTranslations, useLocale} from 'next-intl';
import {Link, usePathname} from '@/navigation';
import {Container} from '@/components/ui/Container';
import {Menu, X} from 'lucide-react';

export const Header = () => {
  const t = useTranslations('Common.nav');
  const locale = useLocale();
  const pathname = usePathname();
  const nextLocale = locale === 'en' ? 'fr' : 'en';
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-border h-20 flex items-center">
      <Container className="flex h-full items-center justify-between">
        <Link href="/" className="flex items-center text-text-primary hover:text-primary premium-transition">
          <img 
            src="/media/digitalcoa-logo-1.svg" 
            alt="DigitalCoa.ch Logo" 
            className="h-14 w-auto" 
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/services" className="text-sm font-medium text-text-muted hover:text-primary premium-transition">
            {t('services')}
          </Link>
          <Link href="/who-this-is-for" className="text-sm font-medium text-text-muted hover:text-primary premium-transition">
            {t('who')}
          </Link>
          <Link href="/about" className="text-sm font-medium text-text-muted hover:text-primary premium-transition">
            {t('about')}
          </Link>
          <Link href="/insights" className="text-sm font-medium text-text-muted hover:text-primary premium-transition">
            {t('insights')}
          </Link>
          
          <div className="h-4 w-px bg-brand-border mx-2"></div>
          
          {/* @ts-expect-error Next-intl dynamic active pathname handling */}
          <Link href={pathname} locale={nextLocale} className="text-xs font-bold text-text-muted hover:text-primary premium-transition uppercase tracking-widest px-2">
            {nextLocale}
          </Link>
          
          <Link 
            href="/contact" 
            className="bg-primary text-brand-bg px-6 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-white premium-transition no-radius"
          >
            {t('contact')}
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-text-primary p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 top-20 bg-brand-bg md:hidden premium-transition z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col p-8 space-y-8 h-full">
          <Link onClick={toggleMenu} href="/services" className="text-2xl font-bold text-text-primary border-b border-brand-border pb-4">{t('services')}</Link>
          <Link onClick={toggleMenu} href="/who-this-is-for" className="text-2xl font-bold text-text-primary border-b border-brand-border pb-4">{t('who')}</Link>
          <Link onClick={toggleMenu} href="/about" className="text-2xl font-bold text-text-primary border-b border-brand-border pb-4">{t('about')}</Link>
          <Link onClick={toggleMenu} href="/insights" className="text-2xl font-bold text-text-primary border-b border-brand-border pb-4">{t('insights')}</Link>
          
          <div className="flex items-center justify-between pt-8">
            <Link 
              onClick={toggleMenu}
              /* @ts-expect-error Next-intl dynamic active pathname handling */
              href={pathname} 
              locale={nextLocale} 
              className="text-sm font-bold text-primary uppercase tracking-[0.2em]"
            >
              Switch to {nextLocale}
            </Link>
          </div>

          <Link 
            onClick={toggleMenu}
            href="/contact" 
            className="mt-auto bg-primary text-brand-bg w-full py-6 text-center text-sm font-bold uppercase tracking-widest no-radius"
          >
            {t('contact')}
          </Link>
        </nav>
      </div>
    </header>
  );
};

