import React, { useEffect } from "react";
import CV from "../../assets/resume.pdf";

export const Resume = () => {
  useEffect(() => {
    document.title = "Currículum — Williams Infanzón";
  }, []);

  return (
    <main className="resume-page">
      <header className="resume-toolbar page-shell">
        <a href="./" className="brand" aria-label="Volver al portfolio">
          <span className="brand-mark" aria-hidden="true">WI</span>
          <span>Volver al portfolio</span>
        </a>
        <div className="resume-actions">
          <a className="button button-secondary" href={CV} target="_blank" rel="noreferrer">Abrir PDF</a>
          <a className="button button-primary" href={CV} download>Descargar CV</a>
        </div>
      </header>
      <section className="resume-viewer page-shell" aria-labelledby="resume-title">
        <div className="resume-intro">
          <p className="section-kicker">Currículum</p>
          <h1 id="resume-title">Williams Infanzón</h1>
          <p>Desarrollador backend y full-stack con Java, Spring Boot y React.</p>
        </div>
        <object data={CV} type="application/pdf" aria-label="Currículum de Williams Infanzón">
          <p>
            Tu navegador no puede mostrar el PDF. <a href={CV} download>Descargar currículum</a>.
          </p>
        </object>
      </section>
    </main>
  );
};
