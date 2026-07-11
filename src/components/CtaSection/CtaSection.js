import React from "react";
import ImageHelper from "../../Helpers/ImageHelper";
import "./style.css";
import Button from "../../sharedComponents/Button/Button";

// FramerMotion
import { motion } from "framer-motion";
import { fadeLeftExtraLargeVariants, fadeUpExtraLargeVariants } from "../../utils/animationVariants";

const CtaSection = () => {
  return (
    <section className="ftco-hireme">
      <div className="container">
        <div className="row justify-content-between">
          <motion.div
            variants={fadeLeftExtraLargeVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-md-8 col-lg-8 d-flex align-items-center"
          >
            <div className="w-100 py-4">
              <span>Let's take the next step towards excellence!</span>
              <p>
                I'm excited to explore new opportunities and collaborate on
                innovative projects. Whether you're interested in working with
                me, discussing potential job openings, or simply want to
                connect, I'd love to hear from you.
              </p>

              <Button
                href="mailto:tabrez.dal@gmail.com"
                label="Contact me"
                icon="fa fa-envelope"
                iconPosition="after"
                variant="outlined"
                theme="light"
                size="md"
              />
            </div>
          </motion.div>
          <motion.div
            variants={fadeUpExtraLargeVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-md-3 col-lg-3 d-flex align-items-end"
          >
            <img
              src={ImageHelper.TzInSuit}
              className="img-fluid"
              alt="Tabrez in Black Suit"
              width={261}
              height={347}
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
