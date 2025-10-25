'use client';

import { motion } from 'framer-motion';
import { Stat } from '@/types';
import SectionHeader from '@/components/SectionHeader';
import StatCard from '@/components/StatCard';

interface NumbersProps {
  stats: Stat[];
}

export default function Numbers({ stats }: NumbersProps) {
  return (
    <section className="py-24 bg-layer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Impact"
          title="Numbers"
          kicker="Metrics that matter from real projects and launches"
        />

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
