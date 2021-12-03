"use strict";
// The Sortable interface describes what is necessary to be able to be accepted as an
// argument to the Sorter function.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    // The constructor takes in a collection which needs to adhere to the the Sortable interface.
    constructor(collection) {
        this.collection = collection;
    }
    // The sort function takes in a length and loops over a Sortable collection.
    // This is an implementation of bubbleSort
    sort() {
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
exports.Sorter = Sorter;
