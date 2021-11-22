// Opdracht 1.2

let typeQuestion1 = 'Number';
let typeQuestion2 = true;
let typeQuestion3 = false;
let typeQuestion4 = undefined;
let typeQuestion5 = 22;
let typeQuestion6 = 22n;
let typeQuestion7 = 'Symbol();';
let typeQuestion8 = null;
let typeQuestion9 = { name: 'Roibin ', lastName: 'OToole' };
let typeQuestion10 = new Object();
let typeQuestion11 = function add(a, b) {
  return a + b;
};
let typeQuestion12;

console.log('01 - This is a ' + typeof typeQuestion1 + ', with the value: ' + typeQuestion1);
console.log('02 - This is a ' + typeof typeQuestion2 + ', with the value: ' + typeQuestion2);
console.log('03 - This is a ' + typeof typeQuestion3 + ', with the value: ' + typeQuestion3);
console.log('04 - This is a ' + typeof typeQuestion4 + ', with the value: ' + typeQuestion4);
console.log('05 - This is a ' + typeof typeQuestion5 + ', with the value: ' + typeQuestion5);
console.log('06 - This is a ' + typeof typeQuestion6 + ', with the value: ' + typeQuestion6);
console.log('07 - This is a ' + typeof typeQuestion7 + ', with the value: ' + typeQuestion7);
console.log('08 - This is a ' + typeof typeQuestion8 + ', with the value: ' + typeQuestion8);
console.log('09 - This is a ' + typeof typeQuestion9 + ', with the value: ' + typeQuestion9);
console.log('10 - This is a ' + typeof typeQuestion10 + ', with the value: ' + typeQuestion10);
console.log('11 - This is a ' + typeof typeQuestion11 + ', with the value: ' + typeQuestion11);
console.log('12 - This is a ' + typeof typeQuestion12 + ', with the value: ' + typeQuestion12);

// Opdracht 1.3

let someNumber = 5;
let anotherNumber = '5';

console.log(someNumber + anotherNumber); // 55 "string contactenation"
console.log(someNumber + -anotherNumber); // 0
console.log(someNumber + +anotherNumber); // 10
console.log(someNumber == anotherNumber); // true
console.log(someNumber === anotherNumber); // false
console.log(someNumber != anotherNumber); // false
console.log(someNumber !== anotherNumber); // true

// Opdracht 1.4

// The main difference between the two is that:

// Prefix increment (++i) increments, and returns the new, incremented value;
// Postfix increment (i++) increments, but returns the old value (i.e. the value before the increment).

// To illustrate this difference, you can consider the following example:

let increment = 1;
console.log('++increment effect: ', ++increment); // 2
console.log('increment++ effect: ', increment++); // toont oude waarde => maar incrementeerd wel

console.log('increment++ effect: ', increment++);
console.log('++increment effect: ', ++increment);

console.log('');
console.log('<===== divider ====>');
console.log('');

let modulo = 24 % 10;
console.log('Modulo 24 % 10: ', modulo); // 4

let division = 24 / 10;
console.log('Division 24 / 10: ', 24 / 10);

let someValue1 = 'Text';
let someValue2 = Boolean;
let someValue3 = false;
let someValue4 = 'false';
let someValue5 = true;
let someValue6 = 'true';
let someValue7 = null;
let someValue8 = undefined;

console.log('');
console.log('<===== divider ====>');
console.log('');

console.log('someValue1 = "Text"', !someValue1);
console.log('someValue2 = "Boolean"', !someValue2);
console.log('someValue3 = "false"', !someValue3);
console.log('someValue4 = "false string"', !someValue4);
console.log('someValue5 = "true"', !someValue5);
console.log('someValue6 = "true string"', !someValue6);
console.log('someValue7 = "null"', !someValue7);
console.log('someValue8 = "undefined"', !someValue8);

console.log('');
console.log('<===== divider ====>');
console.log('');

let anotherValue1 = 'text';
let anotherValue2 = 3;
let anotherValue3 = 10;
let anotherValue4 = 15;
let anotherValue5 = 20;
let anotherValue6 = 2;

console.log('anotherValue1 "tekst" += "text"', (anotherValue1 += anotherValue1)); // output: teksttekst => "tekst" + "tekst"
console.log('anotherValue5 20 -= 10', (anotherValue5 -= anotherValue3)); // output: 10 => 20 - 10
console.log('anotherValue2 3 *= 2', (anotherValue2 *= anotherValue6)); // output: 6 => 3 * 2
console.log('anotherValue3 10 /= 2', (anotherValue3 /= anotherValue6)); // output: 5 => 10 / 2
console.log('anotherValue4 15 %= 2 ', (anotherValue4 %= anotherValue6)); // output: 1 => 15 % 2 => what is left after dividing 15 in chunks of 2
console.log('anotherValue4 2 **= 2 ', (anotherValue6 **= anotherValue6)); // output: 4 => 2 **= 2 => exponentiation
