// Inheritance
// Focus on what it is
// We structure our class around what things are
// Tight Coupling problem
// Fragile base class problem =>
// Our base class changes all subclasses which can break your code somewhere down the line.
// Hierarchy problem => we expect things in the future to be the same. For example perhaps we want a subclass to have just the sleep method... however because of inheritance it will also inherit all the other methods.

// few operations on common data
// very statefull
// Side effects
// Methods alter state
// Imperative

class Character {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return 'attack with' + this.weapon;
  }

  // Inheritance creates very tight coupling between parent and subclasses

  // This can be benefitial where this is desired however it makes code less modular an reusable.
  sleep() {
    return 'zZzzZzzz';
  }
}

class ElfClass extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    console.log('What am i?', this);
    this.type = type;
  }
}
