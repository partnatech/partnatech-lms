import { Divider } from '@/components/divider';
import { CourseInfo } from '@/types/course';
import {
  CalendarDaysIcon,
  MapPinIcon,
  UserCircleIcon,
} from '@heroicons/react/16/solid';
import { ClockIcon, VideoCameraIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from './icons';
import { cn } from '@/utils/cn';

interface CourseCardProps {
  course: CourseInfo;
}
export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="bg-white h-fit rounded-lg overflow-hidden shadow dark:bg-gray-800 border dark:border-gray-700">
      {course.embedID && (
        <iframe
          src={`https://www.youtube.com/embed/${course.embedID}`}
          title={course.title}
          width="100%"
          height={'180'}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
      {course.pamflet && (
        <div className="w-full max-h-[180px] overflow-hidden">
          <Image
            src={course.pamflet}
            width={350}
            height={180}
            alt={course.title}
          />
        </div>
      )}
      {/*  content */}
      <div className="p-4">
        <h3 className="text-base mb-[12px] font-bold tracking-tight text-gray-900 dark:text-white">
          {course.title}
        </h3>
        <div
          className={cn(
            'flex justify-between items-center mb-3',
            course.category === 'ENROLLED' ? 'mb-[36px]' : 'mb-3'
          )}
        >
          {course.discountPrice ? (
            <div className="flex items-center">
              <h4 className="text-sm text-gray-900 dark:text-white line-through mr-1">
                {course.price}
              </h4>
              <h4 className="text-base text-gray-900 dark:text-white animate-pulse font-semibold">
                {course.discountPrice}
              </h4>{' '}
            </div>
          ) : (
            <h4 className="text-base text-gray-900 font-semibold dark:text-white">
              {course.price}
            </h4>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start py-1">
            <div className="flex items-center">
              <VideoCameraIcon className="h-3 mr-2" />
              <p className="text-sm mr-3">{course.chapter} Chapter</p>
            </div>
            <div className="flex items-center">
              <ClockIcon className="h-3 mr-2" />
              <p className="text-sm"> {course.period}</p>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="h-3 mr-2" />
              <p className="text-sm"> {course.location}</p>
            </div>
          </div>
          <Icons.MicroBeginner className="h-4 w-4" />
        </div>
      </div>
      {/* Footer */}
      <div className=" pt-[13px] flex flex-col  bg-gray-200 dark:bg-gray-900 ">
        <div className="flex px-4 items-start mb-2">
          <div className="overflow-hidden rounded-full h-8 w-8 mr-4">
            <Image
              src={course.mentorImage}
              width={32}
              height={32}
              alt={course.mentorName}
            />
          </div>

          <div className="flex flex-col">
            <h6 className="text-sm text-gray-900 dark:text-white font-medium">
              {course.mentorName}
            </h6>
            <p className="text-xs text-gray-700 dark:text-gray-200 ">
              {course?.mentorJob || 'None'}
            </p>
          </div>
        </div>
        <Link
          href={course.nextStepLink}
          target="_blank"
          className="text-white w-full bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-base px-2 py-1 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
        >
          {course.category === 'ENROLLED' ? 'Visit LMS' : 'Enroll'}
        </Link>
      </div>
    </div>
  );
};
