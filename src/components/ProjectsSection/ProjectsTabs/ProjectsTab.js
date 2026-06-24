import React from "react";
import { useNavigate } from "react-router-dom";

// FramerMotion
import { motion } from "framer-motion";

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
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 },
          }}
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
                    src={item.image}
                    alt={item.caption}
                  />
                </div>
              ) : (
                <img
                  className=" image-prop img-fluid"
                  src={item.image}
                  alt={item.caption}
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
              <h4>{item.title}</h4>
              <div className="cat">{item.caption}</div>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsTab;
