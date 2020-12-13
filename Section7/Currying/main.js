/*
 Currying:
   Technique of translating the evaluation of a function that takes multiple arguments
   into evaluating a sequence of function into each with a single argument
*/
const multiply = (a, b) => a*b;
multiply(3,5)

const curriedMultiply = (a) => (b) => a*b;
curriedMultiply(5)(3)
const curriedMultiplyBy5 = curriedMultiply(5);
curriedMultiplyBy5(3)