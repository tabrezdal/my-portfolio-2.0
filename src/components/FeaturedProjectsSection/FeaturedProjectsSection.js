import React from "react";
import SectionTitle from "../../sharedComponents/sectionTitle/SectionTitle";
import FeaturedProjectCard from "./FeaturedProjectCard";
import FeaturedProjectsData from "../../Data/FeaturedProjectsData";

// CHANGE THIS TO TEST DIFFERENT VARIANTS: 'A' | 'B' | 'C'
const OUTCOME_VARIANT = 'A';

const FeaturedProjectsSection = () => {
  return (
    <section className={`section-gap featured-projects-section featured-projects--variant-${OUTCOME_VARIANT.toLowerCase()}`} id="featured-work">
      <div className="container">
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
