import { intervalToDuration } from "date-fns"

export const formatDuration = (ms: number) => {
  if (ms < 0) ms = -ms
  const time = {
    day: Math.floor(ms / 86400000),
    hour: Math.floor(ms / 3600000) % 24,
    minute: Math.floor(ms / 60000) % 60,
  }
  return Object.entries(time)
    .filter(val => val[1] !== 0)
    .map(([key, val]) => `${val} ${key}${val !== 1 ? "s" : ""}`)
    .join(", ")
}

export function formatMillisecondsToMMSS(milliseconds: number) {
  // Convert milliseconds to seconds
  const seconds = milliseconds / 1000

  const duration = intervalToDuration({ start: 0, end: seconds * 1000 })
  // { minutes: 30, seconds: 7 }

  const zeroPad = (num: number) => String(num).padStart(2, "0")

  const formatted = `${zeroPad(duration.minutes ?? 0)}:${zeroPad(duration.seconds ?? 0)}`

  return formatted
}

export function formatMillisecondsToMonths(milliseconds: number) {
  // Define an average month length in milliseconds (30 days)
  const averageMonthMilliseconds = 30 * 24 * 60 * 60 * 1000

  // Calculate the approximate number of months
  const months = milliseconds / averageMonthMilliseconds

  return Math.floor(months)
}

export function formatRupiah(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  })
    .format(amount)
    .replace(",00", "")
}
