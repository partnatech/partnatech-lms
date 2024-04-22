"use client"
import clsx from "clsx"
import { useState } from "react"

export type Tab = {
  name: string
  total?: string
  href: string
  current: boolean
}

type TabsProps = {
  tabs: Array<Tab>
  onTabChange?: (tabs: Array<Tab>) => void
}

export const Tabs = (props: TabsProps) => {
  const { tabs, onTabChange } = props
  const [tabsState, setTabsState] = useState(tabs)

  const handleTabChange = (tab: Tab) => {
    const newTabs = tabsState.map(t => ({
      ...t,
      current: t.name === tab.name,
    }))
    setTabsState(newTabs)
    // Call the onTabChange function from the parent with the updated state
    if (onTabChange) {
      onTabChange(newTabs)
    }
  }

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-primary-border py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
          defaultValue={tabsState.find(tab => tab.current)?.name}
          onChange={e => {
            e.preventDefault()
            const tab = tabs.find(t => t.name === e.target.value)
            if (tab) {
              handleTabChange(tab)
            }
          }}
        >
          {tabsState.map(tab => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-primary-border">
          <nav className="-mb-px flex" aria-label="Tabs">
            {tabsState.map(tab => (
              <a
                key={tab.name}
                href={tab.href}
                className={clsx(
                  tab.current
                    ? "border-primary text-primary dark:border-primary-dark dark:text-primary-dark"
                    : "border-transparent text-secondary-content dark:text-secondary-content-dark hover:border-primary dark:hover:border-primary-dark hover:text-primary dark:hover:text-primary-dark",
                  "whitespace-nowrap border-b-2 py-4 px-6 text-sm font-medium"
                )}
                aria-current={tab.current ? "page" : undefined}
                onClick={() => {
                  handleTabChange(tab)
                }}
              >
                {tab.name}{" "}
                {tab.total && (
                  <span
                    className={clsx(
                      tab.current
                        ? " text-primary bg-primary/20 dark:text-primary dark:bg-primary/20"
                        : "text-secondary-content dark:text-secondary-content hover:text-primary hover:bg-primary/20 dark:hover:text-primary dark:hover:bg-primary/20",
                      "inline-flex items-center justify-center w-6 h-6 text-xs rounded-full "
                    )}
                  >
                    {tab.total}
                  </span>
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
