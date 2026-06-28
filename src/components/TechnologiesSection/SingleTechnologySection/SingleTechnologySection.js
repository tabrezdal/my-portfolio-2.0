import React from "react";

// FramerMotion
import { motion } from "framer-motion";
import { scaleUpFadeUpVariants } from "../../../utils/animationVariants";

const SingleTechnologySection = ({ techName, techLogo, featured, index }) => {
  const FeaturedTechClass = "col-lg-4 col-md-4 col-sm-4 col-4";
  const NormalTechClass = "col-lg-2 col-md-3 col-sm-3 col-4";
  const currentClass = `${
    featured === true ? FeaturedTechClass : NormalTechClass
  }`;
  return (
    <motion.div
      variants={scaleUpFadeUpVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={currentClass}
    >
      <div className="single-services">
        <span>
          <img draggable="false" src={techLogo} alt={techName} width={50} height={50} loading="lazy" />
        </span>

        <a href="#">
          <p>{techName}</p>
        </a>
      </div>
    </motion.div>
  );
};

export default SingleTechnologySection;
