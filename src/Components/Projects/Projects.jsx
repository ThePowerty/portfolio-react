import React from "react";
import "./Projects.css";

const projects = [
  {
    type: "Proyecto principal · Full-stack",
    title: "Yomio",
    summary: "Plataforma para seguir anime, películas, manga y manhwa, registrar el progreso y descubrir nuevas recomendaciones.",
    challenge: "Compartir un catálogo y una comunidad mientras cada persona conserva el control de sus notas, su progreso y los spoilers que ve.",
    approach: "Separé la API REST en controladores, servicios y repositorios. La API valida los DTO, obtiene la identidad del contexto de seguridad y limita las consultas privadas al propietario. React consume la API y Docker Compose arranca la aplicación junto con PostgreSQL.",
    stack: ["Java 21", "Spring Boot", "Spring Security", "React 19", "PostgreSQL", "Flyway", "Docker Compose"],
    repo: "https://github.com/ThePowerty/Yomio",
    technical: "https://github.com/ThePowerty/Yomio/blob/master/docs/backend/README.md",
    visual: "platform",
  },
  {
    type: "Seguridad y arquitectura",
    title: "Spring Auth Initializer",
    summary: "Base reutilizable para APIs con autenticación JWT y autorización por roles.",
    challenge: "Evitar que la autenticación se convierta en lógica duplicada y difícil de mantener en cada nuevo servicio.",
    approach: "Separación de responsabilidades, filtros de seguridad y una estructura preparada para extender permisos sin acoplarlos al dominio.",
    stack: ["Java", "Spring Boot", "Spring Security", "JWT"],
    repo: "https://github.com/thepowerty/spring-auth-initializer",
    visual: "security",
  },
  {
    type: "Tiempo real",
    title: "Chat WebSocket",
    summary: "Aplicación de mensajería con comunicación bidireccional entre cliente y servidor mediante Node.js y WebSocket.",
    challenge: "Mantener conexiones activas y distribuir mensajes sin depender del ciclo petición–respuesta tradicional.",
    approach: "Servidor Express, canal WebSocket y eventos claros para conexión, mensaje y desconexión.",
    stack: ["Node.js", "Express", "WebSocket", "JavaScript"],
    repo: "https://github.com/thepowerty/chat-web-socket",
    visual: "realtime",
  },
  {
    type: "Producto frontend",
    title: "Pokédex interactiva",
    summary: "Aplicación React para buscar, filtrar y comparar Pokémon consumiendo PokéAPI.",
    challenge: "Convertir una API extensa en una experiencia de consulta rápida, responsive y fácil de explorar.",
    approach: "Componentes reutilizables, filtros por tipo y una interfaz enfocada en comparación de información.",
    stack: ["React", "Vite", "REST API", "CSS"],
    repo: "https://github.com/thepowerty/pokedex",
    live: "https://thepowerty.github.io/pokedex/",
    visual: "product",
  },
];

const blueprintLabels = {
  platform: "Arquitectura de Yomio",
  security: "Autenticación y roles",
  realtime: "Canal WebSocket",
  product: "Consulta de catálogo",
};

const ProjectVisual = ({ variant }) => (
  <div className={`project-blueprint project-blueprint-${variant}`} aria-hidden="true">
    <div className="blueprint-topbar">
      <span />
      <span />
      <span />
      <code>{blueprintLabels[variant]}</code>
    </div>
    {variant === "platform" && (
      <div className="platform-flow">
        <code>React 19</code>
        <i>→</i>
        <code>Spring Boot</code>
        <i>→</i>
        <code>PostgreSQL</code>
        <span>catálogo · progreso · comunidad</span>
      </div>
    )}
    {variant === "security" && (
      <div className="security-flow">
        <code>POST /auth/login</code>
        <i>→</i>
        <code>JWT filter</code>
        <i>→</i>
        <code>ROLE_USER</code>
      </div>
    )}
    {variant === "realtime" && (
      <div className="socket-flow">
        <code>client_01</code>
        <div className="socket-core">WS</div>
        <code>client_02</code>
        <span className="socket-signal socket-signal-one" />
        <span className="socket-signal socket-signal-two" />
      </div>
    )}
    {variant === "product" && (
      <div className="product-flow">
        <div className="search-line">pikachu</div>
        <div className="product-result">
          <strong>#025</strong>
          <span>electric</span>
        </div>
        <div className="product-bars"><i /><i /><i /></div>
      </div>
    )}
  </div>
);

export const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Trabajo seleccionado</p>
          <h2 className="section-title">Proyectos y decisiones técnicas</h2>
        </div>
        <p className="section-intro">
          Yomio reúne mi trabajo en APIs, seguridad, datos e interfaz. Los demás casos profundizan en autenticación, tiempo real y consumo de APIs.
        </p>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article className="case-study" key={project.title}>
            <div className="case-copy">
              <div className="case-meta">
                <span>{project.type}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="case-summary">{project.summary}</p>
              <dl className="case-details">
                <div>
                  <dt>Reto</dt>
                  <dd>{project.challenge}</dd>
                </div>
                <div>
                  <dt>Enfoque</dt>
                  <dd>{project.approach}</dd>
                </div>
              </dl>
              <ul className="case-stack" aria-label={`Tecnologías de ${project.title}`}>
                {project.stack.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <div className="case-actions">
                <a href={project.repo} target="_blank" rel="noreferrer" aria-label={`Ver repositorio de ${project.title}`}>
                  Ver repositorio <span aria-hidden="true">↗</span>
                </a>
                {project.technical && (
                  <a href={project.technical} target="_blank" rel="noreferrer">
                    Leer documentación del backend <span aria-hidden="true">↗</span>
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Abrir proyecto <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
            <ProjectVisual variant={project.visual} />
          </article>
        ))}
      </div>

      <a className="all-projects" href="https://github.com/thepowerty" target="_blank" rel="noreferrer">
        Explorar todos los repositorios <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
};
