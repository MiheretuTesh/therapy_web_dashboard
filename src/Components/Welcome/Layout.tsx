import React from "react";
import LogoIcon from "../../static/svg/logo_white.svg?react";
import { useTranslation } from "react-i18next";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import styled from "@emotion/styled";
import backgroundImage from "../../static/images/welcome_background.png";
import LoginForm from "./LogInForm";

const Layout: React.FC = () => {
  const { i18n } = useTranslation();

  const handleSelectChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value);
    localStorage.setItem("lng", event.target.value);
  };

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

  return (
    <Wrapper>
      <ImageBlock>
        <LogoIcon />
      </ImageBlock>
      <FormWrapper>
        <Select
          onChange={handleSelectChange}
          defaultValue={localStorage.getItem("lng") || "en"}
          sx={{ position: "absolute", top: "20px", right: "20px" }}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"ru"}>Russian</MenuItem>
        </Select>
        <LoginForm />
      </FormWrapper>
    </Wrapper>
  );
};

export default Layout;
