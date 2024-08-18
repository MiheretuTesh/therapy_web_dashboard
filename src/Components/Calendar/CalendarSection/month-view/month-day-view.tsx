import styled from "@emotion/styled";
import { format, isWithinInterval } from "date-fns";

import { Event } from "../../../../constants/data/types";

const MAX_EVENTS_TO_DISPLAY = 6;

type MonthDayViewProps = {
  day?: Date;
  events?: Event[];
  restEvents?: Event[];
  weekEventsShown?: number;
};

export const MonthDayView: React.FC<MonthDayViewProps> = ({
  events = [],
  restEvents = [],
  day = new Date(),
  weekEventsShown = 0,
}) => {
  const filteredRestEvents = restEvents.filter((event) =>
    isWithinInterval(day, {
      end: event.end_date,
      start: event.start_date,
    })
  );

  const canDisplayEvents = MAX_EVENTS_TO_DISPLAY - weekEventsShown;
  const allEvents = [...events, ...filteredRestEvents];
  const allEventsNumber = allEvents.length;

  let eventsToDisplay: Event[] = [];
  let moreEventsNumber = 0;

  if (canDisplayEvents > 1) {
    eventsToDisplay = allEvents.slice(0, canDisplayEvents);
    moreEventsNumber = allEventsNumber - eventsToDisplay.length;
  }

  if (canDisplayEvents === 1 && allEventsNumber === 1) {
    eventsToDisplay = allEvents.slice(0, 1);
    moreEventsNumber = 0;
  }

  if (canDisplayEvents === 1 && allEventsNumber > 1) {
    moreEventsNumber = allEventsNumber;
  }

  return (
    <EventList>
      {eventsToDisplay.map((event) => (
        <EventItem key={event.id}>
          <svg>
            <circle cx="4" cy="4" r="4" />
          </svg>
          <EventText>
            {`${format(event.start_date, "h:mmaaa")}, ${event.title}`}
          </EventText>
        </EventItem>
      ))}
      {moreEventsNumber > 0 && (
        <MoreEventsItem>
          <p className="text-sm text-nowrap text-ellipsis">
            {moreEventsNumber} more
          </p>
        </MoreEventsItem>
      )}
    </EventList>
  );
};

const EventText = styled.p`
  font-size: 10px;
  // white-space: nowrap;
  overflow: hidden;
  // text-overflow: ellipsis;
  width: 110px;
`;

const EventList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  padding-right: 1.5rem;
  gap: 0.25rem; 
  overflow-hidden;
  flex: 1; 
`;

const EventItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg {
    margin-right: 0.5rem;
    min-width: 0.75rem;
    width: 0.75rem;
    height: 0.75rem;
  }

  p {
    font-size: 0.75rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const MoreEventsItem = styled(EventItem)`
  svg {
    display: none;
  }

  p {
    color: #999;
  }
`;
