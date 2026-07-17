import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariants, staggerContainerVariants } from '../../utils/animationVariants';
import { EducationData } from '../../Data/EducationData';
import './EducationSection.css';

const GraduationCapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 3L2 8.5L12 14L22 8.5L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 8.5V15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const HighlightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EducationSection = () => {
  const edu = EducationData;

  return (
    <section className="edu-section" id="education">
      <div className="section-container">
        <div className="edu-section__inner">

          {/* Left — label */}
          <motion.div
            className="edu-section__label"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="edu-section__icon" aria-hidden="true">
              <GraduationCapIcon />
            </span>
            <p className="edu-eyebrow">Academic Background</p>
            <h2 className="edu-section__title">Education</h2>
          </motion.div>

          {/* Right — content */}
          <motion.div
            className="edu-section__content"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="edu-card">
              <span className="edu-card__accent" aria-hidden="true" />

              <div className="edu-card__header">
                <div className="edu-card__title-block">
                  <h3 className="edu-card__degree">
                    {edu.degree}
                    <span className="edu-card__field"> in {edu.field}</span>
                  </h3>
                  <p className="edu-card__institution">{edu.institution}</p>
                  <p className="edu-card__period">
                    {edu.period} <span className="edu-card__dot" aria-hidden="true">·</span> {edu.location}
                  </p>
                </div>

                <div className="edu-card__cgpa">
                  <span className="edu-card__cgpa-value">{edu.cgpa}</span>
                  <span className="edu-card__cgpa-max">/{edu.cgpaMax}</span>
                  <span className="edu-card__cgpa-label">CGPA</span>
                </div>
              </div>

              {edu.highlights && edu.highlights.length > 0 && (
                <motion.ul
                  className="edu-card__highlights"
                  variants={staggerContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {edu.highlights.map((point, i) => (
                    <motion.li key={i} className="edu-card__highlight" variants={fadeUpVariants}>
                      <span className="edu-card__highlight-icon" aria-hidden="true">
                        <HighlightIcon />
                      </span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;
