import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

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
    window.scrollTo(0, 0);
  }, [id]);

  // Fallback to ensure meta tags are set for lazy-loaded routes
  useEffect(() => {
    if (pageContentProps?.pageName) {
      const pageTitle = `${pageContentProps.pageName} | UI/UX Design | Tabrez Dal`;
      const description = pageContentProps?.description?.[0]?.descriptionContent?.slice(0, 155) || "UI/UX design projects by Tabrez Dal — product design, design systems, and user research.";
      const canonicalUrl = `https://tabrezdal.com/ui-ux-project/${id}`;
      
      document.title = pageTitle;
      
      const setDescription = (content) => {
        let meta = document.querySelector('meta[name="description"]');
        if (!meta) {
          meta = document.createElement('meta');
          meta.name = 'description';
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      };

      const setCanonical = (href) => {
        let link = document.querySelector('link[rel="canonical"]');
        if (!link) {
          link = document.createElement('link');
          link.rel = 'canonical';
          document.head.appendChild(link);
        }
        link.setAttribute('href', href);
      };

      const setOGMeta = (property, content) => {
        let meta = document.querySelector(`meta[property="${property}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('property', property);
          document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
      };

      setDescription(description);
      setCanonical(canonicalUrl);
      setOGMeta('og:title', `${pageContentProps.pageName} | Tabrez Dal`);
      setOGMeta('og:description', description);
      setOGMeta('og:url', canonicalUrl);
      setOGMeta('og:type', 'article');
    }
  }, [id, pageContentProps]);

  return (
    <div style={{ color: "#777777" }}>
      <Helmet defer={false}>
        <title>
          {pageContentProps?.pageName
            ? `${pageContentProps.pageName} | UI/UX Design | Tabrez Dal` 
            : "UI/UX Projects | Tabrez Dal"}
        </title>
        <meta
          name="description"
          content={
            pageContentProps?.description?.[0]?.descriptionContent
              ? pageContentProps.description[0].descriptionContent.slice(0, 155)
              : "UI/UX design projects by Tabrez Dal — product design, design systems, and user research."
          }
        />
        <meta
          property="og:title"
          content={pageContentProps?.pageName ? `${pageContentProps.pageName} | Tabrez Dal` : "UI/UX Projects | Tabrez Dal"}
        />
        <meta
          property="og:description"
          content={pageContentProps?.description?.[0]?.descriptionContent?.slice(0, 155) || ""}
        />
        <meta property="og:url" content={`https://tabrezdal.com/ui-ux-project/${id}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageContentProps?.pageName || "UI/UX Projects"} />
        <link rel="canonical" href={`https://tabrezdal.com/ui-ux-project/${id}`} />
      </Helmet>
      <Header />
      <main id="main-content">
        <Breadcrumb
          parentpageName="Home"
          currentPageName={pageContentProps?.pageName || "UI/UX Project"}
          breadcrumbProps={breadcrumbProps}
        />
        <section className="services-area section-gap" id="FigmaPage">
          <div>
            <div className="row d-flex">
              <div className="menu-content col-lg-12">
                <div className="title">
                  <h2 className="mb-4">{pageContentProps?.pageName}</h2>
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
      </main>
      <Footer />
    </div>
  );
};

export default UiUxProjectPage;
