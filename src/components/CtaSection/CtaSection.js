import React from "react";
import ImageHelper from "../../Helpers/ImageHelper";
import "./style.css";

const CtaSection = () => {
  return (
    <section class="ftco-hireme">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-md-8 col-lg-8 d-flex align-items-center">
            <div class="w-100 py-4">
              <h2>Let's take the next step towards excellence!</h2>
              <p>
                I'm excited to explore new opportunities and collaborate on
                innovative projects. Whether you're interested in working with
                me, discussing potential job openings, or simply want to
                connect, I'd love to hear from you.
              </p>

              <a href="mailto:tabrez.dal@gmail.com" class="boxed-btn-02 blank">
                Contact me
              </a>
            </div>
          </div>
          <div class="col-md-3 col-lg-3 d-flex align-items-end">
            <img
              src={ImageHelper.TzInSuit}
              class="img-fluid"
              alt="Tabrez in Black Suit"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
