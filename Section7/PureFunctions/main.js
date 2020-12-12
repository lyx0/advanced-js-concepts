// Pure functions
// a function has to always return the same output given the same input
// the function can not modify anything outside itself
// no side effects

const array = [1,2,3]
// function modifies the array, has side effects
// function mutateArray(arr) {
//     arr.pop()
// }

function mutateArray(arr) {
  arr.forEach(item => {
    arr.push(1)
  })
}

mutateArray(array);
console.log(array)
