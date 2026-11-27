import React from "react";
import "./Projects.css";

const featuredProjects = [
  {
    type: "Plataforma full-stack",
    title: "Yomio",
    summary: "Plataforma para descubrir anime, películas, manga y manhwa y registrar el progreso de cada usuario.",
    detail: "La API de Spring Boot separa catálogo, comunidad y progreso personal. Spring Security identifica al usuario y limita las consultas privadas a su propietario.",
    stack: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
    repo: "https://github.com/ThePowerty/Yomio",
    technical: "https://github.com/ThePowerty/Yomio/blob/master/docs/backend/README.md",
    live: "https://thepowerty.github.io/Yomio/",
  },
  {
    type: "Herramientas de desarrollo",
    title: "DevKit",
    summary: "Catorce utilidades para trabajar con JSON, texto, redes y criptografía desde el navegador. El procesamiento de las entradas se realiza en el dispositivo.",
    stack: ["Angular", "TypeScript", "Web Workers", "Web Crypto"],
    repo: "https://github.com/ThePowerty/devkit",
    live: "https://thepowerty.github.io/devkit/",
  },
  {
    type: "Diseño de bases de datos",
    title: "SchemaFlow",
    summary: "Editor visual para modelar esquemas de PostgreSQL con diagramas entidad–relación, guardar proyectos en el navegador y exportar el DDL.",
    stack: ["Angular", "TypeScript", "PostgreSQL", "IndexedDB"],
    repo: "https://github.com/ThePowerty/schemaflow",
    live: "https://thepowerty.github.io/schemaflow/",
  },
];

const otherProjects = [
  {
    title: "Spring Auth Initializer",
    summary: "Base para APIs con autenticación JWT y autorización por roles.",
    repo: "https://github.com/ThePowerty/spring-auth-initializer",
  },
  {
    title: "Chat WebSocket",
    summary: "Mensajería en tiempo real con Node.js, Express y WebSocket.",
    repo: "https://github.com/ThePowerty/chat-web-socket",
  },
  {
    title: "Pokédex interactiva",
    summary: "Búsqueda y filtros en React con datos de PokéAPI.",
    repo: "https://github.com/ThePowerty/pokedex",
    live: "https://thepowerty.github.io/pokedex/",
  },
];

const ProjectLinks = ({ project, prominent = false }) => (
  <div className="case-actions">
    {project.live && (
      <a className={prominent ? "button button-primary" : undefined} href={project.live} target="_blank" rel="noreferrer" aria-label={`Abrir demo de ${project.title}`}>
        Abrir demo <span aria-hidden="true">↗</span>
      </a>
    )}
    <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`Ver repositorio de ${project.title}`}>
      Ver repositorio <span aria-hidden="true">↗</span>
    </a>
    {project.technical && (
      <a href={project.technical} target="_blank" rel="noreferrer">
        Documentación del backend <span aria-hidden="true">↗</span>
      </a>
    )}
  </div>
);

const YomioBlueprint = () => (
  <div className="project-blueprint" aria-hidden="true">
    <div className="blueprint-topbar">Yomio / Arquitectura</div>
    <div className="platform-flow">
      <code>React</code>
      <span>→</span>
      <code>Spring Boot</code>
      <span>→</span>
      <code>PostgreSQL</code>
    </div>
    <p>Catálogo · progreso · comunidad</p>
  </div>
);

export const Projects = () => (
  <section id="projects" className="projects section" aria-labelledby="projects-title">
    <h2 id="projects-title" className="section-title">Proyectos destacados</h2>

    <div className="featured-projects">
      {featuredProjects.map((project) => (
        <article className={`case-study${project.detail ? " case-study-primary" : ""}`} key={project.title}>
          <div className="case-copy">
            <p className="case-meta">{project.type}</p>
            <h3>{project.title}</h3>
            <p className="case-summary">{project.summary}</p>
            {project.detail && <p className="case-detail">{project.detail}</p>}
            <ul className="case-stack" aria-label={`Tecnologías de ${project.title}`}>
              {project.stack.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <ProjectLinks project={project} prominent />
          </div>
          {project.detail && <YomioBlueprint />}
        </article>
      ))}
    </div>

    <div className="other-projects">
      <h3>Otros proyectos</h3>
      <ul className="other-projects-list">
        {otherProjects.map((project) => (
          <li key={project.title}>
            <div>
              <h4>{project.title}</h4>
              <p>{project.summary}</p>
            </div>
            <ProjectLinks project={project} />
          </li>
        ))}
      </ul>
      <a className="all-projects" href="https://github.com/ThePowerty" target="_blank" rel="noreferrer">
        Explorar todos los repositorios <span aria-hidden="true">↗</span>
      </a>
    </div>
  </section>
);
