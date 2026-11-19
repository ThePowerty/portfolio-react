import React, { useEffect, useState } from "react";
import "./NavBar.css";
import resumePdf from "../../assets/resume.pdf";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="navbar page-shell" aria-label="Navegación principal">
        <a className="brand" href="#hero" onClick={closeMenu} aria-label="Ir al inicio">
          <img
            className="brand-logo"
            src={`${import.meta.env.BASE_URL}marca/logo-fondo-oscuro.png`}
            alt="Williams Infanzón Fernández, desarrollador de software"
            width="330"
            height="67"
          />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <div className={`nav-panel ${isOpen ? "is-open" : ""}`} id="main-navigation">
          <ul className="nav-menu">
            <li><a href="#projects" onClick={closeMenu}>Proyectos</a></li>
            <li><a href="#skills" onClick={closeMenu}>Capacidades</a></li>
            <li><a href="#about" onClick={closeMenu}>Perfil</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contacto</a></li>
          </ul>
          <a className="nav-resume" href={resumePdf} target="_blank" rel="noreferrer">
            Ver CV <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
};
