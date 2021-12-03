"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    // collection: number[];
    constructor(collection) {
        this.collection = collection;
        // todo
        // this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        // All of this only works if collection is number[]
        // If collection is an array of number
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection[j] > this.collection[j + 1]) {
                    const leftHand = this.collection[j];
                    this.collection[j] = this.collection[j + 1];
                    this.collection[j + 1] = leftHand;
                }
            }
        }
    }
}
exports.Sorter = Sorter;
const sorter = new Sorter([2, 4, 8, 3, 1, 9, 7, 6, 5, 10]);
