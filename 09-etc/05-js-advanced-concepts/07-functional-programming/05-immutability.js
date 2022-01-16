// Immutability => NOT changing state but making copies of the state
// and returning a new state every time.

const obj = { name: 'Andrei' };

// This is a PURE function
function clone(obj) {
  return { ...obj };
}

// THIS is mutating the state. Which is not allowed / ideal in functional programming
obj.name = 'Roibin';

// Ideally we would create a function that takes the state as an input and return
// a NEW mutated state.

function updateName(obj, newName) {
  const state = { ...obj };
  state.name = newName;

  return state;
}

console.log('ORIGINAL OBJECT', obj);
console.log(updateName(obj, 'Harry'));
console.log('ORIGINAL OBJECT AFTER updateName function', obj);
