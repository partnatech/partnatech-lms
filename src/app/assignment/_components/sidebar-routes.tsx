"use client";

import { SidebarItem } from "./sidebar-item";

export const SidebarRoutes = () => {
  const routes = [
    {
      phase: "Phase 1",
      children: [
        {
          name: "Assignment 1 - Database",
          href: "/assignment/1-1",
        },
        {
          name: "Assignment 2 - Database",
          href: "/assignment/1-2",
        },
        {
          name: "Assignment 3 - Python",
          href: "/assignment/1-3",
        },
      ],
    },
    {
      phase: "Phase 2",
      children: [
        {
          name: "Assignment 1 - Database 2",
          href: "/assignment/2-1",
        },
        {
          name: "Assignment 2 - Database 2",
          href: "/assignment/2-2",
        },
        {
          name: "Assignment 3 - Python 2",
          href: "/assignment/2-3",
        },
      ],
    },
  ];

  return (
    <>
      {routes.map((route) => (
        <div
          key={route.phase}
          className="text-xs font-semibold leading-6 text-gray-400"
        >
          {route.phase}
          {route.children.map((child) => (
            <SidebarItem key={child.href} menu={child} />
          ))}
        </div>
      ))}
    </>
  );
};
