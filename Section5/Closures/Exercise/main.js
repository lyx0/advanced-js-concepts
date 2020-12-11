// Exercise
function callMeMaybe() {
  const callMe = 'Hi! I am now here!';
  setTimeout(function() {
    console.log(callMe);
  }, 4000);
  // can also be here, doesn't matter
  // const callMe = 'Hi! I am now here!';
}

callMeMaybe();

// setTimeout gets sent to WebAPI, waits 4 seconds and then the 
// WebAPI sends it back to the callback queue and the callback queue 
// waits until the stack is empty and then the event loop pushes the function
// onto the stack and runs it