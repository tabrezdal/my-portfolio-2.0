import React from "react";
import ImageHelper from "../../Helpers/ImageHelper";

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
            <h6>This is me</h6>
            <h1>Tabrez Dal</h1>
            <p className="text-justify">
              a Software Developer and UI/UX Designer with over 4 years of
              experience, holding a Bachelor's Degree in Computer Science and
              Engineering
            </p>
            <a
              href="https://drive.google.com/file/d/1wcoM6E-iDev5azyzov2dNS9CrjBLXf2q/view?usp=drive_link"
              className="primary-btn"
            >
              Download CV
            </a>
          </div>
          <div className="col-lg-1 col-md-1"></div>
          <div className="col-lg-5 col-md-5 banner-right d-flex align-self-end">
            <img
              draggable="false"
              className="img-fluid"
              src={ImageHelper.HeroImage}
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
