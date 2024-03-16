"use client";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  name: string;
  href: string;
}

interface SidebarItemProps {
  menu: MenuItem;
}

export const SidebarItem = ({ menu }: SidebarItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === menu.href;

  return (
    <li key={menu.name}>
      <Link
        href={menu.href}
        className={cn(
          isActive
            ? "bg-indigo-700 text-white"
            : "dark:text-indigo-200 text-gray-800 hover:text-white hover:bg-indigo-700",
          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
        )}
      >
        {menu.name}
      </Link>
    </li>
  );
};
