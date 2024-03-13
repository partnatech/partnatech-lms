"use client";

import { SidebarItem } from "./sidebar-item";

export const SidebarRoutes = () => {
  const routes = [
    {
      section: "Practice Case",
      children: [
        {
          name: "Practice Case 1",
          href: "/practice-and-mentoring/practice/1",
        },
        {
          name: "Practice Case 2",
          href: "/practice-and-mentoring/practice/2",
        },
        {
          name: "Practice Case 3",
          href: "/practice-and-mentoring/practice/3",
        },
      ],
    },
    {
      section: "Mentoring",
      children: [
        {
          name: "Mentoring 1",
          href: "/practice-and-mentoring/mentoring/11",
        },
      ],
    },
  ];

  return (
    <>
      {routes.map((route) => (
        <div
          key={route.section}
          className="text-xs font-semibold leading-6 text-gray-400"
        >
          {route.section}
          {route.children.map((child) => (
            <SidebarItem key={child.href} menu={child} />
          ))}
        </div>
      ))}
    </>
  );
};
