import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import StatsBarData from './StatsBarData';
import useCountUp from '../../hooks/useCountUp';
import { statsReveal, statsStagger } from '../../utils/animationVariants';
import './StatsBar.css';

const StatItem = ({ value, suffix, label, shouldStart }) => {
  const count = useCountUp(value, 1500, shouldStart);

  return (
    <motion.div
      className="stats-bar__item"
      variants={statsReveal}
    >
      <div className="stats-bar__number">
        {count}{suffix}
      </div>
      <p className="stats-bar__label">{label}</p>
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
        className="stats-bar__container"
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
            shouldStart={isInView}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default StatsBar;
