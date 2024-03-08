"use client";

import { HomeIcon } from "@heroicons/react/24/solid";
import { SidebarItem } from "./sidebar-item";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";
import { BuildingLibraryIcon } from "@heroicons/react/24/solid";
import { LightBulbIcon } from "@heroicons/react/24/solid";

const studentRoutes = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
  { name: "Events", href: "/events", icon: CalendarDaysIcon, current: false },
  { name: "Bootcamps", href: "/bootcamps", icon: AcademicCapIcon, current: false },
  { name: "Projects", href: "/projects", icon: BuildingLibraryIcon, current: false },
  { name: "Practices", href: "/practice", icon: ArrowTrendingUpIcon, current: false },
  { name: "Subscribe", href: "/subscribe", icon: StarIcon, current: false },
  { name: "Partna Learn", href: "/partnalearn", icon: LightBulbIcon, current: false },

];

export const SidebarRoutes = () => {
  const routes = studentRoutes;
  return (
    <>
      {routes.map((route) => (
        <SidebarItem key={route.href} menu={route} />
      ))}
    </>
  );
};
