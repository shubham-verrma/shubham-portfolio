'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            className="text-sm text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            © 2024 Shubham Verma. All rights reserved.
          </motion.div>

          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <a href="#work" className="text-sm text-muted hover:text-text transition-colors">
              Work
            </a>
            <a href="#experience" className="text-sm text-muted hover:text-text transition-colors">
              Experience
            </a>
            <a href="#about" className="text-sm text-muted hover:text-text transition-colors">
              About
            </a>
            <a href="#writing" className="text-sm text-muted hover:text-text transition-colors">
              Writing
            </a>
            <a href="#contact" className="text-sm text-muted hover:text-text transition-colors">
              Contact
            </a>
          </motion.div>

          <motion.div
            className="text-sm text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Built with Next.js, Tailwind, Framer Motion
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
