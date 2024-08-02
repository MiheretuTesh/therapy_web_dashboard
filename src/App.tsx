import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Routes as RoutesLink } from "./constants/routes";
import { AuthPage, WelcomePage, HomePage } from "./Pages";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesLink.default} element={<WelcomePage />} />
        <Route path={RoutesLink.logIn} element={<AuthPage />} />
        <Route path={RoutesLink.signUp} element={<AuthPage />} />
        <Route path={RoutesLink.homePage} element={<HomePage />} />
        <Route path="*" element={<Navigate to={RoutesLink.default} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
