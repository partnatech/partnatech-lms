import { Course } from "@prisma/client";
import { prisma } from "../lib/prisma";

interface GetCourses {
  categoryId?: string;
}

export const getCourses = async ({ categoryId }: GetCourses): Promise<Course[]> => {
  try {
    let category;
    if (categoryId) {
      category = await prisma.category.findUnique({
        where: {
          id: categoryId,
        },
      });
    }

    let condition = {};
    if (category && category.name.toLowerCase() !== "all") {
      condition = {
        where: {
          categoryId,
        },
      };
    }

    return await prisma.course.findMany(condition);
  } catch (error) {
    console.error("[GET COURSES]", error);
    return [];
  }
};
