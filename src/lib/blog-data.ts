export const blogPosts = [
  {
    key: 'personal-cognitive-os',
    slugs: {
      en: 'personal-cognitive-os',
      fr: 'systeme-cognitif-personnel'
    }
  },
  {
    key: 'collective-judgment',
    slugs: {
      en: 'collective-judgment',
      fr: 'architectures-pour-jugement-collectif'
    }
  },
  {
    key: 'oversight-vs-execution',
    slugs: {
      en: 'oversight-vs-execution',
      fr: 'cadres-de-surveillance-separation'
    }
  }
];

export function getPostKeyBySlug(slug: string): string | undefined {
  const post = blogPosts.find(p => p.slugs.en === slug || p.slugs.fr === slug);
  return post?.key;
}

export function getSlugByKeyAndLocale(key: string, locale: string): string {
  const post = blogPosts.find(p => p.key === key);
  return post ? (post.slugs as any)[locale] || key : key;
}
