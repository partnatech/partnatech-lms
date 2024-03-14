"use client";

import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { SidebarRoutes } from "./sidebar-routes";
import { Logo } from "@/components/logo";
import Link from "next/link";

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
            <li className="mt-auto">
              <Link
                href="/dashboard/bootcamp"
                className="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold dark:text-indigo-200 text-gray-800 hover:text-white hover:bg-indigo-700"
              >
                <ArrowLeftIcon
                  className="h-6 w-6 dark:text-indigo-200 text-indigo-600 group-hover:text-white"
                  aria-hidden="true"
                />
                Back to Partnatech Learning
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
