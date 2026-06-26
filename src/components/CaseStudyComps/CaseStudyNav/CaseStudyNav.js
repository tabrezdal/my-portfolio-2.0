import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeLeftVariants, fadeInVariants } from "../../../utils/animationVariants";
import FeaturedProjectsData from "../../../Data/FeaturedProjectsData";

const CaseStudyNav = ({ project }) => {
  const navigate = useNavigate();

  const prevProject = project.prevSlug
    ? FeaturedProjectsData.find((p) => p.slug === project.prevSlug)
    : null;

  const nextProject = project.nextSlug
    ? FeaturedProjectsData.find((p) => p.slug === project.nextSlug)
    : null;

  return (
    <section style={{ background: "#fff", padding: "60px 0", borderTop: "1px solid #eee" }}>
      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {/* Back to homepage */}
          <motion.div
            variants={fadeLeftVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <button
              onClick={() => navigate("/")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "13px",
                fontWeight: 500,
                color: "#777",
                textTransform: "uppercase",
                letterSpacing: "1px",
                padding: 0,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <i className="fa fa-arrow-left" aria-hidden="true"></i>
              Back to homepage
            </button>
          </motion.div>

          {/* Prev / Next project */}
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            {prevProject && (
              <motion.button
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.4, delay: 0.2 }}
                onClick={() => navigate(`/case-study/${prevProject.slug}`)}
                style={{
                  background: "none",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#222",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  padding: "10px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "border-color 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#0378b8";
                  e.currentTarget.style.color = "#0378b8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#ddd";
                  e.currentTarget.style.color = "#222";
                }}
              >
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
                {prevProject.title}
              </motion.button>
            )}

            {nextProject && (
              <motion.button
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.4, delay: 0.3 }}
                onClick={() => navigate(`/case-study/${nextProject.slug}`)}
                style={{
                  background: "#0378b8",
                  border: "1px solid #0378b8",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "#fff",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  padding: "10px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                {nextProject.title}
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyNav;
