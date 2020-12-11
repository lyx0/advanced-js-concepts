function one() {
  return 1
}

one()

// ------------- 

const obj = {
  two() {
    return 2
  }
}

obj.two()

// -------------

function three() {
  return 3;
}

three.call()

// -------------

// Function Constructor
const four = new Function('num', 'return num')

four(4)

// -------------

function woohoo() {
  console.log('woohoo')
}

woohoo.yell = 'ahhhh'

const specialObj = {
  yell: 'aaaaahhh',
  name: 'woohoo',
  (): console.log('woohoo')
}

woohoo.name

const obj = {

}

