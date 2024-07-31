import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Routes as RoutesLink } from "./constants/routes";
import { WelcomePage } from "./Pages";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesLink.firstPage} element={<WelcomePage />} />
        <Route path="*" element={<Navigate to={RoutesLink.firstPage} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
