// Added to call stack
console.log('1');
// Gets sent off to the web api, starts timer then pushes console log
setTimeout(() => {console.log('2')}, 1000);
console.log('3');