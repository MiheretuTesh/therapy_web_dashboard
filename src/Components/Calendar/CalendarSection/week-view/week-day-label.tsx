import { isToday, format } from "date-fns";
import styled from "@emotion/styled";

export type WeekDayLabelProps = {
  day: Date;
};

export const WeekDayLabel: React.FC<WeekDayLabelProps> = ({ day }) => {
  const isDayToday = isToday(day);

  return (
    <Container isToday={isDayToday}>
      <DayNumber aria-label={day.toDateString()} isToday={isDayToday}>
        <DayName>{format(day, "iiii")}</DayName>
        <MonthName>{format(day, "MM")}</MonthName>
        <DayNameText>/</DayNameText>
        <DayNameText>
          <p>{format(day, "d")}</p>
        </DayNameText>
      </DayNumber>
    </Container>
  );
};

const Container = styled.div<{ isToday: boolean }>`
  flex: 1;
  min-width: 144px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  border-right: none;
  background-color: ${({ isToday }) =>
    isToday ? "rgba(0,0,0,0.4)" : "transparent"};
  color: ${({ isToday }) => (isToday ? "#ffffff" : "#9ca3af")};
`;

const DayName = styled.span`
  font-size: 16px;
  padding-right: 10px;
`;

const DayNameText = styled.span`
  font-size: 16px;
`;

const DayNumber = styled.div<{ isToday: boolean }>`
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 500;

  line-height: 2.75rem;
`;

const MonthName = styled.span`
  font-size: 16px;
`;
