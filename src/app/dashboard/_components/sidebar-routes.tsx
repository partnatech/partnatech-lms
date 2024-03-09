"use client";

import { HomeIcon } from "@heroicons/react/24/solid";
import { SidebarItem } from "./sidebar-item";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";
import { BuildingLibraryIcon } from "@heroicons/react/24/solid";
import { LightBulbIcon } from "@heroicons/react/24/solid";

export const SidebarRoutes = () => {
  const routes = [
    { name: "Home", href: "/dashboard", icon: HomeIcon },
    { name: "Learn", href: "/dashboard/learn", icon: LightBulbIcon },
    { name: "Events", href: "/events", icon: CalendarDaysIcon },
    { name: "Bootcamps", href: "/bootcamps", icon: AcademicCapIcon },
    { name: "Projects", href: "/projects", icon: BuildingLibraryIcon },
    { name: "Practices", href: "/practice", icon: ArrowTrendingUpIcon },
    { name: "Subscribe", href: "/subscribe", icon: StarIcon },
  ];

  return (
    <>
      {routes.map((route) => (
        <SidebarItem key={route.href} menu={route} />
      ))}
    </>
  );
};
