$(document).ready(function() {
  var count = 1;

  $('div.ttt-box').on('click', function() {
  if (count % 2 === 0) {
    $(this).text("O");
  } else {
    $(this).text("X");
  }
    count++
  });

});

// count = 1..9
// if count % 2 === 0 then its an even number, and the second player (o)
// else its the first player (x)
//
// when element with specific id gets clicked, depending on the count variable, adjust the colour of the background (red for x, blue for o)
