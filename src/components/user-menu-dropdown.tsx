"use client"
import React, { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import Image from "next/image"
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid"
import { signOut } from "next-auth/react"
import { cn } from "@/utils/cn"
import { FaChevronDown } from "react-icons/fa6"

interface User {
  name?: string | null | undefined
  email?: string | null | undefined
  image?: string | null | undefined
}

const UserMenuDropdown = ({ user }: { user: User }) => {
  const getFirstWordBeforeSpace = (str: string) => {
    if (!str) return "" // Handle empty string
    const firstSpaceIndex = str.indexOf(" ")
    if (firstSpaceIndex === -1) return str // Return the whole string if there's no space
    return str.slice(0, firstSpaceIndex)
  }

  const firstWord = getFirstWordBeforeSpace(user?.name || "")

  return (
    <div>
      <Menu as="div" className="relative w-max ">
        <Menu.Button className="flex items-center bg-tertiary-base-dark rounded-full border border-primary-border p-1 pr-2 gap-2">
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
              <span className="font-medium text-gray-600">
                {user?.name?.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
          <span className="font-medium text-sm text-secondary-content-dark" aria-hidden="true">
            Hello, {firstWord}
          </span>
          <FaChevronDown className="w-3 h-3 text-gray-400" aria-hidden="true" />
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
          <Menu.Items className="absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded-md bg-primary-base-dark border border-secondary-border py-2">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={cn(
                    active ? "bg-secondary-base-dark" : "",
                    "block px-3 py-1 text-sm leading-6 text-secondary-content-dark"
                  )}
                >
                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={cn(
                    active ? "bg-secondary-base-dark" : "",
                    "block px-3 py-1 text-sm leading-6 text-secondary-content-dark"
                  )}
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
  )
}

export default UserMenuDropdown
