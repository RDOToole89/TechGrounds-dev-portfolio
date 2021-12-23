// Function currying is the process of turning a function that takes multuple arguments
// and then converting it into a function that takes one argument at a time instead.

// 1) A curried function takes multiple arguments, one at a time.
// 2) Each time an argument is passed to it, it returns a new function that accepts the
// next argument. It does this untill all arguments have been passed and it returns the final output.

// Standard multiply function
const multiply = (a, b) => a * b;

// Curried multiply function
// This works because of closures. The next function in the chain can still access its outerscope.
const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(5)(2));

const multiplyTriple = (a) => (b) => (c) => a * b * c;
console.log(multiplyTriple(2)(2)(2));

// Currying allows you to compose the sequence of your functions and ensures that the particular
// sequence is enforced and followed.

// Example curried function
// Check if stock exists
//    => check warehouse
//        => deduct stcok amount

let error = false;
const checkStock = (stockId) =>
  error
    ? error
    : (wareHouseID) =>
        error
          ? error
          : (stockDeduct) => `${stockId} from ${wareHouseID} is reduced by ${stockDeduct}`;

let orderItem298 = checkStock('FN9382')('SOUTH')(3);
console.log(orderItem298);
