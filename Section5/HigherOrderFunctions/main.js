// Higher Order functions are functions that can take a
// function as an argument or return a function

// function letAdamLogin() {
//   let array = [];
//   for (let i = 0; i < 100000000; i++) {
//     array.push(i)
//   }
//   console.log('Access Granted to Adam, yay!');
// }


// function letEvaLogin() {
//   let array = [];
//   for (let i = 0; i < 100000000; i++) {
//     array.push(i)
//   }
//   console.log('Access Granted to Eva, yay!');
// }

// letAdamLogin()
// letEvaLogin()

const giveAccessTo = (name) => {
  console.log('Access granted to ' + name)
}

function authenticate(verify) {
  let array = [];
  for (let i = 0; i < 100000000; i++) {
    array.push(i)
  }
  return giveAccessTo(person.name)
}

function sing(person) {
  console.log('l alalalalalall my name is ' + person.name)
}

function letPerson(person, fn) {
  if (person.level === 'admin') {
    return fn(500000)
  } else if (person.level === 'user') {
    return fn(500)
  }
  // return giveAccessTo(person.name)
}

// letPerson({level: 'user', name: 'Tim'}, authenticate)
letPerson({level: 'user', name: 'Tim'}, sing)


// -------------

const multiplyBy = function(num1) {
  return function(num2) {
    return num1 * num2
  }
}

const multiplyBy = (num1) => (num2) =>  num1*num2

const multiplyByTwo = multiplyBy(2);
const multiplyByFive = multiplyBy(5)
multiplyBy(4)(6)
multiplyByTwo(10)
multiplyByTwo(48123)
multiplyByFive(587123812)