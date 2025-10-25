import { SiteContent } from '@/types';

export async function loadContent(): Promise<SiteContent> {
  const [hero, caseStudies, stats, experience, writing, about, contact] = await Promise.all([
    import('@/content/hero.json'),
    import('@/content/case-studies.json'),
    import('@/content/stats.json'),
    import('@/content/experience.json'),
    import('@/content/writing.json'),
    import('@/content/about.json'),
    import('@/content/contact.json'),
  ]);

  return {
    hero: hero.default,
    caseStudies: caseStudies.default,
    stats: stats.default,
    experience: experience.default,
    writing: writing.default,
    about: about.default,
    contact: contact.default,
  };
}
