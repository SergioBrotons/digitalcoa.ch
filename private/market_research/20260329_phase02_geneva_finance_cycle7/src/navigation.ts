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
