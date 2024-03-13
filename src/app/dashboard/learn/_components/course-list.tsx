import { AcademicCapIcon } from "@heroicons/react/24/solid";
import { Course } from "@prisma/client";
import Link from "next/link";

interface CoursesListProps {
  courses: Course[];
}

const CourseList = ({ courses }: CoursesListProps) => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
      {courses.map((course) => (
        <Link key={String(course.id)} href={`/dashboard/learn/${course.id}`}>
          <div className="border overflow-hidden group border-indigo-100 dark:border-gray-700 h-full rounded-md hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-200 ease-in-out">
            <div className="relative aspect-video bg-indigo-100 dark:bg-gray-800"></div>

            <div className="px-4 py-2">
              <p className="text-sm md:text-base font-medium group-hover:text-indigo-700 dark:group-hover:text-indigo-200 transition text-gray-900 dark:text-gray-100 line-clamp-2 dark:">
                {course.title}
              </p>
              <div className="flex items-center space-x-2 mt-3 mb-5">
                <AcademicCapIcon className="h-4 w-4 text-indigo-400" />
                <p className="text-sm font-medium">4 Chapters</p>
              </div>
              <p className="mt-auto font-medium text-sm">Free</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CourseList;
