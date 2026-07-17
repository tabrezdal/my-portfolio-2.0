import React from "react";
import { motion } from "framer-motion";
import { fadeUpLargeVariants } from "../utils/animationVariants";
import Button from "./Button/Button";

// Wrapper keeps existing prop signature intact (url, name, iconClass).
// theme="dark" variant="outlined" replaces blue bordered boxed-btn-02 — B&W fix.
const BoxedButton = ({ url, name, iconClass }) => (
  <motion.div
    variants={fadeUpLargeVariants}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.5, delay: 0.5 }}
  >
    <Button
      href={url}
      label={name}
      icon={iconClass}
      iconPosition="after"
      variant="outlined"
      theme="dark"
      size="md"
      target="_blank"
    />
  </motion.div>
);

export default BoxedButton;
