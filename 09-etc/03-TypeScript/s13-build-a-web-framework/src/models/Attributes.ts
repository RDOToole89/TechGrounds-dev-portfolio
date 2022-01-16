import { UserProps } from './User';
export class Attributes<T> {
  constructor(private data: T) {}

  // Just like with classes we can also add generic contstraints to functions
  // This line of code is kind of difficult to understand. However it basically
  // Adds a generic contstraint of K to the data property that gets passed into
  // the constructor. This line tells TypeScript that the key being passed into the
  // get method CAN ONLY EVERY BE A KEY of the data object thus T[K]
  // T and K don't hold any special meaning. They are just a convention.
  // Common pattern in TypeScript
  // Summarize: K can ONLY ever by a 'string' property of T
  // key is of TYPE K so one of the 'string' property names of T
  // We return the Object lookup T[K] so the value that gets retured
  // when we lookup for example data['age'] // returs 24
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}

// By implementing the Generic constraint on the get method we have accomplished our goal
// We can now lookup keys without having to write guard statements for the types.
const attrs = new Attributes<UserProps>({
  id: 5,
  age: 20,
  name: 'Roibin',
});

attrs.get('age');
attrs.get('age');
attrs.get('id');

// In TypeScript STRINGS can be types!
// In JS (and therefor TS), all object keys are strings

// Therefor in TypeScript the keys of an object can be types!

// Simalar to a tuple (an array that enforces structure)
type MatchData = [string, number, number];

// We can create a type out of a string!
// This type alias defines a the string 'roibin' as a TYPE.
type BestName = 'roibin';

// Therefor this printName function can ONLY take a string of the type BestName
const printName = (name: BestName): void => {
  console.log(name);
};
