import React from "react";
import PrimaryButton from "../../sharedComponents/PrimaryButton";
import { AboutSectionData } from "./AboutSectionData";

const AboutSection = () => {
  return (
    <section className="home-about-area pt-30" id="about">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-4 col-md-4 home-about-left">
            <img
              draggable="false"
              className="img-fluid"
              src={AboutSectionData?.sectionImage}
              alt=""
            />
          </div>
          <div className="col-lg-7 col-md-7 home-about-right">
            <h1 className="text-uppercase mb-2">
              {AboutSectionData?.sectionTitle}
            </h1>
            {AboutSectionData?.description?.map((item) => (
              <p className="text-justify" key={item.id}>
                {item.desc}
              </p>
            ))}

            <PrimaryButton
              name={AboutSectionData?.buttonData?.name}
              url={AboutSectionData?.buttonData?.url}
              iconClass="fa fa-linkedin"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
