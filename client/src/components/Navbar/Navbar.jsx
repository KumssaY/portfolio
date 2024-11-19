import React, { useState } from "react";
import "./Navbar.css";
import HamburgerMenu from "./HambergerMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      {/* GitHub Username as Logo */}
      <div className="logo">
        <a href="https://github.com/KumssaY" target="_blank" rel="noopener noreferrer">
          KumssaY
        </a>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
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

      {/* Hamburger Menu */}
      <HamburgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
