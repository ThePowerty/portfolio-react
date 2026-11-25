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
          <ul className="hero-proof" aria-label="Áreas principales">
            <li>Java · Spring</li>
            <li>PostgreSQL</li>
            <li>React</li>
          </ul>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame">
            <img src={profileImg} alt="Retrato de Williams Infanzón Fernández" />
          </div>
          <div className="trace trace-client" aria-hidden="true">
            <span>01</span>
            <strong>cliente</strong>
            <code>GET /api/tracks</code>
          </div>
          <div className="trace-line trace-line-one" aria-hidden="true"><i /></div>
          <div className="trace trace-api" aria-hidden="true">
            <span>02</span>
            <strong>API</strong>
            <code>identificar al usuario</code>
          </div>
          <div className="trace-line trace-line-two" aria-hidden="true"><i /></div>
          <div className="trace trace-data" aria-hidden="true">
            <span>03</span>
            <strong>datos</strong>
            <code>consultar su progreso</code>
          </div>
        </div>
      </div>
    </section>
  )
}
