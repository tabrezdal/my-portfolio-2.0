import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariants } from '../../../utils/animationVariants';
import Button from '../../../sharedComponents/Button/Button';
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
            <Button
              href="https://calendly.com/tabrez-dal"
              label="Schedule a Call"
              variant="filled"
              theme="brand"
              size="md"
              target="_blank"
            />
            <Button
              href="mailto:tabrez.dal@gmail.com"
              label="Send an Email"
              variant="outlined"
              theme="dark"
              size="md"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CaseStudyCTA;
