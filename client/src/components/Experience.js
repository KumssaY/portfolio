import React from "react";
import "./styles/style.css";

// Import assets
import checkmarkIcon from "../assets/checkmark.png";
import arrowIcon from "../assets/arrow.png";

// Experience Data
const experienceData = {
  introduction: "Explore My",
  title: "Experience",
  frontend: {
    title: "Frontend Development",
    skills: [
      { name: "HTML", level: "Experienced" },
      { name: "CSS", level: "Experienced" },
      { name: "JavaScript", level: "Intermediate" },
      { name: "React", level: "Intermediate" },
      { name: "Next.js", level: "Basic" },
      { name: "Material UI", level: "Intermediate" },
    ],
  },
  backend: {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "PostgreSQL", level: "Basic" },
      { name: "Git", level: "Intermediate" },
    ],
  },
  dataScience: {
    title: "Data Science, Machine Learning, and AI",
    skills: [
      { name: "Python", level: "Intermediate" },
      { name: "Numpy", level: "Intermediate" },
      { name: "Pandas", level: "Intermediate" },
      { name: "Scikit-learn", level: "Intermediate" },
      { name: "Matplotlib", level: "Intermediate" },
      { name: "Seaborn", level: "Intermediate" },
      { name: "Plotly", level: "Intermediate" },
      { name: "Flask", level: "Intermediate" },
      { name: "Jupyter Notebooks", level: "Intermediate" },
    ],
  },
};

const Experience = () => {
  const { introduction, title, frontend, backend, dataScience } = experienceData;

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <article key={index}>
        <img src={checkmarkIcon} alt="Skill Icon" className="icon" />
        <div>
          <h3>{skill.name}</h3>
          <p>{skill.level}</p>
        </div>
      </article>
    ));

  return (
    <section id="experience">
      <p className="section__text__p1">{introduction}</p>
      <h1 className="title">{title}</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {/* Frontend Development */}
          <div className="details-container">
            <h2 className="experience-sub-title">{frontend.title}</h2>
            <div className="article-container">{renderSkills(frontend.skills)}</div>
          </div>

          {/* Backend Development */}
          <div className="details-container">
            <h2 className="experience-sub-title">{backend.title}</h2>
            <div className="article-container">{renderSkills(backend.skills)}</div>
          </div>

          {/* Data Science, ML, and AI */}
          <div className="details-container">
            <h2 className="experience-sub-title">{dataScience.title}</h2>
            <div className="article-container">{renderSkills(dataScience.skills)}</div>
          </div>
        </div>
      </div>

      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "#projects")}
      />
    </section>
  );
};

export default Experience;
