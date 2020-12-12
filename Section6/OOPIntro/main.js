let dragon = {
  name: 'Tanya',
  fire: true,
  fight() {
    return 5
  },
  sign() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`
    }
  }
}