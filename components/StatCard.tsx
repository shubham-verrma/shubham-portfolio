'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Stat } from '@/types';

interface StatCardProps {
  stat: Stat;
  index: number;
}

export default function StatCard({ stat, index }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [count, setCount] = useState(0);

  // Extract numeric value from stat.value
  const numericValue = parseFloat(stat.value.replace(/[^\d.]/g, ''));
  const suffix = stat.value.replace(/[\d.]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepValue = numericValue / steps;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setCount(Math.min(stepValue * currentStep, numericValue));
        
        if (currentStep >= steps) {
          clearInterval(timer);
          setCount(numericValue);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, numericValue]);

  return (
    <motion.div
      ref={ref}
      className="text-center group cursor-pointer"
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Animated background */}
      <motion.div
        className="relative p-8 rounded-2xl bg-gradient-to-br from-layer via-layer2 to-layer3 border border-border group-hover:border-accent/50 transition-all duration-500"
        whileHover={{
          background: [
            'linear-gradient(45deg, rgba(124, 58, 237, 0.05), rgba(109, 40, 217, 0.05))',
            'linear-gradient(135deg, rgba(109, 40, 217, 0.05), rgba(124, 58, 237, 0.05))',
            'linear-gradient(225deg, rgba(124, 58, 237, 0.05), rgba(109, 40, 217, 0.05))',
            'linear-gradient(315deg, rgba(109, 40, 217, 0.05), rgba(124, 58, 237, 0.05))',
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {/* Floating particles */}
        <motion.div
          className="absolute top-2 right-2 w-2 h-2 bg-accent/30 rounded-full"
          animate={{
            y: [-5, 5, -5],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-2 left-2 w-1 h-1 bg-accentHover/40 rounded-full"
          animate={{
            y: [5, -5, 5],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />

        {/* Main number with glow effect */}
        <motion.div
          className="relative"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <motion.div
            className="text-4xl md:text-5xl font-display font-bold text-white mb-2"
            animate={{
              textShadow: isInView
                ? [
                    '0 0 20px rgba(124, 58, 237, 0.3)',
                    '0 0 40px rgba(124, 58, 237, 0.5)',
                    '0 0 20px rgba(124, 58, 237, 0.3)',
                  ]
                : '0 0 0px rgba(124, 58, 237, 0)',
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {Math.floor(count)}{suffix}
          </motion.div>
          
          {/* Glow background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accentHover/20 blur-xl -z-10"
            animate={{
              scale: isInView ? [0.8, 1.2, 0.8] : 0.8,
              opacity: isInView ? [0.3, 0.6, 0.3] : 0,
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Label with typewriter effect */}
        <motion.div
          className="text-lg font-medium text-text mb-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          {stat.label}
        </motion.div>

        {/* Description */}
        {stat.description && (
          <motion.div
            className="text-sm text-muted"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            {stat.description}
          </motion.div>
        )}

        {/* Hover glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/10 to-accentHover/10 opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}