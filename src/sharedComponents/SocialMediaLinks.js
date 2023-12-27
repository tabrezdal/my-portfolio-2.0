import React from "react";

// FramerMotion
import { motion } from "framer-motion";

const SocialMediaLinks = ({ url, iconClass, index }) => {
  return (
    <>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onClick={() => window.open(url, "_blank")}
        style={{ cursor: "pointer" }}
      >
        <i className={iconClass} style={{ color: "white" }}></i>
      </motion.div>
    </>
  );
};

export default SocialMediaLinks;
