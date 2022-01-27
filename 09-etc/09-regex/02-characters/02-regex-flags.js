// Regular Expression Flags

// Flags are essentially optional special character that can change the
// search behavior of a regular expression.

// If we want to change the behavior to return all the common occurrences
// we need to use the global flag.

// g => GLOBAL FLAG
// i => CASE INSENSITIVE FLAG => ignores capital letters

const sentence = 'I Scream, You Scream, We All Scream for Ice Cream';

new RegExp(/,/, 'g');

// OR

const regexWithGlobalFlag = /,/g;

console.log('String.match(/,/g)', sentence.match(regexWithGlobalFlag));
// outputs [",",","] => with the /,/g flag it mathces all occurences of comma ,

const screamRegex = /Scream/g;

// exercise => match all occurences of Scream

console.log('sentence.match(/Scream/g)', sentence.match(screamRegex));
// outputs ['Scream', 'Scream', 'Scream]

const creamRegex = /cream/gi;

console.log('sentence.match(/cream/gi)', sentence.match(creamRegex));
// output ['cream', 'cream', 'cream', 'Cream']
