import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.jpg";

export const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Hola, mi nombre es Williams, Full-Stack Developer.</p>
            <p>
              Soy un desarrollador apasionado con experiencia en la creación de
              aplicaciones web robustas y escalables. Mi trayectoria incluye el
              desarrollo de soluciones utilizando Java y Python, así como el
              diseño de interfaces interactivas con React y Angular. Tengo un
              sólido conocimiento en bases de datos relacionales y no
              relacionales, lo que me permite optimizar el almacenamiento y la
              recuperación de datos de manera eficiente. Además, cuento con
              experiencia en frameworks como Django y Spring, lo que me permite
              implementar arquitecturas modernas y seguras.
            </p>
            <p>
              Estoy comprometido con la calidad del código y la mejora continua,
              siempre buscando aprender y adoptar nuevas tecnologías para
              ofrecer las mejores soluciones a mis clientes.
            </p>
            <p>
              La comunicación y el trabajo en equipo es para mí esencial para
              poder crecer como desarrollador. Soy proactivo y metódico, siempre
              busco nuevos retos y me adapto fácilmente a los cambios.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>Django</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
