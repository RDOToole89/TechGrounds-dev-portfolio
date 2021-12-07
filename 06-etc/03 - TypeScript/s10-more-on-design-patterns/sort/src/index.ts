// In this kind of OOP style that TypeScript is meant for the index.ts
// is usually used only for classes to interact with eachother.

// import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// Before refactor

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const charactersCollection = new CharactersCollection('bacFde');
// const linkedList = new LinkedList();
// linkedList.add(1);
// linkedList.add(6);
// linkedList.add(3);
// linkedList.add(8);
// linkedList.add(2);

// const numberSorter = new Sorter(numbersCollection);
// numberSorter.sort();
// console.log(numbersCollection.data);

// const characterSorter = new Sorter(charactersCollection);
// characterSorter.sort();
// console.log(charactersCollection.data);

// const linkedListSorter = new Sorter(linkedList);
// linkedListSorter.sort();
// linkedList.print();

// After refactor

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(30);
linkedList.add(21);
linkedList.add(-5);

linkedList.sort();
linkedList.print();

const charactersCollection = new CharactersCollection('bacFde');
charactersCollection.sort();
console.log(charactersCollection.data);
