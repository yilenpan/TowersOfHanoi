var actions = require("./actions");
var config = require("./config");

var move = actions.move.bind(actions);

  // ***************************************
  // THEORY
  // ***************************************
  //
  // I want to move all but the last piece off the stack
  // and stick it on a nonEnd Tower (in this case, tower[1]).
  //
  // When stacksize === 1, move biggest piece to target tower
  //
  // then move the stack on the nonEnd Tower onto the target tower
  //
  //


var not = function(start, end){
  for(var i = 0; i < config.columns; i++){
    if( i !== start && i !== end ){
      return i;
    }
  }
}

function solver(n, start, end){
  if ( n === 1 ){         // If stacksize === 1
    move(start, end);     // Move piece from start to end
  } else if ( n > 1 ) {                     // If stack is larger than 1
    var notStartOrEnd = not(start, end);    // Find the tower notStartOrEnd
    solver( n - 1, start, notStartOrEnd );   // move all but the last piece to notStartOrEnd
    move( start, end );                     // move biggest piece from start to finish
    solver( n - 1, notStartOrEnd, end);      // move the notStartOrEnd Stack to the end
  }

}

solver(config.pieces, 0, 2);
actions.finish();
