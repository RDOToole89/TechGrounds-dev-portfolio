"use strict";
// Interfacess => Sets up a contract between different classes
// => Use when we have very different objects that we want to work together
// => Promotes loose coupling
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// We use abstract classes when we never plan on instantiating a class directly
// but we do want to use some of the methods defined on that class
class Sorter {
    // Abstract Classes => Can't be used to create an object directly
    // Only used as a parent class
    // Cant contain real implementation for some methods
    // The implmeneted methods can refer to other methods that dont exist yet (but will in the future)
    // Can make child classes promise to implement some other methods
    sort() {
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
exports.Sorter = Sorter;
