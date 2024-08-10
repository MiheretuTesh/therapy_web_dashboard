import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import {
  AuthPage,
  WelcomePage,
  HomePage,
  ChatRooms,
  FriendList,
  Therpiests,
} from "./Pages";
import { Routes as RoutesLink } from "./constants/routes";

const App: React.FC = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <BrowserRouter>
        <Routes>
          <Route path={RoutesLink.default} element={<WelcomePage />} />
          <Route path={RoutesLink.logIn} element={<AuthPage />} />
          <Route path={RoutesLink.signUp} element={<AuthPage />} />
          <Route path={RoutesLink.recoveryPassword} element={<AuthPage />} />
          <Route path={RoutesLink.homePage} element={<HomePage />} />
          <Route path={RoutesLink.chatRooms} element={<ChatRooms />} />
          <Route path={RoutesLink.friendList} element={<FriendList />} />
          <Route path={RoutesLink.therpiests} element={<Therpiests />} />
          <Route path="*" element={<Navigate to={RoutesLink.logIn} />} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
};

export default App;
