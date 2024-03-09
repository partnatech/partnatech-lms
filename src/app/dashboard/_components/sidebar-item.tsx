"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
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
        className={clsx(
          isActive
            ? "bg-indigo-700 text-white"
            : "dark:text-indigo-200 text-gray-800 hover:text-white hover:bg-indigo-700",
          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
        )}
      >
        <menu.icon
          className={clsx(
            isActive ? "text-white" : "dark:text-indigo-200 text-indigo-600 group-hover:text-white",
            "h-6 w-6 shrink-0"
          )}
          aria-hidden="true"
        />
        {menu.name}
      </Link>
    </li>
  );
};
