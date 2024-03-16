import { stats } from '@/app/data/home';
import React from 'react';

const StatCards = () => {
  return (
    <>
      <h3 className="text-base font-semibold leading-6 dark:text-indigo-300 text-gray-900">
        Last 30 days
      </h3>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white dark:bg-gray-900 px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium dark:text-indigo-200 text-gray-800">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight dark:text-indigo-300 text-gray-900">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </>
  );
};

export default StatCards;
