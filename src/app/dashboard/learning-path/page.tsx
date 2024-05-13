import { StrapiResponse } from "@/types/strapi"
import { CategoryResponse } from "@/types/strapi/category"
import Link from "next/link"
import React from "react"
import { FaCheck, FaClock, FaVideo } from "react-icons/fa6"
import qs from "qs"
import { formatDuration } from "@/utils/number"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

const fetchCategoriesFromStrapi = async () => {
  const query = qs.stringify({
    sort: ["title:asc"],
    populate: "*",
    fields: "*",
    pagination: {
      pageSize: 10,
      page: 1,
    },
    publicationState: "live",
    locale: ["en"],
  })
  const response = await fetch(`${process.env.STRAPI_BASE_URL}/api/categories?${query}`, {
    cache: "no-store",
  })
  const strapiResponse: StrapiResponse<CategoryResponse[]> = await response.json()
  return strapiResponse
}

const fetchEnrolledCategory = async (userId: string) => {
  const response = await prisma.userCategoryProgress.findFirst({
    where: {
      userId,
    },
  })

  return response
}

const fetchCourseProgress = async (userId: string, categoryId: number) => {
  if (!userId) return

  const response = await prisma.userCourseProgress.findMany({
    where: {
      userId,
      categoryId,
      isComplete: true,
    },
  })
  return response
}

const LearningPathCard = async ({ data, userId }: { data: CategoryResponse; userId: string }) => {
  const enrolledCategoriesResponse = await fetchEnrolledCategory(userId)
  const courseProgressResponse = await fetchCourseProgress(userId, data.id)

  const totalCourseCount = data.attributes.courses.data.length
  const totalCompletedCourseCount = courseProgressResponse?.length ?? 0

  return (
    <Link
      href={`/dashboard/learning-path/${data.id}`}
      className="bg-background-secondary border border-primary-border hover:border-primary-dark-border/50 transition-all p-6 rounded-lg flex flex-col gap-4"
    >
      <div className="flex justify-between items-start">
        <img
          className="w-[80px]"
          src={`${process.env.STRAPI_BASE_URL}${data.attributes.icon.data.attributes.url}`}
        />

        {enrolledCategoriesResponse !== null && (
          <div className="flex items-center gap-2">
            <FaCheck className="w-4 h-4 text-primary" />
            <p className="text-sm text-primary">Enrolled</p>
          </div>
        )}
      </div>

      <p className="text-lg">{data.attributes.title}</p>

      <p className="text-sm text-secondary-content-dark">{data.attributes.description}</p>

      {enrolledCategoriesResponse === null ? (
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-secondary-content-dark">
            <FaVideo className="w-4 h-4" />
            <p className="text-xs">{data.attributes.total_lesson} Lessons</p>
          </div>

          <div className="flex items-center gap-2 text-secondary-content-dark">
            <FaClock className="w-4 h-4" />
            <p className="text-xs">{formatDuration(data.attributes.total_duration)}</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <div className="relative rounded-full w-1/2 h-2 bg-tertiary-base-dark">
            <div
              className={`h-2 w-[${
                totalCompletedCourseCount / totalCourseCount
              }%] rounded-full bg-primary-dark absolute top-0 left-0`}
            ></div>
          </div>

          <p className="text-xs text-secondary-content-dark">
            {totalCompletedCourseCount} / {totalCourseCount} lesson completed
          </p>
        </div>
      )}
    </Link>
  )
}

const LearningPathPage = async () => {
  const session = await getServerSession(authOptions)
  const user = session?.user

  const categoriesResponse = await fetchCategoriesFromStrapi()
  const listCategories = categoriesResponse.data

  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm text-secondary-content-dark">
        Guiding you through structured pathways for achieving your expert goals efficiently.
      </p>

      <div className="grid grid-cols-3 gap-6">
        {listCategories.map(category => {
          /* @ts-expect-error Server Component */
          return <LearningPathCard key={category.id} data={category} userId={user?.id ?? ""} />
        })}
      </div>
    </div>
  )
}

export default LearningPathPage
