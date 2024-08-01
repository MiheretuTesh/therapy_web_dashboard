import React, { useState } from "react";
import LogoIcon from "../../static/svg/logo_white.svg?react";
import { useTranslation } from "react-i18next";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import styled from "@emotion/styled";
import backgroundImage from "../../static/images/welcome_background.png";
import LoginForm from "./LogInForm";
import RegistrationForm from "./RegistrationForm";
import { useLocation } from "react-router-dom";

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

  const Component = pathname.includes("/signUp") ? RegistrationForm : LoginForm;

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
