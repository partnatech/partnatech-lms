"use client";
import { useState } from "react";

const tabNames = ["Assignment", "Rubric"];

interface AssignmentAndRubricTabProps {
  assignment: string;
  rubric: string;
}

const AssignmentAndRubricTab = ({
  assignment,
  rubric,
}: AssignmentAndRubricTabProps) => {
  const [activeTab, setActiveTab] = useState("Assignment"); // Default active tab

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <div className="sm:hidden">
        <select
          id="tabs"
          name="tabs"
          className="block w-full rounded-md border-gray-300 dark:bg-gray-800"
          value={activeTab}
          onChange={(e) => handleTabClick(e.target.value)}
        >
          {tabNames.map((tab) => (
            <option key={tab} value={tab}>
              {tab}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block md:max-w-xl">
        <div
          className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
          aria-label="Tabs"
        >
          {tabNames.map((tab, index) => (
            <button
              key={tab}
              className={`${
                activeTab === tab
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-gray-300 hover:text-gray-700"
              } group relative min-w-0 flex-1 overflow-hidden bg-white dark:bg-gray-800 py-4 px-4 text-center text-sm font-semibold hover:bg-gray-50 focus:z-10`}
              onClick={() => handleTabClick(tab)}
              aria-current={activeTab === tab ? "page" : undefined}
            >
              <span>{tab}</span>
              {activeTab === tab && (
                <span
                  aria-hidden="true"
                  className="bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5"
                ></span>
              )}
            </button>
          ))}
        </div>
      </div>
      {/* Render dynamic content based on active tab */}
      <div className="py-8">
        {activeTab === "Assignment" && (
          <div
            className="prose dark:!prose-invert"
            dangerouslySetInnerHTML={{ __html: assignment }}
          ></div>
        )}
        {activeTab === "Rubric" && (
          <div
            className="prose dark:!prose-invert"
            dangerouslySetInnerHTML={{ __html: rubric }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default AssignmentAndRubricTab;
