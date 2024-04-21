import React from "react"
import { BootcampCard } from "./_components/bootcamp-card"
import { Tab, Tabs } from "@/components/tabs"
import qs from "qs"
import { ChevronUpDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { StrapiResponse } from "@/types/strapi"
import { BootcampResponse } from "@/types/strapi/bootcamp"

const bootcampItems = [
  {
    id: 1,
    title: "Bootcamp Data Science dan Data Analyst for Beginner",
    category: "PROMOTIONS",
    level: "Beginner",
    mentorName: "mentor-1",
    mentorDescription: "DA 3+ years",
    owner: "owner",
    location: "online",
    period: "01 March - 21 March 2024",
    price: "Rp.100.000",
    discountPrice: "Rp.80.000",
    nextStepLink: "https://google.com",
    mentorImage: "/images/mentor.png",
  },
  {
    id: 2,
    title: "Bootcamp Data Science dan Data Analyst for Beginner",
    category: "NEXT",
    level: "Beginner",
    mentorName: "mentor-2",
    mentorDescription: "DA 3+ years",
    owner: "owner",
    location: "online",
    period: "01 March - 21 March 2024",
    price: "Rp.100.000",
    nextStepLink: "https://google.com",
    mentorImage: "/images/mentor.png",
  },
  {
    id: 2,
    title: "Bootcamp Data Science dan Data Analyst for Beginner",
    category: "ENROLLED",
    level: "Beginner",
    mentorName: "mentor-3",
    mentorDescription: "DA 3+ years",
    owner: "owner",
    location: "online",
    period: "01 March - 21 March 2024",
    nextStepLink: "/bootcamp", //LINK BOOTCAMP
    mentorImage: "/images/mentor.png",
  },
]

const metadata = {
  title: "Bootcamp",
  description:
    "Become a data wizard! Sharpen your analytical skills, business mindset, and communication skills to unravel complex business mysteries with data.",
}

const fetchBootcampsFromStrapi = async () => {
  const query = qs.stringify({
    sort: ["title:asc"],
    populate: "*",
    fields: "*",
    pagination: {
      pageSize: 10,
      page: 1,
    },
    publicationState: "live",
    locale: ["en"],
  })
  const response = await fetch(`${process.env.STRAPI_BASE_URL}/api/bootcamps?${query}`, {
    cache: "no-store",
  })
  const strapiResponse: StrapiResponse<BootcampResponse[]> = await response.json()
  return strapiResponse
}
const BootcampPage = async () => {
  const bootcampsResponse = await fetchBootcampsFromStrapi()
  const listBootcamps = bootcampsResponse.data
  const tabs: Tab[] = [
    {
      name: "Available Bootcamp",
      total: "2",
      href: `#available`,
      current: true,
    },
    { name: "Expired", total: "0", href: `#expired`, current: false },
  ]

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Header */}
      <div className="grid md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white">
            {metadata.title}
          </h3>
          <p className="text-sm text-secondary-content dark:text-secondary-content-dark mb-6">
            {metadata.description}
          </p>
        </div>
      </div>
      {/* End of Header */}

      <div className="flex flex-col space-y-8">
        {/* Tab */}

        <Tabs tabs={tabs}></Tabs>
        {/* End of Tab */}

        {/* Search */}
        <div className="grid md:grid-cols-2">
          <div className="flex space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <MagnifyingGlassIcon className="w-4 h-4" />
              </div>
              <input
                type="search"
                className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                placeholder="Search bootcamp"
              />
            </div>
            <button className="flex items-center space-x-2 text-gray-900 border-gray-300 rounded-lg text-xs px-4 py-2 w-ful bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400">
              Sort by : Latest <ChevronUpDownIcon className="w-4- h-4" />
            </button>
          </div>
        </div>

        {/* End of Search */}

        {/* Card List */}
        {listBootcamps.map(item => (
          <BootcampCard key={item.attributes.slug} {...item} />
        ))}
        {/* End of Card List */}
      </div>
    </div>
  )
}

export default BootcampPage
