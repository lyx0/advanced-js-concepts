// Primitive Types
// number
typeof 5

// boolean
typeof true

// string
typeof 'To be or not to be'

// undefined
// absence of definition
typeof undefined

// !!! Object
// asbence of value, no value there.
typeof null 

// symbol
// Symbol value is useful for identifying an 
// object so that the object value is unique
typeof Symbol('just me')


// Non primitive Types
// object
typeof {}

// object
typeof []

// function
typeof function(){}

// Arrays and functions are objects

function a() {
  return 5
}

a.hi = 'hihihihihihi'
console.log(a.hi)