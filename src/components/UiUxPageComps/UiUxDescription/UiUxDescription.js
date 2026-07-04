import React from "react";

const UiUxDescription = ({ pageContentProps }) => {
  return (
    <>
      <div className="title">
        <h2 className="mb-2">Description</h2>
      </div>
      {pageContentProps?.description?.map((desc, index) => (
        <div key={index}>
          <h3 className="mb-2">{desc?.descriptionTitle}</h3>
          <p className="text-justify" style={{ textAlign: "justify" }}>
            {desc?.descriptionContent}
          </p>
        </div>
      ))}
    </>
  );
};

export default UiUxDescription;
