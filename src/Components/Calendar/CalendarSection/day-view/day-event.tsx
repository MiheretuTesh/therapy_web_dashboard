import { startOfDay, differenceInMinutes, format } from "date-fns";
import styled from "@emotion/styled";

import { Event } from "../../../../constants/data/types";

const MINUTES_IN_DAY = 24 * 60;

type DayEventProps = {
  day: Date;
  event: Event;
  index: number;
  grouplength: number;
  containerHeight: number;
};

export const DayEvent: React.FC<DayEventProps> = ({
  day,
  event,
  index,
  grouplength,
  containerHeight,
}) => {
  const today = startOfDay(day);

  const eventDuration = differenceInMinutes(event.end_date, event.start_date);

  const generateBoxStyle = () => {
    const minutesPassed = differenceInMinutes(event.start_date, today);

    const percentage = minutesPassed / MINUTES_IN_DAY;

    const top = percentage * containerHeight;
    const height = (eventDuration / MINUTES_IN_DAY) * containerHeight;

    const isLast = index === grouplength - 1;
    let widthPercentage = grouplength === 1 ? 1 : (1 / grouplength) * 1.7;

    if (isLast) {
      widthPercentage = 1 / grouplength;
    }

    const styles = {
      top,
      height,
      padding: "2px 8px",
      zIndex: 100 + index,
      width: `calc((100% - 96px) * ${widthPercentage})`,
    };

    if (isLast) {
      return { ...styles, right: 0 };
    }

    return {
      ...styles,
      left: `calc(100px + 100% * ${(1 / grouplength) * index})`,
    };
  };

  return (
    <StyledDayEvent style={generateBoxStyle()} bgColor={event.color}>
      <EventTitle>
        {`${event.title}, 
          ${format(event.start_date, "h:mm a")} - 
          ${format(event.end_date, "h:mm a")}`}
      </EventTitle>
    </StyledDayEvent>
  );
};

const StyledDayEvent = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  border: 1px solid #ffffff;
  border-radius: 0.375rem;
  cursor: pointer;
  position: absolute;
`;

const EventTitle = styled.h1`
  color: #ffffff;
  font-size: 0.75rem;
`;
