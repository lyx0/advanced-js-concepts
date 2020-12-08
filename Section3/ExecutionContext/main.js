function printName() {
  console.log('Andrei Naegoie')
}

function findName() {
  return printName()
}

function sayMyName() {
  return findName()
}

sayMyName()

// Creates execution context 
// global()
// pushes sayMyName, findName, printName
// Drops them in first in last out order
// drops global()