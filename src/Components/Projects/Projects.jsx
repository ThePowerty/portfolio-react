import React from "react";
import "./Projects.css";

const projects = [
  {
    number: "01",
    type: "Seguridad y arquitectura",
    title: "Spring Auth Initializer",
    summary: "Base reutilizable para construir APIs seguras con autenticación JWT, roles y contraseñas cifradas.",
    challenge: "Evitar que la autenticación se convierta en lógica duplicada y difícil de mantener en cada nuevo servicio.",
    approach: "Separación de responsabilidades, filtros de seguridad y una estructura preparada para extender permisos sin acoplarlos al dominio.",
    stack: ["Java", "Spring Boot", "Spring Security", "JWT"],
    repo: "https://github.com/thepowerty/spring-auth-initializer",
    visual: "security",
  },
  {
    number: "02",
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
    number: "03",
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

const ProjectVisual = ({ variant }) => (
  <div className={`project-blueprint project-blueprint-${variant}`} aria-hidden="true">
    <div className="blueprint-topbar">
      <span />
      <span />
      <span />
      <code>{variant === "security" ? "SecurityFilterChain.java" : variant === "realtime" ? "socket.server.js" : "pokemon.service.js"}</code>
    </div>
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
        <div className="search-line">pikachu <span>⌘ K</span></div>
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
          <h2 className="section-title">Proyectos con decisiones detrás.</h2>
        </div>
        <p className="section-intro">
          Tres piezas que muestran cómo abordo seguridad, comunicación en tiempo real y producto. El código está disponible para revisión.
        </p>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article className="case-study" key={project.title}>
            <div className="case-copy">
              <div className="case-meta">
                <span>{project.number}</span>
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
                <a href={project.repo} target="_blank" rel="noreferrer">
                  Ver repositorio <span aria-hidden="true">↗</span>
                </a>
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
