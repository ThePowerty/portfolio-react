import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from '../App.jsx';
import { Resume } from '../Components';

export const Router = () => {
  return (
    <BrowserRouter basename="/portfolio-react">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
    </BrowserRouter>
  );
};