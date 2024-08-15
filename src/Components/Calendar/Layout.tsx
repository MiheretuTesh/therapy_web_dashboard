import React from "react";
import styled from "@emotion/styled";
import ChatRoomSection from "./ChatRoomSection";
import Calendar from "./CalendarSection";
import { eventsMock } from "../../constants/data/events-mock";

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <Calendar date={new Date()} events={eventsMock} />
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
