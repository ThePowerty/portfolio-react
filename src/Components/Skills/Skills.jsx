import React from "react";
import "./Skills.css";

const capabilityGroups = [
  {
    title: "APIs y seguridad",
    description: "Diseño contratos HTTP, valido entradas y separo la autenticación de las reglas de negocio.",
    items: ["Java", "Spring Boot", "Spring Security", "REST", "JWT"],
  },
  {
    title: "Persistencia y entorno local",
    description: "Modelo datos relacionales, versiono cambios de esquema y preparo entornos reproducibles.",
    items: ["PostgreSQL", "Spring Data JPA", "Flyway", "Docker Compose"],
  },
  {
    title: "Integración frontend",
    description: "Integro APIs en interfaces React y adapto la navegación y la presentación al tamaño de pantalla.",
    items: ["React", "React Router", "Vite", "CSS"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="skills section">
      <div className="section-heading">
        <div>
          <h2 className="section-title">Capacidades técnicas</h2>
        </div>
      </div>
      <div className="capability-list">
        {capabilityGroups.map((group) => (
          <article className="capability" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul>
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};
