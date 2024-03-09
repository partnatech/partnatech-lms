"use client";

import DarkModeToggle from "./dark-mode-toggle";
import { SidebarRoutes } from "./sidebar-routes";
import { Logo } from "@/components/logo";

export const Sidebar = () => {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto dark:bg-gray-950 bg-gray-50 px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          <Logo />
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                <SidebarRoutes />
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
