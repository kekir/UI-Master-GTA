const showMap = () => {
  // Making the Map and tiles
  const myMap = L.map('issMap').setView([0, 0], 2)

  const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

  const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

  const tiles = L.tileLayer(tileUrl, { attribution })

  tiles.addTo(myMap)

  // Making a marker with a custom icon
  const issIcon = L.icon({
    iconUrl: '../img/iss200.png',
    iconSize: [50, 32],
    iconAnchor: [25, 16],
  })

  const marker = L.marker([0, 0], { icon: issIcon }).addTo(myMap)

  const apiUrl = 'https://api.wheretheiss.at/v1/satellites/25544'

  let firstTime = true

  async function issData() {
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
    const { latitude, longitude } = data
    console.log(latitude)
    console.log(longitude)

    // Always set the view to current lat lon and zoom!
    myMap.setView([latitude, longitude], myMap.getZoom())
    marker.setLatLng([latitude, longitude])

    if (firstTime) {
      myMap.setView([latitude, longitude], 2)
      firstTime = false
    }

    document.getElementById('lat').textContent = latitude.toFixed(2)
    document.getElementById('lon').textContent = longitude.toFixed(2)
  }

  issData()

  setInterval(issData, 1000)
}

export { showMap }

// L.tileLayer(
//   "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
//   {
//     attribution:
//       'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: "mapbox/streets-v11",
//     accessToken: "your.mapbox.access.token"
//   }
// ).addTo(mymap);

//style URL: mapbox://styles/keki/ck691gk3f1a2e1is6n7y5az7o
//Access token: pk.eyJ1Ijoia2VraSIsImEiOiJjazY3OW9ocWEwMnN1M2VvMTlxNjUzeDR3In0.N9wE0qV-cMJoU8BF7nOm2A
