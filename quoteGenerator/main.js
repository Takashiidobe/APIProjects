const request = new XMLHttpRequest();
const reloader = document.getElementById('reloader');
const tweet = document.getElementById('tweet');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const errorMessage = 'Unfortunately, there seems to be an error connecting to the server';

request.open('GET', 'https://talaikis.com/api/quotes/random/', true);

request.onload = function() {
  
  if (request.status >= 200 && request.status < 400) {
    let data = JSON.parse(request.responseText);
    let famousQuote = data.quote;
    let famousAuthor = data.author;
    quote.innerHTML = famousQuote;
    author.innerHTML = `- ${famousAuthor}`;

    reloader.addEventListener('click', function() {
      request.open('GET', 'https://talaikis.com/api/quotes/random/', true);
    
      request.onload = function() {
      
      if (request.status >= 200 && request.status < 400) {
        let data = JSON.parse(request.responseText);
        let famousQuote = data.quote;
        let famousAuthor = data.author;
        quote.innerHTML = famousQuote;
        author.innerHTML = `- ${famousAuthor}`;
      } else {
        quote.innerHTML = errorMessage;
      }
    };
    
    request.onerror = function() {
      quote.innerHTML = errorMessage;
    };
    
    request.send();
    });
    
    let tweetQuote = tweet.addEventListener('click', function(e) {
      e.preventDefault();
      window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML} ${author.innerHTML}`, '_blank');
    });
    
  } else {
    quote.innerHTML = errorMessage;
  }
};

request.onerror = function() {
  quote.innerHTML = errorMessage;
};

request.send();


