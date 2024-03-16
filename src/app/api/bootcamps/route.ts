import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET(
  req: Request
) {
  try {
    const data = await prisma.bootcamp.findMany({
      include: {
        mentor: {
          select: { id: true, name: true, description: true, }
        }
      }
    });

    return NextResponse.json({
      message: 'Sucessfully retrieve bootcamp list',
      data,
    });
  } catch (error) {
    console.log("[GET /bootcamps]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}