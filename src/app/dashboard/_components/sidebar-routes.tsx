"use client"

import { HomeIcon } from "@heroicons/react/24/solid"
import { SidebarItem } from "./sidebar-item"
import { FaBookOpen } from "react-icons/fa"
import { PiPathBold } from "react-icons/pi"
import { FaGraduationCap, FaRocket, FaUserGroup } from "react-icons/fa6"

export const SidebarRoutes = () => {
  const routes = [
    { name: "My Learning", href: "/dashboard/my-learning", icon: FaBookOpen },
    { name: "Learning Path", href: "/dashboard/learning-path", icon: PiPathBold },
    { name: "Bootcamp", href: "/dashboard/bootcamp", icon: FaGraduationCap },
    { name: "Projects", href: "/dashboard/projects", icon: FaRocket },
    { name: "Mentoring", href: "/dashboard/mentoring", icon: FaUserGroup },
  ]

  return (
    <>
      {routes.map(route => (
        <SidebarItem key={route.href} menu={route} />
      ))}
    </>
  )
}
