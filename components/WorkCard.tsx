'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { CaseStudy } from '@/types';

interface WorkCardProps {
  caseStudy: CaseStudy;
  onClick: () => void;
  index: number;
}

export default function WorkCard({ caseStudy, onClick, index }: WorkCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="group cursor-pointer perspective-1000"
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-layer via-layer2 to-layer3 border border-border group-hover:border-accent/50 transition-all duration-500"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accentHover/5"
          animate={{
            background: isHovered
              ? [
                  'linear-gradient(45deg, rgba(124, 58, 237, 0.1), rgba(109, 40, 217, 0.05))',
                  'linear-gradient(135deg, rgba(109, 40, 217, 0.1), rgba(124, 58, 237, 0.05))',
                  'linear-gradient(225deg, rgba(124, 58, 237, 0.1), rgba(109, 40, 217, 0.05))',
                  'linear-gradient(315deg, rgba(109, 40, 217, 0.1), rgba(124, 58, 237, 0.05))',
                ]
              : 'linear-gradient(45deg, rgba(124, 58, 237, 0.05), rgba(109, 40, 217, 0.05))',
          }}
          transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
        />

        {/* Cover Image with parallax effect */}
        <div className="aspect-[4/3] relative overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-layer2 via-accent/10 to-layer3"
            animate={{
              background: isHovered
                ? [
                    'linear-gradient(45deg, #0A0A0A, rgba(124, 58, 237, 0.2), #141414)',
                    'linear-gradient(135deg, #141414, rgba(109, 40, 217, 0.2), #0A0A0A)',
                    'linear-gradient(225deg, #0A0A0A, rgba(124, 58, 237, 0.2), #141414)',
                  ]
                : 'linear-gradient(45deg, #0A0A0A, #141414)',
            }}
            transition={{ duration: 3, repeat: isHovered ? Infinity : 0 }}
          />
          
          {/* Floating elements */}
          <motion.div
            className="absolute top-4 right-4 w-8 h-8 bg-accent/20 rounded-full blur-sm"
            animate={{
              y: isHovered ? [-10, 10, -10] : 0,
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
          />
          <motion.div
            className="absolute bottom-4 left-4 w-6 h-6 bg-accentHover/20 rounded-full blur-sm"
            animate={{
              y: isHovered ? [10, -10, 10] : 0,
              scale: isHovered ? [1, 1.3, 1] : 1,
            }}
            transition={{ duration: 2.5, repeat: isHovered ? Infinity : 0 }}
          />

          {/* Content overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <motion.h3
              className="text-xl font-display font-semibold text-white mb-1"
              animate={{ y: isHovered ? -5 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {caseStudy.title}
            </motion.h3>
            <motion.p
              className="text-sm text-muted"
              animate={{ y: isHovered ? -3 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {caseStudy.outcome}
            </motion.p>
          </div>
        </div>
        
        {/* Tags with staggered animation */}
        <div className="p-4">
          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-layer2 text-muted rounded-full border border-border/50"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: tagIndex * 0.1, duration: 0.3 }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: 'rgba(124, 58, 237, 0.1)',
                  borderColor: 'rgba(124, 58, 237, 0.3)',
                  color: '#7C3AED',
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/10 to-accentHover/10 opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}