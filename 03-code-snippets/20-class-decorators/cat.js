function readonly(target, key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

class Cat {
  constructor(name) {
    this.name = name;
  }
  @readonly
  meow() {
    return `${this.name} says Meow!`;
  }
}

let descriptor = {
  value: function () {
    `${this.name} says Meow!`;
  },
  enumerable: true,
  configurable: true,
  writable: true,
};

Object.defineProperty(Cat.prototype, 'meow', {
  value: function () {
    `${this.name} says Meow!`;
  },
  enumerable: true,
  configurable: true,
  writable: true,
});
console.log(Cat.prototype);

const garfield = new Cat();
garfield.meow = function () {
  console.log('I want lasagne');
};
