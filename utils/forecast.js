const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const URL =
  url = 'http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=' + latitude + ',' + longitude + '&units=f'


  request({ url: URL, json: true }, (e, res) => {
    if (e) {
      callback("Error", e);
    } else if (res.body.e) {
      callback("Try another search", undefined);
    } else {
        callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out.")
    }
  });
}
module.exports = forecast