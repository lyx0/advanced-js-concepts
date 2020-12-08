// Where you write stuff

// global execution context
function printName() {
  console.log('Andrei Naegoie')
}

// global
function findName() {
  // inside findName
  function a() {

  }
  return printName()
}

// global 
function sayMyName() {
  return findName()
}



sayMyName()