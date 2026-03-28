import {MetadataRoute} from 'next';

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.NEXT_PUBLIC_APP_URL === 'https://digitalcoa.ch';

  return {
    rules: {
      userAgent: '*',
      ...(isProduction
        ? {
            allow: '/',
            disallow: ['/api/', '/_next/'],
          }
        : {
            disallow: '/',
          }),
    },
    sitemap: `${process.env.NEXT_PUBLIC_APP_URL || 'https://digitalcoa.ch'}/sitemap.xml`,
  };
}
