import React, { useState } from "react";
import moment, { Moment } from "moment";
import { DateCalendar } from "@mui/x-date-pickers";
import styled from "@emotion/styled";
import LogoIcon from "../../../static/images/photo_user.png";
import { topics } from "../../../constants/data/topics";

const UserProfileSection: React.FC = () => {
  const [date, setDate] = useState<Moment>(moment());

  return (
    <Wrapper>
      <UserSection>
        <UserHeader>
          <Label>My Details</Label>
          <Caption>Your record of all time activity</Caption>
        </UserHeader>
        <UserPhoto src={LogoIcon} alt="Logo" />
        <UserInfo>
          <Label>Adamy Yang</Label>
        </UserInfo>
        <BreakLine />
        <UserInfoList>
          <Description>Average Rating</Description>
          <Description>Available Slot</Description>
          <Description>Total Patients</Description>
          <Description>Total Consultation</Description>
        </UserInfoList>
        <Button>
          <Text>View Profile</Text>
        </Button>
      </UserSection>
      <DiscussionSection>
        <Label>Discussion Topics:</Label>
        <TopicsContainer>
          {topics.map((topic, index) => (
            <Topic key={index} color={topic.color}>
              {topic.label}
            </Topic>
          ))}
        </TopicsContainer>
      </DiscussionSection>
      <DateSection>
        <DateCalendarCustom
          views={["day", "month"]}
          value={date}
          onChange={(newValue) => setDate(newValue)}
        />
      </DateSection>
    </Wrapper>
  );
};

export default UserProfileSection;

const Wrapper = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  gap: 12px;
  flex-direction: column;
  background-color: transparent;
  color: black;
`;

const UserSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  color: black;
  border-radius: 5px;
  padding: 20px;
`;

const DiscussionSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  color: black;
  border-radius: 8px;
  padding: 20px;
`;

const DateSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  color: black;
  border-radius: 8px;
  padding: 20px;
`;

const UserPhoto = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-bottom: 5px;
`;

const UserHeader = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
`;

const UserInfoList = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-bottom: 15px;
  gap: 10px;
`;

const TopicsContainer = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 14px;
`;

const Topic = styled.div`
  text-align: center;
  padding: 10px;
  border-radius: 4px;
  color: white;
  background-color: ${(props) => props.color || "#f368d0"};
`;

const Label = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #000;
  margin-bottom: 5px;
`;

const Description = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #140a38;
  font-weight: 600;
`;

const Caption = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #140a38;
  font-weight: 500;
`;

const Text = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  color: #ffffff;
  font-weight: 700;
`;

const BreakLine = styled.div`
  width: 90%;
  margin: 15px 0px;
  border: 1px solid #140a38;
`;

const Button = styled.div`
  width: 90%;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  padding: 14px 24px;
  cursor: pointer;
`;

const DateCalendarCustom = styled(DateCalendar)`
  width: 100%;
  height: 300px;

  & .MuiPickersFadeTransitionGroup-root {
    width: 100%;
  }
`;
