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

export function restaurantFilter (keywords, list) {
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
  list.forEach(restaurant => {
    keywordTest.forEach(keyTest => {
      if (('RestaurantName' in restaurant) &&
        keyTest.test(restaurant.RestaurantName) &&
        !filterList.includes(restaurant)) {
        filterList = [...filterList, restaurant]
      } else if (('Address' in restaurant) &&
        keyTest.test(restaurant.Address) &&
        !filterList.includes(restaurant)) {
        filterList = [...filterList, restaurant]
      } else if (('Class1' in restaurant) &&
        keyTest.test(restaurant.Class1) &&
        !filterList.includes(restaurant)) {
        filterList = [...filterList, restaurant]
      } else if (('Description' in restaurant) &&
        keyTest.test(restaurant.Description) &&
        !filterList.includes(restaurant)) {
        filterList = [...filterList, restaurant]
      }
    })
  })

  return filterList
}

export function hotelFilter (keywords, list) {
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
  list.forEach(hotel => {
    keywordTest.forEach(keyTest => {
      if (('HotelName' in hotel) &&
        keyTest.test(hotel.HotelName) &&
        !filterList.includes(hotel)) {
        filterList = [...filterList, hotel]
      } else if (('Address' in hotel) &&
        keyTest.test(hotel.Address) &&
        !filterList.includes(hotel)) {
        filterList = [...filterList, hotel]
      } else if (('Class' in hotel) &&
        keyTest.test(hotel.Class) &&
        !filterList.includes(hotel)) {
        filterList = [...filterList, hotel]
      } else if (('Description' in hotel) &&
        keyTest.test(hotel.Description) &&
        !filterList.includes(hotel)) {
        filterList = [...filterList, hotel]
      }
    })
  })

  return filterList
}
