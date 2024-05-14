import React from "react";
import ImageHelper from "../../Helpers/ImageHelper";
import "./style.css";

// FramerMotion
import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section className="ftco-hireme">
      <div className="container">
        <div className="row justify-content-between">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-md-8 col-lg-8 d-flex align-items-center"
          >
            <div className="w-100 py-4">
              <h2>Let's take the next step towards excellence!</h2>
              <p>
                I'm excited to explore new opportunities and collaborate on
                innovative projects. Whether you're interested in working with
                me, discussing potential job openings, or simply want to
                connect, I'd love to hear from you.
              </p>

              <a href="mailto:tabrez.dal@gmail.com" className="boxed-btn-02 blank">
                Contact me &nbsp;<i className="fa fa-envelope"></i>
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-md-3 col-lg-3 d-flex align-items-end"
          >
            <img
              src={ImageHelper.TzInSuit}
              className="img-fluid"
              alt="Tabrez in Black Suit"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
