import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { StrapiResponse } from "@/types/strapi"
import { CategoryResponse } from "@/types/strapi/category"
import { formatDuration } from "@/utils/number"
import { getServerSession } from "next-auth"
import Link from "next/link"
import qs from "qs"
import React from "react"
import { FaClock, FaVideo } from "react-icons/fa6"

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

const fetchEnrolledCategories = async (userId: string) => {
  const response = await prisma.userCategoryProgress.findMany({
    where: {
      userId,
    },
  })

  return response
}

const MyLearningPage = async () => {
  const session = await getServerSession(authOptions)
  const user = session?.user

  const categoriesResponse = await fetchCategoriesFromStrapi()
  const enrolledCategoriesResponse = await fetchEnrolledCategories(user?.id ?? "")
  const listCategoryId = enrolledCategoriesResponse.map(item => item.categoryId)

  const listEnrolledCategories = categoriesResponse.data.filter(item =>
    listCategoryId.includes(item.id)
  )
  console.log("🚀 ~ MyLearningPage ~ listEnrolledCategories:", listEnrolledCategories)

  return (
    <div className="flex flex-col gap-12">
      <img src="/images/banner-my-learning.webp" className="w-full" />

      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <p className="font-semibold text-2xl">Learning Path</p>
            <p className="text-secondary-content-dark text-sm">
              Guiding you through structured pathways for achieving your expert goals efficiently.
            </p>
          </div>

          <Link
            href="/dashboard/learning-path"
            className="bg-tertiary-base-dark border-primary-border border py-2 px-4 text-secondary-content-dark hover:text-white text-sm font-medium rounded-lg h-max"
          >
            See More
          </Link>
        </div>

        {listEnrolledCategories.length > 0 ? (
          <div className="grid grid-cols-3 gap-6">
            {listEnrolledCategories.map(data => (
              <Link
                href={`/dashboard/learning-path/${data.id}`}
                className="bg-background-secondary border border-primary-border hover:border-primary-dark-border/50 transition-all p-6 rounded-lg flex flex-col gap-4"
              >
                <div className="flex justify-between items-start">
                  <img
                    className="w-[80px]"
                    src={`${process.env.STRAPI_BASE_URL}${data.attributes.icon.data.attributes.url}`}
                  />
                </div>

                <p className="text-lg">{data.attributes.title}</p>

                <p className="text-sm text-secondary-content-dark">{data.attributes.description}</p>

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
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <p className="text-sm text-center text-secondary-content-dark">
              No learning path found
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MyLearningPage
