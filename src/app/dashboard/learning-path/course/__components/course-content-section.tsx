"use client"
import { DataWrapper } from "@/types/strapi"
import { CourseSection } from "@/types/strapi/course"
import React from "react"
import { Disclosure } from "@headlessui/react"
import { FaChevronDown } from "react-icons/fa"
import { cn } from "@/utils/cn"
import { FaVideo } from "react-icons/fa6"
import Link from "next/link"
import { formatMillisecondsToMMSS } from "@/utils/number"

interface CourseContentSectionProps {
  data: DataWrapper<CourseSection>
}

const CourseContentSection = ({ data }: CourseContentSectionProps) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div>
          <Disclosure.Button className="flex items-center justify-between p-4 bg-secondary-base-dark rounded-t-lg w-full">
            <div className="flex items-center gap-4">
              <FaChevronDown
                className={cn(
                  open ? "rotate-180 transform" : "",
                  "text-secondary-content-dark w-4 h-4 transition-all"
                )}
              />
              <p className="text-white font-semibold">{data.attributes.title}</p>
            </div>
          </Disclosure.Button>
          <Disclosure.Panel className="bg-tertiary-base-dark rounded-b-lg">
            {data.attributes.course_content_items.data.length > 0 ? (
              <>
                {data.attributes.course_content_items.data.map(course => (
                  <div className="flex items-center justify-between px-5 py-4" key={course.id}>
                    <div className="flex items-center gap-4">
                      <FaVideo className="text-secondary-content-dark" />
                      <p className="text-sm">{course.attributes.title}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      {course.attributes.video_link && (
                        <Link
                          href={course.attributes.video_link}
                          className="text-primary-dark text-sm hover:underline"
                        >
                          Preview
                        </Link>
                      )}
                      <p className="text-sm text-secondary-content-dark">
                        {formatMillisecondsToMMSS(course.attributes.duration)}
                      </p>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="h-[80px] flex items-center justify-center">
                <p className="text-center text-secondary-content-dark text-sm">No Content</p>
              </div>
            )}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  )
}

export default CourseContentSection
