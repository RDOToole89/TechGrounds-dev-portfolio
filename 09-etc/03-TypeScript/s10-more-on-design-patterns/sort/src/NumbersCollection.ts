// This class abstracts out the logic of comparing and swapping a numbers array.

import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  data: number[];
  constructor(data: number[]) {
    super();
    this.data = data;
  }

  // getters allow you to call functions that return a property value
  // just like we would return a normal property
  get length() {
    return this.data.length;
  }

  // implements comparing the leftIndex [j] and rightIndex [j + 1]
  // returns a boolean. This.data refers to an array of numbers.
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  // implements the swapping logic for a numbers array in TypeScript
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}

const collection = new NumbersCollection([1, 2, 3]);
