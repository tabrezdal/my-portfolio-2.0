import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
// import ReactCSSTransitionGroup from "react-transition-group";
import { TransitionGroup } from "react-transition-group";

export const MobileMenuModal = (props) => {
  const { show, handleClose } = props;
  return (
    <div>
      <TransitionGroup
        transitionname="Mobile Menu Modal"
        transitionentertimeout={500}
        transitionleavetimeout={300}
      >
        <Modal show={show} onHide={handleClose} id="mobile-nav-menu-sidebar">
          <nav
            id="mobile-nav"
            style={{
              height: "100vh",
              background: "rgba(0, 0, 0, 0.50)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.17)",
            }}
          >
            <ul className="" style={{ touchAction: "pan-y" }} id="">
              <li>
                <Link to="#intro">Intro</Link>
              </li>
              <li>
                <Link to="#about">About</Link>
              </li>
              <li>
                <Link to="#skills">Skills</Link>
              </li>
              <li>
                <Link to="#tools">Tools</Link>
              </li>
              <li>
                <Link to="#projects">Projects</Link>
              </li>
            </ul>
          </nav>
        </Modal>
      </TransitionGroup>
    </div>
  );
};
