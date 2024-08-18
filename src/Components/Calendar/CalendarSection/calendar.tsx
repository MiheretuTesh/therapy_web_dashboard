import { useState, useCallback } from "react";
import styled from "@emotion/styled";
import DayView from "./day-view/day-view";
import { WeekView } from "./week-view/week-view";
import { MonthView } from "./month-view";
import { add, sub, endOfWeek, startOfWeek, formatDate } from "date-fns";

import type { Event } from "../../../constants/data/types";

type View = "day" | "week" | "month";

export type CalendarProps = {
  view?: View;
  events?: Event[];
  date: string | number | Date;
};

const Calendar: React.FC<CalendarProps> = ({ date, events, view = "week" }) => {
  const [curView, setCurView] = useState<View>(view);
  const [curDate, setCurDate] = useState<Date>(new Date(date));

  const onPrev = useCallback(() => {
    if (curView === "day") {
      return setCurDate((prev) => sub(prev, { days: 1 }));
    }

    if (curView === "week") {
      return setCurDate((prev) => sub(prev, { weeks: 1 }));
    }

    return setCurDate((prev) => sub(prev, { months: 1 }));
  }, [curView]);

  const onNext = useCallback(() => {
    if (curView === "day") {
      return setCurDate((prev) => add(prev, { days: 1 }));
    }

    if (curView === "week") {
      return setCurDate((prev) => add(prev, { weeks: 1 }));
    }

    return setCurDate((prev) => add(prev, { months: 1 }));
  }, [curView]);

  const formatDateForView = useCallback(
    (date: Date) => {
      if (curView === "day") {
        return formatDate(date, "dd MMMM yyyy");
      }

      if (curView === "week") {
        const weekStart = startOfWeek(date);
        const weekEnd = endOfWeek(date);

        const startDay = formatDate(weekStart, "d");
        const endDay = formatDate(weekEnd, "d");

        const startMonth = formatDate(weekStart, "MMMM");
        const endMonth = formatDate(weekEnd, "MMMM");

        const year = formatDate(weekStart, "yyyy");

        if (startMonth !== endMonth) {
          return `${startDay} ${startMonth} – ${endDay} ${endMonth} ${year}`;
        } else {
          return `${startDay} ${startMonth} ${year} – ${endDay} ${startMonth} ${year}`;
        }
      }

      return formatDate(date, "MMMM yyyy");
    },
    [curView]
  );

  return (
    <CalendarWrapper>
      <CalendarHeader>
        <HeaderLeft>
          <Button onClick={() => setCurDate(new Date())}>Today</Button>
          <VerticalLine />
          <BackButton onClick={onPrev} aria-label={`prev ${curView}`}>
            Back
          </BackButton>
          <VerticalLine />

          <NextButton onClick={onNext} aria-label={`next ${curView}`}>
            Next
          </NextButton>
        </HeaderLeft>
        <DateDisplay>{formatDateForView(curDate)}</DateDisplay>
        <HeaderRight>
          <MonthViewButton
            aria-label="set month view"
            active={curView === "month"}
            onClick={() => setCurView("month")}
          >
            Month
          </MonthViewButton>
          <ViewButton
            aria-label="set week view"
            active={curView === "week"}
            onClick={() => setCurView("week")}
          >
            Week
          </ViewButton>
          <DayViewButton
            aria-label="set day view"
            active={curView === "day"}
            onClick={() => setCurView("day")}
          >
            Day
          </DayViewButton>
        </HeaderRight>
      </CalendarHeader>
      {curView === "day" && <DayView date={curDate} events={events} />}
      {curView === "week" && <WeekView date={curDate} events={events} />}
      {curView === "month" && <MonthView date={curDate} events={events} />}
    </CalendarWrapper>
  );
};
export default Calendar;

const CalendarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: "Roboto", sans-serif;
`;

const CalendarHeader = styled.section`
  margin-bottom: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  border: 1px solid #7d12a3;
  border-radius: 10px;
`;

const HeaderRight = styled.div`
  display: flex;
  border: 1px solid #7d12a3;
  border-radius: 10px;
  height: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 17px;
  color: white;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  font-weight: 600;
  transition: background-color 0.3s ease;
  background-color: transparent;
  border: none;
  height: 100%;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const NextButton = styled.button`
  padding: 10px 20px;
  font-size: 17px;
  height: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  font-weight: 600;
  display: flex;
  color: white;
  background-color: transparent;
  border: none;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const BackButton = styled.button`
  padding: 10px 20px;
  font-size: 17px;
  height: 100%;
  font-weight: 600;
  display: flex;
  color: white;
  background-color: transparent;
  border: none;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const VerticalLine = styled.div`
  width: 1px;
  height: 80%;
  background-color: white;
`;

const DateDisplay = styled.span`
  font-weight: 600;
  font-size: 21.08px;
`;

const MonthViewButton = styled.button<{ active: boolean }>`
  padding: 20px;
  font-weight: 500;
  border: 1px solid transparent;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  font-size: 17px;
  transition: box-shadow 0.2s ease-in;
  background: ${({ active }) =>
    active ? "linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%)" : "none"};
  color: ${({ active }) => (active ? "#fff" : "inherit")};
  transition: background-color 0.3s ease;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
  &:hover {
    background: ${({ active }) =>
      active
        ? "linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%)"
        : "rgba(0,0,0,0.6)"};
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
  }
`;

const ViewButton = styled.button<{ active: boolean }>`
  padding: 20px;
  font-weight: 500;
  border: 1px solid transparent;
  font-size: 17px;
  transition: box-shadow 0.2s ease-in;
  background: ${({ active }) =>
    active ? "linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%)" : "none"};
  color: ${({ active }) => (active ? "#fff" : "inherit")};
  transition: background-color 0.3s ease;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
  &:hover {
    background: ${({ active }) =>
      active
        ? "linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%)"
        : "rgba(0,0,0,0.6)"};
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
  }
`;

const DayViewButton = styled.button<{ active: boolean }>`
  padding: 20px;
  font-weight: 500;
  border: 1px solid transparent;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  font-size: 17px;
  transition: box-shadow 0.2s ease-in;
  background: ${({ active }) =>
    active ? "linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%)" : "none"};
  color: ${({ active }) => (active ? "#fff" : "inherit")};
  transition: background-color 0.3s ease;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.3);
  &:hover {
    background: ${({ active }) =>
      active
        ? "linear-gradient(91.41deg, #e617b2 0%, #48c1fe 100%)"
        : "rgba(0,0,0,0.6)"};
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
  }
`;
