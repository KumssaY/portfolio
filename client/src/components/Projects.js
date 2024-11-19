import React from "react";
import "./styles/style.css";
import "./styles/Projects.css";
import arrowIcon from "../assets/arrow.png";


const projectData = [
  {
    title: "Tour Guide Website",
    githubLink: "https://github.com/KumssaY/maapeadventure",
    description: "A backend for a tour guide website to facilitate seamless planning and adventure booking.",
  },
  {
    title: "Campus Food Reservation System",
    githubLink: "https://github.com/KumssaY/FoodBuk",
    description: "A full-stack app enabling campus students to book and reserve food.",
  },
  {
    title: "Africa's Talking USSD Guide",
    githubLink: "https://github.com/KumssaY/USSD-insurance",
    description: "A tutorial project for integrating Africa's Talking USSD in a Node.js app.",
  },
  {
    title: "Climate Story",
    githubLink: "https://github.com/KumssaY/climatestory",
    description: "A project visualizing and analyzing CO₂ flux in mangrove ecosystems.",
  },
  {
    title: "Traffic Trauma Puzzle Model",
    githubLink: "https://github.com/KumssaY/traffic_trauma_puzzle_solving_model",
    description: "Developing a machine learning model to solve traffic trauma puzzles.",
  },
  {
    title: "One-Variable Linear Regression",
    githubLink: "https://github.com/KumssaY/Regression_OneVarriable",
    description: "A model for training and predicting with one-variable linear regression.",
  },
  {
    title: "House Price Prediction",
    githubLink: "https://github.com/KumssaY/House_Price_Prediction",
    description: "A linear regression model to predict house prices based on features.",
  },
  {
    title: "Campus Visitation Management System",
    githubLink: "https://github.com/KumssaY/ANU_VMS",
    description: "A management system for handling visitor entries at campus.",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-color-2 project-btn"
            >
              GitHub
            </a>
          </div>
        ))}
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "./#contact")}
      />
    </section>
  );
};

export default Projects;
