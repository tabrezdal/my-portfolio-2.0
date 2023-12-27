import React from "react";

// FramerMotion
import { motion } from "framer-motion";

const PrimaryButton = ({ url, name, iconClass }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <a href={url} className="primary-btn" target="_blank">
        {name} &nbsp;<i class={iconClass}></i>
      </a>
    </motion.div>
  );
};

export default PrimaryButton;
