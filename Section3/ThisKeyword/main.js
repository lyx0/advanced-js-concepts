// this is the object that the function is a property of
// refers to whatever is to the left of the dot

// this refers to obj
obj.someFunc(this)

// global/window object
this

function a() {
  // this = Window/Global
  // Window.a()
  console.log(this)
}

function b() {
  'use strict'
  // undefined
  console.log(this)
}
// 1: gives methods access to their object
// 2: execute same code for multiple objects
const obj = {
  name: 'Billy',
  sing() {
    return 'lalalalal' + this.name
  },
  singAgain() {
    return this.sing() + '!'
  }
}

function importantPerson() {
  // console.log(window.name)
  console.log(this.name)
}

const name = 'Sunny';
const obj1 = { 
  name: 'Cassy',
  importantPerson: importantPerson
}
const obj2 = { 
  name: 'Jacob',
  importantPerson: importantPerson
}
obj1.importantPerson()
// console.log(name)