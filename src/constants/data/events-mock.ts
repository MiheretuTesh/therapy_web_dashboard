import { add, startOfToday } from "date-fns";
import type { Event } from "./types";

export const eventsMock: Event[] = [
  {
    id: "1",
    start_date: add(startOfToday(), { days: -5, hours: 5 }),
    end_date: add(startOfToday(), { days: -5, hours: 6 }),
    title: "Monday 08:00 AM - 09:00 AM Event",
    color: "#7D12A3",
  },

  {
    id: "2",
    start_date: add(startOfToday(), { days: 2, hours: 3 }),
    end_date: add(startOfToday(), { days: 2, hours: 4 }),
    title: "Tuesday 10:00 AM - 11:00 AM Event",
    color: "#9E1212",
  },
  {
    id: "3",
    start_date: add(startOfToday(), { days: 2, hours: 5 }),
    end_date: add(startOfToday(), { days: 2, hours: 6 }),
    title: "Wednesday 12:00 PM - 01:00 PM Event",
    color: "#F29D38",
  },
  {
    id: "4",
    start_date: add(startOfToday(), { days: 3, hours: 14 }),
    end_date: add(startOfToday(), { days: 3, hours: 15 }),
    title: "Thursday 02:00 PM - 03:00 PM Event",
    color: "#8B9CFF",
  },
  {
    id: "5",
    start_date: add(startOfToday(), { days: 4, hours: 16 }),
    end_date: add(startOfToday(), { days: 4, hours: 17 }),
    title: "Friday 04:00 PM - 05:00 PM Event",
    color: "#5DC6E7",
  },
  {
    id: "6",
    start_date: add(startOfToday(), { days: 5, hours: 18 }),
    end_date: add(startOfToday(), { days: 5, hours: 19 }),
    title: "Saturday 06:00 PM - 07:00 PM Event",
    color: "#FF6B6B",
  },
  {
    id: "7",
    start_date: add(startOfToday(), { days: 6, hours: 20 }),
    end_date: add(startOfToday(), { days: 6, hours: 21 }),
    title: "Sunday 08:00 PM - 09:00 PM Event",
    color: "#FF9F43",
  },
  {
    id: "8",
    start_date: add(startOfToday(), { days: -4, hours: 3 }),
    end_date: add(startOfToday(), { days: -4, hours: 4 }),
    title: "Monday 08:00 AM - 09:00 AM Event",
    color: "#8B9CFF",
  },
  {
    id: "8",
    start_date: add(startOfToday(), { hours: 2 }),
    end_date: add(startOfToday(), { hours: 3 }),
    title: "Monday 08:00 AM - 09:00 AM Event",
    color: "#F29D38",
  },
];
