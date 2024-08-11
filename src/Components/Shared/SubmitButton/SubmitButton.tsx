import styled from "@emotion/styled";
import React from "react";

interface IProps {
  type?: "button" | "submit";
  children: React.ReactNode;
  size?: "small" | "large";
}

const SubmitButton: React.FC<IProps> = (props) => {
  const { type = "button", children, size = "large" } = props;
  return (
    <Button type={type} size={size}>
      {children}
    </Button>
  );
};

export default SubmitButton;

const Button = styled.button<{ size: "small" | "large" }>`
  margin: 10px 0;
  width: ${({ size }) => (size === "small" ? "50%" : "100%")};
  padding: 20px !important;
  background: linear-gradient(90deg, #e617b2 0%, #48c1fe 100%);
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background 1s ease;

  &:hover {
    background: linear-gradient(90deg, #48c1fe 0%, #e617b2 95%);
  }
`;
