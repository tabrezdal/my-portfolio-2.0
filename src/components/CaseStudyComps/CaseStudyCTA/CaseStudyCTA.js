import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariants } from '../../../utils/animationVariants';
import './CaseStudyCTA.css';

const CaseStudyCTA = ({ liveUrl, figmaUrl, loomUrl }) => {
  return (
    <motion.section
      className="case-study-cta"
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="case-study-cta__inner">
          <h3 className="case-study-cta__heading">
            Interested in working together?
          </h3>
          <p className="case-study-cta__subtext">
            Let's talk about your project or open role.
          </p>
          <div className="case-study-cta__actions">
            <a
              href="https://calendly.com/tabrez-dal"
              target="_blank"
              rel="noopener noreferrer"
              className="case-study-cta__btn-primary"
            >
              Schedule a Call
            </a>
            <a
              href="mailto:tabrez.dal@gmail.com"
              className="case-study-cta__btn-secondary"
            >
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CaseStudyCTA;
