// Constructor Functions

function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
}

Elf.prototype.attack = function() {
  return console.log(this.name + ' attacks with ' + this.weapon)
}

const peter = new Elf('Peter', 'stones')
const sam = new Elf('Sam', 'fire')
// console.log(sam.name)
sam.attack()
peter.attack()