// Parent or Super class Vehicle implements two methods

class Vehicle {
  // Either initalize color at the top of the class or in the constructor function
  // color: string = 'red';
  // color: string;

  // The constructor is a SPECIAL function that will be called immediately when we construct
  // an object from a class => create an INSTANCE of the class.

  // By adding public in front of the parameter inside the constructor we can can define
  // and initialize it in one line
  constructor(private color: string, public buildYear: number, protected secretInfo: string) {
    // this.color = color;
  }

  // public drive(): void {
  //   console.log('Driving!');
  // }

  protected honk(): void {
    console.log(`Beep Beep! I have a ${this.secretInfo}`);
  }

  public honkSecret(): void {
    this.honk();
  }
}

const vehicle = new Vehicle('red', 1922, 'secret');
vehicle.honkSecret();
console.log(vehicle.buildYear);
// vehicle.drive();
// vehicle.honk(); => this method is also only accesible within the class and its sub classes

// Inheritance => Child class extends Vehicle Polymorphism
// Polymorhphism => one of the pillars of OOP
// Means you can overwrite methods from the parent class

// If Car doesn't have its own constructor because of inheritance e.g it EXTENDS class Vehicle
// it will call the constructor of Vehicle for Car. This works slighly different when class Car
// also implements its own constructor.
class Car extends Vehicle {
  // If Car also has its own constructor we need to call Super, which is a reference to the parent
  // class. Notice we don't re-annotate color because we dont want to reassign the modifier.
  constructor(public wheels: number, color: string, buildYear: number, secret: string) {
    super(color, buildYear, secret);
  }

  private drive(): void {
    console.log('Vroom vroom!');
  }
  startDriving(): void {
    this.drive();
  }

  honk(): void {
    console.log('Beep Beep!');
  }
}

const car = new Car(4, 'red', 1922, 'superSecret');
// car.drive(); // the Drive class is private so cant be called from outside of the class
car.honk();

// Class Modifiers
// Class modifiers are intended to restrict access to different functions and variables

// Public => This methods can be called any where, any time
// Private => This methods can only be called by other methods in this class
// Protected => This method can be called by other methods in THIS class
// or by other methods child classes

class Bike {
  public wheels: number = 2;

  ring(): void {
    console.log('Tring tring!');
  }

  howManyWheels() {
    console.log(`A bike has ${this.wheels} wheels!`);
  }
}

const bike = new Bike();

bike.howManyWheels();
console.log(bike);
Object.getPrototypeOf(bike);
