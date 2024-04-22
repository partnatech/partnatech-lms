export function formatNumberToCurrency(number: number): string {
  if (number >= 1000000) {
    const millions = Math.floor(number / 1000000)
    const remainder = Math.floor((number % 1000000) / 1000)
    if (remainder === 0) {
      return `Rp. ${millions}.000K`
    } else {
      return `Rp. ${millions}.${remainder}K`
    }
  } else {
    return `Rp. ${number}`
  }
}
