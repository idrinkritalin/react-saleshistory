export function sortByDate (sales) {
  return sales.sort((a, b) => {
    let dateA = new Date(a.date)
    let dateB = new Date(b.date)
    return dateB - dateA
  })
}
