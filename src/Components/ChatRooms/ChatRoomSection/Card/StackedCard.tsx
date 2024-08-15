import React from "react";
import styled from "@emotion/styled";
import { PlayArrow, Publish } from "@mui/icons-material";
import { CalendarToday, VideocamOutlined } from "@mui/icons-material";

const Card: React.FC<{
  imageSrc: string;
  title: string;
  onClick: () => void;
}> = ({ imageSrc, title, onClick }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={imageSrc} alt="Card Image" />
        <PlayIconWrapper onClick={onClick} />
        <Content>
          <BreakLine width="93.43px" />
          <TitleContainer>
            <Title>{title}</Title>
            <IconContainer></IconContainer>
          </TitleContainer>
          <Description>Description:</Description>
          <DiscussionTopics>
            <DiscussionElement color="#8B9CFF">Music</DiscussionElement>
            <DiscussionElement>Romantic</DiscussionElement>
            <DiscussionElement color="#8B9CFF">Jazz</DiscussionElement>
          </DiscussionTopics>
          <MeettingInfo>
            <InfoElement>F/M+</InfoElement>
            <InfoElement>Germany</InfoElement>
            <InfoElement>18-30 y.O</InfoElement>
            <InfoElement>Free</InfoElement>
          </MeettingInfo>
          <DividerHorizontal />
          <CardBottom>
            <Calander>
              <CalendarTodayIcon />
              18.04.2022 | 18:00
            </Calander>
            <DividerVertical />
            <Call>
              <CallIcon />
              Join
            </Call>
          </CardBottom>
        </Content>
      </ImageContainer>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  font-family: "Roboto", sans-serif;
  margin-bottom: 10px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 300px;
  height: 345px;
  overflow: hidden;
  cursor: default;
`;

const Image = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`;

const PlayIconWrapper = styled(PlayArrow)`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 48px;
  cursor: pointer;
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  top: 35%;
  min-height: 55%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  box-sizing: border-box;
  overflow: auto;
`;

const TitleContainer = styled.div`
  display: flex;
  height: 30px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

const IconContainer = styled(Publish)`
  color: #7d12a3;
  font-size: 30px;
`;

const Description = styled.p`
  font-size: 17px;
  margin-bottom: 10px;
  color: #8e94a7;
`;

const BreakLine = styled.span<{ width: string }>`
  width: ${(props) => props.width};
  border: 1px solid #7d12a3;
  border-radius: 50px;
`;

const DiscussionTopics = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const DiscussionElement = styled.div`
  text-align: center;
  padding: 8px 10px;
  border-radius: 10px;
  color: white;
  background-color: ${(props) => props.color || "#f368d0"};
  margin-left: -10px;
`;

const MeettingInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  margin-bottom: 10px;
`;

const InfoElement = styled.div`
  background-color: #e4edff;
  padding: 10px;
  border-radius: 6px;
  font-size: 12px;
  color: #3a3a3a;
  font-weight: bold;
`;

const CardBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
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
  color: #00c537;
  font-weight: 500;
`;

const CallIcon = styled(VideocamOutlined)`
  color: #00c537;
  font-size: 36px;
`;

const DividerVertical = styled.div`
  width: 1px;
  background-color: #7d12a3;
  padding: 10px 0;
  height: 40px;
`;

const DividerHorizontal = styled.div`
  height: 1px;
  width: 100%;
  background-color: #7d12a3;
`;
