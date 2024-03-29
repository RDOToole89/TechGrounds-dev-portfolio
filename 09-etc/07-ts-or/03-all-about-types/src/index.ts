function squareOf(n: number) {
  return n * n;
}
// index signatures

let airplaneSeatingAssignment: {
  // key of type (number or string) can be a value of type
  // [key: type]: type
  // key with type string can have a string value
  [seatNumber: string]: string;
} = {
  '34d': 'Boris',
  '34e': 'Bill',
};

let user: {
  readonly firstname: string;
} = { firstname: 'abby' };

console.log(user.firstname);
// throws an error because user is readonly
// user.firstname = 'abbey'

// avoid typing something as an object literal because anything can be assigned to it

let danger: {};
danger = {};
danger = { x: 1 };
danger = [];
danger = 2;

// Type aliases

type Age = number;

type Person = {
  name: string;
  age: Age;
};

// Types that mean an absence of something

// null => absence of a a value
const a = (x: number) => {
  if (x > 10) return x;
  return null;
};

// undefined => variable that has not been assigned a value yet
const b = () => {
  return undefined;
};

// void => function that doest have a return statement console.log() for example
const log = (x: string) => {
  console.log(x);
};

// never => function that never return for example when you throw an exception

const never = (x: number) => {
  while (true) {
    console.log(x);
  }
};

const thow = (x: string) => {
  throw Error(x);
};
