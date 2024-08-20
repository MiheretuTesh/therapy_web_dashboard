import React from "react";
import styled from "@emotion/styled";
import { format, isToday, isSameDay, startOfMonth } from "date-fns";

import { Event } from "../../../../constants/data/types";
import { WeekEvent } from "./group-events";
import { createWeekGroups } from "../week-view/group-events";
import { MonthDayView } from "./month-day-view";

type MonthWeekViewProps = {
  week: Date[];
  week_events: WeekEvent[];
  week_day_events: Record<string, Event[]>;
};

export const MonthWeekView: React.FC<MonthWeekViewProps> = ({
  week,
  week_events = [],
  week_day_events = {},
}) => {
  const groups = createWeekGroups(week_events, week[3]);
  const limitedGroups = groups.slice(0, 5);
  const restEvents = groups.slice(5).flat(1);

  return (
    <MonthWeekViewContainer>
      <WeekRow>
        {week.map((day) => {
          const isStartOfMonth = isSameDay(day, startOfMonth(day));
          const variant = isToday(day) ? "today" : "default";
          const size = isStartOfMonth ? "startOfMonth" : "default";
          const text = isStartOfMonth
            ? format(day, "d, MMM")
            : format(day, "d");

          return (
            <Day
              key={"day-label-" + day.toISOString()}
              variant={variant}
              size={size}
            >
              <DayLabel variant={variant} size={size}>
                {text}
              </DayLabel>
            </Day>
          );
        })}
      </WeekRow>
      <EventsContainer>
        <MinHeightContainer>
          {week.map((day) => {
            const dayKey = day.toISOString();
            const events = week_day_events[dayKey];
            return (
              <MonthDayView
                day={day}
                key={dayKey}
                events={events}
                restEvents={restEvents}
                weekEventsShown={limitedGroups.length}
              />
            );
          })}
        </MinHeightContainer>
      </EventsContainer>
    </MonthWeekViewContainer>
  );
};

const MonthWeekViewContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const WeekRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Day = styled.div<{ variant: string; size: string }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #e5e7eb;
  border-left: 1px solid #e5e7eb;

  ${(props) =>
    props.variant === "today" &&
    `
      background-color: rgba(0,0,0,0.6);
      color: white;
    `}

  &:last-child {
    border-right: 1px solid #e5e7eb;
  }
`;

const DayLabel = styled.div<{ variant: string; size: string }>`
  margin: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;
  color: #a6a2a2;
  ${(props) =>
    props.variant === "today" &&
    `
      color: white;
    `}
`;

const EventsContainer = styled.div`
  margin-top: 2.5rem;
  margin-bottom: 1.25rem;
  position: absolute;
  inset: 0;
  overflow: hidden;
  space-y: 0.25rem;
`;

const MinHeightContainer = styled.div`
  display: flex;
`;
