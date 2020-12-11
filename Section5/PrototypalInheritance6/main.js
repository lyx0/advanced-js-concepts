// Only functions have the prototype property
function multiplyBy5(num) {
  return num*5
}
multiplyBy5.prototype
// {constructor: f}
multiplyBy5.__proto__
// f () { [native code] }
Function.prototype
// f () { [native code] }
multiplyBy5.__proto__.__proto__
// {constructor: f}
Object.prototype
// {constructor: f}
multiplyBy5.__proto__.__proto__.__proto__
// null
typeof Object
// function
typeof {}
// object

// Every function has a prototype property and it references to an object used 
// attach properties that will be inherited by objects further down the
// prototype chain

typeof Object.prototype
// object
// Base Object, very last object before we point to null

const obj = {}
obj.prototype
// undefined

const arr = []
arr.prototype
// undefined

'string'.prototype
// undefined

String.prototype
// String {"", }

// Everything in js is an object, arrays and functions are objects
// They inherit through the prototype chain from the base object