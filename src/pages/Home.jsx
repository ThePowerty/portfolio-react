import React from "react";
import { About, Hero, Projects, NavBar, Contact, Footer } from "../Components";

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
