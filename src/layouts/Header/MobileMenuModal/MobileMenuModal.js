import React from "react";
import Modal from "react-bootstrap/Modal";
import { TransitionGroup } from "react-transition-group";
import NavigationLink from "../../../sharedComponents/NavigationLink";
import { NavLinkData } from "../NavBarData";

export const MobileMenuModal = (props) => {
  const { show, handleClose } = props;

  return (
    <div>
      {/* <TransitionGroup
        transitionname="Mobile Menu Modal"
        transitionentertimeout={500}
        transitionleavetimeout={300}
      > */}
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
            {NavLinkData?.map((item) => (
              <NavigationLink
                key={item.id}
                linkTo={item.linkTo}
                name={item.name}
                handleClose={handleClose}
              />
            ))}
          </ul>
        </nav>
      </Modal>
      {/* </TransitionGroup> */}
    </div>
  );
};
