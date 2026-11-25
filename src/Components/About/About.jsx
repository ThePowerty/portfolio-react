import React from "react";
import "./About.css";
import profileImg from "../../assets/photo_cv.jpg";

export const About = () => {
  return (
    <section id="about" className="about section">
      <div className="about-image">
        <img src={profileImg} alt="Williams Infanzón" />
        <span>Madrid, España</span>
      </div>
      <div className="about-copy">
        <p className="section-kicker">Perfil</p>
        <h2>Cómo trabajo</h2>
        <p>
          Empiezo por las reglas de negocio y los permisos de cada operación. A partir de ahí defino el contrato de la API y el modelo de datos, y documento las decisiones que ayudan a mantener el código.
        </p>
        <p>
          También trabajo en la interfaz para comprobar el flujo completo, desde la petición en React hasta la respuesta de la API. Busco posiciones de nivel intermedio en backend Java o full-stack con foco en backend.
        </p>
        <div className="about-links">
          <a href="https://es.linkedin.com/in/williams-infanzón" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href="https://github.com/thepowerty" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
};
