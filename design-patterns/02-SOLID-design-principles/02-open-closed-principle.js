// The Open-Closed Principles

// In object-oriented programming, the open–closed principle states "software entities
// (classes, modules, functions, etc.) should be open for extension, but closed for modification";
// that is, such an entity can allow its behaviour to be extended without modifying its source code.

// Open/closed principle is intended to mitigate risk when introducing new functionality.
// It's better for maintenance and scalability to adhere to this principle.

// Objects are open for EXTENSION but closed for MODIFICATION => INHERITANCE

// The Object.freeze() method freezes an object. A frozen object can no longer be changed;
//  ... make shift ENUM

let Color = Object.freeze({
  red: 'red',
  green: 'green',
  blue: 'blue',
});

let Size = Object.freeze({
  small: 'small',
  medium: 'medium',
  large: 'large',
});

class Product {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

// Objects are open for EXTENSION but closed for MODIFICATION

class ProductFilter {
  filterByColor(products, color) {
    return products.filter((p) => p.color === color);
  }

  // for the purpose of this exercise we assume this filter has been added later!
  // this is considered to be bad practice because this code is already tried and tested.
  // its better to extend the class
  filterBySize(products, size) {
    return products.filter((p) => p.size === size);
  }

  // if we keep adding more and more filters...
  // this can lead to state space explosion
  // 3 criteria = 7 methods
  // As the number of state variables in the system increases, the size of the system state space
  // grows exponentially. This is called the “state explosion problem”.

  filterBySizeAndColor(products, size, color) {
    {
      return products.filter((p) => {
        p.size === size && p.color === color;
      });
    }
  }
}

// specification => can help manage this issue
// in this example just a class that returns whether an item adheres to a certain specification
// in true OOP languages there would be an abstract class for the specifications however this doesn't exist
// in JavaScript

// force an abstract class in the constructor
class Specification {
  constructor() {
    if (this.constructor.name === 'Specification') {
      throw new Error('Specification is abstract');
    }
  }

  sharedProperty = 'shared property';
  // => sort of interface...
  isSatisfied(item, name) {
    return item[name] === this.name;
  }
}

class ColorSpecification extends Specification {
  constructor(color) {
    // call super => acts as a reference to the parent class
    // avoids duplication of properties and methods
    super();
    this.color = color;
  }

  isSatisfied(item) {
    // console.log(this.sharedProperty);
    return item.color === this.color;
  }
}

class SizeSpecification {
  constructor(size) {
    this.size = size;
  }

  isSatisfied(item) {
    return item.size === this.size;
  }
}

// Spefication Combinator class => combines the different specifications
// Could also be an OR specification

class AndSpecification {
  constructor(...specs) {
    this.specs = specs;
  }

  isSatisfied(item) {
    return this.specs.every((x) => x.isSatisfied(item));
  }
}

let apple = new Product('Apple', Color.red, Size.small);
let tree = new Product('Tree', Color.green, Size.large);
let house = new Product('House', Color.blue, Size.Large);
let book = new Product('Book', Color.green, Size.Large);
let pooltable = new Product('Pooltable', Color.green, Size.large);

let products = [apple, tree, house, book, pooltable];

let pf = new ProductFilter();
console.log(`Green products (old):`);
for (let p of pf.filterByColor(products, Color.green)) console.log(` * ${p.name} is green`);

class BetterFilter {
  filter(items, specification) {
    return items.filter((x) => specification.isSatisfied(x));
  }
}

let bf = new BetterFilter();
console.log(`Green product (new):`);

for (let p of bf.filter(products, new ColorSpecification(Color.green)))
  console.log(` * ${p.name} is green `);

console.log(`Large and green products:`);

let spec = new AndSpecification(
  new ColorSpecification(Color.green),
  new SizeSpecification(Size.large)
);

for (let p of bf.filter(products, spec)) console.log(` * ${p.name} is large and green`);
