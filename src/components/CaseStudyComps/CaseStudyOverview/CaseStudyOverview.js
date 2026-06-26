import React from "react";
import { motion } from "framer-motion";
import { fadeLeftLargeVariants, fadeRightLargeVariants } from "../../../utils/animationVariants";

const overviewItem = (label, value) => (
  <div
    style={{
      borderTop: "1px solid rgba(0,0,0,0.08)",
      paddingTop: "14px",
      paddingBottom: "14px",
    }}
  >
    <p
      style={{
        fontSize: "10px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "1.5px",
        color: "#0378b8",
        marginBottom: "4px",
      }}
    >
      {label}
    </p>
    <p style={{ fontSize: "14px", color: "#222", fontWeight: 500, margin: 0 }}>
      {value}
    </p>
  </div>
);

const CaseStudyOverview = ({ project }) => {
  return (
    <section style={{ background: "#f9f9ff", padding: "80px 0" }}>
      <div className="container">
        <div className="row align-items-start">
          {/* Left — problem statement */}
          <motion.div
            variants={fadeLeftLargeVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-lg-7 col-md-7"
            style={{ marginBottom: "40px" }}
          >
            <p
              style={{
                fontSize: "10px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "2px",
                color: "#0378b8",
                marginBottom: "16px",
              }}
            >
              The Problem
            </p>
            <h2
              style={{
                fontSize: "clamp(22px, 3vw, 30px)",
                fontWeight: 600,
                color: "#222",
                lineHeight: "1.4",
                marginBottom: "0",
              }}
            >
              {project.problem}
            </h2>
          </motion.div>

          {/* Right — meta grid */}
          <motion.div
            variants={fadeRightLargeVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.35 }}
            className="col-lg-4 offset-lg-1 col-md-5"
          >
            {overviewItem("My Role", project.role)}
            {overviewItem("Duration", project.duration)}
            {overviewItem("Tools", project.tools.join(", "))}
            {overviewItem("Year", project.year)}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyOverview;
