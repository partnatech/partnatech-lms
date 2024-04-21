export function formatDateRange(date1: string, date2: string): string {
  const formatDate = (dateString: string): string => {
    const [year, month, day] = dateString.split("-")
    return `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]} ${parseInt(year, 10)}`
  }

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  const [year1, month1, _day1] = date1.split("-")
  const [year2, month2, _day2] = date2.split("-")

  const isDifferentYear = parseInt(year1, 10) !== parseInt(year2, 10)
  const isDifferentMonth = parseInt(month1, 10) !== parseInt(month2, 10)

  const formattedDate1 = formatDate(date1)
  const formattedDate2 = formatDate(date2)

  if (isDifferentYear || isDifferentMonth) {
    return `${formattedDate1} - ${formattedDate2}`
  } else {
    return `${formattedDate1} - ${formattedDate2.split(" ")[0]}`
  }
}
