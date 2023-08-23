import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { MobileMenuModal } from "./MobileMenuModal/MobileMenuModal";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="">
      <Button variant="primary" id="mobile-nav-toggle" onClick={handleShow}>
        <i className="lnr lnr-menu"></i>
      </Button>
      <MobileMenuModal handleClose={handleClose} show={show} />
      <header id="header">
        <div className="container main-menu">
          <div className="align-items-center justify-content-between d-flex">
            <nav id="nav-menu-container">
              <ul className="nav-menu">
                <li>
                  <a href="#intro">Intro</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#tools">Tools</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
              </ul>
            </nav>

            <div id="logo">
              <a href="index.html">
                <h2 style={{ color: "#04091e" }}>Tabrez Dal</h2>
              </a>
            </div>

            <nav id="nav-menu-container">
              <ul className="nav-menu nav-menu-right">
                <li>
                  <a href="https://www.facebook.com/tabrezdal/">
                    <i className="fa fa-facebook fa-2x fa-fw"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/zerbatz/">
                    <i className="fa fa-instagram fa-2x fa-fw"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/TabrezDal">
                    <i className="fa fa-twitter fa-2x fa-fw"></i>
                  </a>
                </li>
                <li>
                  <a href="https://dribbble.com/tabrezdal">
                    <i className="fa fa-dribbble fa-2x fa-fw"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.behance.net/tabrezdal">
                    <i className="fa fa-behance fa-2x fa-fw"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/tabrezdal">
                    <i className="fa fa-github fa-2x fa-fw"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/tabrezdal/">
                    <i className="fa fa-linkedin  fa-2x fa-fw"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
