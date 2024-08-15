import React from "react";
import styled from "@emotion/styled";
import Card from "./Card";
import { meetingParticipantCard } from "../../../constants/data/cardData";

const Layout: React.FC = () => {
  return (
    <Wrapper>
      <ChatRoomCardsContainer>
        <CardContainer>
          {meetingParticipantCard.map((card, index) => (
            <Card key={index} imageSrc={card.imageSrc} title={card.title} />
          ))}
        </CardContainer>
      </ChatRoomCardsContainer>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  height: 100%;
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 10px 0;
  border-radius: 10px;
`;

const ChatRoomCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
  }

  ::-webkit-scrollbar-track {
    background: transparent !important;
    border-radius: 0;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent !important;
    border-radius: 0;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: transparent !important;
  }
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
