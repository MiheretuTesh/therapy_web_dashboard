import { UserRoles } from "./auth";
import {
  PersonOutline,
  Duo,
  People,
  FavoriteBorder,
  VolunteerActivism,
  CalendarToday,
  LocalAtm,
  Settings,
} from "@mui/icons-material";

enum Routes {
  default = "/",
  logIn = "/login",
  signUp = "/signUp",
  homePage = "/home",
  profile = "/profile",
  chatRooms = "/chatRooms",
  friendList = "/friendList",
  therpiests = "/therpiests",
  profSpeakers = "/profSpeakers",
  calendar = "/calendar",
  payments = "/payments",
  settings = "/settings",
}

const sidebarRoutes = [
  {
    id: 1,
    label: "profile",
    url: Routes.profile,
    allowedRoles: {
      [UserRoles.patient]: true,
    },
    Icon: PersonOutline,
  },
  {
    id: 2,
    label: "chatRooms",
    url: Routes.chatRooms,
    allowedRoles: { [UserRoles.patient]: true },
    Icon: Duo,
  },
  {
    id: 3,
    label: "friendList",
    url: Routes.friendList,
    Icon: People,
    allowedRoles: { [UserRoles.patient]: true },
  },
  {
    id: 4,
    label: "therpiests",
    url: Routes.therpiests,
    Icon: FavoriteBorder,
    allowedRoles: { [UserRoles.patient]: true },
  },
  {
    id: 5,
    label: "profSpeakers",
    url: Routes.profSpeakers,
    Icon: VolunteerActivism,
    allowedRoles: { [UserRoles.patient]: true },
  },
  {
    id: 6,
    label: "calendar",
    url: Routes.calendar,
    Icon: CalendarToday,
    allowedRoles: { [UserRoles.patient]: true },
  },
  {
    id: 7,
    label: "payments",
    url: Routes.payments,
    Icon: LocalAtm,
    allowedRoles: { [UserRoles.patient]: true },
  },
  {
    id: 8,
    label: "settings",
    url: Routes.settings,
    Icon: Settings,
    allowedRoles: { [UserRoles.patient]: true },
  },
];

export { Routes, sidebarRoutes };
