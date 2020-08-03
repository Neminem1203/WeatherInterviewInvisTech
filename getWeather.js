const api_key = require("./api_key")["api_key"]
const fetch = require("node-fetch")

const getWeatherForLocations = locationsArray => {
  try {
    const date = new Date()
    const time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    console.log(`Time: ${time}`)
    for ( locationInd in locationsArray) {
      let location = locationsArray[locationInd]
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`)
        .then(first_req => {
          first_req.json().then(info => {
            console.log(`\nLocation: ${location} \nWeather: ${info["weather"][0]["description"]}`)
          })
        })
    }
  } catch (error) {
      console.log(error)
  }
}

getWeatherForLocations(["New York", 10005, "Tokyo", "Sao Paulo", "Pluto"])
