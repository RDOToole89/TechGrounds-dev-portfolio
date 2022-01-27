// JS Regex String Methods

const sentence = 'I Scream, You Scream, We All Scream for Ice Cream';

new RegExp(/,/, 'g');

// OR

const regexWithGlobalFlag = /,/g;

console.log('String.match(/,/g)', sentence.match(regexWithGlobalFlag));

// String.prototype.split(/regexp/) can also take a regular expression to
// split sentences.

console.log('sentence.split(/cream/g)', sentence.split(/cream/g));
// output [ 'I S', ', You S', ', We All S', ' for Ice Cream' ]

console.log('sentence.split(/cream/gi)', sentence.split(/cream/gi));
// output  [ 'I S', ', You S', ', We All S', ' for Ice ', '' ]

// By adding the second argument we set a limiter to the amount of substrings
console.log('sentence.split(/cream/g, 2)', sentence.split(/cream/g, 2));
// output [ 'I S', ', You S' ]

// String.prototype.replace(searchValue, NewValue)
// The replace method expects two paramers: a search value and a new value
// and then returns a new String.

// Remember! =>  unless we add the global flag it ONLY REPLACES the first
// occurence of a value.

console.log('sentence.replace(/,/g, "#")', sentence.replace(/,/g, '#'));
// output 'I Scream# You Scream# We All Scream for Ice Cream'

// When referring to special character like \ we need to escape it in order to
// avoid syntax errors! '\\' = '\'
console.log('sentence.replace(/,/g, "#")', sentence.replace(/,/g, '\\'));
// output 'I Scream\ You Scream\ We All Scream for Ice Cream'
