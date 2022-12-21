"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        // only works if collection is array of numbers
        // bubble sort
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                const next = j + 1;
                if (this.collection.compare(j, next)) {
                    this.collection.swap(j, next);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
