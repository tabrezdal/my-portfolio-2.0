import React from "react";

// FramerMotion
import { motion } from "framer-motion";
import { fadeUpLargeVariants } from "../utils/animationVariants";

const PrimaryButton = ({ url, name, iconClass }) => {
  return (
    <motion.div
      variants={fadeUpLargeVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <a href={url} className="primary-btn" target="_blank" rel="noopener noreferrer">
        {name} &nbsp;<i className={iconClass }></i>
      </a>
    </motion.div>
  );
};

export default PrimaryButton;
