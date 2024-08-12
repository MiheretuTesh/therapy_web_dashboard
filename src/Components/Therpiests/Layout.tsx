import React from "react";
import styled from "@emotion/styled";

import TherapiestProfileSection from "./TherapiestProfileSection";
import TherpiestsSection from "./TherpiestsSection";

const Therpiests: React.FC = () => {
  return (
    <Container>
      <TherapiestProfileSection />
      <TherpiestsSection />
    </Container>
  );
};

export default Therpiests;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 10px;
`;
