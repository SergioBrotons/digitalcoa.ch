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
  },
  // Phase 1: Healthcare — Swissdamed Jul 1 ~13 weeks
  {
    key: 'swissdamed-13-weeks-medical-practices',
    slugs: {
      en: 'swissdamed-13-weeks-small-medical-practices',
      fr: 'swissdamed-13-semaines-petits-cabinets-medicaux'
    }
  },
  // Phase 2: Legal — 46-point governance gap
  {
    key: '46-point-gap-small-law-firms',
    slugs: {
      en: '46-point-gap-small-law-firms-ai-governance',
      fr: 'ecart-46-points-petits-cabinets-gouvernance-ia'
    }
  },
  // Phase 3: Finance/WM — CARF + FATF
  {
    key: 'carf-live-wealth-managers',
    slugs: {
      en: 'carf-live-geneva-wealth-managers-ai-governance',
      fr: 'carf-en-vigueur-gestionnaires-patrimoine-genevois-gouvernance-ia'
    }
  },
  // Phase 4: Real Estate — 67% AI adoption
  {
    key: '67-percent-real-estate-ai-governance',
    slugs: {
      en: '67-percent-geneva-real-estate-ai-governance-gap',
      fr: '67-pourcent-agences-immobilieres-genevoises-ia'
    }
  },
  // Phase 5: Consulting — GPAI active
  {
    key: 'gpai-obligations-consulting-firms',
    slugs: {
      en: 'gpai-obligations-active-8-months-small-consulting-firms',
      fr: 'obligations-gpai-actives-8-mois-cabinets-conseil'
    }
  },
  // Phase 6: Cross-vertical synthesis
  {
    key: 'geneva-ai-governance-portfolio',
    slugs: {
      en: '2026-geneva-ai-governance-portfolio-six-verticals',
      fr: 'portefeuille-gouvernance-ia-geneve-2026-six-verticales'
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
