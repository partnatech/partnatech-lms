'use client';
import clsx from "clsx";
import { useState } from "react";

export type Tab = {
  name: string,
  href: string,
  current: boolean
}

type TabsProps = {
  tabs: Array<Tab>
}

export const Tabs = (props: TabsProps) => {
  const { tabs } = props;
  const [tabsState, setTabsState] = useState(tabs);

  const onTabChange = (tab: Tab) => {
    const newTabs = tabsState.map((t) => ({
      ...t,
      current: t.name === tab.name
    }));
    setTabsState(newTabs);
  };

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
          defaultValue={tabsState.find((tab) => tab.current)?.name}
          onChange={(e) => {
            e.preventDefault();
            const tab = tabs.find((t) => t.name === e.target.value);
            if (tab) {
              onTabChange(tab);
            }
          }}
        >
          {tabsState.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-primary-border">
          <nav className="-mb-px flex" aria-label="Tabs">
            {tabsState.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={clsx(
                  tab.current
                    ? 'border-primary text-primary dark:border-primary-dark dark:text-primary-dark'
                    : 'border-transparent text-secondary-content dark:text-secondary-content-dark hover:border-primary dark:hover:border-primary-dark hover:text-primary dark:hover:text-primary-dark',
                  'whitespace-nowrap border-b-2 py-4 px-6 text-sm font-medium'
                )}
                aria-current={tab.current ? 'page' : undefined}
                onClick={() => {
                  onTabChange(tab);
                }}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}