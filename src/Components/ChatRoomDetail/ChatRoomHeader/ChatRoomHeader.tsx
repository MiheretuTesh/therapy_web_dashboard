import React from "react";
import styled from "@emotion/styled";
import { ArrowBackIosNew } from "@mui/icons-material";

const ChatRoomHeader: React.FC = () => {
  return (
    <CallRoomHeader>
      <CallRoomHeaderButtons>
        <BackButton>
          <BackButtonIcon />
          <BackText>Back</BackText>
        </BackButton>
        <CallRoomInfo>
          <BackText>Meetings room Info</BackText>
          <CallRoomInfoIcon />
        </CallRoomInfo>
        <CallRoomInfo>
          <BackText>Host: Jack Ostin </BackText>
        </CallRoomInfo>
        <CallRoomInfo>
          <BackText>Total partisipants: 4</BackText>
        </CallRoomInfo>
      </CallRoomHeaderButtons>
      <CallRoomAdd>
        <Text>Add Partisipants +</Text>
      </CallRoomAdd>
    </CallRoomHeader>
  );
};

export default ChatRoomHeader;

const CallRoomHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 10px;
`;

const CallRoomHeaderButtons = styled.div`
  display: flex;
  padding: 0px 10px;
  gap: 10px;
`;

const BackButton = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding-right: 60px;
`;

const BackText = styled.p`
  font-size: 20.32px;
  font-weight: 500;
  color: #140a38;
`;

const BackButtonIcon = styled(ArrowBackIosNew)`
  color: #7d12a3;
`;

const CallRoomInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding-right: 30px;
`;

const CallRoomInfoIcon = styled(ArrowBackIosNew)`
  color: #7d12a3;
  transform: rotate(-90deg);
`;

const CallRoomAdd = styled.button`
  background: linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%);
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.2s ease-in;
  border: none;
  color: white;
  border: none;
  border-radius: 8.69px;
  padding: 15px 60px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background: linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%);
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
  }
`;

const Text = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 17.38px;
  color: #ffffff;
  font-weight: 400;
`;
