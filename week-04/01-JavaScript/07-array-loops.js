// Opdracht 5.1

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numArr);

console.log('');
console.log('<===== divider ====>');
console.log('');

const fruitArr = ['strawberry', 'apple', 'pineapple', 'elderberry', 'raspberry', 'orange'];
console.log(fruitArr);

console.log(fruitArr[fruitArr.indexOf('strawberry')]);
console.log(fruitArr[fruitArr.indexOf('apple')]);

const randomNumber = Math.floor(Math.random() * numArr.length - 1);
console.log('Random number from numArr => ', numArr[randomNumber]);

console.log('');
console.log('<===== divider ====>');
console.log('');

console.log('Length of fruitArr', fruitArr.length);

// f) begrijp de vraag niet

console.log('Change apple to pear', (fruitArr[fruitArr.indexOf('apple')] = 'pear'));
console.log('Mutated fruitArr', fruitArr);

console.log(
  'Change pear and strawberries of position with array destructuring',
  ([fruitArr[0], fruitArr[1]] = [fruitArr[1], fruitArr[0]])
);
console.log('Mutated fruitArr', fruitArr);

// Opdracht 5.2

const dutchSports = ['Voetbal', 'Hockey', 'Schaatsen'];

const loopLogger = (loopType, array) => {
  if (loopType === 'regular') {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }

  if (loopType === 'forIn') {
    for (let item in array) {
      console.log(item);
    }
  }

  if (loopType === 'forOf') {
    for (let item of array) {
      console.log(item);
    }
  }

  if (loopType === 'logEven') {
    for (let item of array) {
      if (item % 2 === 0) {
        console.log(item);
      }
    }
  }

  if (loopType === 'nestedLoop') {
    console.log('HELLO!');
    for (let i = 0; i < array.length; i++) {
      console.log('');
      console.log('<===== divider ====>');
      console.log('');
      for (let j = 1; j <= 10; j++) {
        console.log(j);

        for (let k = 1; k <= 20; k++) {
          if (k % 2 === 0) {
            console.log(k);

            for (let l = 1; l <= 30; l++) {
              if (l % 3 === 0) {
                console.log(l);
              }
            }
          }
        }
      }
    }
  }
};

loopLogger('regular', dutchSports);
loopLogger('forIn', dutchSports);
loopLogger('forOf', dutchSports);
loopLogger('logEven', numArr);
// loopLogger('nestedLoop', dutchSports);

const fibonacci = (num) => {
  let fib = [0, 1];

  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
};

console.log('fibonacci', fibonacci(6));

const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i; j++) {
      let compare = array[j] > array[j + 1];

      if (compare) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};

const numberArray = [5, 2, 1, 3, 4, 7, 9, 8, 5];

console.log('This is an unsorted numberArray', numberArray);
console.log('Array after bubbleSort', bubbleSort(numberArray));

// Opdracht 5.3

console.log('');
console.log('<===== divider ====>');
console.log('');

dutchSports.push('Zeilen', 'Zwemmen');
console.log('dutchSports after push "Zeilen", "Zwemmen"', dutchSports);
dutchSports.unshift('Volleybal');
console.log('dutchSports after unshift "Volleybal"', dutchSports);

const ballSports = dutchSports.splice(0, 2);
console.log('BallSports array with splice(0,2)', ballSports);
console.log('dutchSport array after dutchSport.splice(0,2)', dutchSports);

dutchSports.sort((a, b) => {
  a - b;
});
dutchSports.push('Apenkooien');
console.log('dutchSports after .sort()', dutchSports);
