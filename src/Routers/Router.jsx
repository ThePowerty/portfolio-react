import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import {Home, Resume} from "../pages";
import { ModalProvider } from "../Modals/Context/ModalContext.js";

export const Router = () => {
  return (
    <ModalProvider>
      <HashRouter>
        <Routes basename="/portfolio-react">
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </HashRouter>
    </ModalProvider>
  );
};
