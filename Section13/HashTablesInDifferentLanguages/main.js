let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: {function() {
    console.log('aaaaaaah!');
  }}
}

user.age // O(1)
user.spell = 'abra kadabra'; // O(1)
user.scream();  // O(1)

// Map, can have functions or arrays as keys
const a = new Map()
// Set - only stores keys, no values
const b = new Set()