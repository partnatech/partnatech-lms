import Image from "next/image";
import React from "react";

const bootcampItem = {
  id: 2,
  title: "Class Enrolled",
  category: "ENROLLED",
  embedID: "X3paOmcrTjQ",
  mentorName: "mentor-3",
  mentorDescription: "DA 3+ years",
  owner: "owner",
  location: "online",
  period: "01 March - 21 March 2024 (12 weeks)",
};
const BootcampPage = () => {
  return (
    <div>
      <div className="rounded-lg shadow-sm w-full">
        <div className="flex flex-col p-6 space-y-2">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Welcome to the {bootcampItem.title}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              by {bootcampItem.mentorName} | {bootcampItem.mentorDescription}
            </p>
          </div>
          <div className="md:grid md:grid-cols-3">
            <div className="md:col-span-2">
              <iframe
                src={`https://www.youtube.com/embed/${bootcampItem.embedID}`}
                title={bootcampItem.title}
                width="100%"
                height={"350"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="p-6 grid gap-4">
          <div className="space-y-2">
            <h3 className="font-bold">Total duration</h3>
            <p>{bootcampItem.period}</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Phases</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Phase A</li>
              <li>Phase B</li>
              <li>Phase C</li>
              <li>Phase D</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Final project</h3>
            <p>Lorem ipsum</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Self-learning materials</h3>
            <p>Access to this</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Full Syllabus / Course Outline</h3>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Download Syllabus
            </button>
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Bootcamp Schedule</h3>
            <div className="md:grid md:grid-cols-3 py-2">
              <div className="md:col-span-2">
                <Image
                  src={"/images/auth.jpg"}
                  alt="Bootcamp Cover"
                  width={"1024"}
                  height={"1024"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BootcampPage;
