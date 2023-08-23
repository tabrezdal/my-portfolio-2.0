import React, { useState, useRef, useContext } from "react";
import { AccordionContext } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import ServiceMenuData from "../../../components/NavBar/ServiceMenuData";

function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      style={{
        backgroundColor: "transparent",
        padding: "10px 22px 10px 15px",
        color: isCurrentEventKey ? "#8490ff" : "#fff",
        fontSize: "13px",
        textTransform: "uppercase",
        overflow: "hidden",
        padding: "10px 22px 10px 15px",
        position: "relative",
        textDecoration: "none",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        outline: "none",
        fontWeight: isCurrentEventKey ? "600" : "400",
        border: "none",
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export const MobileMenuAccordian = (props) => {
  const { handleClose } = props;
  const navigate = useNavigate();

  const [menu, setMenu] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (!ref.current.contains(e.target)) {
      setMenu(false);
    }
  };

  return (
    <>
      <li className="menu-has-children" ref={ref}>
        <Link
          to="#"
          onClick={() => setMenu(!menu)}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>Services</span>
          <i className="lnr lnr-chevron-down"></i>
        </Link>

        {ServiceMenuData?.map((menuItem, index) => (
          <Accordion
            defaultActiveKey="0"
            style={{
              paddingLeft: "12px",
              display: "none",
              ...(menu && { display: "block" }),
            }}
          >
            <Card.Header>
              <ContextAwareToggle eventKey={index}>
                <span>{menuItem.mainMenu}</span>
                <i className="lnr lnr-chevron-down"></i>
              </ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse
              eventKey={index}
              style={{
                backgroundColor: "transparent",
                color: "#fff",
                color: "#fff",
                fontSize: "13px",
                textTransform: "uppercase",
                overflow: "hidden",
                padding: "10px 22px 10px 0px",
                position: "relative",
                textDecoration: "none",
                width: "100%",
                outline: "none",
                fontWeight: "400",
              }}
            >
              <Card.Body>
                {menuItem.subMenuGroup.map((menuSubItem, index) => (
                  <li
                    onClick={() => {
                      setMenu(false);
                      handleClose();
                      navigate(menuSubItem.route);
                    }}
                    key={index}
                  >
                    <Link to="#" className="menu-active">
                      {menuSubItem.submenu}
                    </Link>
                  </li>
                ))}
              </Card.Body>
            </Accordion.Collapse>
          </Accordion>
        ))}
      </li>
    </>
  );
};
