// a.call() === a()
// call()

// function a() {
//   console.log('hi')
// }

const wizard = {
  name: 'Merlin',
  health: 100,
  heal(num1, num2) {
    return this.health += num1 + num2;
  }
}

const archer = {
  name: 'Robin Hood',
  health: 30,
}

console.log('1', archer)

// call uses numbers
// wizard.heal.call(archer, 50, 30)

// apply uses array
// wizard.heal.apply(archer, [100, 30])

// bind doesn't run the function, needs to be invocated
const healArcher = wizard.heal.bind(archer, 100, 30)
healArcher()

console.log('2', archer)


// apply()
// bind()



