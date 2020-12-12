class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return 'attack with ' + this.weapon
  }
}

class Queen extends Character {
  constructor(name, weapon, kind) {
    super(name, weapon)
    this.kind = kind;
  }
  attack() {
    console.log(super.attack());
    return console.log(`I am the ${this.name} of ${this.kind}, now bow down to me!`)
  }
}
//Polymorphism--
//Extend the Character class to have a Queen class. The output of the below code should be:
// create a new instace with the queen having (name, weapon, type). Type inlcudes: 'hearts', 'clubs', 'spades', 'diamonds'
const victoria = new Queen('Victoria', 'army', 'hearts');

// will console.log the attack() method in Character class AND will return another string: 'I am the Victoria of hearts, now bow down to me! '
victoria.attack()


