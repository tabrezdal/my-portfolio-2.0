import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = (props) => {
  const { parentpageName, currentPageName, breadcrumbProps } = props;
  return (
    <section className="relative about-banner">
      <div className="overlay overlay-bg"></div>
      <div className="section-container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="about-content col-lg-12">
            <h1 className="text-white">{currentPageName}</h1>
            <p className="text-white link-nav">
              <Link to="/">{parentpageName} </Link>
              {breadcrumbProps?.menuName === true ? (
                <>
                  <span className="lnr lnr-arrow-right"></span>
                  <Link to="/"> {breadcrumbProps?.menuName}</Link>
                </>
              ) : (
                <>
                  <span className="lnr lnr-arrow-right"></span>
                  <Link to="/"> {currentPageName}</Link>
                </>
              )}
              {breadcrumbProps?.pageName && (
                <>
                  <span className="lnr lnr-arrow-right"></span>
                  <Link to="/"> {breadcrumbProps?.pageName}</Link>
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
