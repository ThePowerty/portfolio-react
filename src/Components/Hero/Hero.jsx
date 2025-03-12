import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import CV from "../../assets/CV-FSD-2025.pdf";

export const Hero = () => {
  return (
    <div id="hero" className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Williams,</span> full-stack developer.
      </h1>
      <p>
        Mi nombre es Williams y soy desarrollador Full-Stack de Madrid, España
        con experiencia desarrollando con Java, Python, React y Angular entre
        otros.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Contacta conmigo
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={CV} download="CV-FSD-2025">
            Curriculum
          </a>
        </div>
      </div>
    </div>
  );
};
