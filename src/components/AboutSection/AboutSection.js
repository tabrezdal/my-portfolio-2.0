import React from "react";
import PrimaryButton from "../../sharedComponents/PrimaryButton";
import BoxedButton from "../../sharedComponents/BoxedButton";
import { AboutSectionData } from "./AboutSectionData";

// FramerMotion
import { motion } from "framer-motion";
import { fadeUpLargeVariants, fadeLeftExtraLargeVariants } from "../../utils/animationVariants";

const AboutSection = () => {
  return (
    <section className="home-about-area pt-30" id="about">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <motion.div
            variants={fadeLeftExtraLargeVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-lg-5 col-md-5 home-about-left"
          >
            <img
              draggable="false"
              className="img-fluid aboutImage"
              src={AboutSectionData?.sectionImage}
              alt="Tabrez in Black Suit"
              width={261}
              height={347}
              loading="lazy"
            />
          </motion.div>
          <motion.div
            variants={fadeUpLargeVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-lg-7 col-md-7 home-about-right"
          >
            <h2 className="text-uppercase mb-2">
              {AboutSectionData?.sectionTitle}
            </h2>
            {AboutSectionData?.description?.map((item) => (
              <p className="text-justify" key={item.id}>
                {item.desc}
              </p>
            ))}

            <div className="d-flex justify-content-md-start align-items-md-start justify-content-center align-items-center flex-wrap gap-3">
              <PrimaryButton
                name={AboutSectionData?.buttonData?.name}
                url={AboutSectionData?.buttonData?.url}
                iconClass="fa fa-linkedin"
              />
              <BoxedButton
                name={AboutSectionData?.buttonData2?.name}
                url={AboutSectionData?.buttonData2?.url}
                iconClass="fa fa-calendar"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
