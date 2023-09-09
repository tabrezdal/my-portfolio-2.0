import React from "react";

const SocialMediaLinks = ({ url, iconClass }) => {
  return (
    <>
      <div
        onClick={() => window.open(url, "_blank")}
        style={{ cursor: "pointer" }}
      >
        <i className={iconClass} style={{ color: "white" }}></i>
      </div>
    </>
  );
};

export default SocialMediaLinks;
