const sentence = 'I scream, You Scream, We All Scream for Ice Cream';

// Creates an instance of the RegExp class and loofs for the word Scream
const regexpInstance = new RegExp('Scream');

// Literal matching
console.log(regexpInstance.exec(sentence));
// ['Scream', index: 14, input: 'I scream, You Scream, We All Scream for Ice Cream', groups: undefined]

// Regex literal expression
const regexLiteral = /You/;

console.log('RegExp.prototype.exec(sentence)', regexLiteral.exec(sentence));

// Essentially does the same as the exec methods
console.log('String.prototype.match(RegExp)', sentence.match(regexLiteral));
