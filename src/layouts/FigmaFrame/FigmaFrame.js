import React from "react";

const FigmaFrame = ({ url }) => {
  return (
    <div>
      <iframe
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        className="FigmaFrame"
        height="550px"
        src={url}
        allowFullScreen
        title={url}
      ></iframe>
    </div>
  );
};

export default FigmaFrame;
