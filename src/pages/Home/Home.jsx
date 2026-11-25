import React, { useEffect } from "react";
import {
  About,
  Hero,
  Projects,
  Skills,
  NavBar,
  Contact,
  Footer,
} from "../../Components";

export const Home = () => {
  useEffect(() => {
    const targetId = window.location.hash.slice(1);

    if (targetId && !targetId.startsWith("/")) {
      requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({ block: "start" });
      });
    }
  }, []);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Saltar al contenido
      </a>
      <NavBar />
      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};
