"use client"
import { CourseResponse } from "@/types/strapi/course"
import { cn } from "@/utils/cn"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { FaCheck } from "react-icons/fa6"
import { HiMiniArrowUpRight } from "react-icons/hi2"

interface OverviewTabProps {
  data: CourseResponse
}

const TAB_LIST = [
  {
    href: "#overview",
    label: "Overview",
  },
  {
    href: "#resources",
    label: "Resources",
  },
]

const OverviewTab = ({ data }: OverviewTabProps) => {
  const [hash, setHash] = useState("#overview")

  return (
    <>
      <div className="border-b border-secondary-border w-full flex px-8">
        {TAB_LIST.map(tab => (
          <button
            key={tab.href}
            onClick={() => setHash(tab.href)}
            className={cn(
              hash === tab.href ? " border-primary-dark text-primary-dark" : "border-transparent",
              "px-6 text-sm py-4 border-b "
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {hash === "#overview" && (
        <div className="w-full">
          {/* Description */}
          <div className="p-8 grid grid-cols-12">
            <div className="col-span-3">
              <p className="text-[18px]">Description</p>
            </div>
            <div className="col-span-9">
              <p className="text-sm text-secondary-content-dark leading-relaxed">
                {data.attributes.descriptions}
              </p>
            </div>
          </div>

          {/* Objective */}
          <div className="p-8 grid grid-cols-12">
            <div className="col-span-3">
              <p className="text-[18px]">Objectives</p>
            </div>
            <div className="col-span-9">
              <div className="grid grid-cols-2 gap-4">
                {data.attributes.list_of_learning.map(item => (
                  <div key={item} className="flex items-center gap-2 text-secondary-content-dark">
                    <FaCheck className="w-5 h-5" />
                    <p className=" text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 grid grid-cols-12">
            <div className="col-span-3">
              <p className="text-[18px]">Tools</p>
            </div>
            <div className="col-span-9">
              <div className="grid grid-cols-3 gap-6">
                {data.attributes.tools_used.map(tool => (
                  <div
                    key={tool.id}
                    className="bg-background-secondary border border-primary-border p-6 rounded-lg"
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${tool.icons.data.attributes.url}`}
                      className="w-10 h-10 rounded-full object-cover mb-4"
                    ></img>

                    <div className="mb-4">
                      <p className="text-sm mb-2">{tool.title}</p>
                      <p className="text-xs text-secondary-content-dark">{tool.description}</p>
                    </div>

                    <Link href={tool.link} className="text-primary-dark flex items-center gap-2">
                      Download
                      <HiMiniArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default OverviewTab
