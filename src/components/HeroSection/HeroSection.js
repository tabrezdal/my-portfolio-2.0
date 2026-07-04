import React from "react";
import { HeroSectionData } from "./HeroSectionData";
import "./HeroSection.css";

// FramerMotion
import { motion } from "framer-motion";
import { heroTextReveal, heroTextStagger, heroImageFloat } from "../../utils/animationVariants";

const HeroSection = () => {
  const { roleDescriptor, headline, valueStatement, primaryCta, secondaryCta, proofPoint } = HeroSectionData;

  return (
    <section className="hero-section" id="intro">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={heroTextStagger}
          initial="hidden"
          animate="visible"
        >
          {/* Role Descriptor - small caps, muted */}
          <motion.p
            className="hero-role-descriptor"
            variants={heroTextReveal}
          >
            {roleDescriptor}
          </motion.p>

          {/* Headline - large, bold, split into lines */}
          <motion.h1 className="hero-headline">
            {headline.map((line, index) => (
              <motion.span
                key={index}
                className="hero-headline-line"
                variants={heroTextReveal}
              >
                {line}
              </motion.span>
            ))}
          </motion.h1>

          {/* Value Statement - body size, precise */}
          <motion.p
            className="hero-value-statement"
            variants={heroTextReveal}
          >
            {valueStatement}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="hero-cta-group"
            variants={heroTextReveal}
          >
            <a
              href={primaryCta.href}
              className="hero-cta-primary"
            >
              {primaryCta.label}
            </a>
            {secondaryCta && (
              <a
                href={secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-secondary"
              >
                {secondaryCta.label}
              </a>
            )}
          </motion.div>

          {/* Proof Point - stat type */}
          {proofPoint && proofPoint.type === "stat" && (
            <motion.div
              className="hero-proof-point"
              variants={heroTextReveal}
            >
              <span className="hero-proof-value">{proofPoint.value}</span>
              <span className="hero-proof-label">{proofPoint.label}</span>
            </motion.div>
          )}
        </motion.div>

        {/* Hero Image - desktop only */}
        <motion.div
          className="hero-image-wrapper"
          variants={heroImageFloat}
          initial="hidden"
          animate="visible"
        >
          <img
            draggable="false"
            className="hero-image"
            src={HeroSectionData.heroImage}
            alt="Tabrez Dal — Product Engineer"
            loading="eager"
            fetchPriority="high"
            width={400}
            height={500}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
