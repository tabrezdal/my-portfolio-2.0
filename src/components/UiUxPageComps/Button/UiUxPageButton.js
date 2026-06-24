import React from "react";

const UiUxPageButton = ({ url, name }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="primary-btn black-btn text-uppercase"
    >
      {name}
    </a>
  );
};

export default UiUxPageButton;
