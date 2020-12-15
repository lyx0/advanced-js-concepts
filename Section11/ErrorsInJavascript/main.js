// Error
// f Error() { [ native code] }
new Error('oopsie')

throw new Error()
throw 'string'
throw true
throw Error

throw new Error
4+3

const myError = new Error('oopsie')
myError.name
myError.message
// stacktrace where the error happened
myError.stack

function a() {
  const b = new Error('what??')
  return b
}
a().stack

new SyntaxError

new ReferenceError


// ERROR!
// Is there a catch?
// Is there a catch?
// Runtime catch: onerror()
// process.on('uncaughtException')