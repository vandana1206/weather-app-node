const request = require("request");
const geocode = (add, callback) => {
  const gecodeURL =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmFuZGFuYTEyMDYiLCJhIjoiY2w2M2dwZnFiMDFncjNjcXdwbWVyMG5rdSJ9.QGRxAASkGU057XfBGjF3PQ&limit=1";

  request({ url: gecodeURL, json: true }, (e, res) => {
    if (e) {
      callback("Error", e);
    } else if (res.body.features.length === 0) {
      callback("Try another search", undefined);
    } else {
      callback(undefined, {
        latitude: res.body.features[0].center[1],
        longitude: res.body.features[0].center[0],
        location: res.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode