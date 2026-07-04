// src/components/ProcessSection/ProcessSection.js

import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { fadeUpVariants, staggerContainerVariants } from '../../utils/animationVariants';
import ProcessSectionData from './ProcessSectionData';
import './ProcessSection.css';

const ProcessSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="process-section" aria-label="How I Work">
      <div className="process-section__inner">
        {/* Section Header */}
        <motion.div
          className="process-header"
          variants={shouldReduceMotion ? {} : fadeUpVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="process-label">{ProcessSectionData.label}</p>
          <h2 className="process-headline">{ProcessSectionData.headline}</h2>
          <p className="process-subtext">{ProcessSectionData.subtext}</p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          className="process-steps"
          variants={shouldReduceMotion ? {} : staggerContainerVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-60px' }}
        >
          {ProcessSectionData.steps.map((step) => (
            <motion.div
              key={step.id}
              className="process-step"
              variants={shouldReduceMotion ? {} : fadeUpVariants}
            >
              <span className="process-step__number">{step.number}</span>
              <h3 className="process-step__title">{step.title}</h3>
              <p className="process-step__description">{step.description}</p>
              <div className="process-step__connector" aria-hidden="true" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
