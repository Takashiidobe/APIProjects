$.getJSON('https://dog.ceo/api/breed/pomeranian/images/random', function(dog) {
  var dogImage = dog.message;
  document.getElementById('1').innerHTML = `<img src="${dogImage}">`
});


  $('button').on('click', function() {
    $.getJSON('https://dog.ceo/api/breed/pomeranian/images/random', function(dog) {
      var dogImage = dog.message;
      document.getElementById('2').innerHTML = `<img src="${dogImage}">`
    });
  });