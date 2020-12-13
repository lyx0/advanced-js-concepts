// Compose
// data --> fn --> data --> fn -->
//  https://www.npmjs.com/package/ramda


const compose = (f, g) => (data) => f(g(data))
const multiplyBy3 = (num) => num*3;
const makePositive = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive)

console.log(multiplyBy3AndAbsolute(-50));

// Pipe
fn1(fn2(fn3(50)));
// right to left
compose(fn1, fn2, fn3)(50)
// left to right
pipe(fn3, fn2, fn1)(50)
