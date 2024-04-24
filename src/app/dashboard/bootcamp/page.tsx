import React from "react"
import { BootcampCard } from "./_components/bootcamp-card"
import qs from "qs"

import { StrapiResponse } from "@/types/strapi"
import { BootcampResponse } from "@/types/strapi/bootcamp"
import { BootcampSearch } from "./_components/bootcamp-search"
import { BootcampTab } from "./_components/bootcamp-tab"

const metadata = {
  title: "Bootcamp",
  description:
    "Become a data wizard! Sharpen your analytical skills, business mindset, and communication skills to unravel complex business mysteries with data.",
}

const fetchBootcampsFromStrapi = async (
  isExpired: boolean,
  title?: string,
  orderBy: string = "desc"
) => {
  let startDateFilter = {}
  if (isExpired) {
    startDateFilter = { $lte: new Date() }
  } else {
    startDateFilter = { $gte: new Date() }
  }

  let filters: any = {
    start_date: startDateFilter,
    title: { $containsi: title },
  }

  const query = qs.stringify({
    sort: [`start_date:${orderBy}`],
    populate: "cover_image,mentors.avatar",
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
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined }
}) => {
  const title = searchParams?.title
  const orderBy = searchParams?.orderBy
  const isExpired = searchParams?.isExpired as unknown as boolean

  const availableBootcampsResponse = await fetchBootcampsFromStrapi(false, title, orderBy)
  const listAvailableBootcamps = availableBootcampsResponse.data
  const availableBootcampCount = availableBootcampsResponse.meta.pagination
    .total as unknown as string

  const expiredBootcampsResponse = await fetchBootcampsFromStrapi(true, title, orderBy)
  const listExpiredBootcamps = expiredBootcampsResponse.data
  const expiredBootcampCount = expiredBootcampsResponse.meta.pagination.total as unknown as string

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

        <BootcampTab availableCount={availableBootcampCount} expiredCount={expiredBootcampCount} />
        {/* End of Tab */}

        {/* Search */}
        <div className="grid md:grid-cols-2">
          <BootcampSearch />
        </div>

        {/* End of Search */}

        {/* Card List */}

        {!isExpired &&
          listAvailableBootcamps &&
          listAvailableBootcamps.map(item => <BootcampCard key={item.attributes.slug} {...item} />)}

        {isExpired &&
          listExpiredBootcamps &&
          listExpiredBootcamps.map(item => <BootcampCard key={item.attributes.slug} {...item} />)}

        {/* End of Card List */}
      </div>
    </div>
  )
}

export default BootcampPage
