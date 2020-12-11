let dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    console.log('5');
  },
  sing() {
    if (this.fire) {
    console.log(`I am ${this.name}, the breather of fireeeeee`);
    }
  }
}

let lizard = {
  name: 'Kiki',
  fight() {
    console.log('1');
  }
}

lizard.__proto__ = dragon;
for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    console.log(prop)
  }
}


// -------
// browser console
const obj = {}
obj.__proto__ 
// {consutructor}
obj.__proto__.__proto__
// null