export class NumbersCollection {
  data: number[];
  constructor(data: number[]) {
    this.data = data;
  }

  // getters allow you to call functions that return a property value
  // just like we would return a normal property
  get length() {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}

const collection = new NumbersCollection([1, 2, 3]);
console.log(collection.length);
