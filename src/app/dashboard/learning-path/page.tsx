import { StrapiResponse } from "@/types/strapi"
import { CategoryResponse } from "@/types/strapi/category"
import Link from "next/link"
import React from "react"
import { FaCheck, FaClock, FaVideo } from "react-icons/fa6"
import qs from "qs"
import { formatDuration } from "@/utils/number"

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

const LearningPathPage = async () => {
  const categoriesResponse = await fetchCategoriesFromStrapi()
  const listCategories = categoriesResponse.data

  return (
    <div className="flex flex-col gap-6">
      <p className="text-sm text-secondary-content-dark">
        Guiding you through structured pathways for achieving your expert goals efficiently.
      </p>

      <div className="grid grid-cols-3 gap-6">
        {listCategories.map(category => (
          <Link
            key={category.id}
            href={`/dashboard/learning-path/${category.id}`}
            className="bg-background-secondary border border-primary-border hover:border-primary-dark-border/50 transition-all p-6 rounded-lg flex flex-col gap-4"
          >
            <div className="flex justify-between items-start">
              <img
                className="w-[80px]"
                src={`${process.env.STRAPI_BASE_URL}${category.attributes.icon.data.attributes.url}`}
              />
              {/* <div className="flex items-center gap-2">
                <FaCheck className="w-4 h-4 text-primary" />
                <p className="text-sm text-primary">Enrolled</p>
              </div> */}
            </div>

            <p className="text-lg">{category.attributes.title}</p>

            <p className="text-sm text-secondary-content-dark">{category.attributes.description}</p>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-secondary-content-dark">
                <FaVideo className="w-4 h-4" />
                <p className="text-xs">{category.attributes.total_lesson} Lessons</p>
              </div>

              <div className="flex items-center gap-2 text-secondary-content-dark">
                <FaClock className="w-4 h-4" />
                <p className="text-xs">{formatDuration(category.attributes.total_duration)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default LearningPathPage
