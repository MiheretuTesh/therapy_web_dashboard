import { WeekDayView } from "./week-day-view";
import { WeekDayLabel } from "./week-day-label";
import styled from "@emotion/styled";
import {
  format,
  endOfDay,
  endOfWeek,
  startOfDay,
  startOfWeek,
  eachDayOfInterval,
  eachHourOfInterval,
} from "date-fns";
import { createGroups } from "./group-events";

import { Event } from "../../../../constants/data/types";

type WeekViewProps = {
  date: Date;
  events?: Event[];
};

export const WeekView: React.FC<WeekViewProps> = ({ date, events = [] }) => {
  const hours = eachHourOfInterval({
    start: startOfDay(date),
    end: endOfDay(date),
  });

  const days = eachDayOfInterval({
    start: startOfWeek(date),
    end: endOfWeek(date),
  });

  const { dayGroups } = createGroups(events);

  return (
    <Section id="calendar-day-view">
      <Header>
        <HeaderItem></HeaderItem>
        <WeekDaysContainer>
          <DayLabels>
            {days.map((day) => (
              <WeekDayLabel
                day={day}
                key={"week-day-label-" + day.toISOString()}
              />
            ))}
          </DayLabels>
          <div className="relative min-h-6">
            <Borders></Borders>
          </div>
        </WeekDaysContainer>
      </Header>
      <HoursContainer>
        <TimeSlots>
          {hours.map((time, index) => (
            <TimeSlot
              key={time.toISOString() + index}
              aria-label={format(time, "h a")}
            >
              <time
                className="text-xs -m-3 select-none"
                dateTime={format(time, "yyyy-MM-dd")}
              >
                {index === 0 &&
                format(time, "h a") === "12 AM".toLocaleLowerCase()
                  ? ""
                  : format(time, "h a")}
              </time>
            </TimeSlot>
          ))}
        </TimeSlots>
        <DayEventsContainer>
          {days.map((day) => {
            const iso = day.toISOString();
            return <WeekDayView day={day} key={iso} events={dayGroups[iso]} />;
          })}
        </DayEventsContainer>
      </HoursContainer>
    </Section>
  );
};

const Section = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 10px;
`;

const Header = styled.div`
  min-width: calc(96px + 144px * 7);
  display: flex;
  scrollbar-gutter: stable;
  border-right: 1px solid white;
  background-color: rgba(0, 0, 0, 0.4);
`;

const HeaderItem = styled.div`
  min-width: 6rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  border-right: none;
`;

const WeekDaysContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
`;

const DayLabels = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  position: relative;
`;

const Borders = styled.div`
  position: absolute;
  inset: 0;
  height: 100%;
  display: flex;
  flex: 1;
  min-width: 36px;
  border-left: 1px solid #e5e7eb;
  &:not(:last-child) {
    border-right: 1px solid #e5e7eb;
  }
`;

const HoursContainer = styled.div`
  min-width: calc(96px + 144px * 7);
  display: flex;
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

const TimeSlots = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const TimeSlot = styled.div`
  min-height: 5rem;
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3333;
  border: 1px solid white;
`;

const DayEventsContainer = styled.div`
  display: flex;
  flex: 1;
  height: fit-content;
`;
