"use client"
import { SetStateAction, useState } from "react"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { ChevronUpIcon, ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export const BootcampSearch = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const [searchInput, setSearchInput] = useState("")
  const [sortBy, setSortBy] = useState("latest")

  const handleInputChange = (event: { target: { value: SetStateAction<string> } }) => {
    setSearchInput(event.target.value)
  }

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams)
    if (searchInput) {
      params.set("title", searchInput)
    } else {
      params.delete("title")
    }

    replace(`${pathname}?${params.toString()}`)
  }

  const handleSort = () => {
    // Toggle between sorting by latest and earliest
    if (sortBy === "latest") {
      setSortBy("earliest")
    } else {
      setSortBy("latest")
    }

    const params = new URLSearchParams(searchParams)
    if (sortBy === "latest") {
      params.set("orderBy", "desc")
    } else {
      params.set("orderBy", "asc")
    }

    replace(`${pathname}?${params.toString()}`)
  }
  return (
    <div className="flex space-x-4">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <MagnifyingGlassIcon className="w-4 h-4" />
        </div>
        <input
          type="search"
          className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
          placeholder="Search bootcamp"
          value={searchInput}
          onChange={handleInputChange}
          onBlur={handleSearch} // Trigger search when input loses focus
          onKeyPress={event => {
            if (event.key === "Enter") {
              handleSearch()
            }
          }}
        />
      </div>
      <button
        className="flex w-fit items-center space-x-4 text-gray-900 border-gray-300 rounded-lg text-xs px-4 py-2 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400"
        onClick={handleSort}
      >
        Sort by: {sortBy === "latest" ? "Latest" : "Earliest"}{" "}
        {sortBy === "latest" ? (
          <ChevronUpIcon className="w-4 h-4 ml-2" />
        ) : (
          <ChevronDownIcon className="w-4 h-4 ml-2" />
        )}
      </button>
    </div>
  )
}
