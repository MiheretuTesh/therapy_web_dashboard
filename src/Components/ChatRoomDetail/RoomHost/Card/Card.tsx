import React from "react";
import styled from "@emotion/styled";
import {
  AddCircleOutlineRounded,
  HighlightOffRounded,
} from "@mui/icons-material";

const Card: React.FC<{
  imageSrc: string;
  title: string;
}> = ({ imageSrc, title }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={imageSrc} alt="Card Image" />
        <Content>
          <TitleContainer>
            <Title>{title}</Title>
          </TitleContainer>
          <CardBottom>
            <AddIconContainer />
            <CloseIconContainer />
          </CardBottom>
        </Content>
      </ImageContainer>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 117px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  font-family: "Roboto", sans-serif;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 117px;
  height: 192.4px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 50%;
  object-fit: cover;
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  top: 45%;
  min-height: 20px;
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
  font-size: 15.24px;
  font-weight: bold;
`;

const AddIconContainer = styled(AddCircleOutlineRounded)`
  color: #1baa32;
  font-size: 30px;
`;

const CloseIconContainer = styled(HighlightOffRounded)`
  color: #ec3b3b;
  font-size: 30px;
`;

const CardBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
`;
