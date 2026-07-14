import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProjectsTab.css";

// FramerMotion
import { motion } from "framer-motion";
import { fadeUpMassiveVariants } from "../../../utils/animationVariants";

// Image Fallback
import ImageHelper from "../../../Helpers/ImageHelper";

const ProjectsTab = (props) => {
  const navigate = useNavigate();
  const redirectToUiUxProjectPage = (urlSuffix) => {
    navigate(`/ui-ux-project/${urlSuffix}`);
  };

  const { data, onlyPics } = props;
  return (
    <div className="row grid">
      {data.map((item, index) => (
        <motion.div
          variants={fadeUpMassiveVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.2 * index }}
          className={
            item.fullWidth === true
              ? "single-portfolio col-sm-12 all web mb-3"
              : "single-portfolio col-sm-4 all web mb-3"
          }
          key={index}
          onClick={
            item?.hasInnerPage === true
              ? () => redirectToUiUxProjectPage(item.urlSuffix)
              : undefined
          }
        >
          <div className="relative mb-2">
            <div className="thumb">
              <div className="overlay overlay-bg" />
              {item.fullWebSS === true ? (
                <div className="screen">
                  <img
                    className="image-prop img-fluid"
                    src={item.image || ImageHelper.ProjectPlaceholder}
                    alt={item.image ? item.caption : `${item.title} — image coming soon`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ) : (
                <img
                  className=" image-prop img-fluid"
                  src={item.image || ImageHelper.ProjectPlaceholder}
                  alt={item.image ? item.caption : `${item.title} — image coming soon`}
                  loading="lazy"
                  decoding="async"
                />
              )}
            </div>
            {/* <a href={item.image} className="img-pop-up">
              <div className="middle">
                <div className="text align-self-center d-flex">
                  <img src={IconHelper.expand} alt={item.caption} />
                </div>
              </div>
            </a> */}
          </div>
          {onlyPics === false && (
            <div className="p-inner">
              <div className="project-title">{item.title}</div>
              <div className="cat">{item.caption}</div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsTab;
