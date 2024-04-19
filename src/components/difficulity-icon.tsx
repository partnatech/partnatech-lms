import { Difficulty } from "@/types/strapi/course"
import React from "react"

const DifficulityIcon = ({ type }: { type: Difficulty }) => {
  const iconRenderer = () => {
    if (type === "beginner") {
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="8" width="3" height="6" rx="1" fill="#A3E635" />
          <rect x="6.5" y="5" width="3" height="9" rx="1" fill="#A1A1AA" />
          <rect x="11" y="2" width="3" height="12" rx="1" fill="#A1A1AA" />
        </svg>
      )
    } else if (type === "intermediate") {
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="8" width="3" height="6" rx="1" fill="#A3E635" />
          <rect x="6.5" y="5" width="3" height="9" rx="1" fill="#A3E635" />
          <rect x="11" y="2" width="3" height="12" rx="1" fill="#A1A1AA" />
        </svg>
      )
    } else if (type === "advance") {
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="8" width="3" height="6" rx="1" fill="#A3E635" />
          <rect x="6.5" y="5" width="3" height="9" rx="1" fill="#A3E635" />
          <rect x="11" y="2" width="3" height="12" rx="1" fill="#A3E635" />
        </svg>
      )
    }
  }

  return (
    <div className="relative group">
      <div className="absolute -top-6 -left-6 bg-black/50 py-1 px-2 group-hover:block hidden text-xs capitalize transition-all">
        {type}
      </div>
      {iconRenderer()}
    </div>
  )
}

export default DifficulityIcon
