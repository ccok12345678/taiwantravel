export default function keywordsFilter (keywords, list) {
  if (!keywords) {
    return list
  }

  const keywordList = []
  keywords.split(' ').forEach(key => {
    if (key !== '' && !keywordList.includes(key)) {
      keywordList.push(key)
    }
  })
  const keywordTest = keywordList.map(key => new RegExp(key))

  let filterList = []
  list.forEach(attraction => {
    keywordTest.forEach(keyTest => {
      if (('ScenicSpotName' in attraction) &&
        keyTest.test(attraction.ScenicSpotName) &&
        !filterList.includes(attraction)) {
        filterList = [...filterList, attraction]
      } else if (('Address' in attraction) &&
        keyTest.test(attraction.Address) &&
        !filterList.includes(attraction)) {
        filterList = [...filterList, attraction]
      } else if (('Class1' in attraction) &&
        keyTest.test(attraction.Class1) &&
        !filterList.includes(attraction)) {
        filterList = [...filterList, attraction]
      }
    })
  })

  return filterList
}
