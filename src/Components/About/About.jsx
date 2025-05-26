import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/photo_cv.jpg";
import LinkedIn from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import { Skills } from "../Skills/Skills";

export const About = () => {
  return (
    <div>
      <div id="about" className="about">
        <div className="about-title">
          <h1>About me</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img src={profile_img} alt="profile_img" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                Hola, mi nombre es <span>Williams</span>, Back-end Developer.
              </p>
              <p>
                Apasionado por la tecnología y la innovación, soy un
                desarrollador <span> backend </span> especializado en{" "}
                <span> Spring</span>, con una sólida experiencia en la creación
                de aplicaciones escalables y eficientes. Mi habilidad para
                diseñar <span> APIs RESTful</span> y gestionar bases de datos me
                permite construir soluciones robustas que cumplen con las
                necesidades del negocio. Además, tengo conocimientos en
                tecnologías frontend como<span> React y Angular</span>, lo que
                me permite colaborar de manera efectiva en proyectos full-stack
                y contribuir a la creación de interfaces de usuario atractivas y
                funcionales.
              </p>
              <p>
                Estoy comprometido con la calidad del código y la mejora
                continua, siempre buscando aprender y adoptar nuevas tecnologías
                para ofrecer las mejores soluciones a mis clientes.
              </p>
              <p>
                La comunicación y el trabajo en equipo es para mí esencial para
                poder crecer como desarrollador. Soy proactivo y metódico,
                siempre busco nuevos retos y me adapto fácilmente a los cambios.
              </p>
              <p>Actualmente me encuentro estudiando Golang, VueJs y NodeJs.</p>
              <div className="about-socials">
                <a
                  href="https://www.linkedin.com/in/williams-infanzón-fernández/"
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
        </div>
      </div>
      <Skills />
    </div>
  );
};
