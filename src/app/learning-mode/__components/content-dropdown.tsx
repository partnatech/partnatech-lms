"use client"

import { DataWrapper } from "@/types/strapi"
import { Course, CourseSection } from "@/types/strapi/course"
import { cn } from "@/utils/cn"
import { Disclosure } from "@headlessui/react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import React, { useMemo } from "react"
import { FaChevronDown, FaVideo } from "react-icons/fa6"
import type { UserCourseContentProgress } from "@prisma/client"
import { formatDuration } from "@/utils/number"

interface ContentDropdownProps {
  data: DataWrapper<CourseSection>
  courseProgress?: UserCourseContentProgress[]
  courseData: DataWrapper<Course>
  isOpen: boolean
}

const ContentDropdown = ({ data, courseProgress, courseData, isOpen }: ContentDropdownProps) => {
  const searchParams = useSearchParams()

  const currentVideo = searchParams.get("currentVideo")

  const listOfContentId = data.attributes.course_content_items.data.map(item => item.id)
  const completedContentCount = courseProgress?.filter(item =>
    listOfContentId.includes(item.courseContentId)
  ).length
  const totalContentCount = data.attributes.course_content_items.data.length

  return (
    <Disclosure defaultOpen={isOpen}>
      {({ open }) => (
        <div>
          <Disclosure.Button
            className={cn(
              open ? "rounded-t-lg" : "rounded-lg",
              "flex items-center justify-between p-4 bg-tertiary-base-dark w-full border border-primary-border"
            )}
          >
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col gap-1">
                <p className="text-white font-semibold text-left truncate">
                  {data.attributes.title}
                </p>
                <div className="flex items-center text-sm text-secondary-content-dark gap-1">
                  <p>
                    {completedContentCount}/{totalContentCount} Lectures
                  </p>
                  <p>•</p>
                  <p>15m</p>
                </div>
              </div>
              <FaChevronDown
                className={cn(
                  open ? "rotate-180 transform" : "",
                  "text-secondary-content-dark w-4 h-4 transition-all"
                )}
              />
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className="rounded-b-lg border border-primary-border w-full">
            {data.attributes.course_content_items.data.length > 0 ? (
              <>
                {data.attributes.course_content_items.data.map(course => {
                  const isCompleted = courseProgress?.find(
                    item => item.courseContentId === course.id
                  )?.isComplete

                  console.log("isCompleted", isCompleted, course.id)

                  return (
                    <Link
                      href={`/learning-mode/${courseData.id}/${data.id}?currentVideo=${course.id}`}
                      className={cn(
                        currentVideo === course.id.toString()
                          ? "bg-primary-dark/5"
                          : "bg-secondary-base-dark",
                        "flex items-center justify-between px-5 py-4 border-b border-primary-border  w-full last:border-transparent last:rounded-b-lg hover:bg-primary-dark/5 group transition-all"
                      )}
                      key={course.id}
                    >
                      <div className="flex flex-col gap-2">
                        <p
                          className={cn(
                            currentVideo === course.id.toString() ? "text-primary-dark" : "",
                            "text-sm group-hover:text-primary-dark"
                          )}
                        >
                          {course.attributes.title}
                        </p>

                        <div className="flex items-center gap-2">
                          <FaVideo className="text-secondary-content-dark" />
                          <p className="text-sm">{formatDuration(course.attributes.duration)}</p>
                        </div>
                      </div>

                      <input
                        id="default-checkbox"
                        type="checkbox"
                        checked={isCompleted}
                        className="w-4 h-4 text-primary-dark/50 bg-secondary-base-dark border-primary-border rounded focus:ring-primary-dark"
                      ></input>
                    </Link>
                  )
                })}
              </>
            ) : (
              <div className="h-[80px] flex items-center justify-center bg-secondary-base-dark  rounded-b-lg">
                <p className="text-center text-secondary-content-dark text-sm">No Content</p>
              </div>
            )}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}

export default ContentDropdown
