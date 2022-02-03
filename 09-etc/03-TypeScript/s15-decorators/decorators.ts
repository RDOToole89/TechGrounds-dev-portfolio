@classDecorator
class Boat {
  @testDecorator2
  color: string = 'red';

  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @testDecorator
  set formattedColor(color: string) {
    this.color = color;
  }

  // Decorators only gets run ones when we implement the class
  @testDecorator
  pilot(@parameterDecorator speed: string): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
  }

  @logErrorFactory('Oopsie we have an error!')
  fly(): void {
    throw new Error();
    console.log('woosh');
  }
}

// logError decorator
function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch (e) {
      console.log('Oops Boat sunk');
    }
  };
}
// new Boat().pilot();
// new Boat().fly();

// logError decorator factory

function logErrorFactory(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function testDecorator2(target: any, key: string) {
  console.log(target);
  // This doesnt work
  console.log(target.color);
  console.log(key);
}

// What is a property Descriptor for Methods
// writabe => whether or not this property can be changed
// enumarable => whether or not this property get looped over a for...in (think of .length property)
// value => current value
// configurable => property definition can be changed and property can be deleted

const car = { make: 'honda', year: 2004 };
// console.log(
//   'Object.getOwnPropertyDescriptor',
//   Object.getOwnPropertyDescriptor(car, 'make')
// );

Object.defineProperty(car, 'make', { writable: false });
// Throws an error
// car.make = 'chevy';
// console.log(car);

function testDecorator(target: any, key: string): void {
  console.log('Target:', target);
  console.log('Key:', key);
}

// testDecorator(Boat.prototype, 'pilot');

// const myBoat = new Boat();
// console.log(myBoat.color);
// console.log(myBoat.formattedColor);
// myBoat.formattedColor = 'green';
// console.log(myBoat.formattedColor);

// var _decorate = function (decorators: any, target: any, key: any, decs: any) {
//   var desc = Object.getOwnPropertyDescriptor(target, key);

//   for (var decorator of decorators) {
//     decorator(target, key, desc);
//   }
// };
