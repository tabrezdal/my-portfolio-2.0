import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";

import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import FigmaFrame from "../layouts/FigmaFrame/FigmaFrame";
import UiUxProjectPageData from "../Data/UiUxPageData/UiUxProjectPageData";
import TagBadges from "../components/UiUxPageComps/TagBadges/TagBadges";
import ShareSocialButtonsGroup from "../components/UiUxPageComps/ShareSocialButtonsGroup/ShareSocialButtonsGroup";
import ButtonsGroup from "../components/UiUxPageComps/ButtonsGroup/ButtonsGroup";
import UiUxDescription from "../components/UiUxPageComps/UiUxDescription/UiUxDescription";
import Header from "../layouts/Header/Header";
import Footer from "../layouts/Footer/Footer";

const UiUxProjectPage = () => {
  const { id } = useParams();
  // const location = useLocation();

  // console.log("Loc URL", location.pathname.split("/")[1]);

  const [pageContentProps, setPageContentProps] = useState(null);
  const [breadcrumbProps, setBreadcrumbProps] = useState(null);

  const item = UiUxProjectPageData[id];

  useEffect(() => {
    if (id) {
      if (item) {
        setBreadcrumbProps({
          pageName: item?.pageName,
          menuName: item?.menuName,
        });
        setPageContentProps({
          pageName: item?.pageName,
          menuName: item?.menuName,
          description: item?.description,
          FigmaDesignLink: item?.ProjectLinks?.FigmaDesignLink,
          FigmaDesignEmmbedLink: item?.ProjectLinks?.FigmaDesignEmmbedLink,
          FigmaPrototypeLink: item?.ProjectLinks?.FigmaPrototypeLink,
          FigmaPrototypeEmbbedLink:
            item?.ProjectLinks?.FigmaPrototypeEmbbedLink,
          buttonsGroup: item?.buttonsGroup,
          tags: item?.tags,
          socialShareUrl: item?.socialShareUrl,
        });
      }
    }
  }, [id, item]);

  // console.log("+++++", pageContentProps?.FigmaDesignLink);
  useEffect(() => {
    document.title = "Ui/Ux Project | TZ Creation";
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div style={{ color: "#777777" }}>
      <Header />
      <Breadcrumb
        parentpageName="Home"
        currentPageName="Ui/Ux Projects"
        breadcrumbProps={breadcrumbProps}
      />
      <section className="services-area section-gap" id="FigmaPage">
        <div>
          <div className="row d-flex">
            <div className="menu-content col-lg-12">
              <div className="title">
                <h1 className="mb-4">{pageContentProps?.pageName}</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 px-0">
                <FigmaFrame url={pageContentProps?.FigmaDesignEmmbedLink} />
              </div>
            </div>
            <div className="row py-4">
              <div className="col-sm-12 col-md-9 description-section">
                <UiUxDescription pageContentProps={pageContentProps} />
              </div>
              <div className="col-sm-12 col-md-3 details-section">
                {pageContentProps?.buttonsGroup && (
                  <ButtonsGroup pageContentProps={pageContentProps} />
                )}
                {pageContentProps?.socialShareUrl && (
                  <ShareSocialButtonsGroup
                    url={pageContentProps?.socialShareUrl}
                  />
                )}
                {pageContentProps?.tags && (
                  <TagBadges pageContentProps={pageContentProps} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UiUxProjectPage;
