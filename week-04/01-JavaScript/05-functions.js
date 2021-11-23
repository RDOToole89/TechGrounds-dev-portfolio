// Opdracht 4.1

let btnEl = document.querySelector('.btn');
let counter = document.querySelector('.count-box');

let nameInput = document.querySelector('#text-input--names');
let nameSubmitBtn = document.querySelector('.btn-round--name');
let randomNumberBtn = document.querySelector('.btn--random');
let textInputId = document.getElementById('text-input');
let textInput = document.getElementsByClassName('input-group__input')[0];
let textSubmitBtn = document.getElementsByTagName('button')[3];
let textDisplayBox = document.querySelector('.text-display-box');
let allButtons = document.querySelectorAll('.btn');

const logger = (somethingToLog) => {
  console.log(somethingToLog);
};

logger(textDisplayBox);

btnEl.addEventListener('click', () => {
  console.log('Hello World');
});

const printMyName = (name = 'Roibin', ...args) => {
  console.log(name);
};

let count = 0;

const multiplyOrIncrement = (operationType, numberToIncrementBy) => {
  if (operationType === 'increment') {
    count += numberToIncrementBy;
    counter.innerHTML = count;
  }

  if (operationType === 'multiply') {
    count *= numberToIncrementBy;
    counter.innerHTML = count;
  }
};

console.log('output printMyName function: ', printMyName('Harry'));

const result = (number) => number * 2;
console.log(result(15));

console.log('');
console.log('<===== divider ====>');
console.log('');

textSubmitBtn.addEventListener('click', () => {
  textDisplayBox.innerText = textInput.value;
  textInput.value = '';
});

console.log(textInputId);

textInputId.addEventListener('input', () => {
  logger(textInputId);
});

textInputId.addEventListener('change', () => {
  logger(textInputId);
});

// Opdracht 4.3

const randomNumber = () => {
  const randomNum = Math.floor(Math.random() * 1000) + 1;
  console.log(randomNum);
  console.log(counter);

  count = randomNum;
  counter.innerText = randomNum;
};

randomNumberBtn.addEventListener('click', randomNumber);

console.log('');
console.log('<===== divider ====>');
console.log('');

// Math.min()

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Below will be an example of Math.min() and Math.max()', numArray);

console.log('Example of Math.min()', Math.min(...numArray));

console.log('Example of Math.max()', Math.max(...numArray));

// Opdracht 4.4

const compareNames = (name = '') => {
  const names = {
    wesley: 'Hello from Wesley!',
    bianca: 'Hello from Bianca!',
    susana: 'Hello from Susana!',
    janou: 'Hello from Janou!',
    roibin: 'Hello from Roibin!',
  };

  if (names[name.toLowerCase()]) {
    return names[name.toLowerCase()];
  }

  return 'Sorry that person is not in the group';
};

nameSubmitBtn.addEventListener('click', () => {
  let name = nameInput.value;

  const messageToDisplay = compareNames(name);

  textDisplayBox.innerText = messageToDisplay;
});
