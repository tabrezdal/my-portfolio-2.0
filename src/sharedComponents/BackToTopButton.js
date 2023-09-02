import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const BackToTopButton = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  var Scroll = require("react-scroll");
  var scroll = Scroll.animateScroll;

  const ScrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setShowBackToTop(window.pageYOffset > 400)
      );
    }
  }, []);

  return (
    <Link
      id="back-to-top"
      onClick={ScrollToTop}
      smooth={true}
      duration={500}
      delay={300}
      to=""
      className={`${showBackToTop ? "show" : null}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="3em"
        viewBox="0 0 512 512"
      >
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM377 271c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-87-87-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 167c9.4-9.4 24.6-9.4 33.9 0L377 271z" />
      </svg>
    </Link>
  );
};

export default BackToTopButton;
