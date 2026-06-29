import React from "react";
import { Link } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";

const NavigationLink = ({ linkTo, name, handleClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();

    // Close mobile menu immediately before navigation
    if (handleClose) handleClose();

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(linkTo);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    } else {
      // Already on home — scroll directly, no delay needed
      const el = document.getElementById(linkTo);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <li className="navlink">
      <a
        href={`#${linkTo}`}
        onClick={handleClick}
      >
        {name}
      </a>
    </li>
  );
};

export default NavigationLink;
