"use client";
import DarkModeToggle from "@/components/dark-mode-toggle";
import { cn } from "@/utils/cn";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { Fragment } from "react";

interface User {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

interface NavbarProps {
  user?: User;
  setSidebarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  showSidebar?: boolean;
}

export const NavbarRoutes = ({ user, setSidebarOpen, showSidebar = true }: NavbarProps) => {
  const getFirstWordBeforeSpace = (str: string) => {
    if (!str) return ""; // Handle empty string
    const firstSpaceIndex = str.indexOf(" ");
    if (firstSpaceIndex === -1) return str; // Return the whole string if there's no space
    return str.slice(0, firstSpaceIndex);
  };

  const firstWord = getFirstWordBeforeSpace(user?.name || "");

  return (
    <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 dark:border-gray-900 bg-gray-50 dark:bg-gray-950 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      {showSidebar && (
        <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen?.(true)}>
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      )}

      {/* Separator */}
      <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <div className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm" />
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <DarkModeToggle />
          <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Separator */}
          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

          {/* Profile dropdown */}
          <Menu as="div" className="relative">
            <Menu.Button className="-m-1.5 flex items-center p-1.5">
              <span className="sr-only">Open user menu</span>
              {user?.image ? (
                <Image
                  className="h-8 w-8 rounded-full bg-gray-50"
                  src={user?.image}
                  alt={user?.name || "user"}
                  width={100}
                  height={100}
                />
              ) : (
                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                  <span className="font-medium text-gray-600">{user?.name?.charAt(0).toUpperCase()}</span>
                </div>
              )}
              <span className="hidden lg:flex lg:items-center">
                <span className="ml-4 text-sm font-semibold leading-6 text-gray-900 dark:text-white" aria-hidden="true">
                  {firstWord}
                </span>
                <ChevronDoubleDownIcon className="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={cn(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900")}
                    >
                      Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={cn(active ? "bg-gray-50" : "", "block px-3 py-1 text-sm leading-6 text-gray-900")}
                      onClick={() => signOut()}
                    >
                      Logout
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};
