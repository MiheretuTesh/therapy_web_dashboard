import React from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { Headphones } from '@mui/icons-material';

interface IProps {
  item: {
    id: number;
    photo: any;
    type: string;
    label: string;
    date: string;
    url: string;
  };
}

const ChatRoomCard: React.FC<IProps> = ({ item }) => {
  const navigate = useNavigate();

  const toChatRoomPage = () => {
    navigate(`${item.url}`);
  };

  return (
    <Item key={item.id}>
      <ImageContainer>
        <Image src={item.photo} alt="Card Image" />
        <MusicIconWrapper>
          {item.type}
          <HeadphonesIcon />
        </MusicIconWrapper>
      </ImageContainer>
      <TitleContainer>
        <Title>{item.label}</Title>
      </TitleContainer>
      <Date>{item.date}</Date>
      <ButtonContainer>
        <ViewButton>View</ViewButton>
        <JoinButton onClick={toChatRoomPage}>Join</JoinButton>
      </ButtonContainer>
    </Item>
  );
};

export default ChatRoomCard;

const Item = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 26%;
  max-width: 100px;
  font-family: 'Roboto', sans-serif;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  overflow: hidden;
  flex-shrink: 0;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const MusicIconWrapper = styled.div`
  position: absolute;
  bottom: 3px;
  left: 50%;
  transform: translate(-50%, 0%);
  font-size: 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px 5px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.6);
  color: #ffffff;
`;

const HeadphonesIcon = styled(Headphones)`
  font-size: 10px;
  margin-left: 3px;
`;

const TitleContainer = styled.div`
  margin-top: 5px;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 11px;
  font-weight: bold;
  color: #3a3a3a;
  text-align: center;
`;

const Date = styled.div`
  font-size: 10px;
  color: #555555;
  margin: 3px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
`;

const ViewButton = styled.button`
  width: 100%;
  background-color: #ff69b4;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 3px 0;
  font-size: 9px;
  cursor: pointer;
`;

const JoinButton = styled.button`
  width: 100%;
  background-color: #6495ed;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 3px 0;
  font-size: 9px;
  cursor: pointer;
`;
