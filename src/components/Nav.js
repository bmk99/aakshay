import React, { useState } from "react";
import "./Nav.css";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(false);

  const handleNavigation = (e, path, sectionId) => {
    e.preventDefault();
    navigate(path, { state: { sectionId, reload: new Date().getTime() } });
  };

  return (
    <div className="nav-container">
      <div className="left-section">
        <img
          src="https://akeshya.com/assets/img/logo.png"
          alt="Profile"
          className="profile-image"
        />
        <h1 className="nav-name">AKESHYA</h1>
      </div>
      <div className="right-section">
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={(e) => handleNavigation(e, "/about", "about-section")}
            >
              About
            </Link>
          </li>
          <li>
            <Link onClick={(e) => handleNavigation(e, "/", "services-section")}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
