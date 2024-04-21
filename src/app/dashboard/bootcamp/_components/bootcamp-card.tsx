import DifficulityIcon from "@/components/difficulity-icon"
import { BootcampResponse } from "@/types/strapi/bootcamp"
import { formatDateRange } from "@/utils/date"
import { formatNumberToCurrency } from "@/utils/currency"
import { CalendarIcon, MapPinIcon, ChartBarIcon, CheckIcon } from "@heroicons/react/16/solid"
import Image from "next/image"
import { MentorCard } from "./mentor-card"
import Link from "next/link"

export const BootcampCard = (props: BootcampResponse) => {
  return (
    <div className="grid md:grid-cols-3 gap-4 bg-secondary-base border-primary-border dark:bg-secondary-base-dark border">
      <div className="w-full h-full relative">
        <Image
          src={`${process.env.STRAPI_BASE_URL}${props.attributes.cover_image?.data?.attributes?.url}`}
          alt="bootcamp"
          layout="fill"
          objectFit="cover"
          quality={100}
        ></Image>
      </div>

      <div className="col-span-2 p-4">
        {/* Schedule Info */}
        <div className="flex items-center gap-6 mb-2">
          <span className="flex items-center gap-2 text-xs text-secondary-content dark:text-secondary-content-dark">
            <CalendarIcon className="w-4 h-4" />
            {formatDateRange(props.attributes.start_date, props.attributes.end_date)}
          </span>
          <span className="flex items-center gap-2 text-xs text-secondary-content dark:text-secondary-content-dark">
            <MapPinIcon className="w-4 h-4" />
            {props.attributes.type}
          </span>
          <DifficulityIcon type={props.attributes.difficulty} />
        </div>
        {/* Title */}
        <h4 className="text-xl leading-10 font-semibold text-primary-content dark:text-primary-content-dark mb-2">
          {props.attributes.title}
        </h4>
        {/* Price Promotions */}
        {props.attributes.discount_price !== null && (
          <div className="">
            <span className="text-lg text-secondary dark:text-secondary-dark animate-pulse">
              {formatNumberToCurrency(props.attributes.discount_price)}
            </span>{" "}
            <span className="text-sm text-secondary-content dark:text-secondary-content-dark line-through">
              {formatNumberToCurrency(props.attributes.price)}
            </span>
          </div>
        )}
        {/* Price Next */}
        {/* {props.category === "NEXT" && ( */}
        <div className="">
          <span className="text-lg text-secondary dark:text-secondary-dark ">
            {formatNumberToCurrency(props.attributes.price)}
          </span>
        </div>
        {/*)} */}

        {/* Price Enrolled */}
        {/* {props.category === "ENROLLED" && ( */}
        <div className="flex space-x-2 items-center">
          <CheckIcon className="w-4 h-4 text-primary dark:text-primary-dark" />
          <span className="text-sm text-primary dark:text-primary-dark">Enrolled</span>
        </div>
        {/* )} */}

        {/* Mentor */}
        <div className="flex items-center space-x-4 my-8">
          <span className="text-secondary-content dark:text-secondary-content-dark text-xs">
            Mentor :
          </span>
          {props.attributes.mentors.data.map((mentor, idx) => (
            <MentorCard
              key={`mentor-${idx}`}
              mentorImage={mentor.attributes.avatar}
              mentorSlug={mentor.attributes.slug}
              mentorName={mentor.attributes.name}
              mentorDescription={mentor.attributes.role}
            />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div>
            <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden mt-8 mb-2">
              <div className="h-full bg-primary dark:bg-primary-dark w-1/2"></div>
            </div>
            <p className="text-xs text-secondary-content dark:text-secondary-content-dark">
              {/* {props.category === "ENROLLED"
                ? "Bootcamp Progress: 50%"
                : "Quota peserta terisi 50%"} */}
            </p>
          </div>

          <button className="w-max py-3 px-4 text-sm rounded-lg bg-gradient-to-b from-[#14B8A6] to-[#0F766E] text-white flex items-center gap-2">
            <Link href={`/dashboard/bootcamp/${props.attributes.slug}`}>Join bootcamp</Link>
            {/* <p> {props.category === "ENROLLED" ? "View Bootcamp" : "Join Bootcamp"}</p> */}
          </button>
        </div>
      </div>
    </div>
  )
}
