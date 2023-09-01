import React from "react";
import "./style.css";

const ShareSocialButton = ({ icon, platform, url }) => {
  const iconClass = `fa fa-${icon} fa-fw`;

  const copyToClipboard = () => {
    // Get the text field
    var copyText = url;

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);

    // Alert the copied text
    alert("Copied the text: " + copyText);
  };

  return (
    <>
      {platform === "copy" ? (
        <div
          className="ShareSocialButton"
          onClick={(url) => copyToClipboard(url)}
        >
          <i className={iconClass}></i>
          <p className="social-platform">{platform}</p>
        </div>
      ) : (
        <div
          className="ShareSocialButton"
          onClick={() => window.open(url, "_blank")}
        >
          <i className={iconClass}></i>
          <p className="social-platform">{platform}</p>
        </div>
      )}
    </>
  );
};

export default ShareSocialButton;
