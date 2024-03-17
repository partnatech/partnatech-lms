"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import { cn } from "@/utils/cn";
import { ArrowDownTrayIcon, DocumentIcon } from "@heroicons/react/24/solid";

export default function ChapterTab() {
  return (
    <div className="w-full px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-gray-200 dark:bg-gray-800 p-1 max-w-md">
          <Tab
            className={({ selected }) =>
              cn(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-indigo-600 text-white"
                  : "dark:text-indigo-100 text-black hover:bg-white/[0.12] hover:text-gray-800"
              )
            }
          >
            Description
          </Tab>
          <Tab
            className={({ selected }) =>
              cn(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-indigo-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-indigo-600 text-white"
                  : "dark:text-indigo-100 text-black hover:bg-white/[0.12] hover:text-gray-800"
              )
            }
          >
            Resources
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-2 w-full">
          <Tab.Panel
            className={cn(
              "border rounded-md overflow-hidden p-4 bg-gray-100 border-gray-200 dark:border-gray-700 dark:bg-gray-800"
            )}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, similique itaque sit in explicabo aliquam
            quibusdam! Tempora nihil, excepturi sed vero, voluptatum ea laboriosam, aspernatur consequatur obcaecati
            minus facilis esse.
          </Tab.Panel>
          <Tab.Panel
            className={cn(
              "border rounded-md overflow-hidden p-4 bg-gray-100 border-gray-200 dark:border-gray-700 dark:bg-gray-800"
            )}
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 flex space-x-4 items-center border bg-gray-200 dark:bg-gray-900 border-gray-400 dark:border-gray-700/80 rounded-md">
                <DocumentIcon className="h-6 w-6 text-gray-500" />

                <div>
                  <p className="text-sm">feature-matrix-diagram.pdf</p>
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <p className="text-xs text-indigo-500">Download</p>
                    <ArrowDownTrayIcon className="h-4 w-4 text-indigo-500" />
                  </div>
                </div>
              </div>
              <div className="p-4 flex space-x-4 items-center border bg-gray-200 dark:bg-gray-900 border-gray-400 dark:border-gray-700/80 rounded-md">
                <DocumentIcon className="h-6 w-6 text-gray-500" />

                <div>
                  <p className="text-sm">feature-matrix-diagram.pdf</p>
                  <div className="flex items-center space-x-2 cursor-pointer">
                    <p className="text-xs text-indigo-500">Download</p>
                    <ArrowDownTrayIcon className="h-4 w-4 text-indigo-500" />
                  </div>
                </div>
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
