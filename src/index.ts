import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([1, 8, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(sorter.collection);
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('XxaabbawetaoiahKKIEB');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(sorter.collection);
// console.log(charactersCollection.data);

// const linkedList = new LinkedList();

// linkedList.add(500);
// linkedList.add(3);
// linkedList.add(-1);
// linkedList.add(-3);

// const sorter = new Sorter(linkedList);
// sorter.sort();

// linkedList.print();

const charactersCollection = new CharactersCollection('XxaabbawetaoiahKKIEB');
charactersCollection.sort();
console.log(charactersCollection.data);
