import DifficulityIcon from "@/components/difficulity-icon"
import { StrapiResponse } from "@/types/strapi"
import { CourseResponse } from "@/types/strapi/course"
import Link from "next/link"
import qs from "qs"
import React from "react"
import { HiOutlineCalendar } from "react-icons/hi"
import { format } from "date-fns"
import { formatDuration } from "@/utils/number"
import TabButtonGroup from "../__components/tab-button-group"
import { FaCheck, FaClock, FaGraduationCap, FaStar, FaVideo } from "react-icons/fa6"
import { HiMiniArrowUpRight } from "react-icons/hi2"
import CourseContentSection from "../__components/course-content-section"
import { cn } from "@/utils/cn"

const fetchCourseFromStrapi = async (id: string) => {
  const query = qs.stringify({
    populate: [
      "cover_images",
      "category",
      "tools_used&select=tools_used,tools_used.icons",
      "course_sections&select=course_sections,course_sections.course_content_items",
      "course_reviews&select=course_reviews,course_reviews.name,course_reviews.rating,course_reviews.content,course_reviews.avatar",
    ],
    fields: "*",
  })

  const response = await fetch(`${process.env.STRAPI_BASE_URL}/api/courses/${id}?${query}`, {
    cache: "no-store",
  })
  const strapiResponse: StrapiResponse<CourseResponse> = await response.json()
  return strapiResponse
}

const fetchOtherCourseFromStrapi = async (categoryId: number, currentCourseId: number) => {
  const query = qs.stringify({
    filters: {
      category: {
        id: {
          $eq: categoryId,
        },
      },
      id: {
        $ne: currentCourseId,
      },
    },
    populate: "cover_images,course_reviews",
    fields: "*",
  })

  const response = await fetch(`${process.env.STRAPI_BASE_URL}/api/courses?${query}`, {
    cache: "no-store",
  })
  const strapiResponse: StrapiResponse<CourseResponse[]> = await response.json()
  return strapiResponse
}

