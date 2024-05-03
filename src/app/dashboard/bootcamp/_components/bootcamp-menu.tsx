import React from "react"

import { Divider } from "@/components/divider"

const bootcampMenu = [
  {
    label: "General Information",
  },
  {
    label: "Learning Material",
  },
  {
    label: "Assignment & Rubrics",
  },
  {
    label: "Practice and Mentoring",
  },
  {
    label: "Your Result",
  },
]

export const BootcampMenu = () => {
  return (
    <div className="border border-primary-border rounded-lg bg-secondary-base-dark max-w-[260px] h-fit">
      <h3 className="font-bold p-6">Bootcamp Menu</h3>
      <Divider />
      <div className="">
        {bootcampMenu.map((item, index) => (
          <div key={`bootcamp-menu-${index}`} className="hover">
            <p className="text-secondary-content-dark hover:text-primary-dark hover:bg-[#242427] p-4 hover:cursor-pointer">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
