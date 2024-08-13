import React, { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { Routes } from "../../../../constants/routes";
import ShowMore from "../../../../static/svg/ShowMore.svg";
import StarOne from "../../../../static/svg/Star.svg";
import StarTwo from "../../../../static/svg/Star_.svg";

interface ContentProps {
  expanded: boolean;
}

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  infoElements: string[];
  rating?: number;
  ratingCount: number;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  infoElements,
  ratingCount,
}) => {
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(true);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const toTherapistDetail = () => {};

  return (
    <CardContainer>
      <Image src={imageSrc} alt="Card" />
      <Overlay />
      <Content expanded={expanded} onClick={() => {}}>
        <BreakLine width="93.43px" onClick={handleToggle} />
        <TitleContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Title>{title}</Title>

            <IconContainer
              onClick={() => {
                toTherapistDetail();
              }}
            >
              <img src={ShowMore} />
            </IconContainer>
          </div>
          {!expanded && <Description>{description}</Description>}
        </TitleContainer>

        {!expanded && (
          <Info>
            {infoElements.map((element, index) => (
              <InfoElement key={index}>{element}</InfoElement>
            ))}
          </Info>
        )}
        <RatingContainer>
          <Stars>
            <img src={StarOne} />
            <img src={StarOne} />
            <img src={StarOne} />
            <img src={StarOne} />
            <img src={StarTwo} />
          </Stars>
          <Votes>({ratingCount} votes)</Votes>
        </RatingContainer>
        <CardButton>
          <p style={{ fontSize: "16.34px" }}>Schedule a consultation</p>
        </CardButton>
      </Content>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  position: relative;
  width: 220px;
  height: 360px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-family: "Roboto", sans-serif;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Content = styled.div<ContentProps>`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: white;
  padding: 16px;
  height: ${(props) => (props.expanded ? "40%" : "70%")};
  transition: height 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  border: 1px solid #7d12a3;
  border-radius: 10px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 5px;
  width: 100%;
  padding: 0 10px;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #3a3a3a;
  line-height: 20.38px;
`;

const IconContainer = styled.div`
  color: #7d12a3;
  font-size: 25px;
  cursor: pointer;
`;

const BreakLine = styled.span<{ width: string }>`
  width: ${(props) => props.width};
  height: 5px;
  background-color: #7d12a3;
  border-radius: 50px;
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
  padding: 0 30px;
`;

const InfoElement = styled.div`
  background-color: #e4edff;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  color: #3a3a3a;
  font-weight: bold;
`;

const Description = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #8e94a7;
`;

const CardButton = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 10px 8px;
  cursor: pointer;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
  background: linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  transition: box-shadow 0.2s ease-in;
  border: none;
  &:hover {
    background: linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%);
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
  }
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: "Roboto", sans-serif;
  color: #ffb400;
`;

const Stars = styled.div`
  display: flex;
  gap: 4px;

  & > svg {
    color: #ffb400;
    font-size: 24px;
  }
`;

const Votes = styled.span`
  margin-left: 8px;
  color: #000;
  font-size: 12px;
`;
