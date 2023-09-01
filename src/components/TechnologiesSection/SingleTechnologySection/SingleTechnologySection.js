import React from "react";

const SingleTechnologySection = ({ techName, techLogo, featured }) => {
  const FeaturedTechClass = "col-lg-4 col-md-4 col-sm-4 col-4";
  const NormalTechClass = "col-lg-2 col-md-3 col-sm-3 col-4";
  const currentClass = `${
    featured === true ? FeaturedTechClass : NormalTechClass
  }`;
  return (
    <div className={currentClass}>
      <div className="single-services">
        <span>
          <img draggable="false" src={techLogo} alt={techName} />
        </span>

        <a href="#">
          <h4>{techName}</h4>
        </a>
      </div>
    </div>
  );
};

export default SingleTechnologySection;
