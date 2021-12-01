### Section 01 - Getting started

Important commands so far:

npm i -g typescript ts-node => install typescript compiler and ts-node helper tool
tsc filename => to compile

to run TypeScript code easily in the browser
npm i -g parcel-bundler

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

// Variable type annotations:

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

### Section 04 - Function Type Annotations in Action

// Function type annotations

Type annotations for functions =>

Code we add to tell TypeScript what type of arguments a function will receive and what type of values it will return.

Type inference for functions => TypeScript tries to figure out what type of value a function will RETURN!

// function add takes two arguments a and b which are both numbers.
// this functions RETURNS the addition of those number thus it must return a number

// Here we declare all the types and also on the return type
const add = (a: number, b: number): number => {
return a + b;
};

// It's a better practice to ALWAYS add return type to avoid an unwanted void return
when forgetting a return statement in the function

// Typescript can also infer the return type from the body of the functions
const add = (a: number, b: number) => {
return a + b;
};

// Type annotation anonymous functions
const multiply = function (a: number, b: number): number {
return a \* b;
};

// Function that returns void can return void or null or nothing at all
const logger = (message: string): void => {
console.log(message);
};

// Never indicated that we for example throw an Error and never reach the
// end of the function with a value
const throwError = (message: string): never => {
throw new Error(message);
};

// Desctructuring with types

// here we describe a forecast object that has a date a weather property
const logWeather = (forecast: { date: Date; weather: string }): void => {
console.log(forecast.date);
console.log(forecast.weather);
};

// with destructing we just annotate the desctructured object
const logWeather2 = ({ date, weather }: { date: Date; weather: string }): void => {
console.log(date);
console.log(weather);
};

logWeather(todaysWeather);

// Types on objects

const profile = {
name: 'alex',
age: 20,
coords: {
lat: 0,
lng: 15,
},
setAge(age: number): void {
this.age = age;
},
};

// Typing a destructured variable! => we describe
const { age }: { age: number } = profile;

// Typing a destructured object within an object
// The below code is just like a regular JS object.
const {
coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;

### Section 05 - Mastering Typed Arrays

All JS array feautes will still work. Types arrays usually contain one specific TYPE of value.

Typed Array => Array where each element is some consistent type of value

Usually we use typed arrays to represent a colleciton of records with some arbitrary sort order

// In this example we have an array of strings
const carMakers: string[] = ['ford', 'toyota', 'chevy'];

// If we dont add a type to an empty array TypeScript will infer the ANY type on the Array. Which is
something we want to avoid in TypeScript.
const flowers = []

// This example is a little more complicated. This type is an array with array of string
const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

so... why care about Typed Arrays

Positives:

1. TS can do type inference when extracting values from an array

// TypeScript knows the carMakers array contains strings
// thus it infers that values coming from that array must also be strings.
const ford = carMakers[0];
const myCar = carMakers.pop();

2. TS can prevents us from adding incompatible values to the array
   // The following will create a typescript error because the carMakers array is types as string[]
   // `carMakers.push(100);`

3. We can get help with 'map', 'forEach', 'reduce' functions

For exampple:
// In higher order functions such as .map, if TypeScript knows the type of value
// it will automatically suggest the methods you can use on that return type
carMakers.map((car: string): string => {
return car.toUpperCase();
});

4. Flexible - arrays can still contain multiple different types

// Here we specifically declare it can by either of Type (Date | string)[]
// because TypeScript wasn't able to infer this from the initialization
const mostImportantDates: (Date | string)[] = [new Date()];

### Section 06 - Tuples in TypeScript

Tuple is an array-like structure where each element represents some property of a record

Object which represents a drink

// cola
{
color: brown
carbonated: true
sugar:40
}

// This is a Tuple its an array organized in a very SPECIFIC way
// In order for that specific memorization to stay in place we can use a Tuple
[ [brown, true, 40] ]

// Tuples are not used often in JavaScript

### Section 07 - Interfaces in TypeScript

Interfaces => Creates a new TYPE, describing the property names and value types of an object.

- it is basically a CUSTOM type

Interfaces + Classes = Really strong code reuse in TS

What is an Interface?

An interface is a way of describing an object and the Types it is expected to hold.

// An interface can hold any kind of type. It is not limited to primitives. We can aslo
express function definitions inside our interfaces.

interface Vehicle {
name: string;
year: Date;
broken: boolean;
summary(): string;
}

Try keeping interfaces quite general. The summary() function has little to do with the interface of vehicle.
It would be better to seperate that functionality into a different interface called Reportable

interface Reportable {
summary(): string;
}

reportable can be reused on many different sorts of objects

// Interface Reportable acts as a gatekeeper to the printSummary function
Interface Reportable => printSummary Function

Interfaces are the general strategy for writing resuable code in TypeScript

- Create functions that accept arguments that are typed with interface
- Objects / classes can decide to 'implement' a given interface to work with a function

### Section 07 - Classes in TypeScript

What are classes?

Classes are a blueprint to create an object with some fields (values) and methods (functions)
to represent a 'thing'.

Classes can contain modifiers for values and methods

private => means that its is only accesible from within the Class  
public => mean anyone can access it from anywhere
protected => only the Class OR its child sub Classes have access

There are three ways of defining and initialize variables in a Class in TypeScript

class Vehicle {
initalize at the top level
color: string = 'red'

honk() {
console.log('beep')
}
}

initialize via constructor the classic ES6 way

class Vehicle {
constructor(color, year) {
this.color = color;
this.year = year;
}
}

initialize via the constructor by prepending the modifier
class Vehicle {
constructor(public color: string, public year: number){

}

}

If a Class is extended by a parent class (inheritance) we need to call Super() in the constructor
and list all the variables we want to INHERIT like so:

class Car extends Vehicle {

- notice we dont have to add the modifiers again in the subclass

  constructor(public wheels: number, color: string, year: number) {
  super(color, year)
  }

}

Why care about Classes and where do we use them?

Because Interfaces + Classes create really strong robust code.

### Section 09 - Design Patterns in TypeScript

Library to easily run TypeScript files

npm i -g parcel-bundler

// Parcel is a library that makes it easy to run TypeScript files.
// By linking ot the index.ts in the index.html file
// Run parcel index.ts

with many JS libraries we will get an error because type definition files are missing

import faker from 'faker';

// We get an error because the faker module does not include a type definition file
// We need to install a type definition file manually
// By running npm i @types/{library name} we can install the types necessary for many libraries

folding levels in a file ctrl + shift + p
folder level 1 - 6
