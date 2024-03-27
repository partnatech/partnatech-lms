import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET(req: Request) {
  try {
    const totalCourses = await prisma.course.count();
    const totalMentors = await prisma.mentor.count();

    return NextResponse.json({
      message: "Sucessfully retrieve analytics list",
      data: {
        totalMentors: totalMentors,
        totalCourses: totalCourses,
        totalBootcamps: 1,
        totalStudents: 149,
      },
    });
  } catch (error) {
    console.log("[GET /analytics]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
