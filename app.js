// console.log("Starts.....!!!");
// setTimeout(() => {
//     console.log("Timer..!!");
//   }, 2000);
//   setTimeout(() => {
//     console.log("Timer 0..!!");
//   }, 0);
// console.log("Ends.....!!!");

// const request = require("request");
// const url = 'http://api.weatherstack.com/current?access_key=e82734252aa5b857f765c8370cf296f2&query=New%20York'
//  //const url='https://jsonplaceholder.typicode.com/todos/1'
// //const url='https://jsonplaceholder.typicode.com/users'

// request({url: url, json: true},(e, res)=>{
//     // const data = JSON.parse(res.body)
//     // console.log(data);
//     console.log(res.body);
// })

// const gecodeURL =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidmFuZGFuYTEyMDYiLCJhIjoiY2w2M2dwZnFiMDFncjNjcXdwbWVyMG5rdSJ9.QGRxAASkGU057XfBGjF3PQ&limit=1";

// request({ url: gecodeURL, json: true }, (e, res) => {
//   if (e) {
//     console.log("Error", e);
//   } else if (res.body.features.length === 0) {
//     console.log("Try another search");
//   } else {
//     const latitude = res.body.features[0].center[1];
//     const longitude = res.body.features[0].center[0];
//     console.log("latitude===", latitude);
//     console.log("longitude===", longitude);
//   }
// });

const request = require('request');
const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode')

geocode("Bostan", (e, data) => {
  console.log("Error", e);
  console.log("Data", data);
});

forecast(-75.7888,44.1545,(e, data)=>{
  console.log("Error", e);
  console.log("Data", data);
})