import React from "react";
import { motion } from "framer-motion";
import { fadeUp, fadeIn, fadeUpLargeVariants } from "../../../utils/animationVariants";
import "./CaseStudyHero.css";

/* ─────────────────────────────────────────
   CaseStudyHero
   Props come from FeaturedProjectsData entry
───────────────────────────────────────── */
const CaseStudyHero = ({ project }) => {
  if (!project) return null;

  const {
    title,
    category,
    year,
    duration,
    role,
    tags,
    shortDescription,
    coverImage,
    metrics,   // [{ label, value }]
    tools,
  } = project;

  /* Split title at last word for accent colouring */
  const titleWords = (title || "").trim().split(" ");
  const titleMain  = titleWords.slice(0, -1).join(" ");
  const titleLast  = titleWords[titleWords.length - 1];

  return (
    <section className="csh-root" id="cs-hero">
      {/* Decorative glow */}
      <div className="csh-glow" aria-hidden="true" />

      {/* Header spacer — matches fixed header height */}
      <div className="csh-spacer" />

      {/* ── Main copy ── */}
      <div className="csh-content">
        <div className="container">

          {/* Breadcrumb / meta */}
          <motion.div className="csh-meta" {...fadeUp(0.1)}>
            {category && (
              <span className="csh-meta__category">{category}</span>
            )}
            <span className="csh-meta__divider" aria-hidden="true">/</span>
            {year && <span className="csh-meta__year">{year}</span>}
            {duration && (
              <>
                <span className="csh-meta__divider" aria-hidden="true">·</span>
                <span className="csh-meta__duration">{duration}</span>
              </>
            )}
          </motion.div>

          {/* Display headline */}
          <motion.h1 className="csh-title" {...fadeUp(0.2)}>
            {titleMain && <>{titleMain} </>}
            <span className="csh-title__accent">{titleLast}</span>
          </motion.h1>

          {/* Sub-headline */}
          {shortDescription && (
            <motion.p className="csh-subtitle" {...fadeUp(0.3)}>
              {shortDescription}
            </motion.p>
          )}

          {/* Tag pills */}
          {tags && tags.length > 0 && (
            <motion.div className="csh-tags" {...fadeUp(0.35)}>
              {tags.map((tag) => (
                <span className="csh-tag" key={tag}>{tag}</span>
              ))}
            </motion.div>
          )}

          {/* Quick-facts strip */}
          <motion.div className="csh-facts" {...fadeIn(0.45)}>
            {role && (
              <div className="csh-fact">
                <p className="csh-fact__label">My Role</p>
                <p className="csh-fact__value">{role}</p>
              </div>
            )}
            {duration && (
              <div className="csh-fact">
                <p className="csh-fact__label">Duration</p>
                <p className="csh-fact__value">{duration}</p>
              </div>
            )}
            {year && (
              <div className="csh-fact">
                <p className="csh-fact__label">Year</p>
                <p className="csh-fact__value">{year}</p>
              </div>
            )}
            {tools && tools.length > 0 && (
              <div className="csh-fact">
                <p className="csh-fact__label">Tools</p>
                <p className="csh-fact__value">{tools.join(" · ")}</p>
              </div>
            )}
          </motion.div>

          {/* Impact metrics strip */}
          {metrics && metrics.length > 0 && (
            <motion.div
              className="csh-metrics"
              style={{ "--csh-metric-count": metrics.length }}
              {...fadeIn(0.55)}
            >
              {metrics.map((m, i) => (
                <div className="csh-metric" key={i}>
                  <span
                    className={`csh-metric__value${
                      i === 0 ? " csh-metric__value--accent" : ""
                    }`}
                  >
                    {m.value}
                  </span>
                  <span className="csh-metric__label">{m.label}</span>
                </div>
              ))}
            </motion.div>
          )}

        </div>
      </div>

      {/* ── Cover image ── */}
      {coverImage && (
        <motion.div
          className="csh-cover-wrap"
          variants={fadeUpLargeVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        >
          <img
            src={coverImage}
            alt={`${title} — cover`}
            className="csh-cover-img"
            draggable="false"
            width={1200}
            height={675}
            loading="lazy"
          />
        </motion.div>
      )}

      {/* Scroll cue */}
      <div className="csh-scroll-cue" aria-hidden="true">
        <span>Scroll</span>
        <i className="fa fa-chevron-down" />
      </div>
    </section>
  );
};

export default CaseStudyHero;
