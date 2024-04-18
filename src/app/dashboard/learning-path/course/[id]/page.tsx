import DifficulityIcon from "@/app/dashboard/_components/difficulity-icon"
import { StrapiResponse } from "@/types/strapi"
import { CourseResponse } from "@/types/strapi/course"
import Link from "next/link"
import qs from "qs"
import React from "react"
import { HiOutlineCalendar } from "react-icons/hi"
import { format } from "date-fns"
import TabButtonGroup from "../__components/tab-button-group"
import { FaCheck } from "react-icons/fa6"
import { HiMiniArrowUpRight } from "react-icons/hi2"
import CourseContentSection from "../__components/course-content-section"

const fetchCourseFromStrapi = async (id: string) => {
  const query = qs.stringify({
    populate: [
      "category",
      "tools_used&select=tools_used,tools_used.icons",
      "course_sections&select=course_sections,course_sections.course_content_items",
    ],
    fields: "*",
  })

  const response = await fetch(`${process.env.STRAPI_BASE_URL}/api/courses/${id}?${query}`, {
    cache: "no-store",
  })
  const strapiResponse: StrapiResponse<CourseResponse> = await response.json()
  return strapiResponse
}

const CoursePage = async ({ params }: { params: { id: string } }) => {
  const courseResponse = await fetchCourseFromStrapi(params.id)
  const courseData = courseResponse.data

  const categoryData = courseData.attributes.category.data
  const toolsUsedData = courseData.attributes.tools_used
  const courseSectionsData = courseData.attributes.course_sections

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-8">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs">
              <Link href="/dashboard/learning-path" className="text-secondary-content-dark">
                Learning Path
              </Link>
              <p>/</p>
              <Link
                href={`/dashboard/learning-path/${categoryData.id}`}
                className="text-secondary-content-dark"
              >
                {categoryData.attributes.title}
              </Link>
              <p>/</p>
              <p>{courseData.attributes.title}</p>
            </div>

            {/* Title Section */}
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-[28px]">{courseData.attributes.title}</p>
              <p className="text-secondary-content-dark text-sm">
                {courseData.attributes.short_descriptions}
              </p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <DifficulityIcon type={courseData.attributes.difficulty} />
                  <p className="text-sm text-secondary-content-dark capitalize">
                    {courseData.attributes.difficulty}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <HiOutlineCalendar className="text-secondary-content-dark" />
                  <p className="text-sm text-secondary-content-dark capitalize">
                    {format(courseData.attributes.createdAt, "Created on  dd MMM yyyy")}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <HiOutlineCalendar className="text-secondary-content-dark" />
                  <p className="text-sm text-secondary-content-dark capitalize">
                    {format(courseData.attributes.updatedAt, "Updated at  dd MMM yyyy")}
                  </p>
                </div>
              </div>
            </div>

            {/* Tab Button Group */}
            <TabButtonGroup />
          </div>

          <div id="about" className="flex flex-col gap-4">
            <p className="font-semibold text-2xl">About</p>
            <p className="text-secondary-content-dark text-sm">
              {courseData.attributes.descriptions}
            </p>
          </div>

          <div id="lesson" className="flex flex-col gap-4">
            <p className="font-semibold text-2xl">What you will learn</p>
            <div className="grid grid-cols-2 gap-4">
              {courseData.attributes.list_of_learning.map(item => (
                <div key={item} className="flex items-center gap-2 text-secondary-content-dark">
                  <FaCheck className="w-5 h-5" />
                  <p className=" text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-semibold text-2xl">Tools Used</p>
            <div className="grid grid-cols-3 gap-6">
              {toolsUsedData.map(tool => (
                <div
                  key={tool.id}
                  className="bg-background-secondary border border-primary-border p-6 rounded-lg"
                >
                  <img
                    src={`${process.env.STRAPI_BASE_URL}${tool.icons.data.attributes.url}`}
                    className="w-10 h-10 rounded-full object-cover mb-4"
                  ></img>

                  <div className="mb-4">
                    <p className="text-sm mb-2">{tool.title}</p>
                    <p className="text-xs text-secondary-content-dark">{tool.description}</p>
                  </div>

                  <Link href={tool.link} className="text-primary flex items-center gap-2">
                    Download
                    <HiMiniArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-2xl">Learning Path Content</p>
            </div>
            {courseSectionsData.data.map(courseSection => (
              <CourseContentSection key={courseSection.id} data={courseSection} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursePage
