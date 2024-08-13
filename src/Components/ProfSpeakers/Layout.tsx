import React from "react";
import styled from "@emotion/styled";

import ProfProfileSection from "./ProfProfileSection";
import ProfSpeakersSection from "./ProfSpeakersSection";

const ProfSpeakers: React.FC = () => {
  return (
    <Container>
      <ProfProfileSection />
      <ProfSpeakersSection />
    </Container>
  );
};

export default ProfSpeakers;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  gap: 10px;
`;
