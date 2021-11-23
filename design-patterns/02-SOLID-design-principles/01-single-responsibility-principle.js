const fs = require('fs');

// The Single Responsibility Principle

// Don't add more than one responsibility to a class
// Seperation of concerns
// Makes code easier read, to manage and refactor

// Try to seperate functionality to avoid data management issues
// anti-pattern => god object => massive class with lots of responsibilities

// This journal stores entries and thats it
// Persistence so saving and loading files is outsourced to another Class

class Journal {
  constructor() {
    this.entries = {};
  }

  // adds an antry
  addEntry(text) {
    // ++ gives variable c the value of count AFTER the increment
    let c = ++Journal.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return entry;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join('\n');
  }

  // save(filename) {
  //   fs.writeFileSync(filename, this.toString());
  // }

  // load(filename) {
  //   //
  // }

  // loadFromUrl(url) {
  //   //
  // }
}

class PersistenceManager {
  preprocess(j) {
    //
  }

  saveToFile(journal, filename) {
    fs.writeFileSync(filename, journal.toString());
  }
}

Journal.count = 0;

let j = new Journal();
j.addEntry('I cried today');
j.addEntry('I ate a bug');
j.addEntry('I got fired');

console.log(j.toString());

let p = new PersistenceManager();
let filename = '/home/roibin/Desktop/TechGrounds/TG/design-patterns/journal.txt';
p.saveToFile(j, filename);
