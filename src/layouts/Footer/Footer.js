import React from "react";
import { SectionTitleHelper } from "../../Helpers/SectionTitleHelper";
import BackToTopButton from "../../sharedComponents/BackToTopButton";
import SocialMediaLinks from "../../sharedComponents/SocialMediaLinks";
import { FooterSocialMediaLinksData } from "./FooterSocialMediaLinksData";

const Footer = () => {
  return (
    <>
      <BackToTopButton />
      <footer className="footer-area py-2" align="Center">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="d-flex space-between">
                {FooterSocialMediaLinksData?.map((item) => (
                  <SocialMediaLinks
                    url={item.url}
                    icon={item.iconClass}
                    key={item.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
