import React from 'react';
import Button from '../../../sharedComponents/Button/Button';
import './CaseStudyLinks.css';

const CaseStudyLinks = ({ liveUrl, figmaUrl, loomUrl }) => {
  // Don't render anything if all three are null/empty
  if (!liveUrl && !figmaUrl && !loomUrl) return null;

  return (
    <div className="cs-links">
      {liveUrl && (
        <Button
          href={liveUrl}
          label="Live Project"
          icon="fa fa-external-link"
          iconPosition="before"
          variant="filled"
          theme="brand"
          size="sm"
          target="_blank"
          aria-label="View live project"
        />
      )}

      {figmaUrl && (
        <Button
          href={figmaUrl}
          label="View in Figma"
          icon="fa fa-pencil-square-o"
          iconPosition="before"
          variant="outlined"
          theme="brand"
          size="sm"
          target="_blank"
          aria-label="View Figma design"
        />
      )}

      {loomUrl && (
        <Button
          href={loomUrl}
          label="Watch Walkthrough"
          icon="fa fa-play-circle"
          iconPosition="before"
          variant="outlined"
          theme="dark"
          size="sm"
          target="_blank"
          aria-label="Watch walkthrough video"
        />
      )}
    </div>
  );
};

export default CaseStudyLinks;
