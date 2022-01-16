// Higher Order Function and Closures

// Higher Order Function
// Takes a function as an argument / parameter or returns a function as a result
// Function are first class citizins in JavaScript

const hof = () => () => 5;
hof()();

console.log(hof()());

const hof2 = (fn) => fn(5);
console.log(
  hof2(function a(x) {
    return x;
  })
);

// Closures

const closure = function () {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
};

const incrementFunction = closure();
incrementFunction();
console.log(incrementFunction());
