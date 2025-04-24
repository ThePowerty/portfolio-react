import React from "react";
import {
  About,
  Hero,
  Projects,
  NavBar,
  Contact,
  Footer,
} from "../../Components";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
