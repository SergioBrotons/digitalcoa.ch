import {MetadataRoute} from 'next';
import {blogPosts} from '@/lib/blog-data';

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

  // Add individual insight post pages
  const postRoutes = locales.flatMap((locale) =>
    blogPosts.map((post) => {
      const slug = post.slugs[locale as keyof typeof post.slugs] || post.slugs.en;
      return {
        url: `${baseUrl}/${locale}/insights/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      };
    })
  );

  return [...routes, ...postRoutes];
}
