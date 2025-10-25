'use client';

import { motion } from 'framer-motion';
import { CaseStudy } from '@/types';
import SectionHeader from '@/components/SectionHeader';
import WorkCard from '@/components/WorkCard';
import CaseStudyOverlay from '@/components/CaseStudyOverlay';
import { useState } from 'react';

interface WorkProps {
  caseStudies: CaseStudy[];
}

export default function Work({ caseStudies }: WorkProps) {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="work" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Case Studies"
          title="Work"
          kicker="Zero-to-one launches and growth initiatives that moved the needle"
        />

        {/* Work Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <WorkCard
                caseStudy={caseStudy}
                onClick={() => setSelectedCaseStudy(caseStudy)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Case Study Overlay */}
      <CaseStudyOverlay
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  );
}
