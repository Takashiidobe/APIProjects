// *For lincoln NE https://api.darksky.net/forecast/df49bdaa8f2aacab918a5a29b0932df6/40.8136,-96.7026

$.getJSON('https://fcc-weather-api.glitch.me/api/current?lat=40.8136&lon=-96.7026', function(forecast) {
  var fTemp = forecast.main.temp * 1.8 + 32;
  var cTemp = forecast.main.temp;
  var minTemp = forecast.main.temp_min;
  var maxTemp = forecast.main.temp_max;
  var weather = forecast.weather[0].description;
  var weatherIcon = forecast.weather[0].icon;
  document.getElementById('temperature').innerHTML = fTemp;
  document.getElementById('forecast').innerHTML = weather;
  document.getElementById('icon').innerHTML = `<img src="${weatherIcon}">`
});
