function two() {
  var isValid; // undefined
}

function one() {
  var isValid = true; // local env
  two(); // new EC
}

var isValid = false;
one();

// two() -- undefined
// one() -- true
// global() -- false