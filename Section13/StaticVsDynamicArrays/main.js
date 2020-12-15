/*
Static Array
   fixed in size, need to specify the number of elements ahead of time
   create an array of x items
   arrays are located in adjacent places in memory

Dynamic Arrays
    allow us to copy our array when we need more space in memory
*/

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

// C++
// int a[20];
// int b[5] {1,2,3,4,5}