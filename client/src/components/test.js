import React from "react";
import "./styles/Home.css";

const Home = ({ profilePic, resume, linkedinIcon, githubIcon }) => {
  return (
    <section id="profile">
      <div className="section-container">
        {/* Profile Image */}
        <div className="section__pic-container">
          <img
            src={profilePic}
            alt="Nehemiah Kumssa"
            className="profile-image"
          />
        </div>

        {/* Text Content */}
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Nehemiah Kumssa</h1>
          <p className="section__text__p2">Frontend Developer</p>

          {/* Buttons */}
          <div className="btn-container">
            <a href={resume} className="btn btn-color-2" download="Resume">
              Download CV
            </a>
            <a href="#contact" className="btn btn-color-1">
              Contact Info
            </a>
          </div>

          {/* Social Icons */}
          <div id="socials-container">
            <a
              href="https://www.linkedin.com/in/nehemiah-kumssa-25a9451b3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedinIcon} alt="LinkedIn" className="icon" />
            </a>
            <a
              href="https://github.com/KumssaY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubIcon} alt="GitHub" className="icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
