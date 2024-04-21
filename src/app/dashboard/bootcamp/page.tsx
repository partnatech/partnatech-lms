import React from "react"
import { BootcampCard } from "./_components/bootcamp-card"
import { Tab, Tabs } from "@/components/tabs"
import qs from "qs"

import { StrapiResponse } from "@/types/strapi"
import { BootcampResponse } from "@/types/strapi/bootcamp"
import BootcampSearch from "./_components/bootcamp-search"

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

const fetchBootcampsFromStrapi = async (
  isAvailable: boolean,
  title?: string,
  orderBy: string = "desc"
) => {
  let startDateFilter = {}
  if (isAvailable) {
    startDateFilter = { $gte: new Date() }
  } else {
    startDateFilter = { $lte: new Date() }
  }

  let filters: any = {
    start_date: startDateFilter,
    title: { $containsi: title },
  }

  const query = qs.stringify({
    sort: [`start_date:${orderBy}`],
    populate: "*",
    fields: "*",
    pagination: {
      pageSize: 10,
      page: 1,
    },
    filters: filters,
    publicationState: "live",
    locale: ["en"],
  })

  const response = await fetch(`${process.env.STRAPI_BASE_URL}/api/bootcamps?${query}`, {
    cache: "no-store",
  })

  const strapiResponse: StrapiResponse<BootcampResponse[]> = await response.json()
  return strapiResponse
}
const BootcampPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams?: { [key: string]: string | undefined }
}) => {
  const title = searchParams?.title
  const orderBy = searchParams?.orderBy

  const availableBootcampsResponse = await fetchBootcampsFromStrapi(true, title, orderBy)
  const listAvailableBootcamps = availableBootcampsResponse.data
  const availableBootcampCount = availableBootcampsResponse.meta.pagination.total

  const expiredBootcampsResponse = await fetchBootcampsFromStrapi(false, title, orderBy)
  const listExpiredBootcamps = expiredBootcampsResponse.data
  const expiredBootcampCount = expiredBootcampsResponse.meta.pagination.total

  const tabs: Tab[] = [
    {
      name: "Available Bootcamp",
      total: availableBootcampCount as unknown as string,
      href: `#available`,
      current: true,
    },
    {
      name: "Expired",
      total: expiredBootcampCount as unknown as string,
      href: `#expired`,
      current: false,
    },
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
          <BootcampSearch />
        </div>

        {/* End of Search */}

        {/* Card List */}
        <div id="available">
          {listAvailableBootcamps &&
            listAvailableBootcamps.map(item => (
              <BootcampCard key={item.attributes.slug} {...item} />
            ))}
        </div>

        <div id="expired">
          {listExpiredBootcamps &&
            listExpiredBootcamps.map(item => <BootcampCard key={item.attributes.slug} {...item} />)}
        </div>

        {/* End of Card List */}
      </div>
    </div>
  )
}

export default BootcampPage
