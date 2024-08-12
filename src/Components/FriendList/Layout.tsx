import React from "react";
import styled from "@emotion/styled";
import UserProfileSection from "./UserProfileSection";
import FriendsSection from "./FriendsSection/index";
import ChatRoomSection from "./ChatRoomSection";

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <UserProfileSection />
      <FriendsSection />
      <ChatRoomSection />
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
