import React, { useEffect } from "react";
import { Helmet } from 'react-helmet-async';

import Lottie from "lottie-react";
import PageNotFoundAnimation from "../Assets/LottieFiles/404-animation.json";
import Footer from "../layouts/Footer/Footer";
import Header from "../layouts/Header/Header";

const NoPageFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,

    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
      <Lottie style={{ height: 800, width: 800 }} animationData={PageNotFoundAnimation} />
      <Footer />
    </>
  );
};

export default NoPageFound;
