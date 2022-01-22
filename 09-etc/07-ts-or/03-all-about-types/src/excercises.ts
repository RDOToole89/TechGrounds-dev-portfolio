// 1. For each of these values what type will TypeScript infer?
// a. => number
let exA = 1042;
// b. => string
let exB = 'apples and oranges';
// c. => 'pineapples'
const exC = 'pineapples';
// d. boolean[]
let exD = [true, true, false];
// e. { type: string }
let exE = { type: 'ficus' };
// f. (number | boolean)[]
let exF = [1, false];
// g. number[]
const exG = [3];
// h. any
let exH = null;

// 2. Why does each of these throw an error?
// a. because i has a type of number 3
let i: 3 = 3;
i = 4;

// b. because you cant push a string into a number[]
let j = [1, 2, 3];
j.push(4);
j.push('string');

// c. because never is a return type
let k: never = 4;

// d.
let l: unknown = 4;
let m = (l as number) * 2;
