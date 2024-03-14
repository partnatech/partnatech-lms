import Link from "next/link";
import React from "react";

const practiceItems = [
  {
    id: 1,
    section: "Practice Case",
    children: [
      {
        title: "Practice Case 1",
        link: "/bootcamp/practice-and-mentoring/practice/1",
      },
      {
        title: "Practice Case 2",
        link: "/bootcamp/practice-and-mentoring/practice/2",
      },
      {
        title: "Practice Case 3",
        link: "/bootcamp/practice-and-mentoring/practice/3",
      },
    ],
  },
  {
    id: 2,
    section: "Mentoring",
    children: [
      {
        title: "Mentoring 1",
        link: "/bootcamp/practice-and-mentoring/mentoring/11",
      },
    ],
  },
];

const PracticeAndMentoringPage = () => {
  return (
    <div>
      <div className="rounded-lg shadow-sm w-full">
        <div className="flex flex-col p-6 space-y-2">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Practice Case and Mentoring
            </h1>
          </div>
        </div>
        <div className="p-6 grid gap-4">
          {practiceItems.map((item) => (
            <div key={item.id} className="space-y-2">
              <h3 className="font-bold">{item.section}</h3>
              <ul className="list-none space-y-1">
                {item.children.map((child) => (
                  <li key={child.title}>
                    <Link
                      href={child.link}
                      className="inline-flex font-medium items-center ml-4 hover:text-indigo-500 hover:underline"
                    >
                      {child.title}
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

export default PracticeAndMentoringPage;
