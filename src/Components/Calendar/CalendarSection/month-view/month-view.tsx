import styled from "@emotion/styled";
import { MonthWeekView } from "./month-week-view";

import {
  format,
  endOfDay,
  endOfWeek,
  endOfMonth,
  startOfDay,
  startOfWeek,
  startOfMonth,
  eachDayOfInterval,
} from "date-fns";
import { createMonthGroups } from "./group-events";

import { Event } from "../../../../constants/data/types";

type MonthViewProps = {
  date: Date;
  events?: Event[];
};

export const MonthView: React.FC<MonthViewProps> = ({ date, events = [] }) => {
  const days = eachDayOfInterval({
    start: startOfWeek(date),
    end: endOfWeek(date),
  });

  const weeks = eachDayOfInterval({
    start: startOfWeek(startOfMonth(date)),
    end: endOfWeek(endOfMonth(date)),
  }).reduce((acc, cur, idx) => {
    const groupIndex = Math.floor(idx / 7);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(cur);
    return acc;
  }, [] as Date[][]);

  const groups = createMonthGroups(events, weeks);

  return (
    <MonthViewContainer>
      <DayLabelsContainer>
        {days.map((day) => (
          <DayLabel key={day.toISOString()}>{format(day, "iii")}</DayLabel>
        ))}
      </DayLabelsContainer>
      <WeeksContainer>
        {weeks.map((week) => {
          const weekEndDate = endOfDay(week[week.length - 1]);
          const weekStartDate = startOfDay(week[0]);
          const weekKey =
            weekStartDate.toISOString() + "-" + weekEndDate.toISOString();
          const props = { week, ...groups[weekKey] };

          return <MonthWeekView {...props} key={weekKey} />;
        })}
      </WeeksContainer>
    </MonthViewContainer>
  );
};

const MonthViewContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 10px;
  overflow-x: auto;
  overflow-y: hidden;
`;

const DayLabelsContainer = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0.4);
`;

const DayLabel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ddd;
  border-left: 1px solid #ddd;
  padding: 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
  text-align: center;
`;

const WeeksContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  background-color: rgba(0, 0, 0, 0.4);

  overflow: auto;

  ::-webkit-scrollbar {
    width: 1px;
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
