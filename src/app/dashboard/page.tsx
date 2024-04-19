import Image from "next/image"
import React, { useEffect } from "react"

import Link from "next/link"
import { CourseCard } from "@/components/course-card"
import StatCards from "./(home)/_components/statCards"

const bootcampItems = [
  {
    id: 1,
    title: "Class Promotions",
    category: "PROMOTIONS",
    embedID: "X3paOmcrTjQ",
    mentorName: "mentor-1",
    pamflet: "",
    mentorDescription: "DA 3+ years",
    owner: "owner",
    location: "online",
    period: "01 March - 21 March 2024",
    price: "Rp.100.000",
    discountPrice: "Rp.80.000",
    nextStepLink: "https://google.com",
    mentorImage: "/images/mentor.png",
    chapter: "12",
  },
  {
    id: 2,
    title: "Class Next",
    category: "NEXT",
    pamflet: "",
    embedID: "X3paOmcrTjQ",
    mentorName: "mentor-2",
    mentorDescription: "DA 3+ years",
    owner: "owner",
    location: "online",
    period: "01 March - 21 March 2024",
    price: "Rp.100.000",
    nextStepLink: "https://google.com",
    mentorImage: "/images/mentor.png",
    chapter: "12",
  },
  {
    id: 2,
    title: "Class Enrolled",
    category: "ENROLLED",
    embedID: "",
    pamflet: "/images/airflow-workshop.jpeg",
    mentorName: "mentor-3",
    mentorDescription: "DA 3+ years",
    owner: "owner",
    location: "online",
    period: "01 March - 21 March 2024",
    nextStepLink: "/bootcamp", //LINK BOOTCAMP
    mentorImage: "/images/mentor.png",
    chapter: "12",
  },
]

const HomePage = () => {
  return (
    <div>
      {/* <StatCards />
      <div className="relative isolate overflow-hidden mt-12 bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
        <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Elevate Your Digital Skills.
            <br />
            Join our learning community today.
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Unlock the full potential of digital technology with our comprehensive courses. From
            coding to design, advance your skills at your own pace.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
            <Link
              href="/dashboard/learn"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Start Learning
            </Link>
            <Link
              href="/dashboard/subscribe"
              className="text-sm font-semibold leading-6 text-white"
            >
              Subscribe <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="relative mt-16 h-80 lg:mt-8">
          <Image
            className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
            src="/images/dark-project-app-screenshot.png"
            alt="App screenshot"
            width={1824}
            height={1080}
          />
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        {bootcampItems.map(item => (
          <CourseCard key={item.id} course={item} />
        ))}
      </div> */}
    </div>
  )
}

export default HomePage
