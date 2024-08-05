import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import styled from "@emotion/styled";
import LoginForm from "./LogInForm";
import RegistrationBlock from "./RegistrationBlock";
import RecoveryPassword from "./RecoveryPassword";
import { Routes } from "../../constants";
import backgroundImage from "../../static/images/welcome_background.png";
import LogoIcon from "../../static/svg/logo_white.svg?react";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const ImageBlock = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

const FormWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
  background-color: white;
`;

const Layout: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(localStorage.getItem("lng") || "en");
  const { pathname } = useLocation();

  const Component = pathname.includes(Routes.signUp)
    ? RegistrationBlock
    : pathname.includes(Routes.logIn)
    ? LoginForm
    : RecoveryPassword;

  const handleSelectChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
    setLanguage(event.target.value);
    localStorage.setItem("lng", event.target.value);
  };

  return (
    <Wrapper>
      <ImageBlock>
        <LogoIcon />
      </ImageBlock>
      <FormWrapper>
        <Select
          variant="standard"
          onChange={handleSelectChange}
          value={language}
          sx={{ position: "absolute", top: "20px", right: "20px" }}
        >
          <MenuItem value={"en"}>{t("en")}</MenuItem>
          <MenuItem value={"ru"}>{t("ru")}</MenuItem>
        </Select>
        <Component />
      </FormWrapper>
    </Wrapper>
  );
};

export default Layout;
