"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";
import React from "react";

const ChapterAccordion = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-md overflow-hidden">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="w-full p-4 text-left text-sm font-medium bg-gray-100 dark:bg-gray-800/40">
              <div className="flex w-full justify-between">
                <span>Principle of Data Analytics</span>
                <ChevronUpIcon className={`${open ? "rotate-180 transform" : ""} h-5 w-5 text-gray-400`} />
              </div>

              <p className="font-normal text-gray-400 mt-4 text-sm">0 / 3 lectures • 15m</p>
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0 "
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="text-sm text-gray-500">
                <div className="w-full flex items-center p-4 cursor-pointer border-t border-gray-200 dark:border-gray-700 transition duration-75">
                  <div className="flex-1 pr-4">
                    <p className="font-medium text-indigo-500">{`Aligning User's mind with the Business and Product`}</p>
                    <p className="font-normal text-gray-400 mt-4 text-sm">0 / 3 lectures • 15m</p>
                  </div>

                  <button className="h-4 w-4 border rounded-sm border-gray-200 dark:border-gray-700"></button>
                </div>
                <div className="w-full flex items-center p-4 cursor-pointer border-t border-gray-200 dark:border-gray-700 transition duration-75">
                  <div className="flex-1 pr-4">
                    <p className="font-medium">{`Aligning User's mind with the Business and Product`}</p>
                    <p className="font-normal text-gray-400 mt-4 text-sm">0 / 3 lectures • 15m</p>
                  </div>

                  <button className="h-4 w-4 border rounded-sm border-gray-200 dark:border-gray-700"></button>
                </div>
                <div className="w-full flex items-center p-4 cursor-pointer border-t border-gray-200 dark:border-gray-700 transition duration-75">
                  <div className="flex-1 pr-4">
                    <p className="font-medium">{`Aligning User's mind with the Business and Product`}</p>
                    <p className="font-normal text-gray-400 mt-4 text-sm">0 / 3 lectures • 15m</p>
                  </div>

                  <button className="h-4 w-4 border rounded-sm border-gray-200 dark:border-gray-700"></button>
                </div>
                <div className="w-full flex items-center p-4 cursor-pointer border-t border-gray-200 dark:border-gray-700 transition duration-75">
                  <div className="flex-1 pr-4">
                    <p className="font-medium">{`Aligning User's mind with the Business and Product`}</p>
                    <p className="font-normal text-gray-400 mt-4 text-sm">0 / 3 lectures • 15m</p>
                  </div>

                  <button className="h-4 w-4 border rounded-sm border-gray-200 dark:border-gray-700"></button>
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default ChapterAccordion;
