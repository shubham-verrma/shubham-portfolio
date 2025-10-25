'use client';

import { motion } from 'framer-motion';
import { cn } from '@/utils';

interface SectionHeaderProps {
  overline?: string;
  title: string;
  kicker?: string;
  className?: string;
}

export default function SectionHeader({ overline, title, kicker, className }: SectionHeaderProps) {
  return (
    <motion.div
      className={cn('text-center mb-16', className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {overline && (
        <motion.div
          className="text-sm font-medium text-accent mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          {overline}
        </motion.div>
      )}
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {title}
      </motion.h2>
      {kicker && (
        <motion.p
          className="text-lg text-muted max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {kicker}
        </motion.p>
      )}
    </motion.div>
  );
}
