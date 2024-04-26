"use client"
import DarkModeToggle from "@/components/dark-mode-toggle"
import { cn } from "@/utils/cn"
import { Menu, Transition } from "@headlessui/react"
import { Bars3Icon, BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid"
import { signOut } from "next-auth/react"
import Image from "next/image"
import { Fragment } from "react"
import UserMenuDropdown from "./user-menu-dropdown"

interface User {
  name?: string | null | undefined
  email?: string | null | undefined
  image?: string | null | undefined
}

interface NavbarProps {
  user?: User
  setSidebarOpen?: React.Dispatch<React.SetStateAction<boolean>>
  showSidebar?: boolean
}

export const NavbarRoutes = ({ user, setSidebarOpen, showSidebar = true }: NavbarProps) => {
  const getFirstWordBeforeSpace = (str: string) => {
    if (!str) return "" // Handle empty string
    const firstSpaceIndex = str.indexOf(" ")
    if (firstSpaceIndex === -1) return str // Return the whole string if there's no space
    return str.slice(0, firstSpaceIndex)
  }

  const firstWord = getFirstWordBeforeSpace(user?.name || "")

  return (
    <div className="w-full sticky top-0 z-40 flex py-6 shrink-0 items-center gap-x-4 border-b border-primary-border bg-primary-base-dark px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      {showSidebar && (
        <button
          type="button"
          className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
          onClick={() => setSidebarOpen?.(true)}
        >
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      )}

      {/* Separator */}
      <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />

      <div className="flex items-center justify-between pl-[282px] w-full">
        <p className="font-bold text-2xl">Learning Path</p>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          {/* <DarkModeToggle /> */}
          <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Separator */}
          <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

          {/* Profile dropdown */}
          {user && <UserMenuDropdown user={user} />}
        </div>
      </div>
    </div>
  )
}
