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
console.log(shrek.attack())
const dobby = new Elf('Dobby', 'cloth', 'house');
console.log(dobby.attack())

// console.log(Ogre.prototype.isPrototypeOf(shrek))
// console.log(Character.prototype.isPrototypeOf(shrek))

// when we use the New keywoard from a class we create the instance of a class
console.log(dobby instanceof Elf)
console.log(dobby instanceof Character)
