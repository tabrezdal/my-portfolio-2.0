import React from "react";
import PrimaryButton from "../../sharedComponents/PrimaryButton";
import { HeroSectionData } from "./HeroSectionData";

// FramerMotion
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="banner-area pb-40" id="intro" style={{ paddingBottom: "0px"}}>
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-lg-6 col-md-6 banner-left"
            style={{ textAlign: "left" }}
          >
            <br />
            <br />
            <h6>{HeroSectionData?.introStatingLine}</h6>
            <h1>{HeroSectionData?.name}</h1>
            <p className="text-justify intro-line">
              {HeroSectionData?.introLine}
            </p>
            <p className="text-justify location-line">
              <i className="fa fa-map-pin" style={{color: "#555"}}></i> {HeroSectionData.location}
            </p>
            <PrimaryButton
              name={HeroSectionData?.buttonData.name}
              url={HeroSectionData?.buttonData.url}
              iconClass="fa fa-download"
            />
          </motion.div>
          <div className="col-lg-1 col-md-1"></div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: -60 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-lg-5 col-md-5 banner-right d-flex align-self-end"
          >
            <img
              draggable="false"
              className="img-fluid"
              src={HeroSectionData?.heroImage}
              alt="Hero"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
