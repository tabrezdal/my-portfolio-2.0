import React from "react";
import SocialMediaLinks from "../components/SocialMediaLinks";

const Footer = () => {
  return (
    <>
      <footer className="footer-area section-gap" align="Center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="single-footer-widget">
                <h4>Connect with me</h4>
              </div>
              <div className="d-flex justify-content-center">
                <SocialMediaLinks
                  url="https://www.facebook.com/tabrezdal/"
                  icon="fa fa-facebook fa-2x fa-fw"
                />
                <SocialMediaLinks
                  url="https://www.instagram.com/zerbatz/"
                  icon="fa fa-instagram fa-2x fa-fw"
                />
                <SocialMediaLinks
                  url="https://twitter.com/TabrezDal"
                  icon="fa fa-twitter fa-2x fa-fw"
                />
                <SocialMediaLinks
                  url="https://dribbble.com/tabrezdal"
                  icon="fa fa-dribbble fa-2x fa-fw"
                />
                <SocialMediaLinks
                  url="https://www.behance.net/tabrezdal"
                  icon="fa fa-behance fa-2x fa-fw"
                />
                <SocialMediaLinks
                  url="https://github.com/tabrezdal"
                  icon="fa fa-github fa-2x fa-fw"
                />
                <SocialMediaLinks
                  url="https://www.linkedin.com/in/tabrezdal/"
                  icon="fa fa-linkedin fa-2x fa-fw"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
