"use client"
import { cn } from "@/utils/cn"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface MenuItem {
  name: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface SidebarItemProps {
  menu: MenuItem
}

export const SidebarItem = ({ menu }: SidebarItemProps) => {
  const pathname = usePathname()

  const isActive = pathname.includes(menu.href)

  return (
    <li key={menu.name}>
      <Link
        href={menu.href}
        className={cn(
          isActive
            ? "bg-tertiary-base-dark text-primary border border-[#ededed] dark:border-[#302F31]"
            : "dark:text-[#A1A1AA] text-gray-800 hover:text-primary hover:bg-[#242427] border border-transparent hover:border-[#302F31]",
          "group flex gap-x-3 rounded-md p-3 text-sm leading-6"
        )}
      >
        <menu.icon
          className={cn(
            isActive
              ? "text-primary"
              : "dark:text-[#A1A1AA] text-primary group-hover:text-[#A1A1AA]",
            "h-6 w-6 shrink-0"
          )}
          aria-hidden="true"
        />
        {menu.name}
      </Link>
    </li>
  )
}
