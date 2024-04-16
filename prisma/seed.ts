import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const insertDurationUnit = async () => {
  try {
    await prisma.durationUnits.createMany({
      data: [
        { durationUnit: "Minute(s)" },
        { durationUnit: "Hour(s)" },
        { durationUnit: "Day(s)" },
        { durationUnit: "Week(s)" },
        { durationUnit: "Month(s)" },
      ],
    });
  } catch (error) {
    console.error(`Error insert duration unit:`, error);
    throw error;
  }
};

const insertCourseCategory = async () => {
  try {
    await prisma.courseCategories.createMany({
      data: [
        { name: "Data Analyst" },
        { name: "Data Engineer" },
        { name: "Front End Engineer" },
        { name: "Back End Engineer" },
      ],
    });
  } catch (error) {
    console.error(`Error insert course:`, error);
    throw error;
  }
};
const insertCourse = async () => {
  try {
    const durationUnit = await prisma.durationUnits.findFirst({
      where: {
        durationUnit: "Minute(s)", // Replace with the name of the duration unit
      },
    });

    if (!durationUnit) {
      throw new Error("Duration unit not found");
    }

    const course = await prisma.course.create({
      data: {
        title: "Data Analyst Course",
        slug: "data-analyst-course",
        description:
          "Learn essential skills for data analysis including data visualization, statistical analysis, and data manipulation techniques.",
        imageUrl: "/images/dark-project-app-screenshot.png",
        price: 400000,
        category: {
          connect: { name: "Data Analyst" },
        },
        duration: 120,
        durationUnits: {
          connect: { id: durationUnit.id },
        },
      },
    });
    return course;
  } catch (error) {
    console.error(`Error insert course:`, error);
    throw error;
  }
};

async function main() {
  await insertDurationUnit();
  await insertCourseCategory();
  await insertCourse();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
