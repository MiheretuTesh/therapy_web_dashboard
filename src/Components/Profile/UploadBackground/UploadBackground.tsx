import React from "react";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import WinterSvg from "../../../static/svg/upload_winter.svg?react";
import MountainSvg from "../../../static/svg/upload_mountain.svg?react";

const UploadBackground: React.FC = () => {
  const handleUpload = () => {
    console.log("Upload Background");
  };

  return (
    <Wrapper>
      <WinterSvg />
      <MountainSvg />
      <ButtonCustom onClick={handleUpload}>Upload background</ButtonCustom>
    </Wrapper>
  );
};

export default UploadBackground;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #d9d9d9;
  width: 100%;
  height: 34%;
  border-radius: 10px;
`;

const ButtonCustom = styled(Button)`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  background-color: grey;
  opacity: 0.8;
`;
