var axios = require('axios');

// add secret api key
require('dotenv').config();

//build base url
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=' + 'process.env.WEATHER_KEY';
console.log(OPEN_WEATHER_MAP_URL);

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodedURIComponent(location);
    // add var params to url
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    // make external api req
    axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
