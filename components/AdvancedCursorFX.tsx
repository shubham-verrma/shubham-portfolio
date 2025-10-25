'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AdvancedCursorFX() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const scale = useTransform(springX, [-300, 300], [0.8, 1.2]);
  const rotate = useTransform(springX, [-300, 300], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(false);
      }
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('mouseover', handleMouseOver);
      window.addEventListener('mouseout', handleMouseOut);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
        }}
        animate={{
          backgroundColor: isHovering ? '#7C3AED' : '#E5E7EB',
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-full h-full rounded-full bg-current" />
      </motion.div>

      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 pointer-events-none z-40"
        style={{
          x: useTransform(springX, (value) => value - 64),
          y: useTransform(springY, (value) => value - 64),
          scale,
          rotate,
        }}
        animate={{
          background: isHovering
            ? [
                'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(109, 40, 217, 0.1) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)',
              ]
            : 'radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 70%)',
        }}
        transition={{ duration: 2, repeat: isHovering ? Infinity : 0 }}
      />

      {/* Click ripple effect */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 w-20 h-20 pointer-events-none z-45"
          style={{
            x: useTransform(springX, (value) => value - 40),
            y: useTransform(springY, (value) => value - 40),
          }}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="w-full h-full rounded-full border-2 border-accent" />
        </motion.div>
      )}

      {/* Magnetic field effect */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 pointer-events-none z-30"
        style={{
          x: useTransform(springX, (value) => value - 192),
          y: useTransform(springY, (value) => value - 192),
        }}
        animate={{
          background: isHovering
            ? [
                'radial-gradient(circle, rgba(124, 58, 237, 0.03) 0%, rgba(109, 40, 217, 0.02) 50%, transparent 100%)',
                'radial-gradient(circle, rgba(109, 40, 217, 0.03) 0%, rgba(124, 58, 237, 0.02) 50%, transparent 100%)',
                'radial-gradient(circle, rgba(124, 58, 237, 0.03) 0%, rgba(109, 40, 217, 0.02) 50%, transparent 100%)',
              ]
            : 'radial-gradient(circle, rgba(124, 58, 237, 0.01) 0%, transparent 100%)',
        }}
        transition={{ duration: 3, repeat: isHovering ? Infinity : 0 }}
      />
    </>
  );
}
