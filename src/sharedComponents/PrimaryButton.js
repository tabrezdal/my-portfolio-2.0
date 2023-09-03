import React from "react";

const PrimaryButton = ({ url, name, iconClass }) => {
  return (
    <a href={url} className="primary-btn">
      {name} &nbsp;<i class={iconClass}></i>
    </a>
  );
};

export default PrimaryButton;
