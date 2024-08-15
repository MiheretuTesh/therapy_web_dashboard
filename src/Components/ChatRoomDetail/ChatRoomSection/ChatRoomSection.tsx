import React, { useState } from "react";
import styled from "@emotion/styled";
import {
  CallEndOutlined,
  KeyboardVoiceOutlined,
  VideocamOutlined,
  VolumeDownOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import LeftArrowIcon from "../../../static/svg/LeftArrowIcon.svg";
import MessageSection from "./MessageSection";

const Layout: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <ImageContainer isOpen={isOpen}>
        <Image
          src={
            "https://s3-alpha-sig.figma.com/img/9689/0604/1c0fdd22442424f0711110d8d79cfd8e?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wg~dm0LuyHifg6AzmuJk5ZW~TAPTz2k5RQwQqJHupCBNUfvCZEQle5XThz-sa1L92UTvYMQLMBaOGT1ImDacFoVB5MCB4h0Cn1wCva0QyZDlb3md9~UiOGa0kkaLJYsTIZPRarICX9Z9plGmpTFj4B73YHUf8deHddbM-u9u~0~0BOxIniEXJ1fCkWGsIVDMnqAPdr9eclCEG3~uzJ5IiPt9R~UAn0J3S6SrLpZiDLgJTo~dtnSKs7kh45G0RlkIMgGa0ua7yYEB9NxoAggcujzhncYqwxbgiAIgpDEAgAsXK5XVCL6VDNj9EOYWsK~NBCCCyBykaETp5MhAAQ3lRg__"
          }
          alt="Card Image"
        />
        <TopRightTextWithIcon isOpen={isOpen} onClick={handleIconClick}>
          <Text>Chat</Text>
          <LeftIconContainer src={LeftArrowIcon} />
        </TopRightTextWithIcon>
        <PopOutCard isOpen={isOpen}>
          <MessageSection isOpen={isOpen} setIsOpen={setIsOpen} />
        </PopOutCard>
        <BottomIcon isOpen={isOpen}>
          <VideoIcon />
          <MicIcon />
          <EndCallIcon />
          <VoulumeIcon />
          <SettingIcon />
        </BottomIcon>
      </ImageContainer>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: transparent;
  color: black;
  font-family: "Roboto", sans-serif;
`;

const ImageContainer = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? "calc(100% - 360px)" : "100%")};
  height: 100%;
  transition: width 0.5s ease-out;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const TopRightTextWithIcon = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "none" : "flex")};
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  background-color: #7d12a3;
  padding: 15px 10px;
  gap: 20px;
  border-radius: 10px;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: white;
`;

const PopOutCard = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 350px;
  height: 100%;
  background-color: transparent;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const BottomIcon = styled.div<{ isOpen: boolean }>`
  position: absolute;
  bottom: 12px;
  left: ${({ isOpen }) => (isOpen ? "calc(50% - 200px)" : "50%")};
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(-50%)" : "translateX(-50%)"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: left 0.5s ease-out;
  gap: 10px;
`;

const LeftIconContainer = styled.img`
  width: 30px;
  height: 30px;
`;

const VideoIcon = styled(VideocamOutlined)`
  color: #fff;
  background-color: #52514f;
  border-radius: 50%;
  padding: 15px;
  font-size: 10px;
  width: 60px;
  height: 60px;
  cursor: pointer;

  &: hover {
    background-color: #474541;
  }
`;

const MicIcon = styled(KeyboardVoiceOutlined)`
  color: #fff;
  background-color: #52514f;
  border-radius: 50%;
  padding: 15px;
  font-size: 10px;
  width: 60px;
  height: 60px;
  cursor: pointer;

  &: hover {
    background-color: #474541;
  }
`;

const EndCallIcon = styled(CallEndOutlined)`
  color: #fff;
  background-color: #ec3b3b;
  border-radius: 50%;
  padding: 15px;
  font-size: 10px;
  width: 70px;
  height: 70px;
  cursor: pointer;

  &: hover {
    background-color: #d13030;
  }
`;

const VoulumeIcon = styled(VolumeDownOutlined)`
  color: #fff;
  background-color: #52514f;
  border-radius: 50%;
  padding: 15px;
  font-size: 10px;
  width: 60px;
  height: 60px;
  cursor: pointer;

  &: hover {
    background-color: #474541;
  }
`;

const SettingIcon = styled(SettingsOutlined)`
  color: #fff;
  background-color: #52514f;
  border-radius: 50%;
  padding: 15px;
  font-size: 10px;
  width: 60px;
  height: 60px;
  cursor: pointer;

  &: hover {
    background-color: #474541;
  }
`;
