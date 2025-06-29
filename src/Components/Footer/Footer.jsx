import React from "react";
import "./Footer.css";
import LinkedIn from "../../assets/linkedin.png";
import github from "../../assets/github.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <hr />
      <div className="footer-content">
        <p className="footer-content-left">
          © {currentYear} - Williams Infanzón. Todos los derechos reservados{" "}
        </p>
        <div className="footer-content-right">
          <p>Connect with me</p>
          <a
            href="https://es.linkedin.com/in/williams-infanzón?trk=profile-badge"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="" />
          </a>
          <a
            href="https://github.com/thepowerty"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
