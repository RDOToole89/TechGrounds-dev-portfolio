### Section 01 - Getting started

Important commands so far:

npm i -g typescript ts-node => install typescript compiler and ts-node helper tool
tsc filename => to compile

What is a type?

A type is a description of a value + the functions, methods and properties it has. For example true or false
is a boolean and "string" is a string. String also has associated methods and functions.

let word: string = 'String';

\*\*\* interface
What is an interface?

An interface is a way of describing what types of data an object needs to hold.

Describes an object => each part of the interface is typed

interface Todo {
id: number;
title: string;
completed: boolean;
}

// Types can be assigned with as or : after the variable name "let todo: Todo"
let todo = response.data as Todo;

\*\*\* Simple typescript function

The parameters describe the order and the types of the parameters void is the return type
in this case a console log. The function doesn't return anything it is void.

const logTodo = (id: number, title: string, completed: boolean): void => {
console.log(`The todo with ${id} and ${title} is ${completed}`);
};

### Section 02 - What is a Type System

Why are types used?

Types are used for the TypeScript compiler to analyze our code for errors and
for other engineers to understand what values are flowing around our codebase

Type Examples:

Type Value

---

string | 'hi there'
number | .00234
boolean | true
Date | new Date()
Todo | {id: 1, completed: true, title: "trash} => as defined by the interface

Two categories

Primitives => number boolean void undefined string symbol null

Object Types => functions array classes objects

### Section 03 - Type Annotations in Action

What is a Type annotation?

A little bit of code we write to tell TypeScript what type of value a variable will refer to => We tell TypeScript the type

const apples: number = 5;

What is Type inference

{ variable declaration } => const color = 'red' => variable initialization

TypeScript tries to figure out what type of value a variable refers to => TypeScript guesses the type

If declaration and initialization are on the same line TypeScript will figure out the type of 'color' for us.

Built in Object examples:

TypeScript knows about the Date class as described below

let now: Date = new Date()

// Arrays

In the below example we are telling TypeScript that the variable colors is an Array of 'String Types'. We can do this
for any Type!

let colors: string[] = ['red', 'green', 'blue'];
let myNumber: number[] = [1,2,3];
let truths: boolean[] = [true, false, true]

// Classes
Classes are basically schemas for objects. They can contain properties and methods etc.

class Car {}

The below code describes that the variable car has the value of ONE INSTANCE of the class Car
let car: Car = new Car();

// Object literal
We declare a variable point asign it an object with an x and a y property. We also ANNOTATE that point must be an object
with an x and a y property that are numbers

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

\*\*\* When to use Type annotations?!

1. When we declare a variable on one line then initialize it later
   let words = ['red', 'green', 'blue'];
   // let foundWord; => TypeScript declares it has the Any type.

We should type found word if we dont initialize it on the same line.
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
if (words[i] === 'green') {
foundWord = true;
}
}

2. When we want a variable to have a type that can't be inferred correctly

In this example we wish to switch the boolean to a number from within the loop.
TypeScript has no way of inferring our intention therfor we annotate with a pipe symbol |
boolean | number

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
if (numbers[i] > 0) {
numberAboveZero = numbers[i];
}
}

3. When a function returns the 'any' type and we need to clarify the value

TypeScript cant infer what JSON.parse() will spit out therefor it assigns the ANY type!

1.  Function that returns the 'any' type
    const json = '{"x": 10, "y": 20}';
    const coordinates = JSON.parse(json);
    console.log(coordinates); // {x: 10, y: 20};

To fix this we can add the type: { x: number; y: number } to coordinates. Like so:
coordinates: { x: number; y: number }

\*\*\* ANY is a type just like string or boolean. It means that TypeScript doesn't know what it is
and can't check it. Avoid any at all cost.
