"use client";

import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";

interface MenuItem {
  name: string;
  href: string;
  icon:  React.ComponentType<React.SVGProps<SVGSVGElement>>;
  current: boolean;
}

interface SidebarItemProps {
  menu: MenuItem;
}

export const SidebarItem = ({ menu }: SidebarItemProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive =
    (pathname === "/" && menu.href === "/") ||
    pathname === menu.href ||
    pathname?.startsWith(`${menu.href}/`);

  const onClick = () => {
    router.push(menu.href);
  };

  return (
    <li key={menu.name}>
      <a
        href={menu.href}
        className={clsx(
          menu.current
            ? "bg-indigo-700 text-white"
            : "text-indigo-200 hover:text-white hover:bg-indigo-700",
          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
        )}
      >
        <menu.icon
          className={clsx(
            menu.current
              ? "text-white"
              : "text-indigo-200 group-hover:text-white",
            "h-6 w-6 shrink-0"
          )}
          aria-hidden="true"
        />
        {menu.name}
      </a>
    </li>
  );
};
