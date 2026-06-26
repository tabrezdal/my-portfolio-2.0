import React from "react";
import { motion } from "framer-motion";
import { fadeUpVariants } from "../../../utils/animationVariants";
import "./CaseStudyComplexitySignals.css";

/* ─────────────────────────────────────────
   CaseStudyComplexitySignals
   Renders a grid of "what made this hard"
   signal cards + a closing callout statement.
   CONDITIONAL: returns null if no signals.
───────────────────────────────────────── */
const CaseStudyComplexitySignals = ({ project }) => {
  const { complexitySignals, complexityCallout } = project;

  /* Guard */
  if (!complexitySignals || complexitySignals.length === 0) return null;

  return (
    <section className="ccmp-root">
      <div className="container">

        {/* ── Header ── */}
        <motion.div
          className="ccmp-header"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <p className="ccmp-eyebrow">Why This Was Hard</p>
          <h2 className="ccmp-heading">Complexity signals</h2>
          <p className="ccmp-subtext">
            What set this project apart from standard product design work —
            the technical, systemic, and domain-specific challenges that
            demanded real depth.
          </p>
        </motion.div>

        {/* ── Signal Cards ── */}
        <div className="ccmp-grid">
          {complexitySignals.map((signal, i) => (
            <motion.div
              key={i}
              className="ccmp-card"
              variants={{
                hidden:  { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0  },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 + i * 0.065 }}
            >
              {/* Ghost index watermark */}
              <span className="ccmp-card__watermark" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div className="ccmp-card__icon" aria-hidden="true">
                <i className={signal.icon || "fa fa-bolt"} />
              </div>

              <h4 className="ccmp-card__title">{signal.title}</h4>
              <p className="ccmp-card__body">{signal.body}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Callout bar ── */}
        {complexityCallout && (
          <motion.div
            className="ccmp-callout"
            variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <span className="ccmp-callout__quote" aria-hidden="true">
              "
            </span>
            <p className="ccmp-callout__text">{complexityCallout}</p>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default CaseStudyComplexitySignals;
