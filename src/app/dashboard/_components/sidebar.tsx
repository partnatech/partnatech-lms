"use client";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

// interface NavigationItem {
//   name: string;
//   href: string;
//   current: boolean;
// }

// interface SidebarProps {
//   navigation: NavigationItem[];
// }

export const Sidebar = () => {
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
        <div className="flex h-16 shrink-0 items-center">
          {/* <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=white"
            alt="Your Company"
          /> */}
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                  {/* <li>
                    <a
                      href="#"
                      className={clsx(
                        item.current
                          ? "bg-indigo-700 text-white"
                          : "text-indigo-200 hover:text-white hover:bg-indigo-700",
                        "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      )}
                    >
                    <item.icon
                        className={clsx(
                          item.current
                            ? "text-white"
                            : "text-indigo-200 group-hover:text-white",
                          "h-6 w-6 shrink-0"
                        )}
                        aria-hidden="true"
                      /> 
                      {item.name}
                    </a>
                  </li> */}
               
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
