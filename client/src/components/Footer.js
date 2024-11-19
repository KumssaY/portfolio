import React from "react";
import "./styles/style.css";

const Footer = () => {
  return (
    <footer>
      {/* Navigation Links */}
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Copyright Text */}
      <p>Copyright &#169; 2023 Nehemiah Kumssa. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
