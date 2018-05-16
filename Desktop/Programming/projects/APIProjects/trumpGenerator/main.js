$.getJSON('https://api.whatdoestrumpthink.com/api/v1/quotes/random', function(quote) {
  var message = quote.message;
  document.getElementById('quote').innerHTML = quote.message; 
});

$('#reloader').on('click', function(quote) {
  $.getJSON('https://api.whatdoestrumpthink.com/api/v1/quotes/random', function(quote) {
  var message = quote.message;
  document.getElementById('quote').innerHTML = quote.message; 
});
});