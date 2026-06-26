import React from "react";

// FramerMotion
import { motion } from "framer-motion";
import { fadeDownLargeVariants } from "../utils/animationVariants";

const SocialMediaLinks = ({ url, iconClass, index }) => {
  return (
    <>
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        variants={fadeDownLargeVariants}
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
