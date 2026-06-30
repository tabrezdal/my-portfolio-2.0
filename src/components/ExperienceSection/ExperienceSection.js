import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUpVariants } from '../../utils/animationVariants';
import { ExperienceData } from '../../Data/ExperienceData';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="exp-section" id="experience">
      <div className="exp-section__inner">

        <motion.div
          className="exp-section__heading"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="eyebrow-label exp-section__eyebrow">EXPERIENCE</p>
          <h2 className="exp-section__title">So Far, So Good</h2>
        </motion.div>

        <div
          className="exp-list"
          role="list"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {ExperienceData.map((exp, i) => {
            const isActive = activeIndex === i;

            // Photos for this row: all thumbnails for this role
            const rowPhotos = exp.thumbnails.map(t => t.src);

            return (
              <div
                key={exp.id}
                className={`exp-list__row ${isActive ? 'exp-list__row--active' : ''}`}
                onMouseEnter={() => setActiveIndex(i)}
                role="listitem"
                tabIndex={0}
                onFocus={() => setActiveIndex(i)}
              >
                {/* Floating photos — position absolute above this row */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="exp-row-photos"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {rowPhotos.map((src, pi) => (
                        <div
                          key={pi}
                          className="exp-row-photo"
                          style={{ '--pi': pi, '--ptotal': rowPhotos.length }}
                        >
                          <img src={src} alt="" loading="lazy" width={160} height={110} />
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                <span className="exp-list__period">{exp.period}</span>
                <div className="exp-list__right">
                  <p className="exp-list__role">
                    <strong>{exp.role}</strong>
                    <span className="exp-list__at"> at </span>
                    <span className="exp-list__company">{exp.company}</span>
                  </p>
                  <p className="exp-list__tags">{exp.skills.join(' | ')}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
