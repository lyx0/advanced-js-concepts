/*
What is a program?
  -allocate memory
  -parse and execute

JS Engine
  - Memory Heap
  - Call Stack
 */

// Allocated memory on the heap
const a = 1;
const b = 10;
const c = 100;

// call stack
console.log('1');
console.log('2');
console.log('3');

const one = () => {
  const two = () => {
    console.log('4');
  }
  two();
}

// console.log('4')
// two()
// one()
// Call stack
