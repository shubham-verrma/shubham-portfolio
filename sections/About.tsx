'use client';

import { motion } from 'framer-motion';
import { AboutContent } from '@/types';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';

interface AboutProps {
  content: AboutContent;
}

export default function About({ content }: AboutProps) {
  return (
    <section id="about" className="py-24 bg-layer">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="About"
          title="Who I Am"
          kicker="Understanding my approach to building and scaling products"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Portrait */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-accentHover p-1">
              <div className="w-full h-full rounded-full bg-layer2 flex items-center justify-center">
                <span className="text-2xl font-display font-bold text-white">SV</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-text leading-relaxed">
                {content.description}
              </p>
            </motion.div>

            {/* What I Do / What I Don't Do */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">What I Do</h3>
                <ul className="space-y-2">
                  {content.whatIDo.map((item, index) => (
                    <li key={index} className="text-text flex items-start">
                      <span className="text-accent mr-2 mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-white mb-4">What I Don't Do</h3>
                <ul className="space-y-2">
                  {content.whatIDontDo.map((item, index) => (
                    <li key={index} className="text-text flex items-start">
                      <span className="text-muted mr-2 mt-1">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Download CV */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button variant="secondary">
                Download 1-Pager PDF
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
