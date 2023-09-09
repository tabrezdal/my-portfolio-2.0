import React from "react";

const NavSocialMediaLink = ({ url, iconClass }) => {
  return (
    <li>
      <div
        onClick={() => window.open(url, "_blank")}
        style={{ cursor: "pointer" }}
      >
        <i className={iconClass}></i>
      </div>
    </li>
  );
};

export default NavSocialMediaLink;
