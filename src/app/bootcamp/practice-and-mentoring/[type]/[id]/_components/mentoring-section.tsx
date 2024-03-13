import React from "react";

const MentoringSection = () => {
  return (
    <div className="max-w-2xl space-y-2">
      <h2 className="font-semibold text-2xl pt-4">Mentoring</h2>
      <div className="py-6 grid space-y-8">
        <div className="space-y-2">
          <h3 className="font-bold">What you need to accomplish</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-bold">What are the mentoring covers</h3>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="space-y-2">
          <h3 className="font-bold">Scheduled Date</h3>
          <p>22 March 2023 19.00</p>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-gray-900 dark:text-white">
            You can only join zoom on expected date and time
          </p>
          <button className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
            Zoom Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default MentoringSection;
