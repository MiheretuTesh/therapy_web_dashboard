import React from "react";
import styled from "@emotion/styled";
import { Headphones } from "@mui/icons-material";
import IconButton from "../../Shared/IconButton/IconButton";
import TextButton from "../../Shared/TextButton";
import { friendsPageChatRoomCard } from "../../../constants/data/cardData";

const ChatRoomSection: React.FC = () => {
  return (
    <Wrapper>
      <TextButton
        text="Create a Meeting"
        onClick={() => console.log("Button clicked")}
        fontSize="18px"
        backgroundColor="linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%)"
      />

      <ChatRoomBlock>
        <TextContainer>
          <TextT>Friends (29)</TextT>
          <Caption>See all</Caption>
        </TextContainer>
        <TextTemp>Schedulled today:</TextTemp>

        <CardContainer>
          {friendsPageChatRoomCard.map((card, index) => (
            <Container key={index}>
              <ImageContainer>
                <Image src={card.imageSrc} alt="Card Image" />
                <MusicIconWrapper>
                  Music
                  <HeadphonesIcon />
                </MusicIconWrapper>
              </ImageContainer>
              <Title>{card.title}</Title>
              <CardCaption>{card.caption}</CardCaption>

              {card.buttons.map((button, buttonIndex) => (
                <IconButton
                  key={buttonIndex}
                  imageSrc={button.imageSrc}
                  text={button.text}
                  backgroundColor={button.backgroundColor}
                  hoverBackgroundColor={button.hoverBackgroundColor}
                  size={"small"}
                  onClick={button.onClick}
                />
              ))}
            </Container>
          ))}
        </CardContainer>

        <TextTemp>Schedulled this week:</TextTemp>

        <CardContainer>
          {friendsPageChatRoomCard.map((card, index) => (
            <Container key={index}>
              <ImageContainer>
                <Image src={card.imageSrc} alt="Card Image" />
                <MusicIconWrapper>
                  Music
                  <HeadphonesIcon />
                </MusicIconWrapper>
              </ImageContainer>
              <Title>{card.title}</Title>
              <CardCaption>{card.caption}</CardCaption>

              {card.buttons.map((button, buttonIndex) => (
                <IconButton
                  key={buttonIndex}
                  imageSrc={button.imageSrc}
                  text={button.text}
                  backgroundColor={button.backgroundColor}
                  hoverBackgroundColor={button.hoverBackgroundColor}
                  size={"small"}
                  onClick={button.onClick}
                />
              ))}
            </Container>
          ))}
        </CardContainer>
        <CardContainer>
          {friendsPageChatRoomCard.map((card, index) => (
            <Container key={index}>
              <ImageContainer>
                <Image src={card.imageSrc} alt="Card Image" />
                <MusicIconWrapper>
                  Music
                  <HeadphonesIcon />
                </MusicIconWrapper>
              </ImageContainer>
              <Title>{card.title}</Title>
              <CardCaption>{card.caption}</CardCaption>

              {card.buttons.map((button, buttonIndex) => (
                <IconButton
                  key={buttonIndex}
                  imageSrc={button.imageSrc}
                  text={button.text}
                  backgroundColor={button.backgroundColor}
                  hoverBackgroundColor={button.hoverBackgroundColor}
                  size={"small"}
                  onClick={button.onClick}
                />
              ))}
            </Container>
          ))}
        </CardContainer>
        <CardContainer>
          {friendsPageChatRoomCard.map((card, index) => (
            <Container key={index}>
              <ImageContainer>
                <Image src={card.imageSrc} alt="Card Image" />
                <MusicIconWrapper>
                  Music
                  <HeadphonesIcon />
                </MusicIconWrapper>
              </ImageContainer>
              <Title>{card.title}</Title>
              <CardCaption>{card.caption}</CardCaption>

              {card.buttons.map((button, buttonIndex) => (
                <IconButton
                  key={buttonIndex}
                  imageSrc={button.imageSrc}
                  text={button.text}
                  backgroundColor={button.backgroundColor}
                  hoverBackgroundColor={button.hoverBackgroundColor}
                  size={"small"}
                  onClick={button.onClick}
                />
              ))}
            </Container>
          ))}
        </CardContainer>
      </ChatRoomBlock>
    </Wrapper>
  );
};

export default ChatRoomSection;

const Wrapper = styled.div`
  height: 100%;
  width: 28%;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: black;
  gap: 13px;
  font-family: "Roboto", sans-serif;
`;

const ChatRoomBlock = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 8.69px;
  height: 100%;
  padding: 15px 10px 20px 25px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
`;

const TextT = styled.div`
  color: #4b4b4b;
  font-size: 14px;
  font-weight: 500;
`;

const TextTemp = styled.div`
  color: #7d12a3;
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0px;
`;
const Caption = styled.div`
  color: #ed2590;
  font-size: 14px;
  font-weight: 500;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  gap: 10px;
`;

const Container = styled.div`
  width: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0px;
  margin-bottom: 10px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 80px;
  height: 70px;
  overflow: hidden;
  flex-shrink: 0;
`;

const MusicIconWrapper = styled.div`
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translate(-50%, 0%);
  color: white;
  font-size: 13px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px 5px;
  border-radius: 10px;
  pointer-events: none;
  background-color: #e4e4e4;
  color: #000;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const HeadphonesIcon = styled(Headphones)`
  font-size: 15px;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: bold;
  color: #3a3a3a;
  text-align: center;
  width: 100%;
  line-height: 21.58px;
`;

const CardCaption = styled.h3`
  color: #4b4b4b;
  font-size: 12px;
  font-weight: 400;
`;
