import React, { useState } from "react";
import moment, { Moment } from "moment";
import { Add, CameraAlt } from "@mui/icons-material";
import { DateCalendar } from "@mui/x-date-pickers";
import styled from "@emotion/styled";
import LogoIcon from "../../static/images/photo_user.png";

const Layout: React.FC = () => {
  const [date, setDate] = useState<Moment>(moment());

  return (
    <Wrapper>
      <PhotoBlock>
        <UserPhoto src={LogoIcon} alt="Logo" />
        <UserInfo>
          <Label>Dante Lucca</Label>
          <Description>female, single</Description>
          <Description>Brazil</Description>
        </UserInfo>
        <Photos>
          <PhotosLabel>
            <CameraAlt />
            <Description>Photos</Description>
          </PhotosLabel>
          <PhotoPuzzleWrapper>
            <PhotoPuzzle>
              <Add />
            </PhotoPuzzle>
            <PhotoPuzzle>
              <Add />
            </PhotoPuzzle>
            <PhotoPuzzle>
              <Add />
            </PhotoPuzzle>
          </PhotoPuzzleWrapper>
        </Photos>
      </PhotoBlock>
      <DateCalendarCustom
        views={["day", "month"]}
        value={date}
        onChange={(newValue) => setDate(newValue)}
      />
      <ChatBlock>
        <ChatBlockLabel>My Chat Rooms This Week:</ChatBlockLabel>
        <ChatBlockInfo>
          <ChatBlockInfoElement>
            <ChatBlockInfoDesc>01 Jun'20</ChatBlockInfoDesc>
            <ChatBlockInfoLabel>03:00 PM</ChatBlockInfoLabel>
          </ChatBlockInfoElement>
          <Divider />
          <ChatBlockInfoElement>
            <ChatBlockInfoLabel>Meeting name</ChatBlockInfoLabel>
            <ChatBlockInfoDesc>Dr. Uch Redubk</ChatBlockInfoDesc>
          </ChatBlockInfoElement>
        </ChatBlockInfo>
      </ChatBlock>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  color: black;
  border-radius: 5px;
  padding: 20px;
`;

const PhotoBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  color: black;
  border-radius: 5px;
`;

const UserPhoto = styled.img`
  border: 5px solid #ed2590;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 5px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
`;

const Label = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #4b4b4b;
  margin-bottom: 5px;
`;

const Description = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 17px;
  color: #4b4b4b;
`;

const Photos = styled.div`
  width: 100%;
`;

const PhotosLabel = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const PhotoPuzzleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80px;
`;

const PhotoPuzzle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 80px;
  background-color: gray;
  border-radius: 10px;
`;

const DateCalendarCustom = styled(DateCalendar)`
  width: 100%;
  height: 300px;

  & .MuiPickersFadeTransitionGroup-root {
    width: 100%;
  }
`;

const ChatBlock = styled.div`
  width: 100%;
`;

const ChatBlockLabel = styled.span`
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  color: #7d12a3;
`;

const ChatBlockInfo = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  background-color: #f2f1f1;
`;

const ChatBlockInfoElement = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Divider = styled.div`
  width: 3px;
  background-color: #6f2dbd;
`;

const ChatBlockInfoLabel = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 500;
  color: #8e94a7;
`;

const ChatBlockInfoDesc = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: #160041;
`;
