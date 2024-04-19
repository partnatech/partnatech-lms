import { DataWrapper, Image } from "."
import { Category } from "./category"

export type Difficulty = "beginner" | "intermediate" | "advance"
export type CourseResponse = DataWrapper<Course>

export interface CourseContentItem {
  title: string
  video_link: string
  type: string
  slug: string
  duration: number
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface CourseSection {
  title: string
  slug: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  course_content_items: {
    data: DataWrapper<CourseContentItem>[]
  }
}

export interface CourseReview {
  name: string
  rating: number
  content: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  avatar: Image
}

export interface Course {
  title: string
  slug: string
  descriptions: string
  preview_video_link: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  short_descriptions: string
  total_duration: number
  total_lesson: number
  cover_images: Image
  difficulty: Difficulty
  list_of_learning: string[]
  tools_used: {
    id: number
    title: string
    link: string
    description: string
    icons: Image
  }[]
  category: {
    data: DataWrapper<Category>
  }
  course_sections: {
    data: DataWrapper<CourseSection>[]
  }
  course_reviews: {
    data: DataWrapper<CourseReview>[]
  }
}
