import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const slug = params.slug;
    const data = await prisma.course.findFirst({
      include: {
        durationUnits: true,
        courseMentorMappings: {
          include: {
            mentors: true,
          },
        },
      },
      where: { slug: { equals: slug } },
    });

    return NextResponse.json({
      message: "Sucessfully retrieve course detail list",
      data: data || {},
    });
  } catch (error) {
    console.log("[GET /course/:slug]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
