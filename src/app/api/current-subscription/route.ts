import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url)

    const categoryId = url.searchParams.get("categoryId")
    const userId = url.searchParams.get("userId")

    const res = await prisma.userSubscription.findFirst({
      where: {
        categoryId: parseInt(categoryId ?? ""),
        userId: userId ?? "",
      },
    })

    return new NextResponse(
      JSON.stringify({
        data: res,
        status: 200,
        message: "Success",
      })
    )
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        status: "error",
        message: error.message,
      }),
      { status: 500 }
    )
  }
}
