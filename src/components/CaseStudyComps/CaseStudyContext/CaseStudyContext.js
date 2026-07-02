import React from "react";
import { motion } from "framer-motion";
import "./CaseStudyContext.css";

/* ─────────────────────────────────────────
   Deployment status → dot class + label
───────────────────────────────────────── */
const STATUS_MAP = {
  Live:        { cls: "cctx-status-dot--live",        label: "Live in Production"          },
  Production:  { cls: "cctx-status-dot--production",  label: "Shipped to Production"       },
  Concept:     { cls: "cctx-status-dot--concept",     label: "Concept / Prototype"         },
  Prototype:   { cls: "cctx-status-dot--prototype",   label: "Prototype"                   },
  Archived:    { cls: "cctx-status-dot--archived",    label: "Archived / Retired"          },
  Delivered:   { cls: "cctx-status-dot--delivered",   label: "Delivered to Client"         },
  Milestone:   { cls: "cctx-status-dot--milestone",   label: "Major Milestone Reached"     },
};

/* Shared animation helper */
const fadeUp = (delay = 0) => ({
  variants: {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0  },
  },
  initial:     "hidden",
  whileInView: "visible",
  viewport:    { once: true },
  transition:  { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
});

/* ─────────────────────────────────────────
   CaseStudyContext
───────────────────────────────────────── */
const CaseStudyContext = ({ project }) => {
  if (!project) return null;

  const {
    mandate,
    shortDescription,
    domain,
    engagementType,
    clientGeography,
    teamComposition,
    deploymentStatus,
    totalScreens,
    liveUrl,
    tools,
    duration,
    year,
  } = project;

  /* Status config — fall back gracefully */
  const status = STATUS_MAP[deploymentStatus] || {
    cls:   "cctx-status-dot--delivered",
    label: deploymentStatus || "Delivered",
  };

  /* Build meta rows — only include rows that have data */
  const metaRows = [
    clientGeography  && { label: "Client Market",    value: clientGeography  },
    engagementType   && { label: "Engagement",       value: engagementType   },
    teamComposition  && { label: "Team",             value: teamComposition  },
    duration         && { label: "Duration",         value: duration         },
    year             && { label: "Year",             value: String(year)     },
  ].filter(Boolean);

  /* Tools — cap at 6 visible pills */
  const visibleTools  = tools ? tools.slice(0, 6)  : [];
  const extraToolCount = tools ? Math.max(0, tools.length - 6) : 0;

  return (
    <section className="cctx-root" id="cs-context">
      <div className="container">
        <div className="row align-items-start">

          {/* ════════════════════════════════
              LEFT — Brief & Mandate
          ════════════════════════════════ */}
          <motion.div
            className="col-lg-7 col-md-12"
            {...fadeUp(0.1)}
          >
            <p className="cctx-eyebrow">Project Brief</p>

            {/* The mandate — what was asked */}
            {(mandate || shortDescription) && (
              <h2 className="cctx-mandate">
                {mandate || shortDescription}
              </h2>
            )}

            <div className="cctx-divider" />

            {/* Context paragraph — only show if mandate is separate from description */}
            {mandate && shortDescription && (
              <p className="cctx-context">{shortDescription}</p>
            )}

            {/* Domain pill */}
            {domain && (
              <div>
                <span className="cctx-domain-pill">
                  <i className="fa fa-tag" aria-hidden="true" />
                  {domain}
                </span>
              </div>
            )}

            {/* Live URL */}
            {liveUrl && (
              <a
                href={liveUrl}
                className="cctx-live-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live Project
                &nbsp;
                <i className="fa fa-external-link" aria-hidden="true" />
              </a>
            )}
          </motion.div>

          {/* ════════════════════════════════
              RIGHT — Identity Card
          ════════════════════════════════ */}
          <motion.div
            className="col-lg-4 offset-lg-1 col-md-12"
            {...fadeUp(0.25)}
          >
            <div className="cctx-card">

              {/* Status banner */}
              <div className="cctx-status-banner">
                <span
                  className={`cctx-status-dot ${status.cls}`}
                  aria-hidden="true"
                />
                <span className="cctx-status-label">{status.label}</span>
              </div>

              {/* Screen count — prominent */}
              {totalScreens && (
                <div className="cctx-screens-hero">
                  <span className="cctx-screens-hero__count">
                    {totalScreens}
                  </span>
                  <span className="cctx-screens-hero__label">
                    screens designed
                  </span>
                </div>
              )}

              {/* Meta rows */}
              {metaRows.length > 0 && (
                <div className="cctx-meta-rows">
                  {metaRows.map((row, i) => (
                    <div className="cctx-meta-row" key={i}>
                      <span className="cctx-meta-row__label">
                        {row.label}
                      </span>
                      <span className="cctx-meta-row__value">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tools pills */}
              {visibleTools.length > 0 && (
                <div className="cctx-tools-footer">
                  {visibleTools.map((tool, i) => (
                    <span className="cctx-tool-pill" key={i}>
                      {tool}
                    </span>
                  ))}
                  {extraToolCount > 0 && (
                    <span className="cctx-tool-pill cctx-tool-pill--more">
                      +{extraToolCount}
                    </span>
                  )}
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudyContext;
