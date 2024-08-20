import React, { useState } from "react";
import styled from "@emotion/styled";
import { DateCalendar } from "@mui/x-date-pickers";
import moment, { Moment } from "moment";
import TextButton from "../../Shared/TextButton";

const TherapySchedule: React.FC = () => {
  const [selectedTime, setSelectedTime] = useState("09:00");
  const [isAm, setIsAm] = useState(true);

  const [selectedDate, setSelectedDate] = useState<Moment>(moment());
  const [selectedNotification, setSelectedNotification] = useState<
    boolean | any
  >(1);

  const generateTimeOptions = () => {
    const times: string[] = [];
    for (let hour = 1; hour <= 12; hour++) {
      ["00", "30"].forEach((minute) => {
        const time = `${hour.toString().padStart(2, "0")}:${minute}`;
        times.push(time);
      });
    }
    return times;
  };

  const formattedDate = selectedDate.format("DD MMM’YY");
  const handleTimeSelecting = (index: number) => {
    setSelectedNotification(selectedNotification === index ? null : index);
  };

  return (
    <Wrapper>
      <ScheduleBlock>
        <ScheduleTitle>Consultation Scheduling</ScheduleTitle>
        <ScheduleBlockContainer>
          <EventInfoBlock>
            <Title>Discussion subject:</Title>
            <Textarea placeholder="Type here" />
            <ConsultanceBlock>
              <ConsultanceBlockInfo>
                <ConsultanceBlockInfoElement>
                  <ConsultanceBlockInfoLabel>
                    {selectedTime} {isAm ? "AM" : "PM"}
                  </ConsultanceBlockInfoLabel>
                  <ConsultanceBlockInfoDesc>
                    {formattedDate}
                  </ConsultanceBlockInfoDesc>
                </ConsultanceBlockInfoElement>
                <Divider />
                <ConsultanceBlockInfoElement>
                  <ConsultanceBlockInfoLabel>Type</ConsultanceBlockInfoLabel>
                  <ConsultanceBlockInfoDesc>
                    Consultation
                  </ConsultanceBlockInfoDesc>
                </ConsultanceBlockInfoElement>
                <Divider />
                <ConsultanceBlockInfoElement>
                  <ConsultanceBlockInfoLabel>Doctor</ConsultanceBlockInfoLabel>
                  <ConsultanceBlockInfoDesc>
                    Dr. Laura Valexander
                  </ConsultanceBlockInfoDesc>
                </ConsultanceBlockInfoElement>
              </ConsultanceBlockInfo>
            </ConsultanceBlock>
            <EventBottom>
              <TextTitle>Online consultation with a doctor</TextTitle>
              <TextTitle>$24</TextTitle>
            </EventBottom>
            <TextButton
              text="Order a consultation"
              onClick={() => console.log("Button clicked")}
              fontSize="18px"
              backgroundColor="linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%)"
            />
          </EventInfoBlock>
          <TimeBlock>
            <TimeBlockHeader>
              <Title>Time</Title>
              <TimeSelectorContainer>
                <TimeDropdown
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                >
                  {generateTimeOptions().map((time) => (
                    <TimeOptions key={time} value={time}>
                      {time}
                    </TimeOptions>
                  ))}
                </TimeDropdown>
                <AmPmToggle>
                  <ToggleButton selected={isAm} onClick={() => setIsAm(true)}>
                    AM
                  </ToggleButton>
                  <ToggleButton selected={!isAm} onClick={() => setIsAm(false)}>
                    PM
                  </ToggleButton>
                </AmPmToggle>
              </TimeSelectorContainer>
            </TimeBlockHeader>
            <DatePickerContainer>
              <DateCalendarCustom
                value={selectedDate}
                onChange={(date: Moment | null) => {
                  if (date) {
                    setSelectedDate(date);
                  }
                }}
              />
            </DatePickerContainer>
            <PickedDateContainer>
              <Title>Alert notification</Title>
              <AvailabilityTimeContainer>
                {["Before 5 min", "Before 15 min", "Before 30 min"].map(
                  (title, index) => (
                    <DateCard
                      key={index}
                      onClick={() => handleTimeSelecting(index)}
                      isSelected={selectedNotification === index}
                    >
                      {title}
                      <Dot isSelected={selectedNotification === index} />
                    </DateCard>
                  )
                )}
              </AvailabilityTimeContainer>
            </PickedDateContainer>
          </TimeBlock>
        </ScheduleBlockContainer>
      </ScheduleBlock>
    </Wrapper>
  );
};

export default TherapySchedule;

const Wrapper = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: "Roboto", sans-serif;
`;

const ScheduleBlock = styled.div`
  height: 100%;
  border-radius: 8px;
  padding: 15px 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ScheduleTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #7d12a3;
`;

const ScheduleBlockContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  align-items: flex-start;
`;

const EventInfoBlock = styled.div`
  width: 60%;
  color: #000;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TimeBlock = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;

const TimeBlockHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #000;
`;

const TimeSelectorContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const TimeDropdown = styled.select`
  width: 50px;
  padding: 10px 0px;
  font-size: 20px;
  border-radius: 10px;
  border: none;
  appearance: none;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
  background: linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%);
  width: 70px;
  text-align: center;
  color: white;
  cursor: pointer;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 3px;
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

  &:hover {
    background: linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%);
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0);
    border: none;
  }

  &::-ms-expand {
    background: linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%);
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0);
    display: none;
    border: none;
  }

  &:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #000;
    border: none;
  }
`;

const TimeOptions = styled.option`
  padding: 10px 0;
  color: #333;
`;

const AmPmToggle = styled.div`
  display: flex;
  width: 120px;
  border-radius: 10px;
  background: linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%);
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
  padding: 3px 3px;
`;

const ToggleButton = styled.button<{ selected: boolean }>`
  font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
  width: 50%;
  font-weight: bold;
  cursor: pointer;

  background-color: ${({ selected }) => (selected ? "#fff" : "transparent")};
  color: ${({ selected }) => (selected ? "#000" : "#fff")};
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ selected }) => (selected ? "#fff" : "#ccc")};
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 320px;
  padding: 15px 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  background: #f2f5f9;
  resize: none;
  outline: none;
  line-height: 26.36px;
  color: #8e94a7;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const ConsultanceBlock = styled.div`
  width: 100%;
`;

const ConsultanceBlockInfo = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 20px;
  border-radius: 10px;
`;

const ConsultanceBlockInfoElement = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Divider = styled.div`
  width: 2px;
  background-color: #7d12a3;
`;

const ConsultanceBlockInfoLabel = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 200;
  color: #8e94a7;
`;

const ConsultanceBlockInfoDesc = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 200;
  color: #160041;
`;

const EventBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TextTitle = styled.div`
  color: #000000;
  font-size: 20px;
  font-weight: bold;
`;

const DatePickerContainer = styled.div`
  padding: 10px;
`;

const DateCalendarCustom = styled(DateCalendar)`
  width: 100%;
  height: 300px;
  padding: 20px 0;
  background-color: white;
  border-radius: 10px;

  & .MuiPickersFadeTransitionGroup-root {
    width: 100%;
    background-color: white;
  }

  & .MuiPickersCalendarHeader-root {
    background-color: tranparent;
    color: black;
    margin-top: 0px;
  }

  & .MuiPickersCalendarHeader-label {
    font-weight: bold;
    font-size: 1.2em;
    padding-bottom: 8px;
    background-color: transparent !important;
  }

  & .MuiDayCalendar-weekDayLabel {
    font-weight: bold;
    color: #ff5733;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    user-select: none;
    background-color: transparent !important;
  }

  & .MuiDayCalendar-weekDayLabel:nth-of-type(1)::before {
    content: "Su";
    color: black;
  }
  & .MuiDayCalendar-weekDayLabel:nth-of-type(2)::before {
    content: "Mo";
    color: black;
  }
  & .MuiDayCalendar-weekDayLabel:nth-of-type(3)::before {
    content: "Tu";
    color: black;
  }
  & .MuiDayCalendar-weekDayLabel:nth-of-type(4)::before {
    content: "We";
    color: black;
  }
  & .MuiDayCalendar-weekDayLabel:nth-of-type(5)::before {
    content: "Th";
    color: black;
  }
  & .MuiDayCalendar-weekDayLabel:nth-of-type(6)::before {
    content: "Fr";
    color: black;
  }
  & .MuiDayCalendar-weekDayLabel:nth-of-type(7)::before {
    content: "Sa";
    color: black;
  }

  & .MuiDayCalendar-weekDayLabel {
    color: transparent;
  }

  & .MuiDay-calendar {
    width: 36px;
    height: 36px;
    line-height: 36px;
    margin: 0.166em;
    background-color: white;
    color: black;
  }

  & .MuiPickersDay-root {
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0%;
    background-color: white;
    color: black;

    &:hover {
      background-color: #ddd;
    }
  }

  & .Mui-selected {
    background-color: #7d12a3 !important;
    color: white;
  }

  & .MuiPickersDay-today {
    border: 1px solid #7d12a3;
  }

  & .MuiPickersDay-dayOutsideMonth {
    color: #ccc;
  }

  & .MuiPickersCalendarHeader-iconButton {
    color: white;
  }
`;

const PickedDateContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
`;
const AvailabilityTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 15px 0px;
`;

const DateCard = styled.div<{ isSelected: boolean }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ isSelected }) => (isSelected ? "#140A38" : "#8E94A7")};
  font-size: 18px;
  cursor: pointer;
`;

const Dot = styled.span<{ isSelected: boolean }>`
  height: 15px;
  width: 15px;
  background: ${({ isSelected }) => (isSelected ? "#7D12A3" : "#8E94A7")};
  border-radius: 50%;
`;
