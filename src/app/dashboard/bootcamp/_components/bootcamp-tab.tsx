"use client"

import { Tab, Tabs } from "@/components/tabs"
import { usePathname, useSearchParams, useRouter } from "next/navigation"

type BootcampTabProps = {
  availableCount: string
  expiredCount: string
}

export const BootcampTab = (props: BootcampTabProps) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const tabs: Tab[] = [
    {
      name: "Available Bootcamp",
      total: props.availableCount,
      href: `#available`,
      current: true,
    },
    {
      name: "Expired",
      total: props.expiredCount,
      href: `#expired`,
      current: false,
    },
  ]

  const handleTabChange = (newTabsState: Tab[]) => {
    // Handle the updated tab state here, e.g., update parent component state

    const currentTab = newTabsState.find(tab => tab.current)
    let currentHref = currentTab ? currentTab.href : ""
    if (currentHref && currentHref.startsWith("#")) {
      currentHref = currentHref.substring(1)
    }

    const isExpired = currentHref === "expired"
    const params = new URLSearchParams(searchParams)

    if (isExpired) {
      params.set("isExpired", isExpired.toString())
    } else {
      params.delete("isExpired")
    }

    replace(`${pathname}?${params.toString()}`)
  }

  return <Tabs tabs={tabs} onTabChange={handleTabChange} />
}
