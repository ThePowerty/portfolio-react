import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../App.jsx";
import Resume from "../Components/Resume/Resume.jsx";

export const Router = () => {
  return (
    <HashRouter>
      <Routes basename="/portfolio-react">
        <Route path="/" element={<Home/>} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </HashRouter>
  );
};
