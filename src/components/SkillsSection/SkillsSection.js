import React from "react";
import SectionTitle from "../../sharedComponents/sectionTitle/SectionTitle";
import SimpleProgressbar from "../../sharedComponents/SimpleProgressBar";
import { SkillSectionData } from "./SkillSectionData";

// FramerMotion
import { motion } from "framer-motion";
import { fadeUpLargeVariants } from "../../utils/animationVariants";

const SkillsSection = () => {
  return (
    <section className="home-about-area section-gap" id="skills">
      <div className="container">
        <SectionTitle sectionTitleText={SkillSectionData?.sectionTitle} />
        <div className="row skillbar-wraps">
          <motion.div
            variants={fadeUpLargeVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-lg-6 skill-left"
          >
            <h4 className="pt-30 text-align: left">
              {SkillSectionData?.skillsCategories?.categoryTitle1}
            </h4>

            {SkillSectionData.skillsCategories.skills.map((item) => (
              <div className="single-skill" key={item.skill}>
                <p>{item.skill}</p>
                <SimpleProgressbar endValue={item.percetage} />
              </div>
            ))}
          </motion.div>
          <motion.div
            variants={fadeUpLargeVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            className="col-lg-6 skill-right"
          >
            <h4 className="pt-30 text-rigth">
              {SkillSectionData?.skillsCategories?.categoryTitle2}
            </h4>

            {SkillSectionData.skillsCategories.tech.map((item) => (
              <div className="single-skill" key={item.skill}>
                <p>{item.skill}</p>
                <SimpleProgressbar endValue={item.percetage} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
