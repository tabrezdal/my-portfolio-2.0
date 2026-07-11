import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeLeftVariants, fadeInVariants } from "../../../utils/animationVariants";
import Button from "../../../sharedComponents/Button/Button";
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
              <Button
                label={prevProject.title}
                icon="fa fa-arrow-left"
                iconPosition="before"
                variant="outlined"
                theme="dark"
                size="sm"
                onClick={() => navigate(`/case-study/${prevProject.slug}`)}
              />
            )}

            {nextProject && (
              <Button
                label={nextProject.title}
                icon="fa fa-arrow-right"
                iconPosition="after"
                variant="filled"
                theme="brand"
                size="sm"
                onClick={() => navigate(`/case-study/${nextProject.slug}`)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyNav;
