import React from "react";
import "./Skills.css";

const capabilityGroups = [
  {
    title: "Backend principal",
    description: "Servicios y APIs con una estructura legible, seguridad explícita y responsabilidades separadas.",
    items: ["Java", "Spring Boot", "Spring Security", "APIs REST"],
  },
  {
    title: "Servicios y datos",
    description: "Comunicación en tiempo real, modelado de datos y lógica de negocio orientada a mantenimiento.",
    items: ["WebSocket", "Node.js", "Python", "Django"],
  },
  {
    title: "Colaboración frontend",
    description: "Capacidad para integrar contratos de API y trabajar de extremo a extremo con equipos de producto.",
    items: ["React", "Angular", "Vite", "Responsive CSS"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Capacidades</p>
          <h2 className="section-title">Tecnología con una función concreta.</h2>
        </div>
        <p className="section-intro">
          Mi foco está en el backend. El conocimiento frontend me ayuda a diseñar contratos más útiles y colaborar mejor con producto.
        </p>
      </div>
      <div className="capability-list">
        {capabilityGroups.map((group, index) => (
          <article className="capability" key={group.title}>
            <span className="capability-number">0{index + 1}</span>
            <div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
