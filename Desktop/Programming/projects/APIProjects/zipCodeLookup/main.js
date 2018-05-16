//for country and postal code to city
var get = new XMLHttpRequest();
get.open('GET', `http://api.zippotam.us/${country}/${postalCode}`, true);

get.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    //successful contact with server
    var data = JSON.parse(request.responseText);
    console.log(data);
  } else {
    //we reached our target server, but it threw an error;
    alert('Could not connect to the server.');
  }
};

get.onerror = function() {
  alert('Could not connect to the server.');
};

get.send();



//for country + state + city to zip code
var request = new XMLHttpRequest();
request.open('GET', `http://api.zippopotam.us/${country}/${state}/${city}`, true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    //successful contact with server
    var data = JSON.parse(request.responseText);
    console.log(data.result[0]);
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  alert("couldn't connect to the server");
};

request.send();

