import React from "react";

// FramerMotion
import { motion } from "framer-motion";

const SocialMediaLinks = ({ url, iconClass, index }) => {
  return (
    <>
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: index * 0.1 }}
        aria-label={`${iconClass.replace('fa-', '').replace(' ', ' ')} profile`}
      >
        <i className={iconClass} style={{ color: "white" }}></i>
      </motion.a>
    </>
  );
};

export default SocialMediaLinks;
