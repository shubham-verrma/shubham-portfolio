'use client';

import { motion } from 'framer-motion';
import { WritingItem } from '@/types';
import SectionHeader from '@/components/SectionHeader';
import WritingCard from '@/components/WritingCard';

interface WritingProps {
  writing: WritingItem[];
}

export default function Writing({ writing }: WritingProps) {
  return (
    <section id="writing" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          overline="Thoughts"
          title="Writing"
          kicker="Essays and insights on product strategy, operations, and growth"
        />

        {/* Writing Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {writing.map((item, index) => (
            <WritingCard key={item.id} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
