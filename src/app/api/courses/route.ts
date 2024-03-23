import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const categoryId = searchParams.get("categoryId") || undefined;
    const offset = Number(searchParams.get("offset")) || 0;
    const limit = Number(searchParams.get("limit")) || 10;

    const data = await prisma.course.findMany({
      include: {
        durationUnits: true,
        courseMentorMappings: {
          include: {
            mentors: true,
          },
        },
      },
      where: { categoryId: { equals: categoryId } },
      take: limit,
      skip: offset,
    });
    const totalCount = await prisma.course.count({
      where: { categoryId: { equals: categoryId } },
    });
    return NextResponse.json({
      message: "Sucessfully retrieve course list",
      metadata: {
        page: Math.floor(offset / limit) + 1,
        totalCount: totalCount,
        totalPage: Math.ceil(totalCount / limit),
      },
      data,
    });
  } catch (error) {
    console.log("[GET /course]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
