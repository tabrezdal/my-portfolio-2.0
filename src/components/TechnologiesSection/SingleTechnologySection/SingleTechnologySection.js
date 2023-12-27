import React from "react";

// FramerMotion
import { motion } from "framer-motion";

const SingleTechnologySection = ({ techName, techLogo, featured, index }) => {
  const FeaturedTechClass = "col-lg-4 col-md-4 col-sm-4 col-4";
  const NormalTechClass = "col-lg-2 col-md-3 col-sm-3 col-4";
  const currentClass = `${
    featured === true ? FeaturedTechClass : NormalTechClass
  }`;
  return (
    <motion.div
      variants={{
        hidden: { scale: 0, y: 60 },
        visible: { scale: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={currentClass}
    >
      <div className="single-services">
        <span>
          <img draggable="false" src={techLogo} alt={techName} />
        </span>

        <a href="#">
          <h4>{techName}</h4>
        </a>
      </div>
    </motion.div>
  );
};

export default SingleTechnologySection;
