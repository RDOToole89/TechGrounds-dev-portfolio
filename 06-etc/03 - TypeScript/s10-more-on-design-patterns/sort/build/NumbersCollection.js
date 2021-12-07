"use strict";
// This class abstracts out the logic of comparing and swapping a numbers array.
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
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
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    // implements the swapping logic for a numbers array in TypeScript
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}
exports.NumbersCollection = NumbersCollection;
const collection = new NumbersCollection([1, 2, 3]);
