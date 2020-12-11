// Closure is the combination of a function and 
// the lexical environment from which it was declared

function a() {
  let grandpa = 'grandpa'
  return function b() {
    let father = 'father'
    let random = 5823489324
    return function c() {
      let son = 'son'
      // son has access to grandpa and creates a closure (box so it doesn't get dropped)
      // but doesnt keep random around since it's not used
      // keeps everything that is still referenced, lexically scoped
      console.log(`${grandpa} > ${father} > ${son}`);
    }
  }
}

const one = a();
a()()()

// --------------

function boo(string) {
  return function(name) {
    return function(name2) {
      console.log(`hi ${string} ${name} ${name2}`)
    }
  }
}

const booString = boo('hi');
// 5 years 
const booStringName = booString()