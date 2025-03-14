import React from "react";
import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";
import { Project } from "./Components/Project/Project";
import project_1 from "../../assets/projects/api.png"
import project_2 from "../../assets/projects/hibernate.png"
import project_3 from "../../assets/projects/Rick-and-Morty.png"
import project_4 from "../../assets/projects/django.png"

export const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1>Mis últimos proyectos</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="projects-container">
        <Project
          id="rick-morty"
          title="Rick & Morty"
          src={project_3}
          description="Proyecto individual realizado con React y express. Utilizando de referencia la APi https://rickandmortyapi.com/api/character/ esta aplicación te permite crear personages basados en la serie Rick & Morty"
          repo="Rick-Morty" />
        <Project
          id="instagram"
          title="Instagram"
          src={project_4}
          description="Proyecto creado con Django para hacer una aplicación con funcionalidades parecidas a Instagram."
          repo="MyInstagram" />
        <Project
          id="spring-boot"
          title="Spring Boot"
          src={project_1}
          description="Aplicación API REST con Spring Boot con conexión en base de datos PostgreSQL con cifrado de contraseñas y seguridad mediante JSON Web Token"
          repo="spring-security-cifrado" />
        <Project
          id="hibernate"
          title="Hibernate"
          src={project_2}
          description="Proyecto Hibernate para gestión de librerías. Aplicación Java con acceso a base de datos MySQL para persistir la información. El acceso es mediante CLI (Interfaz de línea de comandos). Utilización de Operaciones CRUD."repo="GestionLibreria" />
      </div>
      <a
        href="https://github.com/thepowerty"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="projects-show-more">
          <p>Show More</p>
          <img src={arrow_icon} alt="" />
        </div>
      </a>
    </div>
  );
};
