// Pure Functions => make programs more predictable

// 1. Function should always return the same output, given the same input.
// 2. The function cannot modify anything outside of itself. => NO SIDE-EFFECTS

// A perfect PURE FUNCTION does =>
// 1. 1 Task and one task only
// 2. It should return something because given an input it should return an output
// 3. Needs to be PURE!
// 4. No shared state with other functions!
// 5. Immutable state => we can modify state within out function but we alays return a NEW copy of that output.
// 6. Composable
// 7. Predictable => this is what FP is all about.

const array = [1, 2, 3];

// This function has so called SIDE-EFFECT it modifies the array
// even though it doesn't return anything
// Reusing shared state can cause bugs

console.log('Array before mutateArray', array);

function mutateArray(arr) {
  arr.pop();
}

mutateArray(array);
console.log('Array after mutateArray', array);

const numArray = [1, 2, 3];

// This function doesn't mutate the original array it is a PURE FUNCTION
function removeLastItem(arr) {
  const newArray = [...arr];

  newArray.pop();

  return newArray;
}

console.log('numArray before removeLastItem', numArray);
console.log('ARRAY RETURN FROM removeLastItem', removeLastItem(numArray));
console.log('numArray after removeLastItem', numArray);

// These are also PURE FUNCTIONS given THE SAME input they will always
// return the SAME output => without side-effects

function add(num1, num2) {
  return num1 + num2;
}

function multiplyByTwo() {
  return num * 2;
}

console.log(add(1, 2));
console.log(multiplyByTwo(7));
