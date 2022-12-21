import { NumbersCollection } from './NumbersCollection';

export class Sorter {
  constructor(public collection: NumbersCollection) {}

  sort(): void {
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
