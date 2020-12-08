

/*
          Global Execution Context
  | Global Object     |       this    |
|                 Hoisting            |
----------------------------------------
            Run your Code

Moving the variable or function declerations to the top of 
their respective environments during compilation phase
*/

console.log('1--------')
console.log(teddy) // Undefined here
console.log(sing()) // works
var teddy = 'bear'

// function expression
var sing2 = function() {
  console.log('uh la la la')
}
// function declaration
function sing() {
  console.log('la la la la')
}
