'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-layer">
      <motion.div
        className="h-full bg-gradient-to-r from-accent to-accentHover"
        style={{ width: `${scrollProgress}%` }}
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
      />
    </div>
  );
}
