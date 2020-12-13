// Arity
// The number of arguments a function takes

// Pipe
fn1(fn2(fn3(50)));
// right to left
compose(fn1, fn2, fn3)(50)
// left to right
pipe(fn3, fn2, fn1)(50)

// Arity of 2
const compose = (f, g) => (data) => f(g(data))
// Arity of 1
const multiplyBy3 = (num) => num*3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

console.log(multiplyBy3AndAbsolute(-50));
