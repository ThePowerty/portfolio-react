import React from "react";
import "./Projects.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";
import django from "../../assets/projects/django.png";
import spring from "../../assets/projects/spring.png";
import pokemon from "../../assets/projects/pokemon.png";
import conquer from "../../assets/projects/conquer.png";
import { Carousel, Project } from "./Components";

export const Projects = () => {
  return (
    <div id="projects" className="projects">
      <div className="projects-title">
        <h1>Proyectos Back-end</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <Carousel>
        <Project
          id="spring-security"
          title="Spring Security"
          src={spring}
          description="Este proyecto es una base para la creación de APIs seguras utilizando Spring Security, JSON Web Tokens (JWT) y cifrado de contraseñas. Está diseñado siguiendo los principios SOLID para asegurar un código limpio, mantenible y escalable."
          repo="spring-auth-initializer"
          btn="View more"
        />
        <Project
          id="will-ecommerce"
          title="Ecommerce"
          src={spring}
          description="Este proyecto es una API RESTful desarrollada con Java y Spring Boot, diseñada para gestionar un concesionario de coches. La API permite la gestión de usuarios, roles y autenticación mediante inicio de sesión, proporcionando un sistema seguro y escalable para la administración de datos relacionados con vehículos y usuarios."
          repo="will-ecommerce"
          btn="View more"
        />
        <Project
          id="biblioteca-api"
          title="Biblioteca API"
          src={spring}
          description="Este proyecto es una API RESTful desarrollada con Java y Spring Boot, creada con el propósito de practicar y mejorar mis habilidades en el desarrollo de aplicaciones backend. La API permite gestionar una biblioteca, facilitando la administración de libros y autores"
          repo="bibliotecaApi"
          btn="View more"
        />
      </Carousel>
      <div className="projects-title">
        <h1>Proyectos Front-end</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <Carousel>
        <Project
          id="pokédex"
          title="Pokédex"
          src={pokemon}
          description="Este proyecto es una Pokédex interactiva que permite a los usuarios buscar y filtrar Pokémon utilizando la PokéAPI. La aplicación está construida con React y Vite, y ofrece funcionalidades para comparar las debilidades de los tipos de Pokémon. Actualmente, el proyecto se encuentra en desarrollo y está en la versión 1.0.2."
          repo="https://thepowerty.github.io/pokedex/"
          btn="Open"
        />
        <Project
          id="instagram"
          title="Instagram"
          src={django}
          description="Proyecto creado con Django para hacer una aplicación con funcionalidades parecidas a Instagram."
          repo="MyInstagram"
          btn="View more"
        />
        <Project
          id="proyecto-responsive"
          title="Proyecto Responsive"
          src={conquer}
          description="Proyecto HTML con CSS responsive para el máster en desarrollo web Full Stack de ConqueBlocks"
          repo="https://thepowerty.github.io/Proyecto/"
          btn="Open"
        />
      </Carousel>
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
