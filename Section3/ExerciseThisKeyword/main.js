var b = {
  name: 'jay',
  say() {console.log(this)}
}
// undefined

var c = { 
  name: 'jay',
  say() {return function() {console.log(this)}}
}
// [Function]
// c.say()() = window object

var d = {
  name: 'jay',
  say() {return () => console.log(this)}
}
// [function]
// say()() [name: 'jay', say]
