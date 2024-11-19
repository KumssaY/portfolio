import React from "react";
import "./styles/style.css";

// Import assets
import emailIcon from "../assets/email.png";
import linkedinIcon from "../assets/linkedin.png";

// Contact Data
const contactData = [
  {
    id: 1,
    type: "Email",
    icon: emailIcon,
    link: "mailto:nehemiahyoseph@gmail.com",
    text: "nehemiahyoseph@gmail.com",
  },
  {
    id: 2,
    type: "LinkedIn",
    icon: linkedinIcon,
    link: "https://www.linkedin.com/in/nehemiah-kumssa-25a9451b3/",
    text: "LinkedIn",
  },
];

const Contact = () => {
  return (
    <section id="contact">
      {/* Header */}
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>

      {/* Contact Information */}
      <div className="contact-info-upper-container">
        {contactData.map((contact) => (
          <div className="contact-info-container" key={contact.id}>
            <img
              src={contact.icon}
              alt={`${contact.type} icon`}
              className={`icon contact-icon ${contact.type === "Email" ? "email-icon" : ""}`}
            />
            <p>
              <a
                href={contact.link}
                target={contact.type === "LinkedIn" ? "_blank" : ""}
                rel="noopener noreferrer"
                className="Email__Linkedin"
              >
                {contact.text}
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
