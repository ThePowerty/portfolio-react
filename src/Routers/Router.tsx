import React from 'react';
import { BrowserRouter , HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../App.jsx';
import Resume from '../Components/Resume/Resume.jsx';

export const Router = () => {
  return (
    <HashRouter basename="/portfolio-react">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
    </HashRouter>
  );
};