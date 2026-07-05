import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import StatsBarData from './StatsBarData';
import useCountUp from '../../hooks/useCountUp';
import { statsReveal, statsStagger } from '../../utils/animationVariants';
import './StatsBar.css';

const StatItem = ({ value, suffix, label, description, shouldStart }) => {
  const count = useCountUp(value, 1500, shouldStart);

  return (
    <motion.div
      className="stat-item"
      variants={statsReveal}
    >
      {/* Corner bracket decoration — top right of each cell */}
      <span className="stat-bracket" aria-hidden="true" />

      {/* Number */}
      <div className="stat-number">
        <span className="stat-count">{count}</span>
        <span className="stat-suffix">{suffix}</span>
      </div>

      {/* Hairline separator */}
      <div className="stat-separator" />

      {/* Label + description */}
      <div className="stat-text">
        <p className="stat-label">{label}</p>
        <p className="stat-description">{description}</p>
      </div>
    </motion.div>
  );
};

const StatsBar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section 
      className="stats-bar"
      ref={ref}
      aria-label="Experience overview"
    >
      <motion.div
        className="stats-bar__inner"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={statsStagger}
      >
        {StatsBarData.map((stat) => (
          <StatItem
            key={stat.id}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            description={stat.description}
            shouldStart={isInView}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default StatsBar;
