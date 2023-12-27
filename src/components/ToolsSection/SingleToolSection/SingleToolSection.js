import React from "react";

// FramerMotion
import { motion } from "framer-motion";

const SingleToolSection = ({ toolName, toolLogo, index }) => {
  return (
    <div className="single-services">
      <motion.div
        transition={{ duration: 0.5, delay: index * 0.3 }}
        animate={{
          scale: [1, 2, 1],
          rotate: [360, -90, 0],
        }}
      >
        <img draggable="false" src={toolLogo} alt={toolName} />
      </motion.div>
      <a href="#">
        <h4>{toolName}</h4>
      </a>
    </div>
  );
};

export default SingleToolSection;
