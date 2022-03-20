import jsSHA from 'jssha'

function GetAuthorizationHeader () {
  const AppID = process.env.VUE_APP_APP_ID
  const AppKey = process.env.VUE_APP_APP_KEY

  const GMTString = new Date().toGMTString()
  // eslint-disable-next-line new-cap
  const ShaObj = new jsSHA('SHA-1', 'TEXT')
  ShaObj.setHMACKey(AppKey, 'TEXT')
  ShaObj.update('x-date: ' + GMTString)
  const HMAC = ShaObj.getHMAC('B64')
  const Authorization = `hmac username="${AppID}", algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`

  return { Authorization: Authorization, 'X-Date': GMTString }
}

async function getData (url) {
  const response = await fetch(url, {
    headers: GetAuthorizationHeader()
  })
  const data = await response.json()
  console.log('data:', data)
  return data
}

export default getData
