import React from "react";
import PrimaryButton from "../../sharedComponents/PrimaryButton";
import { HeroSectionData } from "./HeroSectionData";

const HeroSection = () => {
  return (
    <section className="banner-area pb-40" id="intro">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div
            className="col-lg-6 col-md-6 banner-left"
            style={{ textAlign: "left" }}
          >
            <br />
            <br />
            <h6>{HeroSectionData?.introStatingLine}</h6>
            <h1>{HeroSectionData?.name}</h1>
            <p className="text-justify">{HeroSectionData?.introLine}</p>
            <PrimaryButton
              name={HeroSectionData?.buttonData.name}
              url={HeroSectionData?.buttonData.url}
              iconClass="fa fa-download"
            />
          </div>
          <div className="col-lg-1 col-md-1"></div>
          <div className="col-lg-5 col-md-5 banner-right d-flex align-self-end">
            <img
              draggable="false"
              className="img-fluid"
              src={HeroSectionData?.heroImage}
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
