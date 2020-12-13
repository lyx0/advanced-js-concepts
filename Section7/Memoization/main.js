/*
 Memoization ~~~~~~ Caching
 Caching is like a backpack you take to school, instead of going back when you need a pencil you
 can get it from your backpack

 A way to remember a solution to a solved problem so you dont have to compute the solution over and
 over again for the same result
*/

function addTo80(n) {
  return n + 80;
}

// runs it everytime eventhough its always the same
addTo80(4)
addTo80(4)
addTo80(4)

let cache = {
  5: 85
};

function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n]
  } else {
    console.log('long time')
    cache[n] = n + 80;
    return cache[n];
  }
}

console.log('1', memoizedAddTo80(5));
console.log('2', memoizedAddTo80(5));
