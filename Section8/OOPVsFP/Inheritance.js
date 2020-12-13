// few operations on common data
// stateful
// side effects
// imperative -- how we want it to be done
class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return this.name + ' attacks with ' + this.weapon;
  }
}
// Subclassing
class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  makeFort() {
    return 'strongest fort in the world'
  }
}
const shrek = new Ogre('Shrek', 'Hammer', 'green')
console.log(shrek.makeFort())
console.log(shrek)
console.log(shrek.attack())
const dobby = new Elf('Dobby', 'cloth', 'house');
// console.log(dobby)
