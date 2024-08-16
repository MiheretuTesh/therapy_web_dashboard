import { startOfDay, differenceInMinutes, format } from "date-fns";
import styled from "@emotion/styled";
import { Event } from "../../../../constants/data/types";

const MINUTES_IN_DAY = 24 * 60;

type WeekDayEventProps = {
  day: Date;
  event: Event;
  index: number;
  grouplength: number;
  containerHeight: number;
};

export const WeekDayEvent: React.FC<WeekDayEventProps> = ({
  day,
  event,
  index,
  grouplength,
  containerHeight,
}) => {
  const generateBoxStyle = () => {
    const today = startOfDay(day);
    const minutesPassed = differenceInMinutes(event.start_date, today);
    const eventDuration = differenceInMinutes(event.end_date, event.start_date);

    const top = (minutesPassed / MINUTES_IN_DAY) * containerHeight;
    const height = (eventDuration / MINUTES_IN_DAY) * containerHeight;

    const isLast = index === grouplength - 1;
    let widthPercentage = grouplength === 1 ? 1 : (1 / grouplength) * 1.7;

    if (isLast) {
      widthPercentage = 1 / grouplength;
    }

    return {
      top,
      height,
      width: `calc(100% * ${widthPercentage})`,
      left: isLast ? undefined : `calc(100% * ${(1 / grouplength) * index})`,
      right: isLast ? 0 : undefined,
    };
  };

  const boxStyle = generateBoxStyle();

  return (
    <EventBox
      top={boxStyle.top}
      height={boxStyle.height}
      width={boxStyle.width}
      left={boxStyle.left}
      right={boxStyle.right}
      index={index}
      bgColor={event.color}
    >
      <EventTitle>
        {`${event.title}, ${format(event.start_date, "h:mm a")} - ${format(
          event.end_date,
          "h:mm a"
        )}`}
      </EventTitle>
    </EventBox>
  );
};

const EventBox = styled.div<{
  top: number;
  height: number;
  width: string;
  left?: string;
  right?: number;
  index: any;
  bgColor: string;
}>`
  position: absolute;
  background-color: ${({ bgColor }) => bgColor};
  cursor: pointer;
  padding: 2px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 18.97px;

  z-index: ${({ index }) => 100 + index};
  top: ${({ top }) => top}px;
  height: ${({ height }) => height - 20}px;
  width: ${({ width }) => width};
  left: ${({ left }) => left};
  right: ${({ right }) => right}px;
`;

const EventTitle = styled.h1`
  font-family: "Roboto", sans-serif;
  color: #ffffff;
  font-size: 12.65px;
  font-weight: 400;
`;
