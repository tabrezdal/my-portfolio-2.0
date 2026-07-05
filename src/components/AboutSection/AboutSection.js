import React from "react";
import { motion, useReducedMotion } from "framer-motion";

import {
  fadeUpLargeVariants,
  fadeLeftExtraLargeVariants,
  staggerContainerVariants,
} from "../../utils/animationVariants";

import { AboutSectionData } from "./AboutSectionData";
import PrimaryButton from "../../sharedComponents/PrimaryButton";
import BoxedButton from "../../sharedComponents/BoxedButton";
import "./AboutSection.css";

const AboutSection = () => {
  const shouldReduceMotion = useReducedMotion();

  /** Strips animation props when user prefers reduced motion */
  const motionProps = (variants, delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
        variants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.5, delay },
      };

  return (
    <section className="about-section" id="about">
      <div className="container">

        {/* ── Full-width headline ──────────────────────────────────────── */}
        <motion.div
          className="about-headline-block"
          variants={shouldReduceMotion ? {} : staggerContainerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.span
            className="about-eyebrow"
            variants={shouldReduceMotion ? {} : fadeUpLargeVariants}
          >
            {AboutSectionData.eyebrow}
          </motion.span>

          <motion.h2
            className="about-headline"
            variants={shouldReduceMotion ? {} : fadeUpLargeVariants}
          >
            {/* Split on \n so the line break is content-controlled */}
            {AboutSectionData.headline.split("\n").map((line, i, arr) => (
              <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </motion.h2>
        </motion.div>

        {/* ── Two-column grid ──────────────────────────────────────────── */}
        <div className="about-grid">

          {/* Left — Photo */}
          <motion.div
            className="about-photo-col"
            {...motionProps(fadeLeftExtraLargeVariants, 0.2)}
          >
            <div className="about-photo-frame">
              <img
                draggable="false"
                className="about-photo-img"
                src={AboutSectionData.sectionImage}
                alt="Tabrez Dal — Product Engineer"
                width={500}
                height={700}
                loading="lazy"
              />
            </div>

            <div className="about-photo-meta">
              <p className="about-photo-name">{AboutSectionData.name}</p>
              <p className="about-photo-role">{AboutSectionData.role}</p>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            className="about-content-col"
            variants={shouldReduceMotion ? {} : staggerContainerVariants}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Narrative paragraphs */}
            {AboutSectionData.paragraphs.map((para) => (
              <motion.p
                key={para.id}
                className="about-content-para"
                variants={shouldReduceMotion ? {} : fadeUpLargeVariants}
              >
                {para.bold && (
                  <strong className="about-content-para__bold">
                    {para.bold}
                  </strong>
                )}
                {para.text}
              </motion.p>
            ))}

            {/* Signature */}
            <motion.div variants={shouldReduceMotion ? {} : fadeUpLargeVariants}>
              <img
                src={AboutSectionData.mySignature}
                alt="Signature"
                className="about-signature"
                draggable="false"
                width={300}
                height={102}
              />
            </motion.div>

            {/* CTA buttons — using existing shared components */}
            <div className="about-cta-row">
              <PrimaryButton
                name={AboutSectionData.buttonData.name}
                url={AboutSectionData.buttonData.url}
                iconClass={AboutSectionData.buttonData.iconClass}
              />
              <BoxedButton
                name={AboutSectionData.buttonData2.name}
                url={AboutSectionData.buttonData2.url}
                iconClass={AboutSectionData.buttonData2.iconClass}
              />
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;