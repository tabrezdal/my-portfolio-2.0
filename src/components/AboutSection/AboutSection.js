import React from "react";
import PrimaryButton from "../../sharedComponents/PrimaryButton";
import { AboutSectionData } from "./AboutSectionData";

// FramerMotion
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="home-about-area pt-30" id="about">
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
            className="col-lg-5 col-md-5 home-about-left"
          >
            <div className="aboutImage"></div>
            {/* <img
              draggable="false"
              className="img-fluid aboutImage"
              src={AboutSectionData?.sectionImage}
              alt=""
            /> */}
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-lg-7 col-md-7 home-about-right"
          >
            <h1 className="text-uppercase mb-2">
              {AboutSectionData?.sectionTitle}
            </h1>
            {AboutSectionData?.description?.map((item) => (
              <p className="text-justify" key={item.id}>
                {item.desc}
              </p>
            ))}

            <PrimaryButton
              name={AboutSectionData?.buttonData?.name}
              url={AboutSectionData?.buttonData?.url}
              iconClass="fa fa-linkedin"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
