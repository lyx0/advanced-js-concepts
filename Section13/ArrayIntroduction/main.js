// Arrays

// lookup O(1)
// push O(1)
// insert O(n)
// delete O(n)

const strings = ['a', 'b', 'c', 'd'];
// 4 items
// 32 bit system
// 4*4=16 bytes

// push
strings.push('e'); // O(1)
console.log(strings);

// pop
strings.pop(); // O(1)
strings.pop();
console.log(strings);

// unshift - add to beginning
strings.unshift('x') // O(n)
console.log(strings);

// splice - insert/delete
strings.splice(2,0, 'alien') // O(n)
