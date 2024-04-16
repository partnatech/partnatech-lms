import { DataWrapper } from "@/types/strapi"
import { CourseSection } from "@/types/strapi/course"
import React from "react"

interface CourseContentSectionProps {
  data: DataWrapper<CourseSection>
}

const CourseContentSection = ({ data }: CourseContentSectionProps) => {
  console.log("🚀 ~ CourseContentSection ~ data:", data)
  return <div>CourseContentSection</div>
}

export default CourseContentSection
