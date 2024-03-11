import React from "react";
import { prisma } from "../../../lib/prisma";
import CategoryList from "./_components/category-list";
import { getCourses } from "../../../actions/get-courses";
import CourseList from "./_components/course-list";

interface LearnPageProps {
  searchParams: {
    categoryId: string,
  }
}

const LearnPage = async ({ searchParams }: LearnPageProps ) => {
  const categories = await prisma.category.findMany({
    orderBy: {
      name: "asc"
    }
  });

  const courses = await getCourses({
    ...searchParams,
  });

  return (
    <div className="max-w-screen-xl mx-auto">
      <CategoryList categories={categories} />
      <CourseList courses={courses} />
    </div>
  );
};

export default LearnPage;
