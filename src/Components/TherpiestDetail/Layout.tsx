import React from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../constants/routes";
import styled from "@emotion/styled";

import TherapiestProfileSection from "./TherapiestProfileSection";

const Therpiests: React.FC = () => {
  const navigate = useNavigate();

  const toTherapistDetail = () => {
    navigate(Routes.therpiests);
  };

  return (
    <Container>
      <HeaderTitle>
        <HeaderText color={"#8E94A7"} onClick={toTherapistDetail}>
          Therpiests list
        </HeaderText>
        <HeaderText color={"#8E94A7"}>{">"}</HeaderText>
        <HeaderText color={"#140A38"}>Dr. Laura Valexander</HeaderText>
      </HeaderTitle>
      <HorixontalContainer>
        <TherapiestProfileSection />
      </HorixontalContainer>
    </Container>
  );
};

export default Therpiests;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const HeaderTitle = styled.div`
  width: 100%;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

const HeaderText = styled.span<{ color: "#8E94A7" | "#140A38" }>`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  color: ${({ color }) => (color === "#8E94A7" ? "#8E94A7" : "#140A38")};
  padding: 5px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #333;
  }
`;

const HorixontalContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;