const CoursePage = async ({ params }: { params: { id: string } }) => {
  const courseResponse = await fetchCourseFromStrapi(params.id)
  const courseData = courseResponse.data

  const categoryData = courseData.attributes.category.data
  const toolsUsedData = courseData.attributes.tools_used
  const courseSectionsData = courseData.attributes.course_sections
  const courseReviewsData = courseData.attributes.course_reviews

  const otherCourseResponse = await fetchOtherCourseFromStrapi(categoryData.id, courseData.id)
  const otherCourseData = otherCourseResponse.data

  return (
    <div className="flex flex-col gap-[64px]">
      <div className="grid grid-cols-12 gap-6">
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
                      {format(courseData.attributes.createdAt, "'Created on '  dd MMM yyyy")}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <HiOutlineCalendar className="text-secondary-content-dark" />
                    <p className="text-sm text-secondary-content-dark capitalize">
                      {format(courseData.attributes.updatedAt, "'Updated at ' dd MMM yyyy")}
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

            {/* What you will learn */}
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

            {/* Tools Used */}
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

                    <Link href={tool.link} className="text-primary-dark flex items-center gap-2">
                      Download
                      <HiMiniArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Path Section */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-2xl">Learning Path Content</p>
              </div>

              {courseSectionsData.data.length > 0 ? (
                <>
                  {courseSectionsData.data.map(courseSection => (
                    <CourseContentSection key={courseSection.id} data={courseSection} />
                  ))}
                </>
              ) : (
                <p className="text-sm text-secondary-base-dark">No content found</p>
              )}
            </div>

            {/* Review */}
            <div className="flex flex-col gap-4">
              <p className="font-semibold text-2xl">Review from Learner</p>

              <div className="grid grid-cols-2 gap-6">
                {courseReviewsData.data.map(review => (
                  <div
                    className="bg-secondary-base-dark border border-primary-border p-4 rounded-lg flex flex-col gap-4"
                    key={review.id}
                  >
                    <div className="flex items-center gap-4">
                      <img
                        className="w-10 h-10 object-cover rounded-full"
                        src={`${process.env.STRAPI_BASE_URL}${review.attributes.avatar.data.attributes.url}`}
                      />

                      <div>
                        <p className="font-medium mb-1">{review.attributes.name}</p>
                        <div className="flex items-center gap-2">
                          <p className="text-secondary-dark text-sm font-semibold">
                            {review.attributes.rating}.0
                          </p>

                          <div className="flex items-center gap-[2px]">
                            {Array.from(Array(5).keys()).map(key => (
                              <FaStar
                                key={key}
                                className={cn(
                                  key < review.attributes.rating
                                    ? "text-secondary-dark"
                                    : "text-secondary-content-dark",
                                  "w-3 h-3"
                                )}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-secondary-content-dark">
                      {review.attributes.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-4">
          <div className="flex flex-col gap-6">
            {/* Preview Video */}
            <div className="border border-primary-border bg-secondary-base-dark rounded-lg">
              <img
                src={`${process.env.STRAPI_BASE_URL}${courseData.attributes.cover_images.data.attributes.url}`}
                className="w-full rounded-t-lg object-cover h-[240px]"
              ></img>
              <Link
                href={courseData.attributes.preview_video_link}
                className="rounded-b-lg py-4 flex items-center justify-center gap-2 text-secondary-content-dark hover:text-primary transition-all"
              >
                <FaVideo />
                <p className="text-sm font-medium">Preview Learning</p>
              </Link>
            </div>

            {/* Unlock Learning Path */}
            <div className="border border-primary-border bg-secondary-base-dark rounded-lg">
              <div className="bg-tertiary-base-dark p-4">
                <p className="text-secondary-content-dark text-center">
                  Unlock all{" "}
                  <span className="text-primary-dark">{categoryData.attributes.title}</span>{" "}
                  learning path start from only{" "}
                  <span className="text-white">Rp250.000 / month</span>
                </p>
              </div>
              <div className="p-4 flex flex-col gap-4">
                <button className="w-full py-3 px-4 text-sm rounded-lg bg-gradient-to-b from-[#14B8A6] to-[#0F766E] text-white flex items-center justify-center gap-2">
                  <FaGraduationCap className="w-5 h-5" />
                  <p>Unlock Learning Path</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Courses */}
      {otherCourseData.length > 0 && (
        <div className="flex flex-col gap-8">
          <p className="font-semibold text-2xl text-center">Continue your learning path</p>

          <div className="grid grid-cols-3 gap-6">
            {otherCourseData.map(course => {
              const allRating = course.attributes.course_reviews.data.map(
                item => item.attributes.rating
              )

              const totalRating = allRating.reduce((a, b) => a + b, 0)
              const averageRating = totalRating / allRating.length
              return (
                <Link
                  href={`/dashboard/learning-path/course/${course.id}`}
                  key={course.id}
                  className="border border-primary-border rounded-lg bg-secondary-base-dark group"
                >
                  <img
                    src={`${process.env.STRAPI_BASE_URL}${course.attributes.cover_images.data.attributes.url}`}
                    className="h-[220px] w-full object-cover rounded-t-lg"
                  />
                  <div className="p-4 flex flex-col gap-4">
                    <p className="line-clamp-2 font-semibold group-hover:text-primary-dark">
                      {course.attributes.title}
                    </p>

                    <div className="flex items-center gap-2">
                      <p className="text-secondary-dark text-sm font-semibold">{averageRating}</p>

                      <div className="flex items-center gap-[2px]">
                        {Array.from(Array(5).keys()).map(key => (
                          <FaStar
                            key={key}
                            className={cn(
                              key < averageRating
                                ? "text-secondary-dark"
                                : "text-secondary-content-dark",
                              "w-3 h-3"
                            )}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2 text-secondary-content-dark">
                          <FaVideo className="w-4 h-4" />
                          <p className="text-xs">{course.attributes.total_lesson} Chapters</p>
                        </div>

                        <div className="flex items-center gap-2 text-secondary-content-dark">
                          <FaClock className="w-4 h-4" />
                          <p className="text-xs">
                            {formatDuration(course.attributes.total_duration)}
                          </p>
                        </div>
                      </div>

                      <DifficulityIcon type={course.attributes.difficulty} />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default CoursePage
