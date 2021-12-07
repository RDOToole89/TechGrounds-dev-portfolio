"use strict";
// In this kind of OOP style that TypeScript is meant for the index.ts
// is usually used only for classes to interact with eachother.
Object.defineProperty(exports, "__esModule", { value: true });
// import { Sorter } from './Sorter';
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
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
const numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(10);
linkedList.add(30);
linkedList.add(21);
linkedList.add(-5);
linkedList.sort();
linkedList.print();
const charactersCollection = new CharactersCollection_1.CharactersCollection('bacFde');
charactersCollection.sort();
console.log(charactersCollection.data);
