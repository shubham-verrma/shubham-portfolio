import Navigation from '@/components/Navigation';
import ProgressBar from '@/components/ProgressBar';
import AdvancedCursorFX from '@/components/AdvancedCursorFX';
import Hero from '@/sections/Hero';
import Work from '@/sections/Work';
import Numbers from '@/sections/Numbers';
import Experience from '@/sections/Experience';
import About from '@/sections/About';
import Writing from '@/sections/Writing';
import Contact from '@/sections/Contact';
import Footer from '@/sections/Footer';
import { loadContent } from '@/utils/content';

export default async function HomePage() {
  const content = await loadContent();

  return (
    <>
      <ProgressBar />
      <Navigation />
      <AdvancedCursorFX />
      
      <main>
        <Hero content={content.hero} />
        <Work caseStudies={content.caseStudies} />
        <Numbers stats={content.stats} />
        <Experience experience={content.experience} />
        <About content={content.about} />
        <Writing writing={content.writing} />
        <Contact content={content.contact} />
      </main>
      
      <Footer />
    </>
  );
}
