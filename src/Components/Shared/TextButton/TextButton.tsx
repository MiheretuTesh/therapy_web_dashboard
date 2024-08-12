import React from "react";
import styled from "@emotion/styled";

const TextButton: React.FC<{
  text: string;
  onClick: () => void;
  fontSize?: string;
  backgroundColor?: string;
}> = ({ text, onClick, fontSize = "16px", backgroundColor = "#007BFF" }) => {
  return (
    <Button onClick={onClick} backgroundColor={backgroundColor}>
      <ButtonText fontSize={fontSize}>{text}</ButtonText>
    </Button>
  );
};

export default TextButton;

const Button = styled.button<{ backgroundColor: string }>`
  width: 100%;
  padding: 15px 0;
  background: ${(props) => props.backgroundColor};
  border-radius: 8.69px;
  cursor: pointer;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
  transition: box-shadow 0.2s ease-in;
  border: none;

  &:hover {
    background: linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%);
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
  }
`;

const ButtonText = styled.span<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  font-family: "Roboto", sans-serif;
  color: #ffffff;
  font-weight: 400;
`;
