import React from "react";
import "./styles/style.css";
import "./styles/About.css"

// Import assets
import aboutPic from "../assets/about-pic.jpeg";
import arrowIcon from "../assets/arrow.png";
import experienceIcon from "../assets/experience.png";
import educationIcon from "../assets/education.png";

// About data
const aboutData = {
  introduction: "Get To Know More",
  title: "About Me",
  profilePicture: aboutPic,
  education: {
    icon: educationIcon,
    title: "Education",
    details: "B.Sc. Computer Science, African Nazarene University (Graduating Aug 2025)",
  },
  experience: {
    icon: experienceIcon,
    title: "Experience",
    details: "Frontend & Backend Development, Data Science, Machine Learning",
  },
  text: `
    I am a fourth-year student at African Nazarene University pursuing a B.Sc. in Computer Science. 
    My journey began as a frontend web developer, progressing to backend development and later to 
    Data Science, Machine Learning, and Artificial Intelligence. I am predominantly self-taught, 
    leveraging resources like The Odin Project, YouTube tutorials, and Coursera courses. 

    Some of my key projects include:
    - CO₂ Flux Analysis in Mangrove Ecosystems.
    - Traffic Trauma Puzzle ML Model.
    - Linear regression models for house price prediction.
    - Tutorials on integrating Africa's Talking USSD and Pesapal with Node.js/Express apps.
  `,
};

const About = () => {
  const { introduction, title, profilePicture, education, experience, text } = aboutData;

  return (
    <section id="about">
      <p className="section__text__p1">{introduction}</p>
      <h1 className="title">{title}</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={profilePicture} alt="Profile" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experience.icon} alt={experience.title} className="icon" />
              <h3>{experience.title}</h3>
              <p>{experience.details}</p>
            </div>
            <div className="details-container">
              <img src={education.icon} alt={education.title} className="icon" />
              <h3>{education.title}</h3>
              <p>{education.details}</p>
            </div>
          </div>
          <div className="text-container">
            <p>{text}</p>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#experience")}
      />
    </section>
  );
};

export default About;
