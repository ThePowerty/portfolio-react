import React from "react";
import "./Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer page-shell">
      <div className="footer-content">
        <p className="footer-content-left">
          © {currentYear} Williams Infanzón Fernández
        </p>
        <div className="footer-content-right">
          <a
            href="https://es.linkedin.com/in/williams-infanzón"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a
            href="https://github.com/thepowerty"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
