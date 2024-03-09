import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

const tags = ["All", "Python", "PostgreSQL", "MySQL", "RDMS"];

const LearnPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex items-center overflow-x-auto space-x-4">
        {tags.map((tag, index) => (
          <button
            key={tag}
            className={cn(
              "px-3 py-1 text-sm font-medium text-neutral-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-50 rounded-md shrink-0",
              {
                "bg-indigo-50 text-indigo-600 dark:bg-indigo-600 dark:text-gray-100": index === 0, // TODO: Set active by selected tags
              }
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <Link key={String(item)} href="#!">
            <div className="border overflow-hidden group border-indigo-100 dark:border-gray-700 rounded-md hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-200 ease-in-out">
              <div className="relative aspect-video bg-indigo-100 dark:bg-gray-800"></div>

              <div className="px-4 py-2">
                <p className="text-sm md:text-base font-medium group-hover:text-indigo-700 dark:group-hover:text-indigo-200 transition text-gray-900 dark:text-gray-100 line-clamp-2 dark:">
                  Data Science With Python and SQL
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LearnPage;
