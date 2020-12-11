// Operands are different type and will be converted 
// happens with double equal sign
1 == '1'
// changes to 1 == 1

1 === '1'
// doesnt use type coercion, be explicit
// never use double equal, always use triple equal. not predictable

if (1) {
  console.log(5)
}

// https://dorey.github.io/JavaScript-Equality-Table/

// true
-0 === +0

// false
Object.is(-0, +0)

// false
NaN === NaN

// true
Object.is(NaN, NaN)