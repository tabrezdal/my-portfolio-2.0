import React from "react";
import { SectionTitleHelper } from "../../Helpers/SectionTitleHelper";
import SectionTitle from "../../sharedComponents/sectionTitle/SectionTitle";
import SingleTechnologySection from "./SingleTechnologySection/SingleTechnologySection";
import { TechnologiesSectionData } from "./TechnologiesSectionData";

const TechnologiesSection = () => {
  return (
    <section className="pt-30" id="technologies">
      <div className="container">
        <SectionTitle sectionTitleText={SectionTitleHelper.technologies} />
        <div className="row">
          {TechnologiesSectionData?.FeatureTech.map((item, index) => (
            <SingleTechnologySection
              key={item.id}
              techName={item.techName}
              techLogo={item.techIcon}
              featured={false}
              index={index}
            />
          ))}
          {TechnologiesSectionData?.NormalTech.map((item, index) => (
            <SingleTechnologySection
              key={item.id}
              techName={item.techName}
              techLogo={item.techIcon}
              featured={false}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
