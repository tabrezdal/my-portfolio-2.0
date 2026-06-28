import React from "react";
import { Badge } from "react-bootstrap";

const TagBadges = ({ pageContentProps }) => {
  return (
    <div>
      <p className="mb-2" className="side-section-titles">Tags</p>
      <div className="d-flex gap-2 flex-wrap">
        {pageContentProps?.tags.map((item) => (
          <Badge bg="secondary" key={item.tag}>
            {item.tag}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default TagBadges;
