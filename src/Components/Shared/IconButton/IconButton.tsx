import React from "react";
import styled from "@emotion/styled";

const IconButton: React.FC<{
  imageSrc: string;
  text: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  onClick: () => void;
}> = ({ imageSrc, text, backgroundColor, hoverBackgroundColor, onClick }) => {
  return (
    <StyledButton
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      onClick={onClick}
    >
      <StyledIcon>
        <img
          src={imageSrc}
          alt="Button Icon"
          style={{ width: "100%", height: "100%" }}
        />
      </StyledIcon>
      <ButtonText>{text}</ButtonText>
    </StyledButton>
  );
};

export default IconButton;

const StyledButton = styled.button<{
  backgroundColor?: string;
  hoverBackgroundColor?: string;
}>`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  background-color: ${(props) => props.backgroundColor || "#ff69b4"};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 2px 8px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;
  margin: 2px 0px;

  &:hover {
    background-color: ${(props) =>
      props.hoverBackgroundColor
        ? props.hoverBackgroundColor
        : props.backgroundColor};
  }
`;

const StyledIcon = styled.div`
  color: #000000;
  padding: 3px;
  display: flex;
`;

const ButtonText = styled.span`
  font-size: 12px;
  color: #000000;
  font-family: "Roboto", sans-serif;
`;
