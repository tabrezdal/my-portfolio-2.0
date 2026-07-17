import React from "react";
import SectionTitle from "../../sharedComponents/sectionTitle/SectionTitle";
import FeaturedProjectCard from "./FeaturedProjectCard";
import FeaturedProjectsData from "../../Data/FeaturedProjectsData";

const FeaturedProjectsSection = () => {
  return (
    <section className="section-gap featured-projects-section" id="featured-work">
      <div className="section-container">
        <SectionTitle sectionTitleText="Featured Work" />
        <div className="row mt-30">
          {FeaturedProjectsData.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
