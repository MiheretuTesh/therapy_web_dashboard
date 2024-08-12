import React from "react";
import styled from "@emotion/styled";
import { Headphones } from "@mui/icons-material";
import { CalendarToday, VideocamOutlined } from "@mui/icons-material";

const avatars = [
  "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const InlineCard: React.FC<{
  imageSrc: string;
  title: string;
}> = ({ imageSrc, title }) => {
  return (
    <CardContainer>
      <TopContainer>
        <ImageContainer>
          <Image src={imageSrc} alt="Card Image" />
          <MusicIconWrapper>
            Music
            <HeadphonesIcon />
          </MusicIconWrapper>
        </ImageContainer>
        <Content>
          <TitleContainer>
            <Title>{title}</Title>
          </TitleContainer>
          <Description>Description:</Description>
          <DiscussionTopics>
            <DiscussionElement color="#8B9CFF" left={0} width={80}>
              Music
            </DiscussionElement>
            <DiscussionElement left={18} width={105}>
              Romantic
            </DiscussionElement>
            <DiscussionElement color="#8B9CFF" left={18} width={50}>
              Jazz
            </DiscussionElement>
          </DiscussionTopics>
        </Content>
      </TopContainer>
      <EventInfo>
        <Container>
          <AvatarContainer>
            {avatars.map((avatar, index) => (
              <Avatar key={index} src={avatar} alt={`Avatar ${index + 1}`} />
            ))}
          </AvatarContainer>
          <TextContainer>24 participants | 4 friends</TextContainer>
        </Container>
        <CardBottom>
          <Calander>
            <CalendarTodayIcon />
            18.04.2022 | 18:00
          </Calander>
          <Call>
            <span style={{ width: "10px" }}></span>
            <CallIcon />
            Join
            <span style={{ width: "10px" }}></span>
          </Call>
        </CardBottom>
      </EventInfo>
    </CardContainer>
  );
};

export default InlineCard;

const CardContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  background-color: white;
  padding: 10px;
  margin-bottom: 10px;
`;

const TopContainer = styled.div`
  display: flex;
`;

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 78.14px;
  height: 78.14px;
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
  font-family: "Roboto", sans-serif;
`;

const HeadphonesIcon = styled(Headphones)`
  font-size: 15px;
`;
const Content = styled.div`
  flex-grow: 1;
  background-color: white;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 15.63px;
  font-weight: bold;
  color: #3a3a3a;
`;

const Description = styled.p`
  font-size: 13.6px;
  margin-bottom: 10px;
  color: #3a3a3a;
`;

const DiscussionTopics = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const DiscussionElement = styled.div<{ left: number; width: number }>`
  text-align: center;
  width: ${(props) => props.width}px;
  padding: 8px 0px;
  border-radius: 10px;
  color: white;
  background-color: ${(props) => props.color || "#f368d0"};
  margin-left: -${(props) => props.left}px;
`;

const CardBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Calander = styled.div`
  display: flex;
  align-items: center;
  color: #f368d0;
  font-weight: 500;
`;

const CalendarTodayIcon = styled(CalendarToday)`
  color: #f368d0;
`;

const Call = styled.div`
  display: flex;
  align-items: center;
  border: 8px double white;
  color: #00c537;
  font-weight: 500;
  padiding: 0;
  border-radius: 10px;
  background-image: linear-gradient(white, white),
    linear-gradient(to right, #e617b2, #48c1fe);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const CallIcon = styled(VideocamOutlined)`
  color: #00c537;
  font-size: 36px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const TextContainer = styled.div`
  margin-left: 70px;
  font-size: 14px;
  color: #3a3a3a;
  display: flex;
  align-items: center;
`;

const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: fit-content;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  border: 2px solid white;
  &:nth-of-type(1) {
    left: 0;
  }
  &:nth-of-type(2) {
    left: 15px;
  }
  &:nth-of-type(3) {
    left: 30px;
  }
`;
