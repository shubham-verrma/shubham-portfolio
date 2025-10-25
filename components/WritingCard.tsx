'use client';

import { motion } from 'framer-motion';
import { cn } from '@/utils';
import { WritingItem } from '@/types';

interface WritingCardProps {
  item: WritingItem;
  index: number;
}

export default function WritingCard({ item, index }: WritingCardProps) {
  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ y: -4 }}
    >
      <div className="p-6 rounded-xl bg-layer border border-border group-hover:border-accent/50 transition-all duration-300">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-lg font-medium text-text group-hover:text-accent transition-colors">
            {item.title}
          </h3>
          <span className="text-xs text-muted bg-layer2 px-2 py-1 rounded-md">
            {item.type}
          </span>
        </div>
        <p className="text-sm text-muted mb-3">{item.hook}</p>
        <div className="text-xs text-muted">{item.date}</div>
      </div>
    </motion.a>
  );
}
