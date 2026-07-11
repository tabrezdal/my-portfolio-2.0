import React from "react";
import { motion } from "framer-motion";
import { fadeUpLargeVariants } from "../utils/animationVariants";
import Button from "./Button/Button";

// Wrapper keeps existing prop signature intact (url, name, iconClass).
// theme="dark" replaces the old blue gradient primary-btn — B&W fix.
const PrimaryButton = ({ url, name, iconClass }) => (
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
      variant="filled"
      theme="dark"
      size="md"
      target="_blank"
    />
  </motion.div>
);

export default PrimaryButton;
