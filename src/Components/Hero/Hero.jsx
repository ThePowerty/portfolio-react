import React from 'react'
import './Hero.css'
import profileImg from "../../assets/profile.jpg";
import resumePdf from "../../assets/resume.pdf";

export const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid page-shell">
        <div className="hero-copy">
          <p className="hero-eyebrow">Madrid · Remoto</p>
          <h1>
            Williams Infanzón Fernández
            <span>Desarrollador backend y full-stack</span>
          </h1>
          <p className="hero-summary">
            Diseño APIs y lógica de negocio con Java y Spring Boot. Integro React y PostgreSQL para llevar funcionalidades de extremo a extremo.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Ver proyectos <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-secondary" href={resumePdf} download>
              Descargar CV <span aria-hidden="true">↘</span>
            </a>
          </div>
        </div>

        <img className="hero-portrait" src={profileImg} alt="Retrato de Williams Infanzón Fernández" />
      </div>
    </section>
  )
}
