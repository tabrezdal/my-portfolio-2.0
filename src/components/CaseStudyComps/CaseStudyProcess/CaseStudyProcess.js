import React from "react";
import { motion } from "framer-motion";
import { fadeUpVariants, fadeUpLargeVariants } from "../../../utils/animationVariants";

const CaseStudyProcess = ({ project }) => {
  return (
    <section style={{ background: "#fff", padding: "80px 0" }} id="cs-process">
      <div className="container">
        {/* Section label */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: "56px" }}
        >
          <p
            style={{
              fontSize: "10px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#0378b8",
              marginBottom: "10px",
            }}
          >
            Process & Approach
          </p>
          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 32px)",
              fontWeight: 600,
              color: "#222",
              maxWidth: "480px",
              lineHeight: "1.3",
            }}
          >
            How I approached the challenge
          </h2>
        </motion.div>

        {/* Steps grid */}
        <div className="row">
          {project.process.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeUpLargeVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="col-lg-6 col-md-6 col-sm-12"
              style={{ marginBottom: "40px" }}
            >
              <div
                style={{
                  borderLeft: "3px solid #0378b8",
                  paddingLeft: "20px",
                  height: "100%",
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "10px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "1.5px",
                    color: "#0378b8",
                    marginBottom: "8px",
                  }}
                >
                  0{index + 1}
                </span>
                <h4
                  style={{
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "#222",
                    marginBottom: "10px",
                  }}
                >
                  {step.heading}
                </h4>
                <p
                  style={{
                    fontSize: "13px",
                    color: "#777",
                    lineHeight: "1.7",
                    margin: 0,
                  }}
                >
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyProcess;
