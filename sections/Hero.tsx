'use client';

import { motion } from 'framer-motion';
import { HeroContent } from '@/types';
import Button from '@/components/Button';
import MorphingText from '@/components/MorphingText';
import ParticleBackground from '@/components/ParticleBackground';

interface HeroProps {
  content: HeroContent;
}

export default function Hero({ content }: HeroProps) {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const morphingTexts = [
    "I build and scale products that move revenue.",
    "I turn ideas into profitable businesses.",
    "I create zero-to-one success stories.",
    "I drive growth through strategic execution.",
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-bg via-layer to-bg"
        animate={{
          background: [
            'linear-gradient(45deg, #000000, #0A0A0A, #000000)',
            'linear-gradient(135deg, #000000, #0F0F0F, #000000)',
            'linear-gradient(225deg, #000000, #141414, #000000)',
            'linear-gradient(315deg, #000000, #0A0A0A, #000000)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tagline with typewriter effect */}
          <motion.div
            className="text-lg text-muted mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {content.tagline}
            </motion.span>
          </motion.div>

          {/* Morphing headline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <MorphingText texts={morphingTexts} />
          </motion.div>

          {/* Sub-copy with staggered animation */}
          <motion.p
            className="text-xl text-muted mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {content.subcopy}
            </motion.span>
          </motion.p>

          {/* CTAs with magnetic effect */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" onClick={scrollToWork}>
                {content.primaryCta}
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="secondary" size="lg">
                {content.secondaryCta}
              </Button>
            </motion.div>
          </motion.div>

          {/* Company logos with floating animation */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 opacity-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {content.companies.map((company, index) => (
              <motion.div
                key={company}
                className="text-sm font-medium text-muted px-4 py-2 rounded-lg bg-layer/50 border border-border/50"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                whileHover={{
                  scale: 1.1,
                  opacity: 1,
                  backgroundColor: 'rgba(124, 58, 237, 0.1)',
                  borderColor: 'rgba(124, 58, 237, 0.3)',
                }}
                animate={{
                  y: [-2, 2, -2],
                }}
                transition={{
                  y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                {company}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-accent/30 rounded-full blur-sm"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-6 h-6 bg-accentHover/20 rounded-full blur-sm"
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-2 h-2 bg-accent/40 rounded-full blur-sm"
        animate={{
          y: [-15, 15, -15],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </section>
  );
}
