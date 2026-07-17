import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariants, staggerContainerVariants } from '../../utils/animationVariants';
import { CertificationsData, TotalCertifications } from '../../Data/CertificationsData';
import Button from '../../sharedComponents/Button/Button';
import './CertificationsSection.css';

/* ── Provider icon set — real brand marks, no emoji ── */
const LinkedInIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.37 4.25 5.44v6.3zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
  </svg>
);

const CourseraIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.4c-5.3 0-9.6 4.3-9.6 9.6 0 5.3 4.3 9.6 9.6 9.6 2.6 0 5-1.04 6.75-2.86l-2.02-1.94a6.9 6.9 0 0 1-4.73 1.87 6.63 6.63 0 1 1 0-13.26c1.83 0 3.5.72 4.73 1.9l2.02-1.96A9.55 9.55 0 0 0 12 2.4z"/>
  </svg>
);

const CertificateIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="6" />
    <path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" />
  </svg>
);

const AwardBadgeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8.2 13 6.5 21.5 12 18.3l5.5 3.2L15.8 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

const ChevronIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const PROVIDER_META = {
  linkedin:    { label: 'LinkedIn Learning', color: '#0A66C2', icon: <LinkedInIcon /> },
  coursera:    { label: 'Coursera',          color: '#0056D2', icon: <CourseraIcon /> },
  certificate: { label: 'Certificate',       color: '#6B7280', icon: <CertificateIcon /> },
};

const ProviderBadge = ({ provider }) => {
  const meta = PROVIDER_META[provider] || PROVIDER_META.certificate;
  return (
    <span className="cert-card__provider" style={{ '--provider-color': meta.color }}>
      <span className="cert-card__provider-icon" aria-hidden="true">{meta.icon}</span>
      {meta.label}
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
          <div className="cert-section__header-text">
            <span className="cert-section__icon" aria-hidden="true">
              <AwardBadgeIcon />
            </span>
            <p className="cert-section__eyebrow">Continuous Learning</p>
            <h2 className="cert-section__title">Certifications</h2>
            <p className="cert-section__subtitle">
              {TotalCertifications}+ certifications across AI, design, frontend engineering, and product management.
            </p>
          </div>

          <div className="cert-section__stat" aria-hidden="true">
            <span className="cert-section__stat-value">{TotalCertifications}</span>
            <span className="cert-section__stat-plus">+</span>
            <span className="cert-section__stat-label">Certifications<br />Earned</span>
          </div>
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
              style={{ '--provider-color': (PROVIDER_META[cert.providerIcon] || PROVIDER_META.certificate).color }}
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

              {cert.url ? (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-card__link"
                  aria-label={`View ${cert.name} certificate`}
                >
                  View Certificate
                  <span className="cert-card__link-icon" aria-hidden="true"><ExternalLinkIcon /></span>
                </a>
              ) : (
                <span className="cert-card__link cert-card__link--static">
                  Certificate on file
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Show more / less toggle */}
        {rest.length > 0 && (
          <div className="cert-section__toggle">
            <Button
              label={showAll ? 'Show Less' : `Show All ${TotalCertifications}+ Certifications`}
              icon={<ChevronIcon />}
              iconPosition="after"
              variant="outlined"
              theme="dark"
              size="md"
              onClick={() => setShowAll(!showAll)}
              className={`cert-toggle-btn${showAll ? ' cert-toggle-btn--expanded' : ''}`}
            />
          </div>
        )}

      </div>
    </section>
  );
};

export default CertificationsSection;
