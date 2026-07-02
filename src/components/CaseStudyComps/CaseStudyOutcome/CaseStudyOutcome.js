import React from "react";
import { motion } from "framer-motion";
import { fadeUpVariants, fadeLeftVariants, fadeRightVariants, fadeInVariants } from "../../../utils/animationVariants";

const styles = {
  root: {
    background: "#000",
    padding: "100px 0",
    position: "relative",
    overflow: "hidden",
  },
  glow: {
    position: "absolute",
    top: "-100px",
    left: "-100px",
    width: "500px",
    height: "500px",
    background:
      "radial-gradient(circle, rgba(3,120,184,0.14) 0%, transparent 65%)",
    pointerEvents: "none",
  },
  glowRight: {
    position: "absolute",
    bottom: "-100px",
    right: "-100px",
    width: "400px",
    height: "400px",
    background:
      "radial-gradient(circle, rgba(98,189,252,0.08) 0%, transparent 65%)",
    pointerEvents: "none",
  },
  inner: { position: "relative", zIndex: 1 },
  eyebrow: {
    fontSize: 10,
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: 3,
    color: "#62bdfc",
    marginBottom: 16,
  },
  heading: {
    fontSize: "clamp(28px, 4vw, 48px)",
    fontWeight: 800,
    color: "#fff",
    lineHeight: 1.1,
    letterSpacing: -1,
    maxWidth: 560,
    marginBottom: 16,
  },
  subtext: {
    fontSize: 15,
    color: "rgba(255,255,255,0.45)",
    lineHeight: 1.8,
    maxWidth: 520,
    marginBottom: 64,
  },
  metricsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // was auto-fill
    gap: 1,
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 64,
  },
  metricCell: {
    padding: "40px 32px",
    background: "rgba(255,255,255,0.02)",
    borderRight: "1px solid rgba(255,255,255,0.07)",
    borderBottom: "1px solid rgba(255,255,255,0.07)",
    transition: "background 0.25s ease",
  },
  metricValue: {
    fontSize: "clamp(36px, 5vw, 58px)",
    fontWeight: 800,
    color: "#fff",
    lineHeight: 1,
    letterSpacing: -2,
    marginBottom: 10,
    background: "linear-gradient(90deg, #fff 0%, rgba(255,255,255,0.8) 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  metricValueAccent: {
    background: "linear-gradient(90deg, #0378b8 0%, #62bdfc 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  metricLabel: {
    fontSize: 12,
    color: "rgba(255,255,255,0.4)",
    textTransform: "uppercase",
    letterSpacing: 1,
    fontWeight: 500,
    lineHeight: 1.5,
    margin: 0,
  },
  outcomeStatement: {
    padding: "40px",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 16,
    background: "rgba(255,255,255,0.02)",
    marginBottom: 24,
  },
  outcomeText: {
    fontSize: "clamp(16px, 2vw, 20px)",
    color: "rgba(255,255,255,0.75)",
    lineHeight: 1.7,
    fontWeight: 400,
    fontStyle: "italic",
    margin: 0,
  },
  learningsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", // was auto-fill
    gap: 16,
    marginTop: 40,
  },
  learningCard: {
    padding: "24px",
    border: "1px solid rgba(255,255,255,0.07)",
    borderRadius: 12,
    background: "rgba(255,255,255,0.02)",
  },
  learningNum: {
    fontSize: 10,
    fontWeight: 700,
    color: "#0378b8",
    textTransform: "uppercase",
    letterSpacing: 2,
    marginBottom: 8,
  },
  learningTitle: {
    fontSize: 14,
    fontWeight: 600,
    color: "#fff",
    marginBottom: 6,
  },
  learningBody: {
    fontSize: 12,
    color: "rgba(255,255,255,0.4)",
    lineHeight: 1.7,
    margin: 0,
  },
};

const CaseStudyOutcome = ({ project }) => {
  if (!project) return null;

  const { outcome, metrics, learnings } = project;

  return (
    <section style={styles.root} id="cs-outcome">
      <div style={styles.glow} aria-hidden="true" />
      <div style={styles.glowRight} aria-hidden="true" />

      <div className="container" style={styles.inner}>

        {/* Header */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <p style={styles.eyebrow}>Outcomes</p>
          <h2 style={styles.heading}>The impact we shipped</h2>
          <p style={styles.subtext}>
            Measured results from usability testing, stakeholder reviews,
            and post-launch adoption tracking.
          </p>
        </motion.div>

        {/* Giant metrics grid */}
        {metrics && metrics.length > 0 && (
          <motion.div
            style={styles.metricsGrid}
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                style={styles.metricCell}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(3,120,184,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                }}
              >
                <p
                  style={{
                    ...styles.metricValue,
                    ...(i === 0 ? styles.metricValueAccent : {}),
                  }}
                >
                  {m.value}
                </p>
                <p style={styles.metricLabel}>{m.label}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Outcome statement */}
        {outcome && (
          <motion.div
            style={styles.outcomeStatement}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p style={styles.outcomeText}>"{outcome}"</p>
          </motion.div>
        )}

        {/* Learnings */}
        {learnings && learnings.length > 0 && (
          <>
            <motion.p
              style={{
                fontSize: 10,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: 3,
                color: "#62bdfc",
                marginTop: 64,
                marginBottom: 8,
              }}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Learnings & Reflection
            </motion.p>
            <motion.h3
              style={{
                fontSize: "clamp(20px, 2.5vw, 28px)",
                fontWeight: 700,
                color: "#fff",
                marginBottom: 24,
              }}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              What I'd do differently
            </motion.h3>

            <div style={styles.learningsRow}>
              {learnings.map((l, i) => (
                <motion.div
                  key={i}
                  style={styles.learningCard}
                  variants={fadeUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(3,120,184,0.3)";
                    e.currentTarget.style.background = "rgba(3,120,184,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                  }}
                >
                  <p style={styles.learningNum}>0{i + 1}</p>
                  <p style={styles.learningTitle}>{l.title}</p>
                  <p style={styles.learningBody}>{l.body}</p>
                </motion.div>
              ))}
            </div>
          </>
        )}

      </div>
    </section>
  );
};

export default CaseStudyOutcome;
