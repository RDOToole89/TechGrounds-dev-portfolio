// Objects Constructor Types

// Object Constructor

const roibin = new Object();

roibin.name = 'Roibin';
roibin.age = 32;
roibin.country = 'The Netherlands';
roibin.city = 'Amsterdam';

console.log('Roibin constructed with Object constructor =>', roibin);

// Literal COnstructor

const literalRoibin = {
  name: 'Roibin',
  age: 32,
  country: 'The Netherlands',
  city: 'Amsterdam',
};

console.log('Roibin in literal constructor =>', literalRoibin);

// Function Constructor => prototype

function Person(name, age, country, city) {
  this.name = name;
  this.age = age;
  this.country = country;
  this.city = city;
}

const roibinFunctionObject = new Person('Roibin', 32, 'The Netherlands', 'Amsterdam');
console.log('Roibin function constructor Person =>', roibinFunctionObject);

// Factory function

function createPerson(name, age, country, city) {
  let counter = 0;

  return {
    name: name,
    age: age,
    country: country,
    city: city,
    increment() {
      this.counter++;
    },
  };
}

const roibinFromFactoryFunction = createPerson('Roibin', 32, 'The Netherlands', 'Amsterdam');
console.log('Roibn constructed from a factory function =>', roibinFromFactoryFunction);

// Singleton constructor => used for namespacing

const roibinSingleton = new (function () {
  // Instance stores a reference to the Singleton
  let instance;

  function init() {
    // Singleton

    // Private methods and variables

    function privateMethod() {
      console.log('Private function');
    }

    let privateVariable = 'Also private';

    return {
      // Public methods and variables

      name: 'Roibin',
      age: 32,
      country: 'The Netherlands',
      city: 'Amsterdam',

      publicMethod: function () {
        console.log('Open to the public');
      },

      publicProperty: 'Also public',
    };
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = init();
      }

      return instance;
    },
  };
})();

console.log('Roibin from singleton constructor => ', roibinSingleton.getInstance());

// Prototypal inheritance
// The prototype is essentially the schematics that every instance of an type of object
// needs to adhere too.

function RoibinConstructor() {}

// Add properties to the prototype
RoibinConstructor.prototype.name = 'Roibin';
RoibinConstructor.prototype.age = 32;
RoibinConstructor.prototype.country = 'The Netherlands';
RoibinConstructor.prototype.city = 'Amsterdam';

let newRoibin = new RoibinConstructor();
console.log('newRoibin function RoibinConstructor() Prototype =>', newRoibin);

// difference __proto__ and .prototype
console.log(
  '__proto__ is an object in every class instance that points to the prototype it was created from. '
);
console.log(
  'In reality, the only true difference between prototype and __proto__ is that the former is a property of a class constructor, while the latter is a property of a class instance. I'
);

// Class Constructor

class PersonClass {
  constructor(name, age, country, city) {
    this.name = name;
    this.age = age;
    this.country = country;
    this.city = city;
  }

  sayHello() {
    console.log(`Hello from ${this.name}!`);
  }
}

const roibinFromClassConstructor = new PersonClass('Roibin', 32, 'The Netherlands', 'Amsterdam');
console.log('Roibin from class constructor', roibinFromClassConstructor);
console.log('Calling sayHello() method on the roibinFromClassConstructor object');
roibinFromClassConstructor.sayHello();

// Opdracht 6.1

const monkey = new Object();
monkey.species = 'Monkey';
monkey.name = 'Donkey Kong';
monkey.age = 40;

console.log('monkey =>', monkey);

const dog = {
  species: 'Dog',
  name: 'Daimler',
  age: 8,
};

console.log('dog =>', dog);

function Animal(species, name, age) {
  this.species = species;
  this.name = name;
  this.age = age;
}

const cat = new Animal('Cat', 'Tijgertje', 13);
console.log('cat =>', cat);

// HAMSTER SINGLETON pattern constructor

