"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
        const { length } = this;
        // bubble sort
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                const next = j + 1;
                if (this.compare(j, next)) {
                    this.swap(j, next);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
