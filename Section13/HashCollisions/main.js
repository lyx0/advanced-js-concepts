/*
 Hash Tables
     Insert O(1)
     Lookup O(1)
     Delete O(1)
     Search O(1)
*/

let user = {
  age: 54,
  name: 'Kylie',
  magic: true,
  scream: function() {
    console.log('aaaaaaah!');
  }
}

user.age // O(1)
user.spell = 'abra kadabra'; // O(1)
user.scream();  // O(1)
user

// Collisions
// O(n)
// https://www.cs.usfca.edu/~galles/visualization/OpenHash.html