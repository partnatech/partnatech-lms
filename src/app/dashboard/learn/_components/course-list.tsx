import { Course } from "@prisma/client";
import Link from "next/link";

interface CoursesListProps {
	courses: Course[],
}

const CourseList = ({
	courses,
}: CoursesListProps) => {
	return (
		<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
			{courses.map((course) => (
				<Link key={String(course.id)} href="#!">
					<div className="border overflow-hidden group border-indigo-100 dark:border-gray-700 rounded-md hover:bg-indigo-50 dark:hover:bg-gray-800 transition-all duration-200 ease-in-out">
						<div className="relative aspect-video bg-indigo-100 dark:bg-gray-800"></div>

						<div className="px-4 py-2">
							<p className="text-sm md:text-base font-medium group-hover:text-indigo-700 dark:group-hover:text-indigo-200 transition text-gray-900 dark:text-gray-100 line-clamp-2 dark:">
								{course.title}
							</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	)
}

export default CourseList;