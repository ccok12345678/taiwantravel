export default function handleChangePage (data, nowPage = 1) {
  const dataTotal = data.length
  const perPage = 18
  const pageTotal = Math.ceil(dataTotal / perPage)

  let currentPage = nowPage
  if (currentPage > pageTotal) currentPage = pageTotal

  const minData = (currentPage * perPage) - perPage + 1
  const maxData = (currentPage * perPage)

  const pageData = []

  data.forEach((item, index) => {
    const num = index + 1
    if (num >= minData && num <= maxData) {
      pageData.push(item)
    }
  })

  return {
    pageData,
    pageTotal,
    currentPage
  }
}
