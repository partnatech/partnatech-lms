"use client";

import { BeakerIcon, BookOpenIcon, HomeIcon, TrophyIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { SidebarItem } from "./sidebar-item";

export const SidebarRoutes = () => {
  const routes = [
    { name: "Home", href: "/bootcamp", icon: HomeIcon },
    { name: "Learning Materials", href: "/bootcamp/learning-materials", icon: BookOpenIcon },
    { name: "Assignment and Rubrics", href: "/bootcamp/assignment-and-rubrics", icon: BeakerIcon },
    { name: "Practice Cases and Mentoring", href: "/bootcamp/case-and-mentoring", icon: UserGroupIcon },
    // { name: "Your Result", href: "/bootcamp/result", icon: TrophyIcon },
  ];

  return (
    <>
      {routes.map((route) => (
        <SidebarItem key={route.href} menu={route} />
      ))}
    </>
  );
};
