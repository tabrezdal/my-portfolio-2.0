import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { fadeUpVariants, fadeLeftVariants } from "../../../utils/animationVariants";
import "./CaseStudyPlatformScope.css";

/* ─────────────────────────────────────────
   Badge class map
───────────────────────────────────────── */
const BADGE_CLS = {
  Primary:    "cplat-badge--primary",
  Supporting: "cplat-badge--supporting",
  "Led Team": "cplat-badge--led",
};

/* ─────────────────────────────────────────
   Ownership tag resolver
   Returns {cls, label} for design/dev fields
───────────────────────────────────────── */
const designTag = (v) => {
  if (!v || v === "None")       return { cls: "cplat-card__tag--none",     label: "— Design: N/A"       };
  if (v === "Full")             return { cls: "cplat-card__tag--design",   label: "✓ Design: Full"      };
  if (v === "Partial")          return { cls: "cplat-card__tag--design",   label: "◑ Design: Partial"   };
  return                               { cls: "cplat-card__tag--design",   label: `Design: ${v}`        };
};

const devTag = (v) => {
  if (!v || v === "None")       return { cls: "cplat-card__tag--none",     label: "— Dev: N/A"          };
  if (v === "Full")             return { cls: "cplat-card__tag--dev",      label: "✓ Dev: Full"         };
  if (v === "Led Team")         return { cls: "cplat-card__tag--led-dev",  label: "⚑ Dev: Led Team"     };
  if (v === "Contributed")      return { cls: "cplat-card__tag--led-dev",  label: "◑ Dev: Contributed"  };
  return                               { cls: "cplat-card__tag--dev",      label: `Dev: ${v}`           };
};

/* ─────────────────────────────────────────
   CaseStudyPlatformScope
───────────────────────────────────────── */
const CaseStudyPlatformScope = ({ project }) => {
  const {
    platformSurfaces,
    ownershipMatrix,
    platformScopeTitle,
    platformScopeSubtitle,
  } = project;

  const [animateBars, setAnimateBars] = useState(false);
  const barsRef = useRef(null);

  /* Trigger bar animation on scroll-into-view */
  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimateBars(true); },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* Guard — only render for multi-surface projects */
  if (!platformSurfaces || platformSurfaces.length < 2) return null;

  /* Build ownership bars from ownershipMatrix */
  const bars = ownershipMatrix
    ? [
        { name: "Design",      ...ownershipMatrix.design      },
        { name: "Development", ...ownershipMatrix.development },
        { name: "Research",    ...ownershipMatrix.research    },
      ].filter((b) => b.value !== undefined)
    : [];

  /* Auto-generate heading if none provided */
  const heading =
    platformScopeTitle ||
    `${platformSurfaces.length} surfaces. One design system.`;

  return (
    <section className="cplat-root" id="cs-scope">
      <div className="cplat-inner">
        <div className="container">

          {/* ── Header ── */}
          <motion.div
            className="cplat-header"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <p className="cplat-eyebrow">Platform Architecture</p>
            <h2 className="cplat-heading">{heading}</h2>
            {platformScopeSubtitle && (
              <p className="cplat-subtext">{platformScopeSubtitle}</p>
            )}
          </motion.div>

          {/* ── Surface Cards Grid ── */}
          <div className="cplat-grid">
            {platformSurfaces.map((surface, i) => {
              const dTag = designTag(surface.designOwnership);
              const vTag = devTag(surface.devOwnership);

              return (
                <motion.div
                  key={i}
                  className="cplat-card"
                  variants={{
                    hidden:  { opacity: 0, y: 48 },
                    visible: { opacity: 1, y: 0  },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
                >
                  {/* Badge */}
                  {surface.badge && (
                    <span
                      className={`cplat-badge ${BADGE_CLS[surface.badge] || "cplat-badge--supporting"}`}
                    >
                      {surface.badge}
                    </span>
                  )}

                  {/* Name + Audience */}
                  <p className="cplat-card__name">{surface.name}</p>
                  {surface.audience && (
                    <p className="cplat-card__audience">{surface.audience}</p>
                  )}

                  {/* Screen count */}
                  {surface.screens != null && (
                    <div className="cplat-card__count-row">
                      <span className="cplat-card__count">
                        {surface.screens}
                      </span>
                      <span className="cplat-card__count-label">screens</span>
                    </div>
                  )}

                  {/* Ownership tags */}
                  <div className="cplat-card__tags">
                    <span className={`cplat-card__tag ${dTag.cls}`}>
                      {dTag.label}
                    </span>
                    <span className={`cplat-card__tag ${vTag.cls}`}>
                      {vTag.label}
                    </span>
                  </div>

                  {/* Note */}
                  {surface.note && (
                    <p className="cplat-card__note">{surface.note}</p>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* ── Ownership Transparency Bars ── */}
          {bars.length > 0 && (
            <div className="cplat-ownership" ref={barsRef}>
              <p className="cplat-ownership__eyebrow">My Ownership Breakdown</p>

              <div className="cplat-bars">
                {bars.map((bar, i) => (
                  <motion.div
                    key={i}
                    className="cplat-bar-item"
                    variants={{
                      hidden:  { opacity: 0, x: -24 },
                      visible: { opacity: 1, x: 0   },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <div className="cplat-bar-item__header">
                      <span className="cplat-bar-item__name">{bar.name}</span>
                      <span className="cplat-bar-item__value">{bar.value}%</span>
                    </div>

                    <div className="cplat-bar-track">
                      <div
                        className="cplat-bar-fill"
                        style={{
                          width: animateBars ? `${bar.value}%` : "0%",
                        }}
                      />
                    </div>

                    {bar.note && (
                      <p className="cplat-bar-item__note">{bar.note}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default CaseStudyPlatformScope;
