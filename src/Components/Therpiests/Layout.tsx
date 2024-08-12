import React from "react";
import styled from "@emotion/styled";

import TherapiestProfileSection from "./TherapiestProfileSection";

const Therpiests: React.FC = () => {
  return (
    <Container>
      <TherapiestProfileSection />
    </Container>
  );
};

export default Therpiests;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 10px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;
