"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { X } from 'lucide-react';

export default function CookieBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Common.cookies');

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsOpen(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-brand-surface border-t border-brand-border shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 text-sm text-text-muted leading-relaxed max-w-2xl">
          <p>
            {t('text')}{' '}
            <Link href="/privacy" className="text-primary hover:underline font-bold">
              {t('link')}
            </Link>.
          </p>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <button
            onClick={acceptCookies}
            className="flex-grow md:flex-none bg-primary text-brand-bg px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white premium-transition no-radius"
          >
            {t('accept')}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-3 text-text-muted hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
