import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUpVariants } from '../../utils/animationVariants';
import { ExperienceData, EducationData } from '../../Data/ExperienceData';
import './ExperienceSection.css';

// 4 fixed photo slots — varied sizes and subtle rotations
const SLOTS = [
  { width: 210, height: 270, rotate: -6 },
  { width: 190, height: 250, rotate:  2 },
  { width: 215, height: 260, rotate: -3 },
  { width: 195, height: 255, rotate:  5 },
];

const ExperienceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExp = ExperienceData[activeIndex];

  // Always fill 4 slots — repeat thumbnails if fewer than 4
  const photos = Array.from({ length: 4 }, (_, i) =>
    activeExp.thumbnails[i % activeExp.thumbnails.length]
  );

  return (
    <section className="exp-section" id="experience">
      <div className="exp-section__inner">

        {/* Heading */}
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

        {/* Photo strip */}
        <div className="exp-photo-strip" aria-hidden="true">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="exp-photo-strip__inner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {photos.map((src, i) => (
                <motion.div
                  key={i}
                  className="exp-photo-frame"
                  style={{
                    width: SLOTS[i].width,
                    height: SLOTS[i].height,
                    rotate: SLOTS[i].rotate,
                  }}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    width={SLOTS[i].width}
                    height={SLOTS[i].height}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Role list */}
        <div className="exp-list" role="list">
          {ExperienceData.map((exp, i) => (
            <div
              key={exp.id}
              className={`exp-list__row ${i === activeIndex ? 'exp-list__row--active' : ''}`}
              onMouseEnter={() => setActiveIndex(i)}
              onFocus={() => setActiveIndex(i)}
              tabIndex={0}
              role="listitem"
              aria-current={i === activeIndex ? 'true' : undefined}
            >
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
          ))}

          {/* Education — no image swap */}
          <div className="exp-list__row exp-list__row--edu" role="listitem">
            <span className="exp-list__period">{EducationData.period}</span>
            <div className="exp-list__right">
              <p className="exp-list__role">
                <strong>{EducationData.degree}</strong>
                <span className="exp-list__at"> · </span>
                <span className="exp-list__company">{EducationData.institution}</span>
              </p>
              <p className="exp-list__tags">CGPA {EducationData.cgpa}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
