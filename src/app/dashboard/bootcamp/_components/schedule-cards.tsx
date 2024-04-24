import { BootcampSchedule } from "@/types/strapi/bootcamp"
import { formatDateRange } from "@/utils/date"
import {
  CalendarDaysIcon,
  CalendarIcon,
  ChatBubbleOvalLeftIcon,
  MapPinIcon,
} from "@heroicons/react/16/solid"

type ScheduleCardsProps = {
  startDate: string
  endDate: string
  schedules: BootcampSchedule[]
  // location: string
  // discussionPlatform: string
}

export const ScheduleCards = (props: ScheduleCardsProps) => {
  return (
    <>
      {/* Period */}
      <div className="space-y-3 p-4 bg-secondary-base dark:bg-secondary-base-dark border border-primary-border rounded-lg">
        <div className="flex gap-2 items-center">
          <CalendarIcon className="w-5 h-5 shrink-0" />
          <span className="text-base text-secondary-content dark:text-secondary-content-dark">
            Durasi Bootcamp
          </span>
        </div>
        <p className="text-sm font-medium text-primary-content dark:text-primary-content-dark">
          {formatDateRange(props.startDate, props.endDate)}
        </p>
      </div>
      {/* Day - Time */}
      <div className="space-y-3 p-4 bg-secondary-base dark:bg-secondary-base-dark border border-primary-border rounded-lg">
        <div className="flex gap-2 items-center">
          <CalendarDaysIcon className="w-5 h-5 shrink-0" />
          <span className="text-base text-secondary-content dark:text-secondary-content-dark">
            Jadwal Kelas
          </span>
        </div>
        {props.schedules.map((schedule, index) => (
          <div className="flex justify-between items-center" key={index}>
            <p className="text-sm font-medium text-primary-content dark:text-primary-content-dark">
              {schedule.day}
            </p>
            <p className="text-sm font-medium text-primary-content dark:text-primary-content-dark">
              {schedule.hour}
            </p>
          </div>
        ))}
      </div>
      {/* Location */}
      {/* <div className="space-y-3 p-4 bg-secondary-base dark:bg-secondary-base-dark border border-primary-border rounded-lg">
        <div className="flex gap-2 items-center">
          <MapPinIcon className="w-5 h-5 shrink-0" />
          <span className="text-base text-secondary-content dark:text-secondary-content-dark">
            Lokasi
          </span>
        </div>
        <p className="text-sm font-medium text-primary-content dark:text-primary-content-dark">
          {props.location}
        </p>
      </div> */}
      {/* Discussion Platform */}
      {/* <div className="space-y-3 p-4 bg-secondary-base dark:bg-secondary-base-dark border border-primary-border rounded-lg">
        <div className="flex gap-2 items-center">
          <ChatBubbleOvalLeftIcon className="w-5 h-5 shrink-0" />
          <span className="text-base text-secondary-content dark:text-secondary-content-dark">
            Plaform Diskusi
          </span>
        </div>
        <p className="text-sm font-medium text-primary-content dark:text-primary-content-dark">
          {props.discussionPlatform}
        </p>
      </div> */}
    </>
  )
}
