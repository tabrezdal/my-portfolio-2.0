import React, { useEffect } from "react";
import Swiper from "swiper";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./TestimonialSlider.css";
import TestimonialData from "./TestimonialData";
import ConstantHelper from "../../Helpers/ConstantHelper";

// FramerMotion
import { motion } from "framer-motion";
import { scaleUpNoOpacityVariants } from "../../utils/animationVariants";

const TestimonialSlider = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 2.3,
      loop: true,
      spaceBetween: 30,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 0,
        depth: 800,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: { delay: 5000 },
      modules: [EffectCoverflow, Pagination, Autoplay],
    });

    const queryResizer = () => {
      if (window.innerWidth < 724) swiper.params.slidesPerView = 2;
      if (window.innerWidth > 501) swiper.params.slidesPerView = 2;
      if (window.innerWidth > 724) swiper.params.slidesPerView = 2.3;
      if (window.innerWidth < 501) swiper.params.slidesPerView = 1.5;
      swiper.update();
    };

    window.onresize = queryResizer;
    queryResizer();
  }, []);

  return (
    <motion.div
      variants={scaleUpNoOpacityVariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5, delay: 0.3 }}
      className="testimonial-main"
    >
      <div className="row d-flex justify-content-center title">
        <div className="menu-content col-lg-12">
          <div className="title text-center">
            <h2 className="mb-10">{ConstantHelper.TestimonialSectionTitle}</h2>
          </div>
        </div>
      </div>
      <div id="craouselContainer" className="swiper-container">
        <div className="swiper-wrapper" id="slideHolder">
          {TestimonialData?.map((item, index) => (
            <div className="swiper-slide text-decoration-none" key={index}>
              <div className="ImgHolder">
                <img src={item.avatar} alt={item.name} width={80} height={80} loading="lazy" />
              </div>
              <a
                className="ContentHolder"
                href={item.sourceUrl}
                target="_blank"
              >
                <h3 className="reviewer-name-text">{item.name}</h3>
                <p className="location-text">{item.location}</p>
                <p className="review-text">{item.review}</p>
              </a>
            </div>
          ))}
        </div>
        <a
          className="write-review-button"
          href={ConstantHelper.goolgeReviewUrl}
          target="_blank"
        >
          {ConstantHelper.WriteReviewButton}
        </a>
        {/* <div className="swiper-pagination"></div> */}
      </div>
    </motion.div>
  );
};

export default TestimonialSlider;
