import React, { useState } from "react";
import moment, { Moment } from "moment";
import { DateCalendar } from "@mui/x-date-pickers";
import styled from "@emotion/styled";
import ProfileIMG from "../../../static/images/profile.png";
import TextButton from "../../Shared/TextButton";

const TherapiestProfileSection: React.FC = () => {
  const [date, setDate] = useState<Moment>(moment());

  return (
    <Wrapper>
      <UserSection>
        <UserHeader>
          <Label>Therpiests Details</Label>
          <Caption>The records of all time activity</Caption>
        </UserHeader>
        <BreakLine />
        <UserPhoto src={ProfileIMG} alt="Logo" />
        <UserInfo>
          <Label>Dr. Laura Valexander</Label>
          <Description>
            8 years of experience in psychological studies
          </Description>
        </UserInfo>
        <BreakLine />
        <UserInfoList>
          <InfoRow>
            <InfoTitle>Average Rating</InfoTitle>
            <InfoCount>4.8</InfoCount>
          </InfoRow>
          <InfoRow>
            <InfoTitle>Available Slot</InfoTitle>
            <InfoCount>50/150</InfoCount>
          </InfoRow>
          <InfoRow>
            <InfoTitle>Total Patients</InfoTitle>
            <InfoCount>250</InfoCount>
          </InfoRow>
          <InfoRow>
            <InfoTitle>Total Consultation</InfoTitle>
            <InfoCount>180</InfoCount>
          </InfoRow>
        </UserInfoList>
        <TextButton
          text="View Profile"
          onClick={() => console.log("Button clicked")}
          fontSize="18px"
          backgroundColor="linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%)"
        />
      </UserSection>
      <DateCalendarCustom
        views={["day", "month"]}
        value={date}
        onChange={(newValue) => setDate(newValue)}
      />

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

export default TherapiestProfileSection;

const Wrapper = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  gap: 10px;

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
  background-color: white;
  color: black;
  border-radius: 5px;
  padding: 20px;
`;

const UserHeader = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
`;

const UserPhoto = styled.img`
  border: 5px solid #ed2590;
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: top;
  border-radius: 50%;
  margin-bottom: 5px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 12px;
  padding: 0px 50px;
`;

const Label = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #140a38;
  margin-bottom: 5px;
`;

const Caption = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #7d12a3;
  font-weight: 500;
`;

const BreakLine = styled.div`
  width: 90%;
  margin: 0px 0px 12px;
  border: 1px solid #8e94a7;
`;

const UserInfoList = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-bottom: 15px;
  gap: 10px;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
`;

const InfoTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: #140a38;
`;

const InfoCount = styled.h1`
  font-size: 16px;
  font-weight: 600;
  color: #7d12a3;
`;

const Description = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 17px;
  color: #8e94a7;
`;

const DateCalendarCustom = styled(DateCalendar)`
  width: 100%;
  height: 300px;

  & .MuiPickersFadeTransitionGroup-root {
    width: 100%;
  }
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
