import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "../App.jsx";
import Resume from "../Components/Resume/Resume.jsx";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio-react/" element={<Home />} />
        <Route path="/portfolio-react/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
};
