// There are a number of ways to clone an object but because of the way JavaScript works this can sometimes lead to unexpected results.
// The spread operator can be used to copy the original object
// however if there are nested non-primative types in the object to be copied
// the reference will remain intact

const myOriginal = {
  someProp: 'with a string value',
  anotherProp: {
    withAnotherProp: 1,
    andSomeBoolean: true,
  },
};

const myShallowCopy = { ...myOriginal };
myShallowCopy.id = 1;
console.log('myOriginal Object =>>>', myOriginal);
console.log('myShallowCopy with ID added =>>>', myShallowCopy);

myShallowCopy.anotherProp.andSomeBoolean = false;
console.log('myShallowCopy after changing the boolean value =>>>', myShallowCopy);

// Because objects are reference types this will mutate the myOriginal nested Object
console.log('myOriginal Object after mutating myShallowCopy =>>>', myOriginal);

// New API for deep cloning objects or other structures
// structuredClone()
// DOES NOT WORK IN NODE

// Create an object with value and a circular reference to itself.
const original = { name: 'MDN' };
original.itself = original;

if (isBrowser()) {
  // Clone it
  const clone = structuredClone(original);

  console.assert(clone !== original); // the objects are not the same (not same identity)
  console.assert(clone.name === 'MDN'); // they do have the same values
  console.assert(clone.itself === clone); // and the circular reference is preserved
}

// DeepCopy workaround

const myDeepCopyWithJson = JSON.parse(JSON.stringify(myOriginal));
myDeepCopyWithJson.anotherProp.someNewValue = 'New value on the deep copy with JSON.parse';

console.log('myDeepCopyWithJson with added value to nested object', myDeepCopyWithJson);
// Deep copies RECURSIVELY copy all the nested properties of non priumative types as well.
console.log('myOrginal after adding a new value to the deep copy', myOriginal);

// Function to check the runtime
function isBrowser() {
  // Check if the environment is Node.js
  if (typeof process === 'object' && typeof require === 'function') {
    return false;
  }

  // Check if the environment is a
  // Service worker
  if (typeof importScripts === 'function') {
    return false;
  }

  // Check if the environment is a Browser
  if (typeof window === 'object') {
    return true;
  }
}
