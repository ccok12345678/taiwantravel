export function attractionFilter (keywords, list) {
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

export function activityFilter (keywords, list) {
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
  list.forEach(activity => {
    keywordTest.forEach(keyTest => {
      if (('ActivityName' in activity) &&
        keyTest.test(activity.ActivityName) &&
        !filterList.includes(activity)) {
        filterList = [...filterList, activity]
      } else if (('Address' in activity) &&
        keyTest.test(activity.Address) &&
        !filterList.includes(activity)) {
        filterList = [...filterList, activity]
      } else if (('Class1' in activity) &&
        keyTest.test(activity.Class1) &&
        !filterList.includes(activity)) {
        filterList = [...filterList, activity]
      } else if (('Location' in activity) &&
        keyTest.test(activity.Location) &&
        !filterList.includes(activity)) {
        filterList = [...filterList, activity]
      } else if (('Description' in activity) &&
        keyTest.test(activity.Description) &&
        !filterList.includes(activity)) {
        filterList = [...filterList, activity]
      }
    })
  })

  return filterList
}

export function restaurantFilter () {
}

export function hotelFilter () {}
