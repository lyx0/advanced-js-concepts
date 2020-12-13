/*
 Partial Application:
   Taking a function, applying some of its arguments into the function so it remembers those parameters
   and uses closures to later on be called with all the rest of the arguments
*/

const multiply = (a, b, c) => a*b*c;
const partialMultiply5 = multiply.bind(null, 5)
partialMultiply5(4,10)
