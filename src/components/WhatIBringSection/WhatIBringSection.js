// src/components/WhatIBringSection/WhatIBringSection.js

import React from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';
import { fadeUpVariants, staggerContainerVariants } from '../../utils/animationVariants';
import WhatIBringSectionData from './WhatIBringSectionData';
import './WhatIBringSection.css';

const ICONS = {
  search: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  code: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  grid: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
  rocket: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2l2.5-2.5-5.5-5.5-2.5 2.5z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11" />
    </svg>
  ),
  users: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

const WhatIBringSection = () => {
  const shouldReduceMotion = useReducedMotion();

  // Duplicate industries array for seamless infinite scroll
  const duplicatedIndustries = [...WhatIBringSectionData.industries, ...WhatIBringSectionData.industries];

  return (
    <section className="wib-section" aria-label="What I Bring">
      <div className="wib-inner">
        {/* Section Header */}
        <motion.div
          className="wib-header"
          variants={shouldReduceMotion ? {} : fadeUpVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-80px' }}
        >
          <p className="wib-label">{WhatIBringSectionData.label}</p>
          <h2 className="wib-headline">{WhatIBringSectionData.headline}</h2>
          <p className="wib-subtext">{WhatIBringSectionData.subtext}</p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="wib-grid"
          variants={shouldReduceMotion ? {} : staggerContainerVariants}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-60px' }}
        >
          {WhatIBringSectionData.services.map((service) => (
            <motion.div
              key={service.id}
              className="wib-card"
              variants={shouldReduceMotion ? {} : fadeUpVariants}
            >
              <div className="d-flex align-items-center gap-2">
                <div className="wib-card__icon">
                  {ICONS[service.icon]}
                </div>
                <h3 className="wib-card__title mb-3">{service.title}</h3>
              </div>
              <div className="wib-card__separator" />
              <p className="wib-card__description">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Industry Ticker */}
        <div className="wib-ticker">
          <span className="wib-ticker__label">MY INDUSTRIES</span>
          <div className="wib-ticker__track">
            {duplicatedIndustries.map((industry, index) => (
              <span key={`${industry}-${index}`} className="wib-ticker__item">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIBringSection;
