import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DateCalendar } from "@mui/x-date-pickers";
import moment, { Moment } from "moment";
import styled from "@emotion/styled";
import { Routes } from "../../../constants/routes";
import TextButton from "../../Shared/TextButton";

const card = [
  {
    time: "9:00 - 9:30",
    status: "active",
  },
  {
    time: "11:00 - 11:30",
    status: "active",
  },
  {
    time: "14:00 - 11:30",
    status: "active",
  },
  {
    time: "9:30 - 10:00",
    status: "inactive",
  },
  {
    time: "12:30 - 13:00",
    status: "active",
  },
  {
    time: "15:30 - 13:00",
    status: "active",
  },
  {
    time: "10:00 - 10:30",
    status: "inactive",
  },
  {
    time: "13:00 - 13:30",
    status: "active",
  },
  {
    time: "16:00 - 13:30",
    status: "active",
  },
];
const CalendarSection: React.FC = () => {
  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState<Moment>(moment());

  const [selectedIndex, setSelectedIndex] = useState<boolean | any>(null);

  const formattedDate = selectedDate.format("D MMM YYYY");

  const handleTimeSelecting = (index: number, status: string) => {
    if (status !== "inactive")
      setSelectedIndex(selectedIndex === index ? null : index);
  };

  const navigateToScheduleMeeting = () => {
    navigate(Routes.scheduleTherapy.replace(":id", "1"));
  };

  return (
    <Wrapper>
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
        <Title>Availability: {formattedDate}</Title>
        <AvailabilityTimeContainer>
          {card.map((item, index) => (
            <DateCard
              key={index}
              onClick={() => handleTimeSelecting(index, item.status)}
              isSelected={selectedIndex === index}
              status={item.status}
            >
              {item.time}
            </DateCard>
          ))}
        </AvailabilityTimeContainer>
      </PickedDateContainer>
      <TextButton
        text="Schedule a consultation"
        onClick={navigateToScheduleMeeting}
        fontSize="18px"
        backgroundColor="linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%)"
      />
    </Wrapper>
  );
};
export default CalendarSection;

const DatePickerContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px 10px;
  border-radius: 10px;
`;

const AvailabilityTimeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Title = styled.div`
  font-size: 18px;
  color: white;
  margin-bottom: 10px;
`;

const DateCard = styled.div<{ isSelected: boolean; status: string }>`
  width: 90px;
  background: ${({ isSelected, status }) =>
    status === "inactive"
      ? "rgba(255, 255, 255, 0.4)"
      : isSelected
      ? "#F368D0"
      : "white"};
  border-radius: 20px;
  text-align: center;
  color: #333;
  font-weight: 600;
  font-size: 12px;
  cursor: ${({ status }) => (status === "active" ? "pointer" : "default")};
  white-space: nowrap;
  padding: 8px 8px;
`;

const PickedDateContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
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
    background-color: #f368d0 !important;
    color: white;
  }

  & .MuiPickersDay-today {
    border: 1px solid #f368d0;
  }

  & .MuiPickersDay-dayOutsideMonth {
    color: #ccc;
  }

  & .MuiPickersCalendarHeader-iconButton {
    color: white;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 28%;
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
