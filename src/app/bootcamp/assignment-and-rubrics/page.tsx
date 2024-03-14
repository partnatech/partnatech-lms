import Link from "next/link";
import React from "react";

const assignmentItems = [
  {
    id: 1,
    section: "1",
    assignments: [
      {
        title: "Assignment 1 - Database",
        link: "/bootcamp/assignment-and-rubrics/1-1",
      },
      {
        title: "Assignment 2 - Database",
        link: "/bootcamp/assignment-and-rubrics/1-2",
      },
      {
        title: "Assignment 3 - Python",
        link: "/bootcamp/assignment-and-rubrics/1-3",
      },
    ],
  },
  {
    id: 2,
    section: "2",
    assignments: [
      {
        title: "Assignment 1 - Database 2",
        link: "/bootcamp/assignment-and-rubrics/2-1",
      },
      {
        title: "Assignment 2 - Database 2",
        link: "/bootcamp/assignment-and-rubrics/2-2",
      },
      {
        title: "Assignment 3 - Python 2",
        link: "/bootcamp/assignment-and-rubrics/2-3",
      },
    ],
  },
];

const AssignmentAndRubicsPage = () => {
  return (
    <div>
      <div className="rounded-lg shadow-sm w-full">
        <div className="flex flex-col p-6 space-y-2">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Assignment and Rubics
            </h1>
          </div>
        </div>
        <div className="p-6 grid gap-4">
          {assignmentItems.map((item) => (
            <div key={item.id} className="space-y-2">
              <h3 className="font-bold">Phase {item.section}</h3>
              <ul className="list-none space-y-1">
                {item.assignments.map((assignment) => (
                  <li key={assignment.title}>
                    <Link
                      href={assignment.link}
                      target="_blank"
                      className="inline-flex font-medium items-center ml-4 hover:text-indigo-500 hover:underline"
                    >
                      {assignment.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssignmentAndRubicsPage;
