class Sorterb4 {
  // collection: number[];

  constructor(public collection: number[] | string) {
    // this.collection = collection;
  }

  sort(): void {
    const { length } = this.collection;

    // All of this only works if collection is number[]
    // If collection is an array of number

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // This is a type guard => we use this when we want to restore access to a set of properties in a union type
        // We use instanceof for more complex values. We check whether a collection
        // is an instance of the constructor function
        if (this.collection instanceof Array) {
          // collection === number[]

          // This comparison wont work for strings and linkedLists
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j];

            // this will NOT work for strings and linkedLists
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHand;
          }
        }

        // Only going to work if collection is a string
        // If collection is a string, do this logic instead:
        // ~~~logic to compare and swap character in a string
        // We use this kind of type guard for primative values
        if (typeof this.collection === 'string') {
        }
      }
    }
  }
}
const sorterb4 = new Sorterb4([2, 4, 8, 3, 1, 9, 7, 6, 5, 10]);
