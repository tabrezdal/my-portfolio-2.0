import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariants, staggerContainerVariants } from '../../utils/animationVariants';
import { CertificationsData, TotalCertifications } from '../../Data/CertificationsData';
import './CertificationsSection.css';

const ProviderBadge = ({ provider }) => {
  const badges = {
    linkedin: { label: 'LinkedIn', color: '#0A66C2' },
    coursera:  { label: 'Coursera', color: '#0056D2' },
    certificate: { label: 'Certificate', color: '#555' },
  };
  const badge = badges[provider] || badges.certificate;
  return (
    <span className="cert-card__provider" style={{ '--provider-color': badge.color }}>
      {badge.label}
    </span>
  );
};

const CertificationsSection = () => {
  const [showAll, setShowAll] = useState(false);

  // Show featured first, then rest when expanded
  const featured = CertificationsData.filter(c => c.featured);
  const rest     = CertificationsData.filter(c => !c.featured);
  const visible  = showAll ? CertificationsData : featured;

  return (
    <section className="cert-section" id="certifications">
      <div className="section-container">

        <motion.div
          className="cert-section__header"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="cert-section__title">Continuous Learning</p>
          <h2 className="eyebrow-label">CERTIFICATIONS</h2>
          <p className="cert-section__subtitle">
            {TotalCertifications}+ certifications across AI, design, frontend engineering, and product management.
          </p>
        </motion.div>

        <motion.div
          className="cert-grid"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {visible.map((cert) => (
            <motion.div
              key={cert.id}
              className="cert-card"
              variants={fadeUpVariants}
            >
              <div className="cert-card__top">
                <ProviderBadge provider={cert.providerIcon} />
                <span className="cert-card__year">{cert.year}</span>
              </div>

              <p className="cert-card__name">{cert.name}</p>

              <div className="cert-card__skills">
                {cert.skills.map(skill => (
                  <span key={skill} className="cert-card__skill">{skill}</span>
                ))}
              </div>

              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-card__link"
                  aria-label={`View ${cert.name} certificate`}
                >
                  View Certificate →
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Show more / less toggle */}
        {rest.length > 0 && (
          <div className="cert-section__toggle">
            <button
              className="cert-section__toggle-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll
                ? `Show Less ↑` 
                : `Show All ${TotalCertifications}+ Certifications ↓`}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default CertificationsSection;
