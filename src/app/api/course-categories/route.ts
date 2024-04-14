import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const offset = Number(searchParams.get("offset")) || 0;
    const limit = Number(searchParams.get("limit")) || 10;

    const data = await prisma.courseCategories.findMany({
      take: limit,
      skip: offset,
    });
    const totalCount = await prisma.courseCategories.count();
    return NextResponse.json({
      message: "Sucessfully retrieve course categories list",
      metadata: {
        page: Math.floor(offset / limit) + 1,
        totalCount: totalCount,
        totalPage: Math.ceil(totalCount / limit),
      },
      data,
    });
  } catch (error) {
    console.log("[GET /categories]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
