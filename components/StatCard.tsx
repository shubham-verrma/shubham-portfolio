'use client';

import { motion } from 'framer-motion';
import { cn } from '@/utils';
import { Stat } from '@/types';

interface StatCardProps {
  stat: Stat;
  index: number;
}

export default function StatCard({ stat, index }: StatCardProps) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      <motion.div
        className="text-4xl md:text-5xl font-display font-bold text-white mb-2"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
      >
        {stat.value}
      </motion.div>
      <div className="text-lg font-medium text-text mb-1">{stat.label}</div>
      {stat.description && (
        <div className="text-sm text-muted">{stat.description}</div>
      )}
    </motion.div>
  );
}
