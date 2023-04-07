export default function bs_list(haystack: number[], needle: number): boolean {
  let high = haystack.length
  let low = 0

  do {
    let middle = Math.floor(low + (high - low) / 2)
    if (haystack[middle] == needle) {
      return true
    } else if (haystack[middle] > needle) {
      high = middle
    } else {
      low = middle + 1
    }
  } while (low < high)

  return false
}
