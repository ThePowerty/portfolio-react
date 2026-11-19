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
        <h2>Me importa que el código siga siendo entendible después de entregarlo.</h2>
        <p>
          Soy desarrollador backend especializado en Java y Spring. Trabajo desde la estructura: responsabilidades claras, contratos de API útiles y decisiones que el siguiente desarrollador pueda comprender.
        </p>
        <p>
          Mi experiencia con React y Angular me permite colaborar de forma cercana con frontend y producto, anticipando cómo se consumirá cada servicio. Busco equipos donde la calidad, la comunicación y la mejora continua formen parte del trabajo diario.
        </p>
        <div className="about-links">
          <a href="https://es.linkedin.com/in/williams-infanzón" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href="https://github.com/thepowerty" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
};
