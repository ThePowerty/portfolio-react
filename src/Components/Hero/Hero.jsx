import React from 'react'
import './Hero.css'
import profileImg from "../../assets/profile.jpg";
import resumePdf from "../../assets/resume.pdf";

export const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-grid page-shell">
        <div className="hero-copy">
          <p className="hero-eyebrow">Backend developer · Madrid / remoto</p>
          <h1>
            Williams Infanzón Fernández
            <span>Construyo backends claros, seguros y preparados para crecer.</span>
          </h1>
          <p className="hero-summary">
            Especializado en Java y Spring Boot, diseño APIs y servicios que convierten requisitos de negocio en software mantenible.
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
            <li>APIs REST</li>
            <li>WebSockets</li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="Representación del flujo de una petición API">
          <div className="portrait-frame">
            <img src={profileImg} alt="Retrato de Williams Infanzón Fernández" />
          </div>
          <div className="trace trace-client">
            <span>01</span>
            <strong>cliente</strong>
            <code>POST /auth</code>
          </div>
          <div className="trace-line trace-line-one" aria-hidden="true"><i /></div>
          <div className="trace trace-api">
            <span>02</span>
            <strong>API</strong>
            <code>validar · autorizar</code>
          </div>
          <div className="trace-line trace-line-two" aria-hidden="true"><i /></div>
          <div className="trace trace-data">
            <span>03</span>
            <strong>datos</strong>
            <code>persistir · responder</code>
          </div>
        </div>
      </div>
    </section>
  )
}
