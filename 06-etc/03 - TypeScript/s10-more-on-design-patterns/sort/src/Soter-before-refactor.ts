// The Sortable interface describes what is necessary to be able to be accepted as an
// argument to the Sorter function.

import { Sorter } from './Sorter';

interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export class Sorter {
  // The constructor takes in a collection which needs to adhere to the the Sortable interface.
  constructor(public collection: Sortable) {}

  // The sort function takes in a length and loops over a Sortable collection.
  // This is an implementation of bubbleSort
  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // The actual implementation and swapping mechanisms are abstracted to their
        // owen seperate classes.
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1);
        }
      }
    }
  }
}
