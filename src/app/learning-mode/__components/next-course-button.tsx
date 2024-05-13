"use client"

import { useParams, useSearchParams, useRouter } from "next/navigation"

import React from "react"
import { DataWrapper } from "@/types/strapi"
import { CourseSection } from "@/types/strapi/course"
import Router from "next/router"

interface NextCourseButtonProps {
  courseSectionList: DataWrapper<CourseSection>[]
}

const NextCourseButton = ({ courseSectionList }: NextCourseButtonProps) => {
  const params = useParams()
  const searchParams = useSearchParams()
  const router = useRouter()

  const courseId = params.id[0]
  const courseSectionId = params.id[1]
  const currentVideoId = searchParams.get("currentVideo")

  const currentSectionIndex = courseSectionList.findIndex(
    item => item.id === parseInt(courseSectionId)
  )

  const handleClick = () => {
    if (!currentVideoId) return

    const currentCourseSection = courseSectionList.find(
      item => item.id === parseInt(courseSectionId)
    )

    if (currentCourseSection) {
      const courseContentList = currentCourseSection.attributes.course_content_items.data
      const currentVideoIndex = courseContentList.findIndex(
        item => item.id === parseInt(currentVideoId)
      )

      //   Checking is current video on latest index of content section
      if (currentVideoIndex === courseContentList.length - 1) {
        const nextCourseSection = courseSectionList[currentSectionIndex + 1]
        const firstVideoOnSection = nextCourseSection.attributes.course_content_items.data[0]
        router.push(
          `/learning-mode/${courseId}/${nextCourseSection.id}?currentVideo=${firstVideoOnSection.id}`
        )
      }
      //   Continue to next video on current section
      else {
        router.push(
          `/learning-mode/${courseId}/${courseSectionId}?currentVideo=${
            currentCourseSection.attributes.course_content_items.data[currentVideoIndex + 1].id
          }`
        )
      }
    }
  }

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 border border-primary-border bg-tertiary-base-dark rounded-lg text-secondary-content-dark hover:bg-primary-dark/50 hover:text-white transition-all text-sm"
    >
      Next Course
    </button>
  )
}

export default NextCourseButton
