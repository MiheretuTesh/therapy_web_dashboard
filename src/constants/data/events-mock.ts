import { add, sub, endOfToday, startOfToday } from "date-fns";

import type { Event } from "./types";
export const eventsMock: Event[] = [
  {
    id: "1",
    start_date: add(startOfToday(), { hours: 1, minutes: 0 }),
    end_date: add(startOfToday(), { hours: 2, minutes: 0 }),
    title: "06:00 AM - 02:00 PM Andy Porter Pack & Move",
    color: "#7D12A3",
  },
  {
    id: "2",
    start_date: add(startOfToday(), { hours: 3, minutes: 0 }),
    end_date: add(startOfToday(), { hours: 4, minutes: 0 }),
    title: "09:00 AM - 06:00 PM James Toland Pack & Move",
    color: "#7D12A3",
  },
  {
    id: "3",
    start_date: add(startOfToday(), { hours: 5 }),
    end_date: add(startOfToday(), { hours: 6, minutes: 0 }),
    title: "10:00 AM - 03:00 PM Peter Smith Move",
    color: "#9E1212",
  },
  {
    id: "4",
    start_date: add(startOfToday(), { hours: 8, minutes: 0 }),
    end_date: add(startOfToday(), { hours: 9, minutes: 0 }),
    title: "11:00 AM - 05:00 PM Carl Marx Pack & Move",
    color: "#F29D38",
  },
  {
    id: "5",
    start_date: add(startOfToday(), { hours: 10, minutes: 0 }),
    end_date: add(startOfToday(), { hours: 11, minutes: 0 }),
    title: "10:00 AM - 02:00 PM Norman Bates Storage",
    color: "#8B9CFF",
  },
  {
    id: "6",
    start_date: startOfToday(),
    end_date: add(endOfToday(), { seconds: 1 }),
    title: "10:00 AM - 02:00 PM Norman Bates Storage",
    color: "#5DC6E7",
  },
  {
    id: "9",
    start_date: add(startOfToday(), { days: 1, hours: 1 }),
    end_date: add(startOfToday(), { days: 1, hours: 1, minutes: 30 }),
    title: "Tomorrow event",
    color: "#7D12A3",
  },
  {
    id: "10",
    start_date: sub(startOfToday(), { hours: 12 }),
    end_date: sub(startOfToday(), { hours: 11 }),
    title: "Yesterday event",
    color: "#7D12A3",
  },
  {
    id: "11",
    start_date: sub(startOfToday(), { days: 2, hours: 4 }),
    end_date: add(endOfToday(), { days: 1, minutes: 30 }),
    title: "Week event",
    color: "#7D12A3",
  },
];
