import React, { useEffect } from "react";

import Lottie from "react-lottie";
import PageNotFoundAnimation from "../Assets/LottieFiles/404-animation.json";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

const NoPageFound = () => {
  document.title = "404 - Page Not Found | TZ Creation";
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: PageNotFoundAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Lottie options={defaultOptions} height={800} width={800} />
      <Footer />
    </>
  );
};

export default NoPageFound;
