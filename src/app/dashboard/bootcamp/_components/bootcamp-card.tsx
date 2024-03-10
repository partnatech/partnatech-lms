import { Divider } from "@/components/divider";
import {
  CalendarDaysIcon,
  MapPinIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";
import Link from "next/link";

interface BootcampInfo {
  title: string;
  category: string;
  embedID: string;
  mentorDescription: string;
  mentorName: string;
  owner: string;
  period: string;
  location: string;
  price?: string;
  discountPrice?: string;
  nextStepLink: string;
}
interface BootcampCardProps {
  bootcamp: BootcampInfo;
}
export const BootcampCard = ({ bootcamp }: BootcampCardProps) => {
  return (
    <div className="bg-white h-fit rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <iframe
        src={`https://www.youtube.com/embed/${bootcamp.embedID}`}
        title={bootcamp.title}
        width="100%"
        height={"180"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <div className="p-5">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {bootcamp.title}
        </h5>
        <ul className="flex flex-col gap-4 py-4">
          <li className="flex items-center gap-4">
            <UserCircleIcon className="w-6" />
            <div className="flex flex-col">
              <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                By {bootcamp.mentorName}
              </p>
              <span className="text-xs text-gray-700 dark:text-gray-400">
                {bootcamp.mentorDescription}
              </span>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <CalendarDaysIcon className="w-6" />
            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
              {bootcamp.period}
            </p>
          </li>
          <li className="flex items-center gap-4">
            <MapPinIcon className="w-6" />

            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
              {bootcamp.location}
            </p>
          </li>
          {bootcamp.category === "ENROLLED" && (
            <li className="flex items-center gap-4">
              <div className="flex flex-col">
                <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
                  What do you need to prepare / pre-requisities :
                </p>
                <span className="text-xs text-gray-700 mt-2 dark:text-gray-400">
                  Set A
                </span>
              </div>
            </li>
          )}
        </ul>
      </div>

      {bootcamp.category === "ENROLLED" ? (
        <div className="p-5 flex items-center justify-center">
          <Link
            href={bootcamp.nextStepLink}
            target="_blank"
            className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          >
            Visit LMS
          </Link>
        </div>
      ) : (
        <>
          <div className="my-2">
            <Divider />
          </div>
          <div className="p-5 flex items-center justify-between">
            {bootcamp.discountPrice ? (
              <div className="flex flex-col">
                <span className="text-sm text-gray-900 dark:text-white line-through">
                  {bootcamp.price}
                </span>
                <span className="text-xl text-gray-900 dark:text-white animate-pulse">
                  {bootcamp.discountPrice}
                </span>{" "}
              </div>
            ) : (
              <span className="text-xl text-gray-900 dark:text-white">
                {bootcamp.price}
              </span>
            )}

            <Link
              href={bootcamp.nextStepLink}
              target="_blank"
              className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
            >
              Register Now
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
