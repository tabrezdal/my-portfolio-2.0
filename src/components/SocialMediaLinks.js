import React from "react";

const SocialMediaLinks = ({ url, icon }) => {
  return (
    <>
      <div
        onClick={() => window.open(url, "_blank")}
        style={{ cursor: "pointer" }}
      >
        <i className={icon} style={{ color: "white" }}></i>
      </div>
    </>
  );
};

export default SocialMediaLinks;
