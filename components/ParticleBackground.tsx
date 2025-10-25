'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface ParticleProps {
  x: number;
  y: number;
  size: number;
  delay: number;
}

function Particle({ x, y, size, delay }: ParticleProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <motion.div
      className="absolute rounded-full bg-gradient-to-r from-accent/20 to-accentHover/20"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{
        duration: 2,
        ease: 'easeOut',
      }}
      whileHover={{
        scale: 1.5,
        opacity: 0.8,
        transition: { duration: 0.3 },
      }}
    />
  );
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState<ParticleProps[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: ParticleProps[] = [];
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * (containerRef.current?.clientWidth || 1920),
          y: Math.random() * (containerRef.current?.clientHeight || 1080),
          size: Math.random() * 4 + 2,
          delay: Math.random() * 3,
        });
      }

      setParticles(newParticles);
    };

    generateParticles();
    window.addEventListener('resize', generateParticles);
    return () => window.removeEventListener('resize', generateParticles);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
    >
      {particles.map((particle, index) => (
        <Particle key={index} {...particle} />
      ))}
    </div>
  );
}
