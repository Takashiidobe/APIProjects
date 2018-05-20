// Use this to select the choice of the dropdown
var animeOrManga = document.getElementById('animeOrManga');
var choice = animeOrManga.options[animeOrManga.selectedIndex].value;
var page = document.getElementById('pageNumber');
var pageChoice = page.options[page.selectedIndex].value;
var input = document.getElementById('query');
var query = input.value;
var button = document.getElementByTagName('button');

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    button.addEventListener('click', function() {
    //opens up the XHR request to send to the Jikan API
    var request = new XMLHttpRequest();
    request.open('GET', `https://api.jikan.moe/search/${choice}/${query}${pageChoice}`, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        var data = JSON.parse(request.responseText);
        console.log(request.data.responseText.result);
        } else {
        // We reached our target server, but it returned an error
        }
      };

      request.onerror = function() {
      alert("couldn't connect to the server");
      };

      request.send();
    });

  });




