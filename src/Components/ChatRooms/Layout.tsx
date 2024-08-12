import React from "react";
import styled from "@emotion/styled";
import UserProfileSection from "./UserProfileSection";
import ChatRoomSection from "./ChatRoomSection";

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <UserProfileSection />
      <ChatRoomSection />
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: transparent;
  color: black;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;
