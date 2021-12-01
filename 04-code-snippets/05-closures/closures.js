const closureExample = () => {
  // This is the closure!
  const closure = 'this is a closure';

  const displayClosure = () => {
    console.log(closure);
    return closure;
  };

  return displayClosure;
};

closureExample()();

// The add function has an inner function that returns x + y
// The x variable is being 'closed' over. Which means that the function
// that is being returned holds a lexical reference to its out variable scope

const add = (x) => {
  const inner = (y) => {
    return x + y;
  };
  return inner;
};

// A type of function factory
console.log(add(10)(5));
console.log(add(5)(2));

// Closures are a way in JavaScript to mimic the behaviour private variables for example:
// By enclosing variables and functions in the outer lexical environment they will
// only be accesible to the instance of the function call.

const counter = () => {
  // The closure is here!
  let privateCounter = 0;

  const changeBy = (val) => {
    privateCounter += val;
  };

  return {
    // Returns an object that still has access to its outer lexical environment.
    increment() {
      changeBy(1);
      return privateCounter;
    },

    decrement() {
      changeBy(-1);
      return privateCounter;
    },

    value() {
      return privateCounter;
    },
  };
};

// An instance of the counter
const counterInstance = counter();

// Incrementing and decrementing the closed over variable.
console.log(counterInstance.value());
console.log(counterInstance.increment());
console.log(counterInstance.increment());
console.log(counterInstance.value());
console.log(counterInstance.decrement());
console.log(counterInstance.value());
console.log(counterInstance);
