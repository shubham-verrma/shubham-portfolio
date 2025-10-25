export interface HeroContent {
  tagline: string;
  headline: string;
  subcopy: string;
  primaryCta: string;
  secondaryCta: string;
  companies: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  outcome: string;
  tags: string[];
  coverImage: string;
  problem: string[];
  strategy: string[];
  execution: string[];
  result: string[];
  behindTheScenes?: string[];
  images?: string[];
}

export interface Stat {
  value: string;
  label: string;
  description?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  impact: string;
  bullets: string[];
  companyUrl?: string;
  pressUrl?: string;
  linkedinUrl?: string;
  skills: string[];
  tools: string[];
}

export interface WritingItem {
  id: string;
  title: string;
  hook: string;
  date: string;
  url: string;
  type: 'essay' | 'linkedin' | 'blog';
}

export interface AboutContent {
  description: string;
  whatIDo: string[];
  whatIDontDo: string[];
  portrait: string;
}

export interface ContactContent {
  primaryCta: string;
  email: string;
  linkedin: string;
  whatsapp: string;
  calendly: string;
}

export interface SiteContent {
  hero: HeroContent;
  caseStudies: CaseStudy[];
  stats: Stat[];
  experience: ExperienceItem[];
  writing: WritingItem[];
  about: AboutContent;
  contact: ContactContent;
}
