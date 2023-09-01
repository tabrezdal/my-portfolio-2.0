import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import { SectionTitleHelper } from "../../Helpers/SectionTitleHelper";
import NavigationLink from "../../sharedComponents/NavigationLink";
import NavSocialMediaLink from "../../sharedComponents/NavSocialMediaLink";
import { MobileMenuModal } from "./MobileMenuModal/MobileMenuModal";
import { NavLinkData, NavSocialMediaLinkData } from "./NavBarData";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [headerShadow, setHeaderShadow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setHeaderShadow(window.pageYOffset > 200)
      );
    }
  }, []);

  const location = useLocation();

  const NavigationView = () => {
    if (location.pathname === "/") {
      return (
        <nav id="nav-menu-container">
          <ul className="nav-menu">
            {NavLinkData?.map((item) => (
              <NavigationLink
                key={item.id}
                linkTo={item.linkTo}
                name={item.name}
              />
            ))}
          </ul>
        </nav>
      );
    } else {
      return (
        <nav id="nav-menu-container">
          <ul className="nav-menu align-items-centre back-button">
            <Link to="/">
              <i class="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;
              {SectionTitleHelper.backButton}
            </Link>
          </ul>
        </nav>
      );
    }
  };

  useEffect(() => {
    NavigationView();
  });

  return (
    <div className="">
      <Button variant="primary" id="mobile-nav-toggle" onClick={handleShow}>
        <i className="lnr lnr-menu"></i>
      </Button>
      <MobileMenuModal handleClose={handleClose} show={show} />
      <header id="header" className={`${headerShadow ? "headerShadow" : ""}`}>
        <div className="container main-menu">
          <div className="align-items-center justify-content-between d-flex">
            {NavigationView()}

            <div id="logo">
              <Link to="/">
                <h2 style={{ color: "#04091e" }}>
                  {SectionTitleHelper.headerSectionTitle}
                </h2>
              </Link>
            </div>

            <nav id="nav-menu-container">
              <ul className="nav-menu nav-menu-right">
                {NavSocialMediaLinkData?.map((item) => (
                  <NavSocialMediaLink
                    key={item.id}
                    url={item.url}
                    iconClass={item.iconClass}
                  />
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
