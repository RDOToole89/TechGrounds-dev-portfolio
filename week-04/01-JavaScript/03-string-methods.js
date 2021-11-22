// Opdracht 2.1

let placeholderText = 'How vexingly quick daft zebras jump!';

const splitText = placeholderText.split(' ');
const splitInTwo = placeholderText.slice(placeholderText.indexOf('daft'));
console.log('placeholder text => ', placeholderText);
console.log('splitText => ', splitText);

console.log('');
console.log('<===== divider ====>');
console.log('');

let placeholderTextTwo = 'Pack my box with five dozen liquor jugs.';

let textToUpperCase = placeholderTextTwo.toUpperCase();
console.log(textToUpperCase);

console.log('');
console.log('<===== divider ====>');
console.log('');

let someKittens =
  'De poes van de buurman heeft kittens gehad! Hij vraagt of wij nog kittens willen';

const searchTerm = 'kittens';
const indexOfFirst = someKittens.indexOf(searchTerm);
const indexOfLast = someKittens.indexOf(searchTerm, indexOfFirst) + searchTerm.length - 1;

console.log(
  `The first indexOf() searchTerm is: ${indexOfFirst}, the last indexOf() searchTerm is: ${
    someKittens.indexOf(searchTerm, indexOfFirst) + searchTerm.length - 1
  }`
);

console.log(
  `The charAt() ${indexOfFirst} = ${someKittens.charAt(
    indexOfFirst
  )} and the charAt() ${indexOfLast} = ${someKittens.charAt(indexOfLast)} `
);

console.log('');
console.log('<===== divider ====>');
console.log('');

let substringAndSliceText = 'Pack my box with five dozen liquor jugs.';

// syntax: substring(string ,start [,length] )
console.log('text.substring(0,4) =>', substringAndSliceText.substring(0, 4));

// var newBlob = blob.slice(start, end, contentType);
console.log('text.slice(0,4) =>', substringAndSliceText.slice(0, 4));

console.log('');

console.log('text.substring(4,0) =>', substringAndSliceText.substring(4, 0));

console.log('text.slice(4,0) =>', substringAndSliceText.slice(4, 0));

console.log('');

console.log('text.substring(-10 ) =>', substringAndSliceText.substring(-5, -1));

console.log('text.slice(-12,0) =>', substringAndSliceText.slice(-12, -1));

console.log(splitInTwo);
