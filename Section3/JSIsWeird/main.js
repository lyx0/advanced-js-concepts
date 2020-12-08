// works against this
'use strict'
function weird() {
  height = 50;
  // global leakage
  // height is in global scope instead of in weird scope
  // because no let/var/const before it
  console.log(height)
}

weird()

// -------------------


var heyhey = function doodle() {

  // doodle only accessible here, not on global scope
  doodle()
  console.log('heyhey')
}

heyhey()
doodle()