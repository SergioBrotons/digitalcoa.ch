import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';

export const locales = ['en', 'fr'] as const;

export const routing = defineRouting({
  locales,
  defaultLocale: 'fr',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/about': {
      en: '/about',
      fr: '/a-propos'
    },
    '/services': {
      en: '/services',
      fr: '/prestations'
    },
    '/who-this-is-for': {
      en: '/who-this-is-for',
      fr: '/pour-qui'
    },
    '/contact': {
      en: '/contact',
      fr: '/contact'
    },
    '/insights': {
      en: '/insights',
      fr: '/analyses'
    },
    '/insights/[slug]': {
      en: '/insights/[slug]',
      fr: '/analyses/[slug]'
    },
    '/ai-governance/[vertical]': {
      en: '/ai-governance/[vertical]',
      fr: '/gouvernance-ia/[vertical]'
    },
    '/ai-governance/medical-practices': {
      en: '/ai-governance/medical-practices',
      fr: '/gouvernance-ia/cabinets-medicaux'
    },
    '/ai-governance/small-law-firms': {
      en: '/ai-governance/small-law-firms',
      fr: '/gouvernance-ia/petits-cabinets-avocats'
    },
    '/ai-governance/boutique-wealth-managers': {
      en: '/ai-governance/boutique-wealth-managers',
      fr: '/gouvernance-ia/gestionnaires-patrimoine-boutique'
    },
    '/ai-governance/real-estate-agencies': {
      en: '/ai-governance/real-estate-agencies',
      fr: '/gouvernance-ia/agences-immobilieres'
    },
    '/ai-governance/small-consulting-firms': {
      en: '/ai-governance/small-consulting-firms',
      fr: '/gouvernance-ia/petits-cabinets-conseil'
    },
    '/ai-governance/professional-services': {
      en: '/ai-governance/professional-services',
      fr: '/gouvernance-ia/services-professionnels'
    },
    '/legal': {
      en: '/legal',
      fr: '/mentions-legales'
    },
    '/privacy': {
      en: '/privacy',
      fr: '/confidentialite'
    }
  }
});

export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);
