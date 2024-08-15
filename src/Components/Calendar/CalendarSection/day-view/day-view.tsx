import { useState } from "react";
import styled from "@emotion/styled";
import { DayEvent } from "./day-event";

import { format, endOfDay, startOfDay, eachHourOfInterval } from "date-fns";
import { groupEvents } from "./group-events";

import type { Event } from "../../../../constants/data/types";

export type DayViewProps = {
  date: Date;
  events?: Event[];
};

const DayView: React.FC<DayViewProps> = ({ date, events = [] }) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  const hours = eachHourOfInterval({
    start: startOfDay(date),
    end: endOfDay(date),
  });

  const { eventGroups, allDayEvents } = groupEvents(date, events);

  return (
    <CalendarDayView id="calendar-day-view">
      <HeaderContainer>
        <TimeZoneContainer>
          <TimeZoneText>{format(new Date(), "z")}</TimeZoneText>
        </TimeZoneContainer>
        <AllDayEventsContainer></AllDayEventsContainer>
      </HeaderContainer>
      <EventsContainer>
        <EventsInnerContainer ref={(ref) => setRef(ref)}>
          {eventGroups.map((group) =>
            group.map((event, index) => (
              <DayEvent
                day={date}
                event={event}
                index={index}
                key={event.id}
                grouplength={group.length}
                containerHeight={ref?.offsetHeight || 1}
              />
            ))
          )}
          {hours.map((time, index) => (
            <HourContainer key={time.toISOString() + index}>
              <HourLabelContainer>
                <HourLabel dateTime={format(time, "yyyy-MM-dd")}>
                  {index === 0 ? "" : format(time, "h a")}
                </HourLabel>
              </HourLabelContainer>
              <HourDivider />
            </HourContainer>
          ))}
        </EventsInnerContainer>
      </EventsContainer>
    </CalendarDayView>
  );
};

export default DayView;

const CalendarDayView = styled.section`
  flex: 1;
  height: 100%;
`;

const HeaderContainer = styled.div`
  display: flex;
  border-bottom: 1px solid;
  scrollbar-gutter: stable;
`;

const TimeZoneContainer = styled.div`
  width: 6rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TimeZoneText = styled.span`
  font-size: 0.75rem;
`;

const AllDayEventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  border-left: 1px solid;
  gap: 1px;
`;

const EventsContainer = styled.div`
  flex: 1;
  max-height: 100%;
  padding-bottom: 7rem;

  overflow: auto;

  ::-webkit-scrollbar {
    width: 10px;
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

const EventsInnerContainer = styled.div`
  position: relative;
`;

const HourContainer = styled.div`
  height: 5rem;
  display: flex;
`;

const HourLabelContainer = styled.div`
  height: 100%;
  width: 6rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const HourLabel = styled.time`
  font-size: 0.75rem;
  margin-top: -0.75rem;
  user-select: none;
`;

const HourDivider = styled.div`
  flex: 1;
  position: relative;
  border-bottom: 1px solid;
  border-left: 1px solid;
`;
