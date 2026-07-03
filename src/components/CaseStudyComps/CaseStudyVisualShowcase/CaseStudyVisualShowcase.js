import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeUpVariants, fadeInVariants, fadeLeftVariants, fadeRightVariants, scaleUpSmallVariants } from "../../../utils/animationVariants";
import "./CaseStudyVisualShowcase.css";

/* ─────────────────────────────────────────
   A1. Before / After Comparison
───────────────────────────────────────── */
const BeforeAfter = ({ items }) => {
  if (!items || items.length === 0) return null;
  return (
    <div className="csv-section csv-section--dark">
      <div className="container">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="csv-eyebrow csv-eyebrow--light">Before & After</p>
          <h2 className="csv-heading csv-heading--light">Design transformation</h2>
          <p className="csv-subtext csv-subtext--light">
            Side-by-side comparison of the original state vs the redesigned experience.
          </p>
        </motion.div>

        {items.map((pair, pairIndex) => (
          <div key={pairIndex} style={{ marginTop: pairIndex === 0 ? 0 : 48 }}>
            {pair.context && (
              <motion.p
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.4, delay: 0.15 }}
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.4)",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  marginTop: "40px",
                }}
              >
                {pair.context}
              </motion.p>
            )}
            <div className="baf-grid">
              {/* Before */}
              <motion.div
                variants={fadeLeftVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.2 }}
                className="baf-card"
              >
                <span className="baf-card__label baf-card__label--before">Before</span>
                <img
                  src={pair.before.image}
                  alt={pair.before.caption || "Before"}
                  className="baf-card__img"
                  draggable="false"
                  width={800}
                  height={600}
                  loading="lazy"
                />
                {pair.before.caption && (
                  <div className="baf-card__caption">
                    <p>{pair.before.caption}</p>
                  </div>
                )}
              </motion.div>

              {/* After */}
              <motion.div
                variants={fadeRightVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0.3 }}
                className="baf-card"
              >
                <span className="baf-card__label baf-card__label--after">After</span>
                <img
                  src={pair.after.image}
                  alt={pair.after.caption || "After"}
                  className="baf-card__img"
                  draggable="false"
                  width={800}
                  height={600}
                  loading="lazy"
                />
                {pair.after.caption && (
                  <div className="baf-card__caption">
                    <p>{pair.after.caption}</p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   A2. Screen Gallery with Lightbox
───────────────────────────────────────── */
const ScreenGallery = ({ screens, title, subtitle }) => {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  if (!screens || screens.length === 0) return null;

  return (
    <>
      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="csv-lightbox"
          onClick={() => setLightboxSrc(null)}
        >
          <button
            className="csv-lightbox__close"
            onClick={() => setLightboxSrc(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={lightboxSrc}
            alt="Full screen preview"
            className="csv-lightbox__img"
            onClick={(e) => e.stopPropagation()}
            draggable="false"
            width={1200}
            height={800}
          />
        </div>
      )}

      <div className="csv-section csv-section--light">
        <div className="container">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="csv-eyebrow">UI Screens</p>
            <h2 className="csv-heading">{title || "Screen showcase"}</h2>
            {subtitle && <p className="csv-subtext">{subtitle}</p>}
          </motion.div>

          <div className="csv-gallery">
            {screens.map((screen, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="csv-gallery__item"
                onClick={() => setLightboxSrc(screen.image)}
              >
                <img
                  src={screen.image}
                  alt={screen.label || `Screen ${index + 1}`}
                  draggable="false"
                  width={400}
                  height={300}
                  loading="lazy"
                />
                <div className="csv-gallery__item-overlay">
                  <span>View</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

/* ─────────────────────────────────────────
   A3. Feature Highlights
───────────────────────────────────────── */
const FeatureHighlights = ({ features, title, subtitle }) => {
  if (!features || features.length === 0) return null;

  return (
    <div className="csv-section csv-section--white">
      <div className="container">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="csv-eyebrow">Feature Highlights</p>
          <h2 className="csv-heading">{title || "Key design decisions"}</h2>
          {subtitle && <p className="csv-subtext">{subtitle}</p>}
        </motion.div>

        <div className="csv-features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="csv-feature-card"
            >
              <div className="csv-feature-card__icon">
                <i className={feature.icon || "fa fa-star"} aria-hidden="true" />
              </div>
              <h4 className="csv-feature-card__title">{feature.title}</h4>
              <p className="csv-feature-card__body">{feature.body}</p>
              {feature.tag && (
                <span className="csv-feature-card__tag">{feature.tag}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   A4. Design System Preview
───────────────────────────────────────── */
const DesignSystemPreview = ({ systemData }) => {
  if (!systemData) return null;
  const { colors, typography, components, projectName } = systemData;

  return (
    <div className="csv-section csv-section--light">
      <div className="container">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="csv-eyebrow">Design System</p>
          <h2 className="csv-heading">Tokens, typography & components</h2>
          <p className="csv-subtext">
            A shared token-based system built to ensure consistency across every screen and state.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          className="csv-ds-wrapper"
        >
          {/* Chrome bar */}
          <div className="csv-ds-header">
            <div className="csv-ds-header__dots">
              <span className="csv-ds-header__dot csv-ds-header__dot--red" />
              <span className="csv-ds-header__dot csv-ds-header__dot--yellow" />
              <span className="csv-ds-header__dot csv-ds-header__dot--green" />
            </div>
            <span className="csv-ds-header__title">
              {projectName ? `${projectName} — Design System` : "Design System"}
            </span>
            <span className="csv-ds-header__live">
              <span className="csv-ds-header__live-dot" />
              Live tokens
            </span>
          </div>

          <div className="csv-ds-body">

            {/* 01 — Color tokens */}
            {colors && colors.length > 0 && (
              <div className="csv-ds-panel">
                <div className="csv-ds-panel__head">
                  <span className="csv-ds-panel__num">01</span>
                  <p className="csv-ds-panel__label">Color Tokens</p>
                </div>
                <div className="csv-ds-swatch-row">
                  {colors.map((swatch, i) => (
                    <motion.div
                      key={i}
                      className="csv-ds-swatch-card"
                      variants={fadeUpVariants}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 0.4, delay: 0.05 * i }}
                    >
                      <span
                        className="csv-ds-swatch-card__fill"
                        style={{ background: swatch.hex }}
                      />
                      <span className="csv-ds-swatch-card__name">{swatch.name}</span>
                      <span className="csv-ds-swatch-card__hex">{swatch.hex}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* 02 — Type scale */}
            {typography && typography.length > 0 && (
              <div className="csv-ds-panel">
                <div className="csv-ds-panel__head">
                  <span className="csv-ds-panel__num">02</span>
                  <p className="csv-ds-panel__label">Type Scale</p>
                </div>
                <div className="csv-ds-type-ramp">
                  {typography.map((row, i) => (
                    <motion.div
                      key={i}
                      className="csv-ds-type-ramp__row"
                      variants={fadeLeftVariants}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 0.4, delay: 0.05 * i }}
                    >
                      <span className="csv-ds-type-ramp__meta">
                        <span className="csv-ds-type-ramp__label">{row.label}</span>
                        <span className="csv-ds-type-ramp__specs">
                          {row.size} · {row.weight || 400}
                        </span>
                      </span>
                      <span
                        className="csv-ds-type-ramp__sample"
                        style={{ fontSize: row.size, fontWeight: row.weight || 400 }}
                      >
                        {row.sample || "The quick brown fox"}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* 03 — Component sandbox */}
            {components !== false && (
              <div className="csv-ds-panel">
                <div className="csv-ds-panel__head">
                  <span className="csv-ds-panel__num">03</span>
                  <p className="csv-ds-panel__label">Components</p>
                </div>

                <div className="csv-ds-component-frame">
                  <div className="csv-ds-component-frame__top">
                    <span className="csv-ds-comp-badge csv-ds-comp-badge--blue">Active</span>
                    <span className="csv-ds-comp-badge csv-ds-comp-badge--green">Completed</span>
                    <span className="csv-ds-comp-badge csv-ds-comp-badge--red">Error</span>
                  </div>

                  <input
                    className="csv-ds-comp-input"
                    placeholder="Search or enter a value…"
                    readOnly
                  />

                  <div className="csv-ds-component-frame__actions">
                    <button className="csv-ds-comp-btn csv-ds-comp-btn--primary">Primary Action</button>
                    <button className="csv-ds-comp-btn csv-ds-comp-btn--outline">Secondary</button>
                    <button className="csv-ds-comp-btn csv-ds-comp-btn--ghost">Ghost</button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   A5. Mobile Responsiveness Showcase
───────────────────────────────────────── */
const MobileShowcase = ({ screens, title, subtitle }) => {
  if (!screens || screens.length === 0) return null;

  const sizes = ["large", "medium", "small"];

  return (
    <div className="csv-section csv-section--dark">
      <div className="container">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="csv-eyebrow csv-eyebrow--light">Mobile Experience</p>
          <h2 className="csv-heading csv-heading--light">
            {title || "Responsive & mobile-first"}
          </h2>
          {subtitle && (
            <p className="csv-subtext csv-subtext--light">{subtitle}</p>
          )}
        </motion.div>

        <div className="csv-mobile-wrap" style={{ marginTop: 48 }}>
          {screens.slice(0, 3).map((screen, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.55, delay: index * 0.15 }}
              className={`csv-phone-frame csv-phone-frame--${sizes[index] || "medium"}`}
            >
              <div className="csv-phone-frame__notch" />
              <div className="csv-phone-frame__screen">
                <img src={screen.image} alt={screen.label || `Screen ${index + 1}`} width={300} height={600} loading="lazy" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Screen labels */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 40,
            marginTop: 48,
            flexWrap: "wrap",
          }}
        >
          {screens.slice(0, 3).map((screen, index) => (
            <motion.div
              key={index}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              style={{ textAlign: "center" }}
            >
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.8)",
                  margin: 0,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {screen.label || `Screen ${index + 1}`}
              </p>
              {screen.sublabel && (
                <p
                  style={{
                    fontSize: 10,
                    color: "rgba(255,255,255,0.35)",
                    margin: "4px 0 0",
                  }}
                >
                  {screen.sublabel}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   A6. User Flow Diagram
───────────────────────────────────────── */
const UserFlow = ({ steps, title, subtitle }) => {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="csv-section csv-section--white">
      <div className="container">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="csv-eyebrow">User Flow</p>
          <h2 className="csv-heading">{title || "Key user journey"}</h2>
          {subtitle && <p className="csv-subtext">{subtitle}</p>}
        </motion.div>

        <div className="csv-flow-container">
          <div className="csv-flow">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  variants={scaleUpSmallVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="csv-flow-step"
                >
                  <div
                    className={`csv-flow-step__circle ${
                      step.type === "pain"
                        ? "csv-flow-step__circle--pain"
                        : "csv-flow-step__circle--active"
                    }`}
                  >
                    <i
                      className={step.icon || "fa fa-circle"}
                      style={{ fontSize: 16 }}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="csv-flow-step__label">{step.label}</p>
                  {step.sub && <p className="csv-flow-step__sub">{step.sub}</p>}
                </motion.div>

                {index < steps.length - 1 && (
                  <div className="csv-flow-arrow" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   MASTER EXPORT — CaseStudyVisualShowcase
   Renders all sub-sections from one prop object
───────────────────────────────────────── */
const CaseStudyVisualShowcase = ({ project }) => {
  const showcase = project?.showcase;
  if (!showcase) return null;

  return (
    <>
      {showcase.beforeAfter && (
        <BeforeAfter items={showcase.beforeAfter} />
      )}

      {showcase.screens && (
        <ScreenGallery
          screens={showcase.screens}
          title={showcase.screensTitle}
          subtitle={showcase.screensSubtitle}
        />
      )}

      {showcase.features && (
        <FeatureHighlights
          features={showcase.features}
          title={showcase.featuresTitle}
          subtitle={showcase.featuresSubtitle}
        />
      )}

      {showcase.designSystem && (
        <DesignSystemPreview systemData={showcase.designSystem} />
      )}

      {showcase.mobileScreens && (
        <MobileShowcase
          screens={showcase.mobileScreens}
          title={showcase.mobileTitle}
          subtitle={showcase.mobileSubtitle}
        />
      )}

      {showcase.userFlow && (
        <UserFlow
          steps={showcase.userFlow}
          title={showcase.userFlowTitle}
          subtitle={showcase.userFlowSubtitle}
        />
      )}
    </>
  );
};

export default CaseStudyVisualShowcase;

/* ─────────────────────────────────────────
   Named exports so you can use sections
   individually if needed
───────────────────────────────────────── */
export { BeforeAfter, ScreenGallery, FeatureHighlights, DesignSystemPreview, MobileShowcase, UserFlow };
