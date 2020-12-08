// function scope
// vs
// block scope

// if it were a function wouldnt be accessable on global scope
if (5 > 4) {
  var secret = '1234';
}

secret;