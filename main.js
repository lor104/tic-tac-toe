$(document).ready(function() {
  var count = 1;

  $('div.ttt-box').on('click', function() {
  if (count % 2 === 0) {
    $(this).text("O");
    $(this).addClass('o');
  } else {
    $(this).text("X");
    $(this).addClass('x');
  }
    count++
    checkWinner();
  });

  function xWins() {
    window.alert("X is the winner");
  };
  function oWins() {
    window.alert("O is the winner");
  }

  function checkWinner() {
    if ($('#top-left').hasClass('x') && $('#top-middle').hasClass('x') && $('#top-right').hasClass('x')) {
      xWins()
    } else if ($('#middle-left').hasClass('x') && $('#middle-middle').hasClass('x') && $('#middle-right').hasClass('x')) {
      xWins()
    } else if ($('#bottom-left').hasClass('x') && $('#bottom-middle').hasClass('x') && $('#bottom-right').hasClass('x')) {
      xWins()
    }
    else if ($('#top-left').hasClass('x') && $('#middle-left').hasClass('x') && $('#bottom-left').hasClass('x')) {
      xWins()
    }
    else if ($('#top-middle').hasClass('x') && $('#middle-middle').hasClass('x') && $('#bottom-middle').hasClass('x')) {
      xWins()
    }
    else if ($('#top-right').hasClass('x') && $('#middle-right').hasClass('x') && $('#bottom-right').hasClass('x')) { xWins()
    }
    else if ($('#top-left').hasClass('x') && $('#middle-middle').hasClass('x') && $('#bottom-right').hasClass('x')) {
      xWins()
    }
    else if ($('#top-right').hasClass('x') && $('#middle-middle').hasClass('x') && $('#bottom-left').hasClass('x')) {
      xWins()
    };

    if ($('#top-left').hasClass('o') && $('#top-middle').hasClass('o') && $('#top-right').hasClass('o')) {
      oWins()
    } else if ($('#middle-left').hasClass('o') && $('#middle-middle').hasClass('o') && $('#middle-right').hasClass('o')) {
      oWins()
    } else if ($('#bottom-left').hasClass('o') && $('#bottom-middle').hasClass('o') && $('#bottom-right').hasClass('o')) {
      oWins()
    }
    else if ($('#top-left').hasClass('o') && $('#middle-left').hasClass('o') && $('#bottom-left').hasClass('o')) {
      oWins()
    }
    else if ($('#top-middle').hasClass('o') && $('#middle-middle').hasClass('o') && $('#bottom-middle').hasClass('o')) {
      oWins()
    }
    else if ($('#top-right').hasClass('o') && $('#middle-right').hasClass('o') && $('#bottom-right').hasClass('o')) { oWins()
    }
    else if ($('#top-left').hasClass('o') && $('#middle-middle').hasClass('o') && $('#bottom-right').hasClass('o')) {
      oWins()
    }
    else if ($('#top-right').hasClass('o') && $('#middle-middle').hasClass('o') && $('#bottom-left').hasClass('o')) {
      oWins()
    };
  }



});

// count = 1..9
// if count % 2 === 0 then its an even number, and the second player (o)
// else its the first player (x)
//
// when element with specific id gets clicked, depending on the count variable, adjust the colour of the background (red for x, blue for o)

// === win logic ===
//
// -- horizontal
// tl tm tr
// ml mm mr
// bl bm br
//
// -- vertical
// tl ml bl
// tm mm bm
// tr mr br
//
// -- diagonal
// tl mm br
// tr mm bl
