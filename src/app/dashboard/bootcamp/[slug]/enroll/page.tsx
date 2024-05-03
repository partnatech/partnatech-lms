import React from "react"

import qs from "qs"

import { Breadcrumb, BreadcrumbPage } from "@/components/breadcrumb"
import { BootcampDetailHeader } from "../../_components/bootcamp-header"
import { StrapiResponse } from "@/types/strapi"
import { BootcampResponse } from "@/types/strapi/bootcamp"
import { BootcampMenu } from "../../_components/bootcamp-menu"
import { LearningMaterialsCard } from "../../_components/learning-material-card"

//TODO: Integrate to strapi
const learningMaterials = [
  {
    title: "Fundamental Python",
    image: "/images/sample/bootcamp-1.png",
    date: "12 Mar 2024",
  },
  {
    title: "Deployment Machine Learning",
    image: "/images/sample/bootcamp-2.png",
    date: "10 Mar 2024",
  },
  {
    title: "Big Data Analytics",
    image: "/images/sample/bootcamp-3.png",
    date: "4 Mar 2024",
  },
  {
    title: "Deployment Machine Learning",
    image: "/images/sample/bootcamp-1.png",
    date: "1 Mar 2024",
  },
]

const fetchBootcampDetailFromStrapi = async (slug: string) => {
  let slugTemp = 1
  const query = qs.stringify({
    populate: "cover_image,mentors.avatar",
    fields: "*",
  })

  const response = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/bootcamps/${slugTemp}?${query}`,
    {
      cache: "no-store",
    }
  )
  const strapiResponse: StrapiResponse<BootcampResponse> = await response.json()
  return strapiResponse
}

const BootcampEnrolledPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const bootcampResponse = await fetchBootcampDetailFromStrapi(params.slug)
  const bootcamp = bootcampResponse.data

  const pages: BreadcrumbPage[] = [
    { name: "Bootcamp", href: "/dashboard/bootcamp", current: false },
    {
      name: "Bootcamp Data Science and Data Analyst for Beginner",
      href: `/dashboard/bootcamp/data-engineering`,
      current: true,
    },
  ]

  return (
    <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8">
      <div className="flex flex-col gap-6 flex-1">
        <Breadcrumb pages={pages} />
        <BootcampDetailHeader
          title={bootcamp.attributes.title}
          description={bootcamp.attributes.short_descriptions}
          startDate={bootcamp.attributes.start_date}
          endDate={bootcamp.attributes.end_date}
          location={bootcamp.attributes.type}
          difficulty={bootcamp.attributes.difficulty}
        />

        <div className="grid grid-cols-4 mt-8">
          {/* Bootcamp Menu */}
          <BootcampMenu />
          {/* Learning Materials */}
          <div className="col-span-3">
            <p className="font-bold text-xl mb-4">Learning Materials</p>
            <div className="grid grid-cols-2 gap-8">
              {learningMaterials.map((item, index) => (
                <LearningMaterialsCard
                  key={`learning-material-${index}`}
                  image={item.image}
                  title={item.title}
                  date={item.date}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BootcampEnrolledPage
