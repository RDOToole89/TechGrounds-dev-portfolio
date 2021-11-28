// Ok.. we will start here with the obvious 'Hello World'.
// 'Hello World' is a string, all things equal.

// We want a shout out to the world...
// What better way to do that than a console.log(something);

// so console is something?! huh...

// I don't believe it either...

const anyThing = undefined;
let something = null;

console.log(anyThing); // => Change (value) here to experience browser errors.
// You are gonna love em.

// roses are red, violets are blue... you have an error on...
// well its funier if you say line 62, but it is line 11.. and I might have changed the variable...
// short story the joke sucks.

// In JavaScript we have objects.
// I do not like him... but 'Math' is one of them.
// But what does it mean to be an object?!
// It means that life sucks and you will have to learn this shit.

console.log(Math``);

// You are logging something that doesn't exist.

// However we have this super JavaScript power that you should all learn....
// logging something is "better" than logging nothing.

// Take your pick 'let' or 'const'.

// let changes relationships. I know... it sucks.
// const is like being married forever... you hate eachother but it aint gonna change,

// In any Programming lanugauge there are a couple of fundementals. ('I know mental, hahahah');

// Besides forgetting backticks you need to think about Scope =>.

// I am looking at your from ABOVE... outer scope.

// I am looking at you from inside... wow that sounds very wrong.

// I don't have access. => OUTER SCROPE TRYING TO TALK TO INNER SCOPE.

// so...  what does this look like?!

// Forwards or backwards 'linguestically;

const outerScope = 'Hey I am enjoying this nice VIEW!';

// Who doesn't like arrow functions.
const proveScope = () => {
  let word = 'hello';
  let teacher = 'Jens';

  console.log('We can "access" everything inside this block... but also OUTSIDE');
  console.log('This is scope. The question where is my program at.', this);

  // so functions have this amazing gift that other things in JavaScript DO NOT Have...
  // it is the gift of paying it forward...
  // We all say we want to pay it forward... but in JavaScript you need to 'return'...
  // before you can pay it forward.

  // Log the outerscope and APPEND your own name.
  // Make sure to return this amazing idea from a Function.
  // Tip = 'return' means you are exiting a block of code...
  // Tip2 = 'Go fuck youself!'
};

console.log('This is the inner function / block scope reaching the...! ', outerScope);
