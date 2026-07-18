import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUpLargeVariants } from "../../utils/animationVariants";
import ImageHelper from "../../Helpers/ImageHelper";
import ConstantHelper from "../../Helpers/ConstantHelper";
import "./FeaturedProjectCard.css";

const FeaturedProjectCard = ({ project, index }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ConstantHelper.buildCaseStudyUrl(project.slug));
  };

  return (
    <motion.div
      variants={fadeUpLargeVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="col-lg-4 col-md-6 col-sm-12 mb-4"
    >
      <div className="fp-card" onClick={handleClick}>
        {/* Image + hover overlay */}
        <div className="fp-card__img-wrap">
          <img
            src={project.coverImageGrid || project.coverImage || ImageHelper.CaseStudyPlaceholder}
            srcSet={
              project.coverImageGrid
                ? `${encodeURI(project.coverImageGrid)} 480w, ${encodeURI(project.coverImage)} 1600w`
                : undefined
            }
            sizes="(max-width: 767px) 100vw, 427px"
            alt={project.coverImage ? project.title : `${project.title} — cover image coming soon`}
            draggable="false"
            loading="lazy"
            width={800}
            height={500}
          />
          <div className="fp-card__overlay">
            <p className="fp-card__overlay-role">{project.role}</p>
            <span className="fp-card__overlay-cta">View Case Study →</span>
          </div>
          {project.outcome && (
            <div className="fp-outcome-overlay" aria-hidden="true">
              <span className="fp-outcome-overlay__arrow">↑</span>
              <span className="fp-outcome-overlay__text">{project.outcome}</span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="fp-card__body">
          <div className="fp-card__meta">
            <span className="fp-card__category">{project.category}</span>
            <span className="fp-card__year">{project.year}</span>
          </div>
          <p className="fp-card__title">{project.title}</p>
          <p className="fp-card__desc">{project.shortDescription}</p>
          <div className="fp-card__tags">
            {project.tags.map((tag) => (
              <span className="fp-card__tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProjectCard;
