'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { CaseStudy } from '@/types';
import Button from './Button';

interface CaseStudyOverlayProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export default function CaseStudyOverlay({ caseStudy, onClose }: CaseStudyOverlayProps) {
  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Content */}
        <motion.div
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-layer border border-border rounded-2xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="sticky top-0 bg-layer border-b border-border p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-display font-bold text-white mb-2">
                  {caseStudy.title}
                </h2>
                <p className="text-lg text-accent font-medium">{caseStudy.outcome}</p>
              </div>
              <Button variant="ghost" onClick={onClose}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {caseStudy.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium bg-layer2 text-muted rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Problem */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Problem</h3>
              <ul className="space-y-2">
                {caseStudy.problem.map((item, index) => (
                  <li key={index} className="text-text flex items-start">
                    <span className="text-accent mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Strategy */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Strategy</h3>
              <ul className="space-y-2">
                {caseStudy.strategy.map((item, index) => (
                  <li key={index} className="text-text flex items-start">
                    <span className="text-accent mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Execution */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Execution</h3>
              <ul className="space-y-2">
                {caseStudy.execution.map((item, index) => (
                  <li key={index} className="text-text flex items-start">
                    <span className="text-accent mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Result */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Result</h3>
              <ul className="space-y-2">
                {caseStudy.result.map((item, index) => (
                  <li key={index} className="text-text flex items-start">
                    <span className="text-accent mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Behind the Scenes */}
            {caseStudy.behindTheScenes && (
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Behind the Scenes</h3>
                <ul className="space-y-2">
                  {caseStudy.behindTheScenes.map((item, index) => (
                    <li key={index} className="text-muted flex items-start">
                      <span className="text-accent mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
