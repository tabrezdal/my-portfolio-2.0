import React from "react";
import { Link } from "react-scroll";

const NavigationLink = ({ linkTo, name, handleClose }) => {
  return (
    <li className="navlink">
      <Link
        to={linkTo}
        href={`#${linkTo}`}
        smooth={true}
        offset={-70}
        duration={1000}
        delay={300}
        onSetActive={() => handleClose}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavigationLink;
