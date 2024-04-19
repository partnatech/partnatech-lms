import {
  CalendarIcon,
  MapPinIcon,
  ChartBarIcon,
  CheckIcon,
} from "@heroicons/react/16/solid";
import Image from "next/image";

interface BootcampCardProps {
  title: string;
  category: string;
  level: string;
  mentorDescription: string;
  mentorName: string;
  owner: string;
  period: string;
  location: string;
  price?: string;
  discountPrice?: string;
  nextStepLink: string;
}
export const BootcampCard = (props: BootcampCardProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-4 bg-slate-800">
      <Image
        src="/images/sample/bootcamp-1.png"
        alt="bootcamp"
        width={420}
        height={420}
      ></Image>

      <div className="col-span-2 p-4">
        {/* Schedule Info */}
        <div className="flex items-center gap-6 mb-2">
          <span className="flex items-center gap-2 text-xs text-secondary-content dark:text-secondary-content-dark">
            <CalendarIcon className="w-4 h-4" />
            {props.period}
          </span>
          <span className="flex items-center gap-2 text-xs text-secondary-content dark:text-secondary-content-dark">
            <MapPinIcon className="w-4 h-4" />
            {props.location}
          </span>
          <span className="flex items-center gap-2 text-xs text-secondary-content dark:text-secondary-content-dark">
            <ChartBarIcon className="w-4 h-4" />
            {props.level}
          </span>
        </div>
        {/* Title */}
        <h4 className="text-xl leading-10 font-semibold text-primary-content dark:text-primary-content-dark mb-2">
          {props.title}
        </h4>
        {/* Price Promotions */}
        {props.category === "PROMOTIONS" && (
          <div className="">
            <span className="text-lg text-secondary dark:text-secondary-dark animate-pulse">
              {props.discountPrice}
            </span>{" "}
            <span className="text-sm text-secondary-content dark:text-secondary-content-dark line-through">
              {props.price}
            </span>
          </div>
        )}
        {/* Price Next */}
        {props.category === "NEXT" && (
          <div className="">
            <span className="text-lg text-secondary dark:text-secondary-dark ">
              {props.price}
            </span>
          </div>
        )}

        {/* Price Enrolled */}
        {props.category === "ENROLLED" && (
          <div className="flex space-x-2 items-center">
            <CheckIcon className="w-4 h-4 text-primary dark:text-primary-dark" />
            <span className="text-sm text-primary dark:text-primary-dark">
              Enrolled
            </span>
          </div>
        )}

        {/* Mentor */}
        <div className="flex items-center space-x-4 my-8">
          <span className="text-secondary-content dark:text-secondary-content-dark text-xs">
            Mentor :
          </span>
          <div className="flex items-center space-x-2">
            <Image
              src="/images/mentor.png"
              alt="mentor"
              width={48}
              height={48}
            ></Image>
            <div>
              <p className="text-sm">Rahardian Rizki</p>
              <span className="text-xs text-secondary-content dark:text-secondary-content-dark">
                Data Engineer Lead
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Image
              src="/images/mentor.png"
              alt="mentor"
              width={48}
              height={48}
            ></Image>
            <div>
              <p className="text-sm">Timothy Ronald</p>
              <span className="text-xs text-secondary-content dark:text-secondary-content-dark">
                Data Engineer Expert
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <div className="w-64 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden mt-8 mb-2">
              <div className="h-full bg-primary dark:bg-primary-dark w-1/2"></div>
            </div>
            <p className="text-xs text-secondary-content dark:text-secondary-content-dark">
              {props.category === "ENROLLED"
                ? "Bootcamp Progress: 50%"
                : "Quota peserta terisi 50%"}
            </p>
          </div>
          <button className="text-xs text-primary-content dark:text-primary-content-dark bg-primary dark:bg-primary-dark px-4 py-2 h-fit  rounded-lg">
            {props.category === "ENROLLED" ? "View Bootcamp" : "Join Bootcamp"}
          </button>
        </div>
      </div>
    </div>
  );
};
