// Interfacess => Sets up a contract between different classes
// => Use when we have very different objects that we want to work together
// => Promotes loose coupling

// Inheritance / Abstract Classes => Sets up a contract between different classes
// => Use when we are trying to build up a definition of an object
// => Strongly couples classes together

// We tend to use Abstract Classes when there is a strong coupling between classes and their behaviour
// In this case collections of data. E.g. NumbersCollection, LinkedList etc.
// Interfaces are more useful when we have different objects with very different functionality but that need
// to work together

// After our refactor we no longer need the Sortable interface
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

// We use abstract classes when we never plan on instantiating a class directly
// but we do want to use some of the methods defined on that class

export abstract class Sorter {
  // Any class that EXTENDS the Sorter class MUST have the abstract methods and properties
  // defined below.
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  // Abstract Classes => Can't be used to create an object directly
  // Only used as a parent class
  // Cant contain real implementation for some methods
  // The implmeneted methods can refer to other methods that dont exist yet (but will in the future)
  // Can make child classes promise to implement some other methods

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
