// Constructor Functions

function Elf(name, weapon) {
  this.name = name;
  this.weapon = weapon;
  var a = 5;
}

Elf.prototype.attack = function() {
  return console.log(this.name + ' attacks with ' + this.weapon)
}
Elf.prototype.build = function() {
  return console.log(this.name + ' builds a house')
}

const peter = new Elf('Peter', 'stones')
peter.build()
const sam = new Elf('Sam', 'fire')
sam.attack()