// Match the Area Code of this Phone Number:
// (222) 555-1234

const phoneNumber = '(222) 555-1234';
const regexLiteral = /\(222\)/;

// Because parenthesis (222) are metacharacter we need to escape them.

console.log('phoneNumber.match(/(222)/)', phoneNumber.match(/\(222\)/));
// output [ '(222)', index: 0, input: '(222) 555-1234', groups: undefined ]

// If we wanted to match any combination of characters in between brackets we can
// use the period . character. Its kind of like a wild card. It matches ANY single
// character. %&$#12345 whatever.

const phoneNumber2 = '(333) 555-1234';
const phoneNumber3 = '(%%%) 555-1234';
console.log('phoneNumber2.match(/(333)/)', phoneNumber2.match(/\(...\)/));
// output [ '(333)', index: 0, input: '(333) 555-1234', groups: undefined ]

console.log('phoneNumber3.match(/(%%%)/)', phoneNumber3.match(/\(...\)/));
// output  [ '(%%%)', index: 0, input: '(%%%) 555-1234', groups: undefined ]
