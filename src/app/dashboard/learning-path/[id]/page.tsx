import { DataWrapper, StrapiResponse } from "@/types/strapi"
import { CategoryResponse } from "@/types/strapi/category"
import { Course } from "@/types/strapi/course"
import { formatDuration } from "@/utils/number"
import Link from "next/link"
import qs from "qs"
import React from "react"
import { FaCheck, FaClock, FaGraduationCap, FaVideo } from "react-icons/fa6"
import DifficulityIcon from "../../_components/difficulity-icon"

interface CourseCardProps {
  data: DataWrapper<Course>
  index: number
  isLastItem: boolean
}

const CourseCard = ({ data, index, isLastItem }: CourseCardProps) => {
  return (
    <Link
      href={`/dashboard/learning-path/course/${data.id}`}
      className="flex gap-6 relative h-[182px]"
    >
      {!isLastItem && (
        <div className="w-[2px] bg-line-secondary h-full absolute top-0 left-[18px]"></div>
      )}

      <div className="relative w-[40px] h-[46px] flex items-center justify-center text-white bg-background-secondary text-2xl font-semibold border border-line-secondary rounded-lg">
        {index}
      </div>

      <div className="border border-line-secondary hover:border-primary/30 transition-all rounded-lg flex max-h-[150px] w-full bg-background-secondary text-white group">
        <img
          src={`${process.env.STRAPI_BASE_URL}${data.attributes.cover_images.data.attributes.url}`}
          className="w-[200px] object-cover rounded-tl-lg rounded-bl-lg flex-shrink-0"
        />

        <div className="p-4 flex flex-col justify-between">
          <div>
            <p className="font-semibold mb-2 group-hover:text-primary">{data.attributes.title}</p>
            <p className="text-typography-secondary text-sm">
              {data.attributes.short_descriptions}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-typography-secondary">
                <FaVideo className="w-4 h-4" />
                <p className="text-xs">{data.attributes.total_lesson} Chapters</p>
              </div>

              <div className="flex items-center gap-2 text-typography-secondary">
                <FaClock className="w-4 h-4" />
                <p className="text-xs">{formatDuration(data.attributes.total_duration)}</p>
              </div>
            </div>

            <DifficulityIcon type={data.attributes.difficulty} />
          </div>
        </div>
      </div>
    </Link>
  )
}

const fetchCategoryFromStrapi = async (id: string) => {
  const query = qs.stringify({
    populate: "courses&select=name,icon,courses,courses.cover_images,mentors,mentors.avatar",
    fields: "*",
  })

  const response = await fetch(`${process.env.STRAPI_BASE_URL}/api/categories/${id}?${query}`, {
    cache: "no-store",
  })
  const strapiResponse: StrapiResponse<CategoryResponse> = await response.json()
  return strapiResponse
}

const LearningPathDetail = async ({ params }: { params: { id: string } }) => {
  const categoryResponse = await fetchCategoryFromStrapi(params.id)
  const courseList = categoryResponse.data.attributes.courses.data
  const mentorList = categoryResponse.data.attributes.mentors.data

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs">
          <Link href="/dashboard/learning-path" className="text-typography-secondary">
            Learning Path
          </Link>
          <p>/</p>
          <p>{categoryResponse.data.attributes.title}</p>
        </div>

        {/* Title */}
        <div className="flex items-center gap-6">
          <img
            className="w-[86px]"
            src={`${process.env.STRAPI_BASE_URL}${categoryResponse.data.attributes.icon.data.attributes.url}`}
          />

          <div className="flex flex-col gap-4">
            <p className="text-2xl font-semibold">{categoryResponse.data.attributes.title}</p>
            <p>{categoryResponse.data.attributes.description}</p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-typography-secondary">
                <FaVideo className="w-4 h-4" />
                <p className="text-xs">{categoryResponse.data.attributes.total_lesson} Lessons</p>
              </div>

              <div className="flex items-center gap-2 text-typography-secondary">
                <FaClock className="w-4 h-4" />
                <p className="text-xs">
                  {formatDuration(categoryResponse.data.attributes.total_duration)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="w-max py-3 px-4 text-sm rounded-lg bg-gradient-to-b from-[#14B8A6] to-[#0F766E] text-white flex items-center gap-2">
        <FaGraduationCap className="w-5 h-5" />
        <p>Unlock Learning Path</p>
      </button>

      {/* Course List */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          {courseList.map((course, index) => (
            <CourseCard
              key={course.id}
              data={course}
              index={index + 1}
              isLastItem={index + 1 === courseList.length}
            />
          ))}
        </div>

        <div className="col-span-4">
          <div className="border border-line-primary rounded-lg w-full bg-background-secondary text-white">
            <div className="bg-background-tertiary py-3 w-full flex items-center justify-center gap-2">
              <FaCheck className="text-secondary w-4 h-4" />
              <p className="text-center text-secondary text-sm">Mentoring Available</p>
            </div>

            {mentorList.map(mentor => (
              <Link
                href={`/dashboard/mentor/${mentor.id}`}
                key={mentor.id}
                className="p-4 last:border-none border-b border-line-primary flex items-center gap-3 group"
              >
                <img
                  src={`${process.env.STRAPI_BASE_URL}${mentor.attributes.avatar.data.attributes.url}`}
                  className="w-10 h-10 rounded-full object-cover"
                ></img>

                <div>
                  <p className="text-sm font-semibold group-hover:text-secondary">
                    {mentor.attributes.name}
                  </p>
                  <p className="text-xs text-typography-secondary">{mentor.attributes.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LearningPathDetail
