import { Calendar1Icon, CalendarClock, CalendarRange, HomeIcon, SearchIcon, Users } from "lucide-react";


export const navigationItems = [
  {
    title: "Home",
    icon: HomeIcon,
    href: "/feed",
  },
  {
    title: "Discover",
    icon: SearchIcon,
    href: "/discover",
  },
  {
    title: "Following",
    icon: Users,
    href: "/following",
  },
  {
    title: "Events",
    icon: CalendarClock,
    href: "/events",
  },
  {
    title: "Dummy",
    icon: Calendar1Icon,
    href: "/dummy",
  },
];
