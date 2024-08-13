import React from "react";
import styled from "@emotion/styled";
import ProfileImg from "../../../static/images/profile_2.png";

const TherapiestProfileSection: React.FC = () => {
  return (
    <Wrapper>
      <UserSection>
        <UserPhoto src={ProfileImg} alt="Porfile" />
        <UserInfo>
          <Label>Dr. Laura Valexander</Label>
          <Description>
            8 years of experience in <br /> psychological studies
          </Description>
          <Skills>
            <Description>Nutritionist</Description>
            <Description>English speaker</Description>
          </Skills>
          <Caption>Therapiest</Caption>
        </UserInfo>
        <ButtonOutline>Check availability</ButtonOutline>
      </UserSection>
      <ChatBlock>
        <ChatBlockInfo>
          <ChatBlockInfoElement border={true}>
            <ChatBlockInfoLabel>Gender</ChatBlockInfoLabel>

            <ChatBlockInfoDesc>Male</ChatBlockInfoDesc>
          </ChatBlockInfoElement>

          <ChatBlockInfoElement border={true}>
            <ChatBlockInfoLabel>Birthday</ChatBlockInfoLabel>
            <ChatBlockInfoDesc>Oct. 25, 1991</ChatBlockInfoDesc>
          </ChatBlockInfoElement>
        </ChatBlockInfo>

        <ChatBlockInfo>
          <ChatBlockInfoElement border={true}>
            <ChatBlockInfoLabel>Language </ChatBlockInfoLabel>
            <ChatBlockInfoDesc>English</ChatBlockInfoDesc>
            <ChatBlockInfoDesc>Spanish</ChatBlockInfoDesc>
          </ChatBlockInfoElement>
          <ChatBlockInfoElement border={true}>
            <ChatBlockInfoLabel>Psyhologiest</ChatBlockInfoLabel>
            <ChatBlockInfoDesc>Nutritionist</ChatBlockInfoDesc>
            <ChatBlockInfoDesc>Psyhologiest</ChatBlockInfoDesc>
          </ChatBlockInfoElement>
        </ChatBlockInfo>

        <ChatBlockInfo>
          <ChatBlockInfoElement border={true}>
            <ChatBlockInfoLabel>City/Counrty</ChatBlockInfoLabel>

            <ChatBlockInfoDesc>Katmandu/India</ChatBlockInfoDesc>
          </ChatBlockInfoElement>

          <ChatBlockInfoElement border={true}>
            <ChatBlockInfoLabel>Years of expirience</ChatBlockInfoLabel>
            <ChatBlockInfoDesc>6</ChatBlockInfoDesc>
          </ChatBlockInfoElement>
        </ChatBlockInfo>

        <ChatBlockInfo>
          <ChatBlockInfoElement border={false}>
            <ChatBlockInfoLabel>Registration date</ChatBlockInfoLabel>

            <ChatBlockInfoDesc>Oct. 25, 2022</ChatBlockInfoDesc>
          </ChatBlockInfoElement>

          <ChatBlockInfoElement border={false}>
            <ChatBlockInfoLabel>Member status</ChatBlockInfoLabel>
            <ChatBlockInfoDesc>Active member</ChatBlockInfoDesc>
          </ChatBlockInfoElement>
        </ChatBlockInfo>
        <ChatBlockInfo>
          <ChatBlockInfoElement border={false}>
            <ChatBlockInfoLabel>Registration date</ChatBlockInfoLabel>

            <ChatBlockInfoDesc>Oct. 25, 2022</ChatBlockInfoDesc>
          </ChatBlockInfoElement>

          <ChatBlockInfoElement border={false}>
            <ChatBlockInfoLabel>Member status</ChatBlockInfoLabel>
            <ChatBlockInfoDesc>Active member</ChatBlockInfoDesc>
          </ChatBlockInfoElement>
        </ChatBlockInfo>
        <ChatBlockInfo>
          <ChatBlockInfoElement border={false}>
            <ChatBlockInfoLabel>Registration date</ChatBlockInfoLabel>

            <ChatBlockInfoDesc>Oct. 25, 2022</ChatBlockInfoDesc>
          </ChatBlockInfoElement>

          <ChatBlockInfoElement border={false}>
            <ChatBlockInfoLabel>Member status</ChatBlockInfoLabel>
            <ChatBlockInfoDesc>Active member</ChatBlockInfoDesc>
          </ChatBlockInfoElement>
        </ChatBlockInfo>
      </ChatBlock>
    </Wrapper>
  );
};

export default TherapiestProfileSection;

const Wrapper = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  color: black;
  gap: 10px;
  padding: 0px 60px;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 0px;
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

const UserSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 0;
`;

const UserPhoto = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
  object-position: top;
  border-radius: 50%;
  margin-bottom: 12px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 12px;
`;

const Skills = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const Label = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #140a38;
  margin-bottom: 12px;
`;

const Caption = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  color: #7d12a3;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Description = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #8e94a7;
  margin-bottom: 8px;
`;

const ButtonOutline = styled.div`
  width: 100%;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #7d12a3;
  border-radius: 12px;
  border: 1px solid #7d12a3;
  cursor: pointer;
  padding: 12px;
`;

const ChatBlock = styled.div`
  width: 100%;
`;

const ChatBlockInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ChatBlockInfoElement = styled.div<{ border: true | false }>`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 10px;
  padding-bottom: ${({ border }) => (border === true ? "15px" : "10px")};
  margin-bottom: ${({ border }) => (border === true ? "15px" : "10px")};
  border-bottom: ${({ border }) =>
    border === true ? "2px solid #f2f5f9" : "none"};
`;

const ChatBlockInfoLabel = styled.span`
  font-family: "Roboto", sans-serif;
  white-space: nowrap;
  font-size: 15px;
  font-weight: 500;
  color: #8e94a7;
`;

const ChatBlockInfoDesc = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #160041;
`;
