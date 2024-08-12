import React from "react";
import styled from "@emotion/styled";
import UserProfileSection from "./UserProfileSection";

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <UserProfileSection />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  gap: 12px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;
