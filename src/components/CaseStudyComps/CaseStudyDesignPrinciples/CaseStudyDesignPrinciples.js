import React from "react";
import { motion } from "framer-motion";
import { fadeUpVariants, fadeLeftVariants } from "../../../utils/animationVariants";
import "./CaseStudyDesignPrinciples.css";

const CaseStudyDesignPrinciples = ({ project }) => {
  const dp = project?.designPrinciples;
  if (!dp || !dp.items || dp.items.length === 0) return null;

  const {
    title,
    subtitle,
    items,
    closingQuote,
  } = dp;

  return (
    <section className="cdp-root">
      <div className="container cdp-inner">

        {/* Header */}
        <motion.div
          className="cdp-header"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <p className="cdp-eyebrow">Design Principles</p>
          <h2 className="cdp-title">
            {title || "The thinking behind every decision"}
          </h2>
          {subtitle && (
            <p className="cdp-subtitle">{subtitle}</p>
          )}
        </motion.div>

        {/* Principles list */}
        <div className="cdp-list">
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="cdp-item"
              variants={fadeLeftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.07,
              }}
            >
              {/* Number */}
              <span className="cdp-item__num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Body */}
              <div className="cdp-item__body">
                <h3 className="cdp-item__title">{item.title}</h3>
                {item.desc && (
                  <p className="cdp-item__desc">{item.desc}</p>
                )}
              </div>

              {/* Tag */}
              {item.tag && (
                <span className="cdp-item__tag">{item.tag}</span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Closing quote */}
        {closingQuote && (
          <motion.div
            className="cdp-closing"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="cdp-closing__quote-mark" aria-hidden="true">"</span>
            <p className="cdp-closing__text">{closingQuote}</p>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default CaseStudyDesignPrinciples;
