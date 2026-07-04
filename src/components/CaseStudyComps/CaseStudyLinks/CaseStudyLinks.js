import React from 'react';
import './CaseStudyLinks.css';

const CaseStudyLinks = ({ liveUrl, figmaUrl, loomUrl }) => {
  // Don't render anything if all three are null/empty
  if (!liveUrl && !figmaUrl && !loomUrl) return null;

  return (
    <div className="cs-links">
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cs-links__btn cs-links__btn--live"
          aria-label="View live project"
        >
          <i className="fa fa-external-link" aria-hidden="true" />
          <span>Live Project</span>
        </a>
      )}

      {figmaUrl && (
        <a
          href={figmaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cs-links__btn cs-links__btn--figma"
          aria-label="View Figma design"
        >
          <i className="fa fa-pencil-square-o" aria-hidden="true" />
          <span>View in Figma</span>
        </a>
      )}

      {loomUrl && (
        <a
          href={loomUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="cs-links__btn cs-links__btn--loom"
          aria-label="Watch walkthrough video"
        >
          <i className="fa fa-play-circle" aria-hidden="true" />
          <span>Watch Walkthrough</span>
        </a>
      )}
    </div>
  );
};

export default CaseStudyLinks;
