import { DataWrapper, Image, File } from "."
import { Category } from "./category"
import { Mentor } from "./mentor"
import { Difficulty } from "./difficulty"

export type CourseResponse = DataWrapper<Course>
export type CourseContentItemResponse = DataWrapper<CourseContentItem>

export interface SnippetCode {
  id: number
  snippet_code: string
}

export interface ExternalReference {
  link: string
  title: string
}

export interface CourseContentItem {
  title: string
  video_link: string
  resource_files: {
    data: File[]
  }
  external_reference: ExternalReference[]
  snippet_code_list: SnippetCode[]
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
  mentors: {
    data: DataWrapper<Mentor>[]
  }
}
