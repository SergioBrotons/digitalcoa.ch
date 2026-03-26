import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import '../globals.css';
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});

  const baseUrl = 'https://www.digitalcoa.ch';
  const alternateEn = `${baseUrl}/en`;
  const alternateFr = `${baseUrl}`;

  return {
    metadataBase: new URL(baseUrl),
    title: {
      template: `%s | ${t('Home.title')}`,
      default: t('Home.title'),
    },
    description: t('Home.description'),
    keywords: t.raw('Common.keywords') as string[],
    authors: [{ name: 'Sergio Brotons' }],
    creator: 'Sergio Brotons',
    publisher: 'DigitalCoa.ch',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: locale === 'en' ? alternateEn : alternateFr,
      languages: {
        'en': alternateEn,
        'fr': alternateFr,
      },
    },
    openGraph: {
      title: t('Home.title'),
      description: t('Home.description'),
      url: baseUrl,
      siteName: 'DigitalCoa.ch',
      locale: locale === 'en' ? 'en_US' : 'fr_CH',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'DigitalCoa.ch - Executive Decision Architecture',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('Home.title'),
      description: t('Home.description'),
      creator: '@sergiobrotons',
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const messages = await getMessages();
  const t = await getTranslations({locale, namespace: 'Metadata.Common.schema'});

  // Localized SEO / AEO / GEO Schema Structure
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://www.digitalcoa.ch/#organization',
      name: 'DigitalCoa.ch',
      description: t('orgDesc'),
      alternateName: 'Sergio Brotons',
      url: 'https://www.digitalcoa.ch/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.digitalcoa.ch/wp-content/uploads/2026/03/digitalcoa-favicon.svg',
        width: 32,
        height: 32
      },
      sameAs: [
        'https://x.com/sergiobrotons',
        'https://www.linkedin.com/in/sergiobrotons/',
        'https://www.instagram.com/sergiobrotons/'
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://www.digitalcoa.ch/#website',
      url: 'https://www.digitalcoa.ch/',
      name: 'DigitalCoa.ch',
      description: t('siteDesc'),
      author: {
        '@type': 'Person',
        name: 'Sergio Brotons',
        jobTitle: t('jobTitle'),
        description: t('personDesc')
      }
    }
  ];

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col no-radius">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
