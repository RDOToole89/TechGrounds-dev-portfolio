const apples: number = 5;
let speed = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];
let mixed = ['red', true, 2];

// Classes

class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function

// Functions are a little different. As developers we're interested in knowing what arguments
// go into the function and what different values it will return

// The syntax below describes that the function logNumber: TAKES in a number and returns VOID
// :(i: number) => void after the variable logNumber is an annotation! Everything after the = sign
// is the function itself.

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations?

// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20};

// 2) When we declare a variabloe on one line then initialize it on another.
let words = ['red', 'green', 'blue'];
// let foundWord; => TypeScript declares it has the Any type.

let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
// In this example we wish to switch the boolean to a number from within the loop.
// TypeScript has no way of inferring our intention therfor we annotate with a pipe |
// boolean | number

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
