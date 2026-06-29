import React from "react";
import PrimaryButton from "../../sharedComponents/PrimaryButton";
import { HeroSectionData } from "./HeroSectionData";

// FramerMotion
import { motion } from "framer-motion";
import { fadeDownVariants, fadeLeftExtraLargeVariants } from "../../utils/animationVariants";

const HeroSection = () => {
  return (
    <section className="banner-area pb-40" id="intro" style={{ paddingBottom: "0px"}}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <motion.div
            variants={fadeLeftExtraLargeVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-lg-6 col-md-6 banner-left"
            style={{ textAlign: "left" }}
          >
            <br />
            <br />
            <p className="eyebrow-text">{HeroSectionData?.introStatingLine}</p>
            <h1>{HeroSectionData?.name}</h1>
            <p className="text-justify intro-line">
              {HeroSectionData?.introLine}
            </p>
            <p className="text-justify location-line">
              <i className="fa fa-map-pin" style={{color: "#555"}}></i> {HeroSectionData.location}
            </p>
            <div className="hero-cta-group">
              <PrimaryButton
                name={HeroSectionData?.buttonData.name}
                url={HeroSectionData?.buttonData.url}
                iconClass="fa fa-download"
              />
              <a
                href="https://calendly.com/tabrez-dal"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-cta-secondary"
              >
                Schedule a Call
              </a>
            </div>
          </motion.div>
          <div className="col-lg-1 col-md-1"></div>

          <motion.div
            variants={fadeDownVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-lg-5 col-md-5 banner-right d-flex align-self-end"
          >
            <img
              draggable="false"
              className="img-fluid"
              src={HeroSectionData?.heroImage}
              alt="Tabrez Dal — Product Engineer"
              loading="eager"
              fetchPriority="high"
              width={400}
              height={500}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
