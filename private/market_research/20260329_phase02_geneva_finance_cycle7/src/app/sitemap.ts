import {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://digitalcoa.ch';
  const locales = ['en', 'fr'];
  const pages = ['', 'about', 'services', 'who-this-is-for', 'contact', 'insights'];

  const routes = locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page ? `/${page}` : ''}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: page === '' ? 1 : 0.8,
    }))
  );

  return routes;
}
