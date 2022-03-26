export default function keywordFilter (keyword, list) {
  if (!keyword) {
    return list
  }

  let filterList = []
  list.forEach(attraction => {
    if (('ScenicSpotName' in attraction) && attraction.ScenicSpotName.includes(keyword)) {
      filterList = [...filterList, attraction]
    } else if (('Address' in attraction) && attraction.Address.includes(keyword)) {
      filterList = [...filterList, attraction]
    } else if (('Class1' in attraction) && attraction.Class1.includes(keyword)) {
      filterList = [...filterList, attraction]
    }
  })

  return filterList
}
