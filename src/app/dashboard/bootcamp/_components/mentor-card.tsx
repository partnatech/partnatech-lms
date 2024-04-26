import { Image } from "@/types/strapi"
import Link from "next/link"

type MentorCardProps = {
  mentorImage: Image
  mentorName: string
  mentorSlug: string
  mentorDescription: string
}

export const MentorCard = (props: MentorCardProps) => {
  return (
    <>
      <Link
        href={`/dashboard/mentor/${props.mentorSlug}`}
        key={props.mentorSlug}
        className="p-4 last:border-none border-b border-primary-border flex items-center gap-3 group"
      >
        <div className="flex items-center gap-4 p-4 bg-secondary-base dark:bg-secondary-base-dark border border-primary-border rounded-lg">
          <img
            className="inline-block h-10 w-10 rounded-full"
            src={`${process.env.STRAPI_BASE_URL}${props.mentorImage.data.attributes.url}`}
            alt={`${props.mentorName} Image`}
          />
          <div>
            <div className="text-base font-medium text-primary-content dark:text-primary-content-dark">
              {props.mentorName}
            </div>
            <div className="text-sm text-secondary-content dark:text-secondary-content-dark">
              {props.mentorDescription}
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
