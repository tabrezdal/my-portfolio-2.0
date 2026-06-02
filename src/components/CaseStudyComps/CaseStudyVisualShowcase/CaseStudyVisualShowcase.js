import React, { useState } from "react";
import { motion } from "framer-motion";
import "./CaseStudyVisualShowcase.css";

const BeforeAfter = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="csv-section csv-section--dark">
      <div className="container">
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
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

        {items.map((pair, index) => (
          <div key={index} style={{ marginTop: index === 0 ? 0 : 48 }}>
            {pair.context && (
              <motion.p
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
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
              <motion.div
                variants={{ hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } }}
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
                />
                {pair.before.caption && (
                  <div className="baf-card__caption">
                    <p>{pair.before.caption}</p>
                  </div>
                )}
              </motion.div>

              <motion.div
                variants={{ hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } }}
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

const ScreenGallery = ({ screens }) => {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  if (!screens || screens.length === 0) return null;

  return (
    <>
      {lightboxSrc && (
        <div className="csv-lightbox" onClick={() => setLightboxSrc(null)}>
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
            onClick={(event) => event.stopPropagation()}
            draggable="false"
          />
        </div>
      )}

      <div className="csv-section csv-section--light">
        <div className="container">
          <motion.div
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="csv-eyebrow">UI Screens</p>
            <h2 className="csv-heading">Screen showcase</h2>
            <p className="csv-subtext">
              High-fidelity screens that show how the product experience scales across device types.
            </p>
          </motion.div>

          <div className="csv-gallery">
            {screens.map((screen, index) => (
              <motion.div
                key={index}
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
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

const FeatureHighlights = ({ features }) => {
  if (!features || features.length === 0) return null;

  return (
    <div className="csv-section csv-section--white">
      <div className="container">
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="csv-eyebrow">Feature Highlights</p>
          <h2 className="csv-heading">Key design decisions</h2>
          <p className="csv-subtext">
            What made this product feel polished, intuitive, and easy to adopt.
          </p>
        </motion.div>

        <div className="csv-features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
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
              {feature.tag && <span className="csv-feature-card__tag">{feature.tag}</span>}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DesignSystemPreview = ({ systemData }) => {
  if (!systemData) return null;

  return (
    <div className="csv-section csv-section--light">
      <div className="container">
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="csv-eyebrow">Design system</p>
          <h2 className="csv-heading">Visual identity & UI toolkit</h2>
          <p className="csv-subtext">
            Design tokens, type hierarchy, and reusable components that kept the interface consistent.
          </p>
        </motion.div>

        <div className="csv-ds-wrapper">
          <div className="csv-ds-header">
            <span className="csv-ds-header__dot csv-ds-header__dot--red" />
            <span className="csv-ds-header__dot csv-ds-header__dot--yellow" />
            <span className="csv-ds-header__dot csv-ds-header__dot--green" />
            <span className="csv-ds-header__title">{systemData.projectName || "Design system preview"}</span>
          </div>
          <div className="csv-ds-body">
            <div>
              <p className="csv-ds-panel__label">Colors</p>
              <div className="csv-ds-colors">
                {systemData.colors?.map((color) => (
                  <div key={color.hex} className="csv-ds-swatch" style={{ background: color.hex }}>
                    <span className="csv-ds-swatch__hex">{color.hex}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="csv-ds-panel__label">Typography</p>
              <div className="csv-ds-type-scale">
                {systemData.typography?.map((type) => (
                  <div key={type.label} className="csv-ds-type-row">
                    <span className="csv-ds-type-row__label">{type.label}</span>
                    <span className="csv-ds-type-row__sample">{type.sample}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="csv-ds-panel__label">Components</p>
              <div className="csv-ds-components">
                {systemData.components?.map((component) => (
                  <button
                    key={component.label}
                    className={`csv-ds-comp-btn csv-ds-comp-btn--${component.variant || "ghost"}`}
                  >
                    {component.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileShowcase = ({ screens }) => {
  if (!screens || screens.length === 0) return null;

  return (
    <div className="csv-section csv-section--white">
      <div className="container">
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="csv-eyebrow">Mobile experience</p>
          <h2 className="csv-heading">Responsive screens</h2>
          <p className="csv-subtext">
            Mobile-first layouts and handoff-ready screens that kept the experience polished on smaller devices.
          </p>
        </motion.div>

        <div className="csv-mobile-wrap">
          {screens.map((screen, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`csv-phone-frame csv-phone-frame--${index === 0 ? "large" : index === 1 ? "medium" : "small"}`}
            >
              <div className="csv-phone-frame__notch" />
              <div className="csv-phone-frame__screen">
                <img src={screen.image} alt={screen.label || `Mobile screen ${index + 1}`} draggable="false" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const UserFlow = ({ steps }) => {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="csv-section csv-section--light">
      <div className="container">
        <motion.div
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="csv-eyebrow">User journey</p>
          <h2 className="csv-heading">How people move through the product</h2>
          <p className="csv-subtext">
            An intentional flow that guides users from discovery to task completion with clear signposts.
          </p>
        </motion.div>

        <div className="csv-flow-container">
          <div className="csv-flow">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="csv-flow-step">
                  <div className={`csv-flow-step__circle ${step.variant ? `csv-flow-step__circle--${step.variant}` : ""}`}>
                    {index + 1}
                  </div>
                  <div className="csv-flow-step__label">{step.title}</div>
                  <div className="csv-flow-step__sub">{step.subtitle}</div>
                </div>
                {index < steps.length - 1 && <div className="csv-flow-arrow" aria-hidden="true" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CaseStudyVisualShowcase = ({ project }) => {
  const showcase = project?.showcase;
  if (!showcase) return null;

  return (
    <>
      <BeforeAfter items={showcase.beforeAfter} />
      <ScreenGallery screens={showcase.screens} />
      <FeatureHighlights features={showcase.features} />
      <DesignSystemPreview systemData={showcase.designSystem} />
      <MobileShowcase screens={showcase.mobileScreens} />
      <UserFlow steps={showcase.userFlow} />
    </>
  );
};

export default CaseStudyVisualShowcase;
