import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import type { UserSubscription } from "@prisma/client"

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    const parsedRequest = await request.json()

    const res = await prisma.$transaction([
      prisma.userSubscription.create({
        data: {
          categoryId: parsedRequest.categoryId,
          expiredAt: parsedRequest.expiredAt,
          subscriptionId: parsedRequest.subscriptionId,
          userId: parsedRequest.userId,
        },
      }),
      prisma.userTransactionLog.create({
        data: {
          type: parsedRequest.type,
          amount: parsedRequest.amount,
          productId: parsedRequest.productId,
          productName: parsedRequest.productName,
          userId: parsedRequest.userId,
        },
      }),
      prisma.userCategoryProgress.create({
        data: {
          categoryId: parsedRequest.categoryId,
          isComplete: false,
          userId: parsedRequest.userId,
          certificateUrl: "",
        },
      }),
    ])

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
