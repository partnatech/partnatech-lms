import { AcademicCapIcon } from "@heroicons/react/24/solid";
import React from "react";

const LearnDetailPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="order-1 col-span-1 lg:col-span-3 flex flex-col space-y-6">
          <div className="relative aspect-video border rounded-md overflow-hidden bg-gray-100 border-gray-200 dark:border-gray-700 dark:bg-gray-800"></div>

          <div className="border rounded-md p-6 border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <AcademicCapIcon className="h-4 w-4 text-indigo-400" />
              <p className="text-xs font-medium">4 Chapters</p>
            </div>
            <p className="font-semibold text-lg md:text-xl mb-2 capitalize mt-4">
              Prisma & Free Databases (MySQL, Postgres & Mongo)
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam delectus reprehenderit reiciendis
              aspernatur ipsa vitae quisquam inventore id pariatur. Nisi assumenda voluptas veritatis culpa fugiat,
              omnis illo dolorem hic harum.
            </p>
          </div>
        </div>

        <div className="order-2 lg:col-span-2 flex flex-col space-y-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded-md p-6 text-secondary bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-900 via-indigo-950 to-gray-900">
            <div className="mb-7">
              <h4 className="font-semibold text-xl mb-4 text-neutral-200">Ready to start building?</h4>
              <p className="text-sm text-neutral-200">
                Track your progress, watch with subtitles, change quality &amp; speed, and more.
              </p>
            </div>
            <button
              className="bg-indigo-600 h-9 rounded-md px-3 w-full text-neutral-200 text-sm font-semibold"
              type="button"
            >
              Enroll for Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnDetailPage;
