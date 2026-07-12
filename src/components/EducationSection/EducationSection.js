import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariants } from '../../utils/animationVariants';
import { EducationData } from '../../Data/EducationData';
import './EducationSection.css';

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
            <h2 className="eyebrow-label">EDUCATION</h2>
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
              <div className="edu-card__header">
                <div className="edu-card__title-block">
                  <h2 className="edu-card__degree">
                    {edu.degree}
                    <span className="edu-card__field"> in {edu.field}</span>
                  </h2>
                  <p className="edu-card__institution">{edu.institution}</p>
                </div>

                <div className="edu-card__meta-block">
                  <div className="edu-card__cgpa">
                    <span className="edu-card__cgpa-value">{edu.cgpa}</span>
                    <span className="edu-card__cgpa-max"> / {edu.cgpaMax}</span>
                    <span className="edu-card__cgpa-label"> CGPA</span>
                  </div>
                  <p className="edu-card__period">
                    {edu.period} · {edu.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;
