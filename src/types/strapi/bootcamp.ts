import { DataWrapper, Image } from "."
import { Difficulty } from "./difficulty"
import { Mentor } from "./mentor"

export type BootcampResponse = DataWrapper<Bootcamp>
export interface Bootcamp {
  title: string
  cover_image: Image
  short_descriptions: string
  start_date: string
  end_date: string
  type: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  difficulty: Difficulty
  quota: string
  price: number
  discount_price: number | null
  slug: string
  //   faq: FAQ[]
  list_of_benefits: string[]
  descriptions: string
  location_url: string | null
  //   schedules: Schedule[]
  discussion_url: string
  list_of_skills: string[]
  mentors: {
    data: DataWrapper<Mentor>[]
  }
}
