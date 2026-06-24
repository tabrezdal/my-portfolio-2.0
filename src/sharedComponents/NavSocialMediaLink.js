import React from "react";

const NavSocialMediaLink = ({ url, iconClass }) => {
  return (
    <li>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${iconClass.replace('fa-', '').replace(' ', ' ')} profile`}
      >
        <i className={iconClass}></i>
      </a>
    </li>
  );
};

export default NavSocialMediaLink;
