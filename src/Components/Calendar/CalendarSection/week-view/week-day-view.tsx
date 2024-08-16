import { useState } from "react";
import { WeekDayEvent } from "./week-day-event";
import { createDayGroups } from "./group-events";
import { endOfDay, startOfDay, eachHourOfInterval } from "date-fns";
import type { Event } from "../../../../constants/data/types";
import styled from "@emotion/styled";

type WeekDayViewProps = {
  day: Date;
  events?: Event[];
};

export const WeekDayView: React.FC<WeekDayViewProps> = ({
  day,
  events = [],
}) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  const hours = eachHourOfInterval({
    start: startOfDay(day),
    end: endOfDay(day),
  });

  const dayGroups = createDayGroups(events);

  return (
    <Container aria-label={"Events slot for " + day.toDateString()}>
      <EventsWrapper>
        <EventsContainer ref={(ref) => setRef(ref)}>
          {dayGroups.map((group) =>
            group.map((event, index) => (
              <WeekDayEvent
                day={day}
                event={event}
                index={index}
                key={event.id}
                grouplength={group.length}
                containerHeight={ref?.offsetHeight || 1}
              />
            ))
          )}
        </EventsContainer>
      </EventsWrapper>
      <div className="weekday-view-hours">
        {hours.map((time, index) => (
          <div
            key={time.toISOString()}
            className={`hour-slot ${
              index !== hours.length - 1 && "hour-slot-border"
            }`}
          />
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  min-width: 9rem;
  height: 100%;
  display: flex;
  justify-content: center;
  flex: 1;
  position: relative;
`;

const EventsWrapper = styled.div`
  margin-top: 5px;
  width: 90%;
  height: 100%;
  position: absolute;
`;

const EventsContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
`;

const HourSeparator = styled.div<{ isLast: boolean }>`
  height: rem;
  width: 100%;
  border-left: 1px solid #e5e7eb;
  border-bottom: 1px solid;

  border-bottom: ${({ isLast }) => isLast && "3px solid white"};
`;
