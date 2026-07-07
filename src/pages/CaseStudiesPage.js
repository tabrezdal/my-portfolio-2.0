import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import FeaturedProjectsData from '../Data/FeaturedProjectsData';
import Header from '../layouts/Header/Header';
import Footer from '../layouts/Footer/Footer';
import './CaseStudiesPage.css';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
};

const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } }
};

const CaseStudiesPage = () => {
  const shouldReduceMotion = useReducedMotion();
  const projects = FeaturedProjectsData;

  return (
    <>
      <Header />
      <main className="case-studies-page">

        {/* Page hero */}
        <motion.div
          className="case-studies-hero"
          variants={shouldReduceMotion ? {} : fadeUp}
          initial="hidden"
          animate="visible"
        >
          <p className="case-studies-hero__label">Work</p>
          <h1 className="case-studies-hero__title">Case Studies</h1>
          <p className="case-studies-hero__count">
            {projects.length} project{projects.length !== 1 ? 's' : ''} across
            design, engineering, and systems
          </p>
        </motion.div>

        {/* Grid */}
        {projects.length === 0 ? (
          <div className="case-studies-empty">No case studies yet.</div>
        ) : (
          <motion.div
            className="case-studies-grid"
            variants={shouldReduceMotion ? {} : staggerGrid}
            initial="hidden"
            animate="visible"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={shouldReduceMotion ? {} : fadeUp}
              >
                <Link
                  to={`/case-study/${project.slug}`}
                  className="case-study-card"
                  aria-label={`View case study: ${project.title}`}
                >
                  {/* Image wrapper — position:relative is critical */}
                  <div className="case-study-card__img-wrap">
                    {project.coverImage ? (
                      <img
                        src={project.coverImage}
                        alt={project.title}
                        className="case-study-card__img"
                        loading={index < 2 ? 'eager' : 'lazy'}
                        width={800}
                        height={340}
                      />
                    ) : (
                      <div className="case-study-card__img-placeholder" />
                    )}
                  </div>

                  {/* Card body */}
                  <div className="case-study-card__body">

                    {/* Category · Year */}
                    {(project.role || project.year) && (
                      <p className="case-study-card__meta">
                        {[project.role, project.year]
                          .filter(Boolean)
                          .join('  ·  ')}
                      </p>
                    )}

                    {/* Title */}
                    <h2 className="case-study-card__title">
                      {project.title}
                    </h2>

                    {/* Outcome metric */}
                    {(project.outcome || project.shortDescription) && (
                      <p className="case-study-card__outcome">
                        {project.outcome || project.shortDescription}
                      </p>
                    )}

                    {/* Tags — max 3 */}
                    {project.tags && project.tags.length > 0 && (
                      <div className="case-study-card__tags">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="case-study-card__tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}

      </main>
      <Footer />
    </>
  );
};

export default CaseStudiesPage;
