import DifficulityIcon from "@/components/difficulity-icon"
import { Difficulty } from "@/types/strapi/difficulty"
import { formatDateRange } from "@/utils/date"
import { CalendarIcon, ChartBarIcon, MapPinIcon } from "@heroicons/react/16/solid"

type BootcampDetailHeaderProps = {
  title: string
  description?: string
  startDate: string
  endDate: string
  location: string
  difficulty: Difficulty
}

export const BootcampDetailHeader = (props: BootcampDetailHeaderProps) => {
  return (
    <div>
      <h1 className="text-3xl leading-10 font-semibold text-primary-content dark:text-primary-content-dark mb-4">
        {props.title}
      </h1>
      <p className="text-sm text-secondary-content dark:text-secondary-content-dark mb-6">
        {props.description}
      </p>
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-2 text-xs text-secondary-content dark:text-secondary-content-dark">
          <CalendarIcon className="w-4 h-4" />
          {formatDateRange(props.startDate, props.endDate)}
        </span>
        <span className="flex items-center gap-2 text-xs text-secondary-content dark:text-secondary-content-dark">
          <MapPinIcon className="w-4 h-4" />
          {props.location}
        </span>
        <span className="flex items-center gap-2 text-xs text-secondary-content dark:text-secondary-content-dark">
          <DifficulityIcon type={props.difficulty} />
        </span>
      </div>
    </div>
  )
}
