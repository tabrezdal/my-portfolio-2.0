import React from "react";
import { motion } from "framer-motion";
import { fadeUpVariants } from "../../../utils/animationVariants";
import "./CaseStudyProblemFrame.css";

const fadeUp = (delay = 0) => ({
  variants: {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0  },
  },
  initial:    "hidden",
  whileInView: "visible",
  viewport:   { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
});

const CaseStudyProblemFrame = ({ project }) => {
  const pf = project?.problemFrame;
  if (!pf) return null;

  const {
    statement,
    statementAccent,
    context,
    painpoints,
    auditItems,
    solutionBridge,
  } = pf;

  return (
    <section className="cpf-root">
      <div className="container">

        {/* ── Top: Statement + Painpoints ── */}
        <div className="row align-items-start">

          {/* Left — headline */}
          <div className="col-lg-5 col-md-5" style={{ marginBottom: 48 }}>
            <motion.div {...fadeUp(0.1)}>
              <p className="cpf-eyebrow">The Problem</p>
              <h2 className="cpf-statement">
                {statement}{" "}
                {statementAccent && (
                  <span className="cpf-statement__quote">
                    {statementAccent}
                  </span>
                )}
              </h2>
              {context && (
                <p className="cpf-context">{context}</p>
              )}
              <div className="cpf-divider" />
            </motion.div>
          </div>

          {/* Right — painpoint cards */}
          <div className="col-lg-6 offset-lg-1 col-md-7">
            <div className="cpf-painpoints">
              {painpoints &&
                painpoints.map((pain, index) => (
                  <motion.div
                    key={index}
                    {...fadeUp(0.15 + index * 0.08)}
                    className="cpf-pain-card"
                  >
                    <span className="cpf-pain-card__index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="cpf-pain-card__body">
                      <p className="cpf-pain-card__title">{pain.title}</p>
                      {pain.desc && (
                        <p className="cpf-pain-card__desc">{pain.desc}</p>
                      )}
                    </div>
                    {pain.severity && (
                      <span
                        className={`cpf-pain-card__severity cpf-pain-card__severity--${pain.severity}`}
                      >
                        {pain.severity}
                      </span>
                    )}
                  </motion.div>
                ))}
            </div>
          </div>
        </div>

        {/* ── UX Audit Panel ── */}
        {auditItems && auditItems.length > 0 && (
          <motion.div
            className="cpf-audit"
            {...fadeUp(0.2)}
          >
            <p className="cpf-audit__label">UX Audit</p>
            <h3 className="cpf-audit__title">
              What was broken before we redesigned
            </h3>
            <p className="cpf-audit__subtitle">
              A heuristic evaluation of the existing system identified these
              critical issues before any design decisions were made.
            </p>

            <div className="cpf-audit-grid">
              {auditItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="cpf-audit-item"
                >
                  <i
                    className={`${item.icon || "fa fa-exclamation-circle"} cpf-audit-item__icon`}
                    aria-hidden="true"
                  />
                  <p className="cpf-audit-item__title">{item.title}</p>
                  <p className="cpf-audit-item__body">{item.body}</p>
                  {item.badge && (
                    <span className="cpf-audit-item__badge">{item.badge}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Solution Bridge ── */}
        {solutionBridge && (
          <motion.div
            className="cpf-solution-bridge"
            {...fadeUp(0.25)}
          >
            <div className="cpf-solution-bridge__icon" aria-hidden="true">
              <i className={solutionBridge.icon || "fa fa-lightbulb-o"} />
            </div>
            <div>
              <p className="cpf-solution-bridge__title">
                {solutionBridge.title || "How we approached it"}
              </p>
              <p className="cpf-solution-bridge__body">
                {solutionBridge.body}
              </p>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default CaseStudyProblemFrame;
