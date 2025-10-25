'use client';

import { motion } from 'framer-motion';
import { cn } from '@/utils';
import { CaseStudy } from '@/types';

interface WorkCardProps {
  caseStudy: CaseStudy;
  onClick: () => void;
}

export default function WorkCard({ caseStudy, onClick }: WorkCardProps) {
  return (
    <motion.div
      className="group cursor-pointer"
      onClick={onClick}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="relative overflow-hidden rounded-2xl bg-layer border border-border group-hover:border-accent/50 transition-all duration-300">
        {/* Cover Image Placeholder */}
        <div className="aspect-[4/3] bg-gradient-to-br from-layer2 to-layer3 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-display font-semibold text-white mb-1">
              {caseStudy.title}
            </h3>
            <p className="text-sm text-muted">{caseStudy.outcome}</p>
          </div>
        </div>
        
        {/* Tags */}
        <div className="p-4">
          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium bg-layer2 text-muted rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
