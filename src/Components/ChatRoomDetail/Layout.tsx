import React from "react";
import styled from "@emotion/styled";
import ChatRoomSection from "./ChatRoomSection";
import RoomHost from "./RoomHost";
import ChatRoomHeader from "./ChatRoomHeader";

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <ChatRoomHeader />
      <CallContainer>
        <RoomHost />
        <ChatRoomSection />
      </CallContainer>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: transparent;
  color: black;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
  font-family: "Roboto", sans-serif;
`;

const CallContainer = styled.div`
  display: flex;
  gap: 10px;
  height: 90%;
`;
