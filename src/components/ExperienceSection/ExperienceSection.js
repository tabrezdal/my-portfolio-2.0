import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUpVariants } from '../../utils/animationVariants';
import { ExperienceData } from '../../Data/ExperienceData';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [photoPosition, setPhotoPosition] = useState('above');
  const rowRefs = useRef([]);

  const toggleAccordion = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleMouseEnter = (i) => {
    setActiveIndex(i);

    const rowEl = rowRefs.current[i];
    if (rowEl) {
      const rect = rowEl.getBoundingClientRect();
      const spaceAbove = rect.top;

      // If less than 220px above, show below
      if (spaceAbove < 220) {
        setPhotoPosition('below');
      } else {
        setPhotoPosition('above');
      }
    }
  };

  return (
    <section className="exp-section" id="experience">
      <div className="exp-section__inner section-container">

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
              <React.Fragment key={exp.id}>
                <div
                  ref={el => rowRefs.current[i] = el}
                  className={`exp-list__row ${isActive ? 'exp-list__row--active' : ''} ${expandedIndex === i ? 'exp-list__row--expanded' : ''}`}
                  onMouseEnter={() => handleMouseEnter(i)}
                  onClick={() => toggleAccordion(i)}
                  role="listitem"
                  tabIndex={0}
                  onFocus={() => handleMouseEnter(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleAccordion(i);
                    }
                  }}
                >
                  {/* Floating photos — position absolute above this row */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        className="exp-row-photos"
                        data-photo-pos={photoPosition}
                        initial={{ opacity: 0, y: photoPosition === 'above' ? 12 : -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: photoPosition === 'above' ? 8 : -8 }}
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

                  {/* 1 — Role content (left, takes remaining space) */}
                  <div className="exp-list__right">
                    <p className="exp-list__role">
                      <strong>{exp.role}</strong>
                      <span className="exp-list__at"> at </span>
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="exp-list__company exp-list__company-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <span className="exp-list__company">{exp.company}</span>
                      )}
                    </p>
                    <p className="exp-list__tags">{exp.skills.join(' | ')}</p>
                  </div>

                  {/* 2 — Date (second from right) */}
                  <span className="exp-list__period">
                    {exp.period}
                    <span className={`exp-list__chevron ${expandedIndex === i ? 'exp-list__chevron--expanded' : ''}`}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </span>
                </div>

                {/* Accordion — directly attached below, no separator */}
                <AnimatePresence>
                  {expandedIndex === i && (
                    <motion.div
                      className="exp-accordion"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="exp-accordion__inner">
                        <ul className="exp-accordion__bullets">
                          {exp.highlights.map((point, pi) => (
                            <li key={pi} className="exp-accordion__bullet">
                              <span className="exp-accordion__bullet-icon">→</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </React.Fragment>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
