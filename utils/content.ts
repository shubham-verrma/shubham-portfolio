import { SiteContent, HeroContent, CaseStudy, Stat, ExperienceItem, WritingItem, AboutContent, ContactContent } from '@/types';

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
    hero: hero.default as HeroContent,
    caseStudies: caseStudies.default as CaseStudy[],
    stats: stats.default as Stat[],
    experience: experience.default as ExperienceItem[],
    writing: writing.default as WritingItem[],
    about: about.default as AboutContent,
    contact: contact.default as ContactContent,
  };
}
