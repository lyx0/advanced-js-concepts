// Functions are first class citizens in JS

//1 
var stuff = function(){}

//2 
function a(fn) {
  fn()
}

a(function() {console.log('hi there')})

//3 
function b() {
  return function c() {console.log('bye')}
}

//b()()
var d = b()
d()