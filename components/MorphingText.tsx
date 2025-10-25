'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface MorphingTextProps {
  texts: string[];
  className?: string;
}

export default function MorphingText({ texts, className }: MorphingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.h1
          key={currentIndex}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          exit={{ opacity: 0, y: -50, rotateX: 90 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {texts[currentIndex]}
        </motion.h1>
      </AnimatePresence>
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accentHover/30 to-accent/20 blur-xl -z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </div>
  );
}
