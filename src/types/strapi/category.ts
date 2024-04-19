import { DataWrapper, Image } from "."
import { Course } from "./course"
import { Mentor } from "./mentor"

export type CategoryResponse = DataWrapper<Category>

export interface Category {
  title: string
  description: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  slug: string
  icon: Image
  certificate_preview_image: Image
  courses: {
    data: DataWrapper<Course>[]
  }
  mentors: {
    data: DataWrapper<Mentor>[]
  }
  total_lesson: number
  total_duration: number
}
