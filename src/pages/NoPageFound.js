import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async';

import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";

const NoPageFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Page Not Found | Tabrez Dal</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Header />
      <main id="main-content">
        <div className="not-found-animation">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="not-found-svg"
            aria-hidden="true"
          >
            {/* Outer circle */}
            <circle cx="100" cy="100" r="80" fill="none" stroke="#0378b8" strokeWidth="3" opacity="0.2" />
            {/* Inner circle */}
            <circle cx="100" cy="100" r="55" fill="none" stroke="#0378b8" strokeWidth="2" opacity="0.4" />
            {/* 404 text */}
            <text
              x="100"
              y="95"
              textAnchor="middle"
              fontSize="36"
              fontWeight="700"
              fill="#0378b8"
              fontFamily="sans-serif"
            >
              404
            </text>
            <text
              x="100"
              y="120"
              textAnchor="middle"
              fontSize="11"
              fill="#888888"
              fontFamily="sans-serif"
              letterSpacing="2"
            >
              PAGE NOT FOUND
            </text>
          </svg>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default NoPageFound;
