"use client"

import { cn } from "@/utils/cn"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"

const TAB_LIST = [
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#lesson",
    label: "Lesson",
  },
  {
    href: "#mentor",
    label: "Mentor",
  },
  {
    href: "#review",
    label: "Review",
  },
]

const TabButtonGroup = () => {
  const [hash, setHash] = useState("")

  useEffect(() => {
    setHash(window.location.hash)
  }, [])

  return (
    <div className="border-b border-secondary-border w-full flex">
      {TAB_LIST.map(tab => (
        <Link
          key={tab.href}
          href={tab.href}
          onClick={() => setHash(tab.href)}
          className={cn(
            hash === tab.href ? " border-primary-dark text-primary-dark" : "border-transparent",
            "px-6 text-sm py-4 border-b "
          )}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  )
}

export default TabButtonGroup
