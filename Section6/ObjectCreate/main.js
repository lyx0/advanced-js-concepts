// factory functions
// Object.create

const elfFunctions = {
  attack() {
    return console.log(this.name + ' attacks with ' + this.weapon)
  }
}

function createElf(name, weapon) {
  let newElf = Object.create(elfFunctions)
    // console.log(newElf.__proto__)
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const peter = createElf('Peter', 'stones')
peter.attack()
const sam = createElf('Sam', 'fire')
sam.attack()