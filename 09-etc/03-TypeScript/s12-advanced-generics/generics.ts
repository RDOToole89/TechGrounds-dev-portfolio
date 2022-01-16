// Class representing an Array of Numbers

class ArrayOfNumber {
  constructor(public collection: number[]) {}

  // method to get a number at an index
  get(index: number): number {
    return this.collection[index];
  }
}

// If we want to get something from Array of strings we now have a problem
// Because this class and the method in it expects a return value of Number
// This is where Generics can help. We can write logic but specify the Type later.

class ArrayOfString {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

// This class abstracts the logic but the <T> syntax is like an argument but then for
// types. <T> itself has not special meaning, you can call it anyting you want but <T> is convention.
// By usings Generics we make functions more reuasable
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

// To use Generics we can call the class and pass in the TYPE or <T> we want this class OR function to return
// It looks a little odd but its very similar to passing in an argument but then with types
new ArrayOfAnything<string>(['Hello', 'World']);

// If we dont specifiy the TYPE, TypeScript will infer the type based on what is passed in. Type inference is
// constantly happening behind the scenes when we dont specify the type.
new ArrayOfAnything([true, false]);

// Example of generics with functions
// With the printString and printNumber function we are duplicating code. Using a generic function is a better option

function printString(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// GENERIC FUNCTION DECLERATION => insert the <T> right after the function name.
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// To CALL the generic function:
// We just have to specify <string> for T because we ONLY want to tell TypeScript the TYPE
// If we would specify <string[]> that would indicate that we are passing in a 2-dimensional array

// Generic printAnything function annotated as <string>
printAnything<string>(['a', 'b', 'c']);

// Generic printAnything function annotated as <boolean>
printAnything<boolean>([true, false, true]);

// We can call printAnything without annotating the Function Call and TypeScript will inferr the TYPE
// However it is often better to annotate the function for clarity and to prevent errors.
printAnything([1, 2, 3, 4, 5]);

// Generic Constraints => Telling TypeScript that we expect a certain type to have certain properties

class Car {
  print() {
    console.log('I am a car');
  }
}

class House {
  print() {
    console.log('I am a house');
  }
}

// Without the //@ts-ignore: This code causes a TypeScript error because TypeScript has NO WAY
// of knowing if our generic type T has a method on it called print(). If we would pass in any
// type that does not have this method we will get an error.

function PrintHousesOrCar<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    // @ts-ignore
    arr[i].print();
  }
}

// This interface specifies a print method with a return type of void
interface Printable {
  print(): void;
}

// The following generic function implements the printable interface to specify to TypeScript
// that the Type that is being inserted into the function will definitely have a print() method.

// THIS IS CALLED A GENERIC CONSTRAINT and will limit the types we can pass in for <T>
function PrintHousesOrCars<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

// This wont work because an array with numbers DOES NOT have a print method
//@ts-ignore
PrintHousesOrCars([1, 2, 3]);

// But we can call it with another Type that has the print() method for example:

// Either through inference...
PrintHousesOrCars([new House(), new House()]);

// Or annotation which is the better option usually
PrintHousesOrCars<House>([new House(), new House()]);
PrintHousesOrCars<Car>([new Car(), new Car()]);