const hamsterSingleton = function Hamster() {
  // cached instance
  let instance;

  // rewrite the constructor
  Hamster = function () {
    return instance;
  };

  // carry over the prototype

  Hamster.prototype = this;

  // the instance
  instance = new Hamster();

  // reset the constructor pointer
  instance.constructor = Hamster;

  // all the functionality
  instance.name = 'Rowdy';
  instance.species = 'Hamster';

  return instance;
};

console.log('Hamster Singleton with Closure =>', hamsterSingleton);

class AnimalClass {
  constructor(species, name, age) {
    this.species = species;
    this.name = name;
    this.age = age;
  }
}

const parrot = new AnimalClass('Parrot', 'Sazu', 8);
console.log('Parrot =>', parrot);

// Object.create => creates an Object with only one level of inheritance
// it used the existing object as the prototype for the newly created object

const monkey2 = Object.create(monkey);
console.log('Object.create(monkey) from new Object() constructor', monkey2);
const dog2 = Object.create(dog);
console.log('Object.create(dog) from new Object() constructor', dog2);
const cat2 = Object.create(cat);
console.log('Object.create(cat) from new Object() constructor', cat2);
const hamster2 = Object.create(hamsterSingleton);
console.log('Object.create(hamsterSingleton) from new Object() constructor', hamsterSingleton);
const parrot2 = Object.create(parrot);
console.log('Object.create(parrot) from new Object() constructor', parrot2);

const person1 = new PersonClass('Roibin', 32, 'Amsterdam', 'The Netherlands');
const person2 = new PersonClass('Kevin', 36, 'Boston', 'The United States');
const person3 = new PersonClass('Rory', 38, 'Dublin', 'The Netherlands');
const person4 = new PersonClass('Caitlin', 31, 'Amsterdam', 'The Netherlands');
const person5 = new PersonClass('Arjuna', 30, 'Amsterdam', 'The Netherlands');
const person6 = new PersonClass('Sunny', 32, 'Amsterdam', 'The Netherlands');
const person7 = new PersonClass('Larry', 75, 'Amsterdam', 'The Netherlands');
const person8 = new PersonClass('Samuel', 14, 'Boston', 'The United States');
const person9 = new PersonClass('Shayani', 15, 'Boston', 'The United States');
const person10 = new PersonClass('Jens', 29, 'Amsterdam', 'The Netherlands');

const personArray = [
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
  person7,
  person8,
  person9,
  person10,
];
console.log('Array full of Person Objects =>', personArray);

personArray.sort((a, b) => a.age - b.age);
console.log('Person Array after sorting =>', personArray);

console.log('');
console.log('<===== divider ====>');
console.log('');

// Opdracht 6.2
class Club {
  constructor(name, type, members, contactInformation) {
    this.name = name;
    this.type = type;
    this.members = members;
    this.contactInformation = contactInformation;
  }
}

const ajax = {
  name: 'Ajax',
  type: 'Football Club',
  members: 100000,
  contactInformation: {
    address: 'Bijlmer',
    telephone: 123456,
    contactPerson: 'Erik Ten Hag',
  },
};

const feyenoord = new Club('Feyenoord', 'Football Club', 2, {
  address: 'Rotjeknor',
  telephone: 376862784,
  contactPerson: 'Willem van Hanegem',
});

const ado = {
  name: 'Ado Den Haag',
  type: 'Football Club',
  members: 2,
  contactInformation: {
    address: 'Het Plein',
    telephone: 112,
    contactPerson: 'Herman den Blijker',
  },
};

const psv = {
  name: 'PSV',
  type: 'Football Club',
  members: 6,
  contactInformation: {
    address: 'Ergens ',
    telephone: 43456,
    contactPerson: 'Mark van Bommel',
  },
};

const utrecht = {
  name: 'FC Utrecht',
  type: 'Football Club',
  members: 4.5,
  contactInformation: {
    address: 'Beurs plein',
    telephone: 2435456,
    contactPerson: 'Wesley Sneijder',
  },
};

// const clubArray = [ajax, feyenoord, ado, psv, utrecht];

// clubArray.forEach((club) => {
//   console.log('-------');
//   console.log(club.name);
//   console.log(club.contactInformation.telephone);
//   console.log(club.contactInformation.contactPerson);
//   console.log('-------');
// });
